"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[84227],{77178:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(37762),i=r(15671),a=r(43144),l=r(60136),o=r(29388),u=r(27366),s=r(80987),c=(r(14921),r(10064),r(32718),r(3073),r(27088)),f=r(49861),p=r(69912),d=function(e){(0,l.Z)(r,e);var t=(0,o.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).getCollections=null,n}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;this.addHandles((0,c.EH)((function(){return e._refresh()})))}},{key:"destroy",value:function(){this.getCollections=null}},{key:"_refresh",value:function(){var e=null!=this.getCollections?this.getCollections():null;if(null!=e){var t,r=0,i=(0,n.Z)(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;null!=a&&(r=this._processCollection(r,a))}}catch(l){i.e(l)}finally{i.f()}this.splice(r,this.length)}else this.removeAll()}},{key:"_createNewInstance",value:function(e){return new s.Z(e)}},{key:"_processCollection",value:function(e,t){var r;if(!t)return e;var i,a=null!==(r=this.itemFilterFunction)&&void 0!==r?r:function(e){return!!e},l=(0,n.Z)(t);try{for(l.s();!(i=l.n()).done;){var o=i.value;if(o){if(a(o)){var u=this.indexOf(o,e);u>=0?u!==e&&this.reorder(o,e):this.add(o,e),++e}if(this.getChildrenFunction){var s=this.getChildrenFunction(o);if(Array.isArray(s)){var c,f=(0,n.Z)(s);try{for(f.s();!(c=f.n()).done;){var p=c.value;e=this._processCollection(e,p)}}catch(d){f.e(d)}finally{f.f()}}else e=this._processCollection(e,s)}}}}catch(d){l.e(d)}finally{l.f()}return e}}]),r}(s.Z);(0,u._)([(0,f.Cb)()],d.prototype,"getCollections",void 0),(0,u._)([(0,f.Cb)()],d.prototype,"getChildrenFunction",void 0),(0,u._)([(0,f.Cb)()],d.prototype,"itemFilterFunction",void 0);var y=d=(0,u._)([(0,p.j)("esri.core.CollectionFlattener")],d)},82582:function(e,t,r){r.d(t,{D9:function(){return u},DE:function(){return o},dp:function(){return l},o2:function(){return s},yZ:function(){return a}});var n=r(16889),i=r(68860);function a(e,t){var r=t||e.extent,n=e.width,a=(0,i.c9)(null===r||void 0===r?void 0:r.spatialReference);return r&&n?r.width/n*a*i.hd*96:0}function l(e,t){return e/((0,i.c9)(t)*i.hd*96)}function o(e){return e/(96*i.hd)}function u(e,t){var r=e.extent,n=e.width-(e.padding?e.padding.left+e.padding.right:0),i=l(t,r.spatialReference);return r.clone().expand(i*n/r.width)}function s(e,t,r){return function(e,t){return 0===t||(0,n.W8)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,n.W8)(e,t)||e>t}(e,r)}},84227:function(e,t,r){r.r(t),r.d(t,{default:function(){return Le}});var n,i=r(74165),a=r(15861),l=r(4942),o=r(1413),u=r(37762),s=r(15671),c=r(43144),f=r(97326),p=r(60136),d=r(29388),y=r(27366),v=r(42265),m=r(52639),h=r(44055),b=r(76200),g=r(80987),x=r(77178),w=r(43404),_=r(84652),C=r(97642),Z=r(66978),S=r(94172),F=r(35995),N=r(49861),E=r(25243),I=r(38511),k=r(69912),O=r(31201),R=r(18987),A=r(53866),P=r(78952),L=r(82582),M=r(92975),U=r(30651),j=r(6693),T=r(6061),q=r(29598),W=r(71684),B=r(56811),V=r(99063),H=r(86685),D=r(25899),G=r(70361),X=r(42388),J=r(83690),$=r(79056),z=r(89125),Q=(r(84936),r(93169),0),K=n=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).description=null,n.dimensions=null,n.fullExtent=null,n.fullExtents=null,n.legendUrl=null,n.legendEnabled=!0,n.layer=null,n.maxScale=0,n.minScale=0,n.name=null,n.parent=null,n.popupEnabled=!1,n.queryable=!1,n.sublayers=null,n.spatialReferences=null,n.title=null,n.addHandles([(0,S.on)((function(){return n.sublayers}),"after-add",(function(e){var t=e.item;t.parent=(0,f.Z)(n),t.layer=n.layer}),S.sync),(0,S.on)((function(){return n.sublayers}),"after-remove",(function(e){var t=e.item;t.layer=t.parent=null}),S.sync),(0,S.watch)((function(){return n.sublayers}),(function(e,t){if(t){var r,i=(0,u.Z)(t);try{for(i.s();!(r=i.n()).done;){var a=r.value;a.layer=a.parent=null}}catch(c){i.e(c)}finally{i.f()}}if(e){var l,o=(0,u.Z)(e);try{for(o.s();!(l=o.n()).done;){var s=l.value;s.parent=(0,f.Z)(n),s.layer=n.layer}}catch(c){o.e(c)}finally{o.f()}}}),S.sync),(0,S.watch)((function(){return n.layer}),(function(e){if(n.sublayers){var t,r=(0,u.Z)(n.sublayers);try{for(r.s();!(t=r.n()).done;){t.value.layer=e}}catch(i){r.e(i)}finally{r.f()}}}),S.sync)]),n}return(0,c.Z)(r,[{key:"id",get:function(){var e=this._get("id");return null!==e&&void 0!==e?e:Q++},set:function(e){this._set("id",e)}},{key:"readLegendUrl",value:function(e,t){var r,n;return null!==(r=null!==(n=t.legendUrl)&&void 0!==n?n:t.legendURL)&&void 0!==r?r:null}},{key:"effectiveScaleRange",get:function(){return{minScale:this.minScale,maxScale:this.maxScale}}},{key:"castSublayers",value:function(e){return(0,E.se)(g.Z.ofType(n),e)}},{key:"visible",set:function(e){this._setAndNotifyLayer("visible",e)}},{key:"clone",value:function(){var e,t,r,i,a=new n;return this.hasOwnProperty("description")&&(a.description=this.description),this.hasOwnProperty("fullExtent")&&(a.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(a.fullExtents=null!==(e=null===(t=this.fullExtents)||void 0===t?void 0:t.map((function(e){return e.clone()})))&&void 0!==e?e:null),this.hasOwnProperty("legendUrl")&&(a.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(a.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(a.layer=this.layer),this.hasOwnProperty("name")&&(a.name=this.name),this.hasOwnProperty("parent")&&(a.parent=this.parent),this.hasOwnProperty("queryable")&&(a.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(a.sublayers=null===(r=this.sublayers)||void 0===r?void 0:r.map((function(e){return e.clone()}))),this.hasOwnProperty("spatialReferences")&&(a.spatialReferences=null===(i=this.spatialReferences)||void 0===i?void 0:i.map((function(e){return e}))),this.hasOwnProperty("visible")&&(a.visible=this.visible),this.hasOwnProperty("title")&&(a.title=this.title),a}},{key:"_setAndNotifyLayer",value:function(e,t){var r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}}]),r}((0,$.IG)(C.w));(0,y._)([(0,N.Cb)()],K.prototype,"description",void 0),(0,y._)([(0,N.Cb)({readOnly:!0})],K.prototype,"dimensions",void 0),(0,y._)([(0,N.Cb)({type:A.Z,json:{name:"extent"}})],K.prototype,"fullExtent",void 0),(0,y._)([(0,N.Cb)()],K.prototype,"fullExtents",void 0),(0,y._)([(0,N.Cb)({type:Number,json:{write:{enabled:!1,overridePolicy:function(){return{ignoreOrigin:!0,enabled:!0}}}}})],K.prototype,"id",null),(0,y._)([(0,N.Cb)({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],K.prototype,"legendUrl",void 0),(0,y._)([(0,I.r)("legendUrl",["legendUrl","legendURL"])],K.prototype,"readLegendUrl",null),(0,y._)([(0,N.Cb)({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],K.prototype,"legendEnabled",void 0),(0,y._)([(0,N.Cb)()],K.prototype,"layer",void 0),(0,y._)([(0,N.Cb)()],K.prototype,"maxScale",void 0),(0,y._)([(0,N.Cb)()],K.prototype,"minScale",void 0),(0,y._)([(0,N.Cb)({readOnly:!0})],K.prototype,"effectiveScaleRange",null),(0,y._)([(0,N.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],K.prototype,"name",void 0),(0,y._)([(0,N.Cb)()],K.prototype,"parent",void 0),(0,y._)([(0,N.Cb)({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],K.prototype,"popupEnabled",void 0),(0,y._)([(0,N.Cb)({type:Boolean,json:{write:{ignoreOrigin:!0}}})],K.prototype,"queryable",void 0),(0,y._)([(0,N.Cb)()],K.prototype,"sublayers",void 0),(0,y._)([(0,z.p)("sublayers")],K.prototype,"castSublayers",null),(0,y._)([(0,N.Cb)({type:[Number],json:{read:{source:"spatialReferences"}}})],K.prototype,"spatialReferences",void 0),(0,y._)([(0,N.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],K.prototype,"title",void 0),(0,y._)([(0,N.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],K.prototype,"visible",null);var Y=K=n=(0,y._)([(0,k.j)("esri.layers.support.WMSSublayer")],K),ee=r(93433),te=r(63780),re=r(10064),ne=r(99779),ie={84:4326,83:4269,27:4267};function ae(e){var t,r,n;if(!e)return null;var i={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));var a=e.documentElement;if("ServiceExceptionReport"===a.nodeName){var l=Array.prototype.slice.call(a.childNodes).map((function(e){return e.textContent})).join("\r\n");throw new re.Z("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",l)}var o=se("Capability",a),u=se("Service",a),s=o&&se("Request",o);if(!o||!u||!s)return null;var c=se("Layer",o);if(!c)return null;var f="WMS_Capabilities"===a.nodeName||"WMT_MS_Capabilities"===a.nodeName?a.getAttribute("version"):"1.3.0",p=fe("Title",u,"")||fe("Name",u,""),d=fe("AccessConstraints",u,""),y=/^none$/i.test(d)?"":d,v=fe("Abstract",u,""),m=parseInt(fe("MaxWidth",u,"5000"),10),h=parseInt(fe("MaxHeight",u,"5000"),10),b=ye(s,"GetMap"),g=de(s,"GetMap"),x=me(c,f,i);if(!x)return null;var w,_=0,C=Array.prototype.slice.call(o.childNodes),Z=null!==(t=x.sublayers)&&void 0!==t?t:[],S=function(e){null!=e&&Z.push(e)};C.forEach((function(e){"Layer"===e.nodeName&&(0===_?w=e:1===_?(x.name&&(x.name="",S(me(w,f,i))),S(me(e,f,i))):S(me(e,f,i)),_++)}));var F=x.sublayers,N=x.extent,E=null!==(r=x.fullExtents)&&void 0!==r?r:[];if(F||(F=[]),0===F.length&&F.push(x),!N){var I=new A.Z(F[0].extent);x.extent=I.toJSON(),N=x.extent}var k=x.spatialReferences.length>0?x.spatialReferences:le(x),O=de(s,"GetFeatureInfo"),R=O?ye(s,"GetFeatureInfo"):null,P=oe(F),L=x.minScale||0,M=x.maxScale||0,U=null!==(n=x.dimensions)&&void 0!==n?n:[],j=P.reduce((function(e,t){var r;return e.concat(null!==(r=t.dimensions)&&void 0!==r?r:[])}),[]),T=U.concat(j).filter(ge),q=null;if(T.length){var W=T.map((function(e){var t=e.extent;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((function(e){return e.getTime()})):null===t||void 0===t?void 0:t.map((function(e){return[e.min.getTime(),e.max.getTime()]}))})).flat(2).filter(te.pC);q={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min.apply(Math,(0,ee.Z)(W)),Math.max.apply(Math,(0,ee.Z)(W))]}}return{copyright:y,description:v,dimensions:U,extent:N,fullExtents:E,featureInfoFormats:R,featureInfoUrl:O,mapUrl:g,maxWidth:m,maxHeight:h,maxScale:M,minScale:L,layers:P,spatialReferences:k,supportedImageFormatTypes:b,timeInfo:q,title:p,version:f}}function le(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers){var t,r=(0,u.Z)(e.sublayers);try{for(r.s();!(t=r.n()).done;){var n=le(t.value);if(n.length>0)return n}}catch(i){r.e(i)}finally{r.f()}}return[]}function oe(e){var t,r=[],n=(0,u.Z)(e);try{for(n.s();!(t=n.n()).done;){var i,a=t.value;r.push(a),(null===(i=a.sublayers)||void 0===i?void 0:i.length)&&(r=r.concat(oe(a.sublayers)),delete a.sublayers)}}catch(l){n.e(l)}finally{n.f()}return r}function ue(e,t,r){var n;return null!==(n=t.getAttribute(e))&&void 0!==n?n:r}function se(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(he(n)&&n.nodeName===e)return n}return null}function ce(e,t){if(null==t)return[];for(var r=[],n=0;n<t.childNodes.length;n++){var i=t.childNodes[n];he(i)&&i.nodeName===e&&r.push(i)}return r}function fe(e,t,r){var n,i;return null!==(n=null===(i=se(e,t))||void 0===i?void 0:i.textContent)&&void 0!==n?n:r}function pe(e,t,r){if(!e)return null;var n,i,a,l,o=parseFloat(e.getAttribute("minx")),u=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),c=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(u)?-Number.MAX_VALUE:u,i=isNaN(o)?-Number.MAX_VALUE:o,a=isNaN(c)?Number.MAX_VALUE:c,l=isNaN(s)?Number.MAX_VALUE:s):(n=isNaN(o)?-Number.MAX_VALUE:o,i=isNaN(u)?-Number.MAX_VALUE:u,a=isNaN(s)?Number.MAX_VALUE:s,l=isNaN(c)?Number.MAX_VALUE:c);var f=new P.Z({wkid:t});return new A.Z({xmin:n,ymin:i,xmax:a,ymax:l,spatialReference:f})}function de(e,t){var r=se(t,e);if(r){var n=se("DCPType",r);if(n){var i=se("HTTP",n);if(i){var a=se("Get",i);if(a){var l=function(e,t,r,n){var i=se(e,r);return i?ue(t,i,n):n}("OnlineResource","xlink:href",a,null);if(l)return l.indexOf("&")===l.length-1&&(l=l.substring(0,l.length-1)),function(e,t){var r=[],n=(0,F.mN)(e);for(var i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}(l,["service","request"])}}}}return null}function ye(e,t){var r=ce("Operation",e);if(!r.length)return ce("Format",se(t,e)).map((function(e){return e.textContent})).filter(te.pC);var n,i=[],a=(0,u.Z)(r);try{for(a.s();!(n=a.n()).done;){var l=n.value;if(l.getAttribute("name")===t){var o,s=ce("Format",l),c=(0,u.Z)(s);try{for(c.s();!(o=c.n()).done;){var f=o.value.textContent;null!=f&&i.push(f)}}catch(p){c.e(p)}finally{c.f()}}}}catch(p){a.e(p)}finally{a.f()}return i}function ve(e,t,r){var n=se(t,e);if(!n)return r;var i=n.textContent;if(null==i||""===i)return r;var a=Number(i);return isNaN(a)?r:a}function me(e,t,r){var n;if(!e)return null;var i={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},a=se("LatLonBoundingBox",e),l=se("EX_GeographicBoundingBox",e),o=null;a&&(o=pe(a,4326)),l&&((o=new A.Z(0,0,0,0,new P.Z({wkid:4326}))).xmin=parseFloat(fe("westBoundLongitude",l,"0")),o.ymin=parseFloat(fe("southBoundLatitude",l,"0")),o.xmax=parseFloat(fe("eastBoundLongitude",l,"0")),o.ymax=parseFloat(fe("northBoundLatitude",l,"0"))),a||l||(o=new A.Z(-180,-90,180,90,new P.Z({wkid:4326}))),i.minScale=ve(e,"MaxScaleDenominator",0),i.maxScale=ve(e,"MinScaleDenominator",0);var u=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((function(e){if("Name"===e.nodeName)i.name=e.textContent||"";else if("Title"===e.nodeName)i.title=e.textContent||"";else if("Abstract"===e.nodeName)i.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(u);if(n&&0===n.indexOf("EPSG:")){var a=parseInt(n.substring(5),10);0===a||isNaN(a)||o||(o="1.3.0"===t?pe(e,a,(0,H.A)(a)):pe(e,a))}var l=null===n||void 0===n?void 0:n.indexOf(":");if(l&&l>-1){var s,c=parseInt(n.substring(l+1,n.length),10);0===c||isNaN(c)||(c=null!==(s=ie[c])&&void 0!==s?s:c);var f="1.3.0"===t?pe(e,c,(0,H.A)(c)):pe(e,c);f&&i.fullExtents&&i.fullExtents.push(f)}}else if(e.nodeName===u){var p,d;(null!==(p=null===(d=e.textContent)||void 0===d?void 0:d.split(" "))&&void 0!==p?p:[]).forEach((function(e){var t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){var r,n=null!==(r=ie[t])&&void 0!==r?r:t;i.spatialReferences.includes(n)||i.spatialReferences.push(n)}}))}else if("Style"!==e.nodeName||i.legendUrl){if("Layer"===e.nodeName){var y=me(e,t,r);y&&(y.parentLayerId=i.id,i.sublayers||(i.sublayers=[]),i.sublayers.push(y))}}else{var v=se("LegendURL",e);if(v){var m=se("OnlineResource",v);m&&(i.legendUrl=m.getAttribute("xlink:href"))}}})),i.extent=null===(n=o)||void 0===n?void 0:n.toJSON(),i.dimensions=ce("Dimension",e).filter((function(e){return e.getAttribute("name")&&e.getAttribute("units")&&e.textContent})).map((function(e){var t,r,n=e.getAttribute("name"),i=e.getAttribute("units"),a=e.textContent,l=null!==(t=e.getAttribute("unitSymbol"))&&void 0!==t?t:void 0,o=null!==(r=e.getAttribute("default"))&&void 0!==r?r:void 0,u="0"!==ue("default",e,"0"),s="0"!==ue("nearestValue",e,"0"),c="0"!==ue("current",e,"0");return ge({name:n,units:i})?{name:"time",units:"ISO8601",extent:_e(a),default:_e(o),multipleValues:u,nearestValue:s,current:c}:be({name:n,units:i})?{name:"elevation",units:i,extent:xe(a),unitSymbol:l,default:xe(o),multipleValues:u,nearestValue:s}:{name:n,units:i,extent:we(a),unitSymbol:l,default:we(o),multipleValues:u,nearestValue:s}})),i}function he(e){return e.nodeType===Node.ELEMENT_NODE}function be(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function ge(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function xe(e){if(e){var t=e.includes("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(te.pC):r.map((function(e){return parseFloat(e)}))}}function we(e){if(e){var t=e.includes("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(te.pC):r}}function _e(e){if(e){var t=e.includes("/"),r=e.split(",");return t?r.map((function(e){var t=e.split("/");return t.length<2?null:{min:Ce(t[0]),max:Ce(t[1]),resolution:t.length>=3&&"0"!==t[2]?Ze(t[2]):void 0}})).filter(te.pC):r.map((function(e){return Ce(e)}))}}function Ce(e){return ne.ou.fromISO(e,{zone:ne.Qf.utcInstance}).toJSDate()}function Ze(e){var t=e.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);return t?{years:Se(t[1]),months:Se(t[2]),days:Se(t[3]),hours:Se(t[4]),minutes:Se(t[5]),seconds:Se(t[6])}:null}function Se(e){if(!e)return 0;var t=e.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!t)return 0;var r=t[0].replace(",",".");return Number(r)}function Fe(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}function Ne(e){if(e&&!e.isAllTime&&!e.isEmpty){var t=e.start,r=e.end;return t&&r&&t.getTime()===r.getTime()?"".concat(Fe(t)):"".concat(t?Fe(t):"0000-01-01T00:00:00Z","/").concat(r?Fe(r):"9999-12-31T23:59:59Z")}}var Ee=new Set([102100,3857,102113,900913]),Ie=new Set([3395,54004]);var ke=new w.X({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function Oe(e){return"text/html"===e}function Re(e){return"text/plain"===e}var Ae=function(e){(0,p.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).allSublayers=new x.Z({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.customParameters=null,e.customLayerParameters=null,e.copyright=null,e.description=null,e.dimensions=null,e.fullExtent=null,e.fullExtents=null,e.featureInfoFormats=null,e.featureInfoUrl=null,e.fetchFeatureInfoFunction=null,e.imageFormat=null,e.imageMaxHeight=2048,e.imageMaxWidth=2048,e.imageTransparency=!0,e.legendEnabled=!0,e.mapUrl=null,e.isReference=null,e.operationalLayerType="WMS",e.spatialReference=null,e.spatialReferences=null,e.sublayers=null,e.type="wms",e.version=null,e.addHandles([(0,S.on)((function(){return e.sublayers}),"after-add",(function(t){var r=t.item;r.parent=r.layer=(0,f.Z)(e)}),S.sync),(0,S.on)((function(){return e.sublayers}),"after-remove",(function(e){var t=e.item;t.layer=t.parent=null}),S.sync),(0,S.watch)((function(){return e.sublayers}),(function(t,r){if(r){var n,i=(0,u.Z)(r);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.layer=a.parent=null}}catch(c){i.e(c)}finally{i.f()}}if(t){var l,o=(0,u.Z)(t);try{for(o.s();!(l=o.n()).done;){var s=l.value;s.parent=s.layer=(0,f.Z)(e)}}catch(c){o.e(c)}finally{o.f()}}}),S.sync)]),e}return(0,c.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,o.Z)({url:e},t):e}},{key:"destroy",value:function(){this.allSublayers.destroy()}},{key:"load",value:function(e){var t=this,r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Z.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"readFullExtentFromItemOrMap",value:function(e,t){var r=t.extent;return r?new A.Z({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}},{key:"writeFullExtent",value:function(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}},{key:"featureInfoFormat",get:function(){var e,t;return null==this.featureInfoFormats?null:null!==(e=null!==(t=this.featureInfoFormats.find(Oe))&&void 0!==t?t:this.featureInfoFormats.find(Re))&&void 0!==e?e:null},set:function(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(Oe(e)||Re(e))&&this._override("featureInfoFormat",e)}},{key:"readImageFormat",value:function(e,t){var r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}},{key:"readSpatialReferenceFromItemOrDocument",value:function(e,t){return new P.Z(t.spatialReferences[0])}},{key:"writeSpatialReferences",value:function(e,t){var r,n=null===(r=this.spatialReference)||void 0===r?void 0:r.wkid;e&&n?(t.spatialReferences=e.filter((function(e){return e!==n})),t.spatialReferences.unshift(n)):t.spatialReferences=e}},{key:"readSublayersFromItemOrMap",value:function(e,t,r){return Pe(t.layers,r,t.visibleLayers)}},{key:"readSublayers",value:function(e,t,r){return Pe(t.layers,r)}},{key:"writeSublayers",value:function(e,t,r,n){t.layers=[];var i,a=new Map,l=e.flatten((function(e){var t=e.sublayers;return null!==t&&void 0!==t?t:[]})),s=(0,u.Z)(l);try{for(s.s();!(i=s.n()).done;){var c,f=i.value;if("number"==typeof(null===(c=f.parent)||void 0===c?void 0:c.id)){var p=a.get(f.parent.id);null!=p?p.push(f.id):a.set(f.parent.id,[f.id])}}}catch(x){s.e(x)}finally{s.f()}var d,y=(0,u.Z)(l);try{for(y.s();!(d=y.n()).done;){var v,m=d.value,h=(0,o.Z)({sublayer:m},n),b=m.write({parentLayerId:"number"==typeof(null===(v=m.parent)||void 0===v?void 0:v.id)?m.parent.id:-1},h);if(a.has(m.id)&&(b.sublayerIds=a.get(m.id)),!m.sublayers&&m.name){var g=m.write({},h);delete g.id,t.layers.push(g)}}}catch(x){y.e(x)}finally{y.f()}t.visibleLayers=l.filter((function(e){var t=e.visible,r=e.sublayers;return t&&!r})).map((function(e){return e.name})).toArray()}},{key:"url",set:function(e){if(e){var t=(0,F.mN)(e),r=t.path,n=t.query;for(var i in n)/^(request|service)$/i.test(i)&&delete n[i];var a=(0,F.fl)(r,null!==n&&void 0!==n?n:{});this._set("url",a)}else this._set("url",e)}},{key:"createExportImageParameters",value:function(e,t,r,n){var i,a=null!==(i=null===n||void 0===n?void 0:n.pixelRatio)&&void 0!==i?i:1,u=(0,L.yZ)({extent:e,width:t})*a,s=new X.j({layer:this,scale:u}),c=e.xmin,f=e.ymin,p=e.xmax,d=e.ymax,y=function(e,t){var r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&Ee.has(r)?t.find((function(e){return Ee.has(e)}))||t.find((function(e){return Ie.has(e)}))||102100:r)}(e.spatialReference,this.spatialReferences),v="1.3.0"===this.version&&(0,H.A)(y)?"".concat(f,",").concat(c,",").concat(d,",").concat(p):"".concat(c,",").concat(f,",").concat(p,",").concat(d),m=s.toJSON(),h="1.3.0"===this.version?"crs":"srs";return(0,o.Z)((0,l.Z)({bbox:v},h,null==y||isNaN(y)?void 0:"EPSG:"+y),m)}},{key:"fetchImage",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a){var l,u,s,c,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=this.mapUrl,(u=this.createExportImageParameters(t,r,n,a)).layers){e.next=4;break}return s=document.createElement("canvas"),e.abrupt("return",(s.width=r,s.height=n,s));case 4:return c=Ne(null===a||void 0===a?void 0:a.timeExtent),f={responseType:"image",query:this._mixCustomParameters((0,o.Z)((0,o.Z)({width:r,height:n},u),{},{time:c},this.refreshParameters)),signal:null===a||void 0===a?void 0:a.signal},e.abrupt("return",(0,b.Z)(null!==l&&void 0!==l?l:"",f).then((function(e){return e.data})));case 6:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"fetchImageBitmap",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,r,n,a){var l,u,s,c,f,p,d,y;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=null!==(l=this.mapUrl)&&void 0!==l?l:"",(s=this.createExportImageParameters(t,r,n,a)).layers){e.next=4;break}return c=document.createElement("canvas"),e.abrupt("return",(c.width=r,c.height=n,c));case 4:return f=Ne(null===a||void 0===a?void 0:a.timeExtent),p={responseType:"blob",query:this._mixCustomParameters((0,o.Z)((0,o.Z)({width:r,height:n},s),{},{time:f},this.refreshParameters)),signal:null===a||void 0===a?void 0:a.signal},e.next=8,(0,b.Z)(u,p);case 8:return d=e.sent,y=d.data,e.abrupt("return",(0,J.g)(y,u,null===a||void 0===a?void 0:a.signal));case 11:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}()},{key:"fetchFeatureInfo",value:function(e,t,r,n,i){var a=(0,L.yZ)({extent:e,width:t}),l=function(e){var t=e.filter((function(e){return e.popupEnabled&&e.name&&e.queryable}));return t.length?t.map((function(e){return e.name})).join():null}(new X.j({layer:this,scale:a}).visibleSublayers);if(null==this.featureInfoUrl||null==l)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);var u="1.3.0"===this.version?{I:n,J:i}:{x:n,y:i},s=(0,o.Z)({query_layers:l,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r},u),c=(0,o.Z)((0,o.Z)({},this.createExportImageParameters(e,t,r)),s),f=this._mixCustomParameters(c);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(f):this._defaultFetchFeatureInfoFunction((0,F.fl)(this.featureInfoUrl,f))}},{key:"findSublayerById",value:function(e){return this.allSublayers.find((function(t){return t.id===e}))}},{key:"findSublayerByName",value:function(e){return this.allSublayers.find((function(t){return t.name===e}))}},{key:"serviceSupportsSpatialReference",value:function(e){return(0,D.G)(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((function(t){var r=900913===t?P.Z.WebMercator:new P.Z({wkid:t});return(0,M.fS)(r,e)}))}},{key:"_defaultFetchFeatureInfoFunction",value:function(e){var t=document.createElement("iframe");t.src=(0,F.qg)(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");var r=new h.Z({title:this.title,content:t}),n=new m.Z({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}},{key:"_fetchService",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,a,l,u,s,c,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.resourceInfo||null===(r=this.parsedUrl)||void 0===r||!r.path){e.next=9;break}return n=this.parsedUrl,a=n.path,l=n.query,e.next=6,(0,b.Z)(a,{query:(0,o.Z)((0,o.Z)({SERVICE:"WMS",REQUEST:"GetCapabilities"},l),this.customParameters),responseType:"xml",signal:t});case 6:u=e.sent,s=u.data,this.resourceInfo=ae(s);case 9:this.parsedUrl&&(c=new F.R9(this.parsedUrl.path),f=v.Z.request.httpsDomains,"https"!==c.scheme||c.port&&"443"!==c.port||!c.host||f.includes(c.host)||f.push(c.host)),this.read(this.resourceInfo,{origin:"service"});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_mixCustomParameters",value:function(e){if(!this.customLayerParameters&&!this.customParameters)return e;var t=(0,o.Z)((0,o.Z)({},this.customParameters),this.customLayerParameters);for(var r in t)e[r.toLowerCase()]=t[r];return e}}]),r}((0,j.h7)((0,V.n)((0,W.Q)((0,B.M)((0,T.q)((0,q.I)((0,C.R)(U.Z))))))));function Pe(e,t,r){var n;e=null!==(n=e)&&void 0!==n?n:[];var i=new Map;e.every((function(e){return null==e.id}))&&(e=(0,_.d9)(e)).forEach((function(e,t){return e.id=t}));var a,l=(0,u.Z)(e);try{for(l.s();!(a=l.n()).done;){var o=a.value,s=new Y;s.read(o,t),r&&!r.includes(s.name)&&(s.visible=!1),i.set(s.id,s)}}catch(m){l.e(m)}finally{l.f()}var c,f=[],p=(0,u.Z)(e);try{for(p.s();!(c=p.n()).done;){var d=c.value,y=null!=d.id?i.get(d.id):null;if(y)if(null!=d.parentLayerId&&d.parentLayerId>=0){var v=i.get(d.parentLayerId);if(!v)continue;v.sublayers||(v.sublayers=new g.Z),v.sublayers.push(y)}else f.push(y)}}catch(m){p.e(m)}finally{p.f()}return f}(0,y._)([(0,N.Cb)({readOnly:!0})],Ae.prototype,"allSublayers",void 0),(0,y._)([(0,N.Cb)({json:{type:Object,write:!0}})],Ae.prototype,"customParameters",void 0),(0,y._)([(0,N.Cb)({json:{type:Object,write:!0}})],Ae.prototype,"customLayerParameters",void 0),(0,y._)([(0,N.Cb)({type:String,json:{write:!0}})],Ae.prototype,"copyright",void 0),(0,y._)([(0,N.Cb)()],Ae.prototype,"description",void 0),(0,y._)([(0,N.Cb)({readOnly:!0})],Ae.prototype,"dimensions",void 0),(0,y._)([(0,N.Cb)({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],Ae.prototype,"fullExtent",void 0),(0,y._)([(0,I.r)(["web-document","portal-item"],"fullExtent",["extent"])],Ae.prototype,"readFullExtentFromItemOrMap",null),(0,y._)([(0,O.c)(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],Ae.prototype,"writeFullExtent",null),(0,y._)([(0,N.Cb)()],Ae.prototype,"fullExtents",void 0),(0,y._)([(0,N.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Ae.prototype,"featureInfoFormat",null),(0,y._)([(0,N.Cb)({type:[String],readOnly:!0})],Ae.prototype,"featureInfoFormats",void 0),(0,y._)([(0,N.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Ae.prototype,"featureInfoUrl",void 0),(0,y._)([(0,N.Cb)()],Ae.prototype,"fetchFeatureInfoFunction",void 0),(0,y._)([(0,N.Cb)({type:String,json:{origins:{"web-document":{default:"image/png",type:ke.jsonValues,read:{reader:ke.read,source:"format"},write:{writer:ke.write,target:"format"}}}}})],Ae.prototype,"imageFormat",void 0),(0,y._)([(0,I.r)("imageFormat",["supportedImageFormatTypes"])],Ae.prototype,"readImageFormat",null),(0,y._)([(0,N.Cb)({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],Ae.prototype,"imageMaxHeight",void 0),(0,y._)([(0,N.Cb)({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],Ae.prototype,"imageMaxWidth",void 0),(0,y._)([(0,N.Cb)()],Ae.prototype,"imageTransparency",void 0),(0,y._)([(0,N.Cb)(G.rn)],Ae.prototype,"legendEnabled",void 0),(0,y._)([(0,N.Cb)({type:["show","hide","hide-children"]})],Ae.prototype,"listMode",void 0),(0,y._)([(0,N.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Ae.prototype,"mapUrl",void 0),(0,y._)([(0,N.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],Ae.prototype,"isReference",void 0),(0,y._)([(0,N.Cb)({type:["WMS"]})],Ae.prototype,"operationalLayerType",void 0),(0,y._)([(0,N.Cb)()],Ae.prototype,"resourceInfo",void 0),(0,y._)([(0,N.Cb)({type:P.Z,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],Ae.prototype,"spatialReference",void 0),(0,y._)([(0,I.r)(["web-document","portal-item"],"spatialReference",["spatialReferences"])],Ae.prototype,"readSpatialReferenceFromItemOrDocument",null),(0,y._)([(0,N.Cb)({type:[E.z8],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],Ae.prototype,"spatialReferences",void 0),(0,y._)([(0,O.c)(["web-document","portal-item"],"spatialReferences")],Ae.prototype,"writeSpatialReferences",null),(0,y._)([(0,N.Cb)({type:g.Z.ofType(Y),json:{write:{target:"layers",overridePolicy:function(e,t,r){if(function(e,t){return e.some((function(e){for(var r in e)if((0,R.d)(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],Ae.prototype,"sublayers",void 0),(0,y._)([(0,I.r)(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],Ae.prototype,"readSublayersFromItemOrMap",null),(0,y._)([(0,I.r)("service","sublayers",["layers"])],Ae.prototype,"readSublayers",null),(0,y._)([(0,O.c)("sublayers",{layers:{type:[Y]},visibleLayers:{type:[String]}})],Ae.prototype,"writeSublayers",null),(0,y._)([(0,N.Cb)({json:{read:!1},readOnly:!0,value:"wms"})],Ae.prototype,"type",void 0),(0,y._)([(0,N.Cb)(G.HQ)],Ae.prototype,"url",null),(0,y._)([(0,N.Cb)({type:String,json:{write:{ignoreOrigin:!0}}})],Ae.prototype,"version",void 0);var Le=Ae=(0,y._)([(0,k.j)("esri.layers.WMSLayer")],Ae)},86685:function(e,t,r){r.d(t,{A:function(){return a}});var n=r(29439),i=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function a(e){return null!=e&&i.some((function(t){var r=(0,n.Z)(t,2),i=r[0],a=r[1];return e>=i&&e<=a}))}},42388:function(e,t,r){r.d(t,{j:function(){return p}});var n=r(15671),i=r(43144),a=r(60136),l=r(29388),o=r(27366),u=r(7138),s=r(49861),c=(r(93169),r(32718),r(84936),r(69912)),f={visible:"visibleSublayers"},p=function(e){(0,a.Z)(r,e);var t=(0,l.Z)(r);function r(e){var i;return(0,n.Z)(this,r),(i=t.call(this,e)).scale=0,i}return(0,i.Z)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(f[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join()}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null===e||void 0===e?void 0:e.sublayers,n=[];return null!==r&&void 0!==r&&r.forEach((function e(r){var i=r.minScale,a=r.maxScale,l=r.sublayers;r.visible&&(0===t||(0===i||t<=i)&&(0===a||t>=a))&&(l?l.forEach(e):n.push(r))})),n}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency?"TRUE":"FALSE",version:e.version,layers:t}}}]),r}(u.default);(0,o._)([(0,s.Cb)()],p.prototype,"layer",null),(0,o._)([(0,s.Cb)({readOnly:!0})],p.prototype,"layers",null),(0,o._)([(0,s.Cb)({type:Number})],p.prototype,"scale",void 0),(0,o._)([(0,s.Cb)({readOnly:!0})],p.prototype,"version",null),(0,o._)([(0,s.Cb)({readOnly:!0})],p.prototype,"visibleSublayers",null),p=(0,o._)([(0,c.j)("esri.layers.support.ExportWMSImageParameters")],p)},83690:function(e,t,r){r.d(t,{V:function(){return s},g:function(){return o}});var n=r(74165),i=r(15861),a=r(10064),l=r(66978);function o(e,t,r){return u.apply(this,arguments)}function u(){return u=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:o=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new a.Z("request:server","Unable to load ".concat(r),{url:r,error:e.t0});case 9:return e.abrupt("return",((0,l.k_)(i),o));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),u.apply(this,arguments)}function s(e,t,r,n,i){return c.apply(this,arguments)}function c(){return c=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,o,u){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:s=e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new a.Z("request:server","Unable to load tile ".concat(r,"/").concat(i,"/").concat(o),{error:e.t0,level:r,row:i,col:o});case 9:return e.abrupt("return",((0,l.k_)(u),s));case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),c.apply(this,arguments)}}}]);
//# sourceMappingURL=84227.625bfb0b.chunk.js.map