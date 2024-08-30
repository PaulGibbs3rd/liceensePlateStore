"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[60897],{60897:function(e,t,r){r.r(t),r.d(t,{queryAssociations:function(){return Z}});var o=r(74165),n=r(1413),i=r(15861),l=r(76200),s=r(44927),a=r(32718),u=r(18769),p=r(23084),c=r(43144),d=r(15671),m=r(60136),y=r(29388),w=r(27366),f=r(46784),I=r(49861),k=(r(93169),r(84936),r(69912)),b=r(29855),N=function(e){(0,m.Z)(r,e);var t=(0,y.Z)(r);function r(e){var o;return(0,d.Z)(this,r),(o=t.call(this,e)).associations=[],o}return(0,c.Z)(r)}(f.wq);(0,w._)([(0,I.Cb)({type:[b.Z],json:{write:!0}})],N.prototype,"associations",void 0);var v=N=(0,w._)([(0,k.j)("esri.rest.networks.support.QueryAssociationsResult")],N);function g(e){var t=e.toJSON(),r=t.returnDeletes,o=t.elements,n=t.gdbVersion,i=t.moment;return{returnDeletes:r,elements:JSON.stringify(o.map((function(e){return{globalId:e.globalId,networkSourceId:e.networkSourceId,terminalId:e.terminalId}}))),types:JSON.stringify(e.types.map((function(e){return u.By.toJSON(e)}))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:n,moment:i}}function Z(e,t,r){return S.apply(this,arguments)}function S(){return S=(0,i.Z)((0,o.Z)().mark((function e(t,r,i){var u,c,d,m,y,w,f,I;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,p.en)(t),c=(0,n.Z)((0,n.Z)({},g(r)),{},{f:"json"}),d=(0,p.cv)((0,n.Z)((0,n.Z)({},u.query),c)),m=(0,p.lA)(d,(0,n.Z)((0,n.Z)({},i),{},{method:"post"})),y="".concat(u.path,"/associations/query"),e.next=7,(0,l.Z)(y,m);case 7:return w=e.sent,f=w.data,I=v.fromJSON(f),e.abrupt("return",(r.types.includes("connectivity")&&(0,s.Mr)(a.Z.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),I));case 11:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}},29855:function(e,t,r){r.d(t,{Z:function(){return I}});var o=r(15671),n=r(43144),i=r(60136),l=r(29388),s=r(27366),a=(r(59486),r(46784)),u=r(49861),p=(r(93169),r(32718),r(84936),r(38511)),c=r(69912),d=r(31201),m=r(18769),y=r(50656),w=r(29909),f=function(e){(0,i.Z)(r,e);var t=(0,l.Z)(r);function r(e){var n;return(0,o.Z)(this,r),(n=t.call(this,e)).globalId=null,n.associationType=null,n.fromNetworkElement=null,n.toNetworkElement=null,n.geometry=null,n.errorMessage=null,n.percentAlong=null,n.errorCode=null,n.isContentVisible=null,n.status=null,n}return(0,n.Z)(r,[{key:"readFromNetworkElement",value:function(e,t){return new y.Z({globalId:t.fromGlobalId,networkSourceId:t.fromNetworkSourceId,terminalId:t.fromTerminalId})}},{key:"writeFromNetworkElement",value:function(e,t){e&&(t.fromGlobalId=e.globalId,t.fromNetworkSourceId=e.networkSourceId,t.fromTerminalId=e.terminalId)}},{key:"readToNetworkElement",value:function(e,t){return new y.Z({globalId:t.toGlobalId,networkSourceId:t.toNetworkSourceId,terminalId:t.toTerminalId})}},{key:"writeToNetworkElement",value:function(e,t){e&&(t.toGlobalId=e.globalId,t.toNetworkSourceId=e.networkSourceId,t.toTerminalId=e.terminalId)}}]),r}(a.wq);(0,s._)([(0,u.Cb)({type:String,json:{write:!0}})],f.prototype,"globalId",void 0),(0,s._)([(0,u.Cb)({type:m.By.apiValues,json:{type:m.By.jsonValues,read:m.By.read,write:m.By.write}})],f.prototype,"associationType",void 0),(0,s._)([(0,u.Cb)({type:y.Z,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],f.prototype,"fromNetworkElement",void 0),(0,s._)([(0,p.r)("fromNetworkElement")],f.prototype,"readFromNetworkElement",null),(0,s._)([(0,d.c)("fromNetworkElement")],f.prototype,"writeFromNetworkElement",null),(0,s._)([(0,u.Cb)({type:y.Z,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],f.prototype,"toNetworkElement",void 0),(0,s._)([(0,p.r)("toNetworkElement")],f.prototype,"readToNetworkElement",null),(0,s._)([(0,d.c)("toNetworkElement")],f.prototype,"writeToNetworkElement",null),(0,s._)([(0,u.Cb)({type:w.Z,json:{write:!0}})],f.prototype,"geometry",void 0),(0,s._)([(0,u.Cb)({type:String,json:{write:!0}})],f.prototype,"errorMessage",void 0),(0,s._)([(0,u.Cb)({type:Number,json:{write:!0}})],f.prototype,"percentAlong",void 0),(0,s._)([(0,u.Cb)({type:Number,json:{write:!0}})],f.prototype,"errorCode",void 0),(0,s._)([(0,u.Cb)({type:Boolean,json:{write:!0}})],f.prototype,"isContentVisible",void 0),(0,s._)([(0,u.Cb)({type:Number,json:{write:!0}})],f.prototype,"status",void 0);var I=f=(0,s._)([(0,c.j)("esri.rest.networks.support.Association")],f)}}]);
//# sourceMappingURL=60897.d82408ac.chunk.js.map