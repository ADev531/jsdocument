function Inheritance(parent, child) {
    parent.call(child, 0)
}

const HTMLObject = (function() {
    /* creates element 'div' */
    function HTMLObject() {
        this.Text = ""
        this.ObjectType = "JSDocument"
        this.Attributes = ""
        this.Type = "div"
        this.id = ""
        this.class = ""
    }

    function AddObject(object) {
        if (object.ObjectType != undefined && object.ObjectType == 'JSDocument') {
            this.Text += `<${object.Type} ${object.Arguments}>${object.Text}</${object.Type}>`
        }
    }
    HTMLObject.prototype.AddObject = AddObject;

    function SetType(newtype) {
        this.Type = newtype
    }
    HTMLObject.prototype.SetType = SetType;

    return HTMLObject;
}())

const HTMLScriptObject = (function() {
    /* creates element 'script' */
    function HTMLScriptObject() {
        Inheritance(HTMLObject, this)
        this.Type = "script"
    }

    return HTMLScriptObject
}())

const HTMLStyleObject = (function() {
    /* creates element 'style' */
    function HTMLStyleObject() {
        Inheritance(HTMLObject, this)
        this.Type = "style"
    }

    return HTMLStyleObject
}())

const HTMLLinkObject = (function() {
    /* creates element 'link' */
    function HTMLLinkObject(href, rel) {
        Inheritance(HTMLObject, this)
        this.Arguments = `href=${href} rel=${rel}`
        this.Type = "link"
    }

    return HTMLLinkObject
}())

const HTMLH1Object = (function() {
    /* creates element 'h1' */
    function HTMLH1Object() {
        Inheritance(HTMLObject, this)
        this.Type = "h1"
    }

    return HTMLH1Object
}())

const HTMLH2Object = (function() {
    /* creates element 'h2' */
    function HTMLH2Object() {
        Inheritance(HTMLObject, this)
        this.Type = "h2"
    }

    return HTMLH2Object
}())

const HTMLH3Object = (function() {
    /* creates element 'h3' */
    function HTMLH3Object() {
        Inheritance(HTMLObject, this)
        this.Type = "h3"
    }

    return HTMLH3Object
}())

const HTMLH4Object = (function() {
    /* creates element 'h4' */
    function HTMLH4Object() {
        Inheritance(HTMLObject, this)
        this.Type = "h4"
    }

    return HTMLH4Object
}())

const HTMLH5Object = (function() {
    /* creates element 'h5' */
    function HTMLH5Object() {
        Inheritance(HTMLObject, this)
        this.Type = "h5"
    }

    return HTMLH5Object
}())

const HTMLVideoObject = (function() {
    /* creates element 'video' */
    function HTMLVideoObject(src) {
        Inheritance(HTMLObject, this)
        this.Text = "HTML5 Video not supported on your device."
        this.Arguments = `src=${src}`
        this.Type = "video"
    }

    return HTMLVideoObject
}())

const HTMLPObject = (function() {
    /* creates element 'p' */
    function HTMLPObject() {
        Inheritance(HTMLObject, this)
        this.Type = "p"
    }

    return HTMLPObject
}())

const HTMLSpanObject = (function() {
    /* creates element 'span' */
    function HTMLSpanObject() {
        Inheritance(HTMLObject, this)
        this.Type = "span"
    }

    return HTMLSpanObject
}())

const HTMLTitleObject = (function() {
    /* creates element 'title' */
    function HTMLTitleObject() {
        Inheritance(HTMLObject, this)
        this.Type = "title"
    }

    function SetTitle(newtitle) {
        this.Text = newtitle
    }
    HTMLTitleObject.prototype.SetTitle = SetTitle

    return HTMLTitleObject;
}())

const HTMLAObject = (function() {
    /* creates element 'a' */
    function HTMLAObject(href) {
        Inheritance(HTMLObject, this)
        this.Type = "a"
        this.Arguments = `href=${href}`
    }

    return HTMLAObject;
}())

const HTMLButton = (function() {
    /* creates element 'button' */
    function HTMLButton() {
        Inheritance(HTMLObject, this)
        this.Type = "button"
    }

    return HTMLButton;
}())

const HTMLInput = (function() {
    /* creates element 'input' */
    function HTMLInput() {
        Inheritance(HTMLObject, this)
        this.Type = "input"
    }

    return HTMLInput;
}())

const HTMLListObject = (function() {
    /* creates element 'ul, ol' */
    function HTMLListObject() {
        Inheritance(HTMLObject, this)
        this.Type = "ul"
    }

    /* 0 - unordered (bullet), 1 - ordered (numbers)*/
    function SetMode(order) {
        if (order == 0) {
            this.Type = "ul"
        } else {
            this.Type = "ol"
        }
    }

    return HTMLListObject;
}())

const HTMLListItem = (function() {
    /* creates element 'li' */
    function HTMLListItem() {
        Inheritance(HTMLObject, this)
        this.Type = "li"
    }

    return HTMLListItem;
}())

module.exports = {JSObject:HTMLObject, JSTitleObject:HTMLTitleObject, JSScriptObject:HTMLScriptObject, JSStyleObject:HTMLStyleObject, JSLinkObject:HTMLLinkObject,
                  JSH1Object:HTMLH1Object, JSH2Object:HTMLH2Object, JSH3Object:HTMLH3Object, JSH4Object:HTMLH4Object, JSH5Object:HTMLH5Object, JSVideoObject:HTMLVideoObject,
                  JSPObject:HTMLPObject, JSSpanObject:HTMLSpanObject, JSAObject:HTMLAObject, JSButton:HTMLButton, JSInput:HTMLInput, JSListObject:HTMLListObject, JSListItem:HTMLListItem}