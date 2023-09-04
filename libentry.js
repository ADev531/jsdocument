var documentmgr = require('./documentmanager')
var objecttype = require('./objects')
var usecss = require('./usecss')
var seticon = require('./seticon')
var addref = require('./addref')
var server = require('./server')

module.exports = {JSDocument:documentmgr.JSDocument, JSPage:documentmgr.JSPage, JSObjects:objecttype, UseCSS:usecss, UseIcon:seticon, AddRef:addref, Server:server}