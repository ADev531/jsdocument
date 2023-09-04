const objects = require('./objects')
const server = require('./server')

var header = '<!DOCTYPE HTML>\n \
            \ <html lang=\'en\'>\n \
            \   <head>\n \
            \       <meta charset="utf-8">\n \
            \       <meta name="viewport" content="width=device-width, initial-scale=1.0">'

var bodytg = '\
          \     </head>\n \
          \     <body>\n'

var ending = '  </body>\n \
          \ </html>'

const JSDocument = (function() {
    var currentrep;
    var currentreq;

    function JSDocument() {
        this.JSObjects = [];
        this.JSHeaderObjects = [];
    }

    function AddObject(Object) {
        if (Object.ObjectType != undefined && Object.ObjectType == "JSDocument") {
            this.JSObjects.push(Object)
        }
    }
    JSDocument.prototype.AddObject = AddObject;

    function AddHeaderObject(Object) {
        if (Object.ObjectType != undefined && Object.ObjectType == "JSDocument") {
            this.JSHeaderObjects.push(Object)
        }
    }
    JSDocument.prototype.AddHeaderObject = AddHeaderObject;

    function GetRawResponse() {
        return currentrep
    }
    JSDocument.prototype.GetRawResponse = GetRawResponse;

    function GetRawHTML() {
        var document = header;

        this.JSHeaderObjects.forEach(function(v, i, array) {
            var id = v.id ? ` id="${v.id}"` : ''
            var classatrb = v.class ? ` class="${v.class}"` : ''
            var tag = `<${v.Type} ${v.Attributes}${id}${classatrb}>${v.Text}</${v.Type}>\n`;
            document += tag;
        })

        document += bodytg

        this.JSObjects.forEach(function(v, i, array) {
            var id = v.id ? ` id="${v.id}"` : ''
            var classatrb = v.class ? ` class="${v.class}"` : ''
            var tag = `<${v.Type} ${v.Attributes}${id}${classatrb}>${v.Text}</${v.Type}>\n`;
            document += tag;
        })

        document += ending

        return document;
    }
    JSDocument.prototype.GetRawHTML = GetRawHTML;
    return JSDocument
}())

const JSPage = (function() {
    function JSPage(server) {
        this.document = new JSDocument();
        this.server = server;
        this.Title = new objects.JSTitleObject();
    }
    
    function UseCSS(cssname, usecss) {
        usecss(this.document, cssname, this.server);
    }
    JSPage.prototype.UseCSS = UseCSS;

    function AddHeaderObject(obj) {
        this.document.AddHeaderObject(obj)
    }
    JSPage.prototype.AddHeaderObject = AddHeaderObject;

    function AddObject(obj) {
        this.document.AddObject(obj)
    }
    JSPage.prototype.AddObject = AddObject;

    function SetTitle(txt) {
        this.Title.Text = txt;
    }
    JSPage.prototype.SetTitle = SetTitle;

    function GetJSDocumentObject() {
        return this.document;
    }
    JSPage.prototype.GetJSDocumentObject = GetJSDocumentObject;

    function Deploy(addr) {
        var copy = this.document;
        this.server.SetResponseHandler(addr, function() {
            return [copy.GetRawHTML(), "html"]
        })
    }
    JSPage.prototype.Deploy = Deploy;

    return JSPage;
}())

module.exports = {JSDocument:JSDocument, JSPage:JSPage}