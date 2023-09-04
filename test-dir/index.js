var jsdocument = require('jsdocument')

var index = new jsdocument.JSPage(jsdocument.Server);

var titleobj = new jsdocument.JSObjects.JSTitleObject();
var pobj = new jsdocument.JSObjects.JSPObject();

titleobj.Text = "LOL SITE"
pobj.Text = "abc";
pobj.class = "helloid"

index.AddHeaderObject(titleobj);
index.AddObject(pobj);
index.Deploy('/')