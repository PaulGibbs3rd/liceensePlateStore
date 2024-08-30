"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[94650],{94650:function(e,r,t){t.r(r),t.d(r,{fromUrl:function(){return b}});var n=t(37762),a=t(74165),u=t(1413),s=t(15861),l=t(10064),c=t(35995),o=t(25899),i=t(84076),p=t(74368),f=t(37933),v=t(19610),d=t(41226),y={FeatureLayer:!0,SceneLayer:!0};function b(e){return h.apply(this,arguments)}function h(){return h=(0,s.Z)((0,a.Z)().mark((function e(r){var n,s,l,c,o,i,p,f,v,d,y;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.properties,s=r.url,l=(0,u.Z)((0,u.Z)({},n),{},{url:s}),e.next=5,Z(s,null===n||void 0===n?void 0:n.customParameters);case 5:if(c=e.sent,o=c.Constructor,i=c.layerId,p=c.sourceJSON,f=c.parsedUrl,v=c.layers,d=c.tables,v.length+d.length!==0){e.next=14;break}return e.abrupt("return",(null!=i&&(l.layerId=i),null!=p&&(l.sourceJSON=p),new o(l)));case 14:return e.next=17,t.e(65069).then(t.bind(t,65069));case 17:return e.t0=e.sent.default,e.t1={title:f.title},y=new e.t0(e.t1),e.next=22,w(y,c,l);case 22:return e.abrupt("return",y);case 23:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function x(e,r){return e?e.find((function(e){return e.id===r})):null}function m(e,r,t,n,a){var s=(0,u.Z)((0,u.Z)({},a),{},{layerId:r});return null!=e&&(s.url=e),null!=t&&(s.sourceJSON=t),"sublayerTitleMode"in n.prototype&&(s.sublayerTitleMode="service-name"),new n(s)}function w(e,r,t){return k.apply(this,arguments)}function k(){return(k=(0,s.Z)((0,a.Z)().mark((function e(r,t,u){var s,l,c,o,i,p,f,v,d,y;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.sublayerConstructorProvider,l=(0,n.Z)(t.layers);try{for(l.s();!(c=l.n()).done;)i=c.value,p=i.id,f=i.serverUrl,v=x(t.sublayerInfos,p),d=m(f,p,v,null!==(o=v&&(null===s||void 0===s?void 0:s(v)))&&void 0!==o?o:t.Constructor,u),r.add(d)}catch(a){l.e(a)}finally{l.f()}if(!t.tables.length){e.next=8;break}return e.next=6,O("FeatureLayer");case 6:y=e.sent,t.tables.forEach((function(e){var n=e.id,a=m(e.serverUrl,n,x(t.tableInfos,n),y,u);r.tables.add(a)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r){return S.apply(this,arguments)}function S(){return S=(0,s.Z)((0,a.Z)().mark((function e(r,t){var n,u,s,c,i,v,b,h,x,m,w,k,Z,S,g,T,P,U,C,F,N,J,M,j,E,A,K,G,R,q;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,o.Qc)(r),e.t0=null==n,!e.t0){e.next=6;break}return e.next=5,I(r,t);case 5:n=e.sent;case 6:if(null!=n){e.next=8;break}throw new l.Z("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});case 8:s=(u=n).serverType,c=u.sublayer,v={FeatureServer:"FeatureLayer",KnowledgeGraphServer:"KnowledgeGraphLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer",VideoServer:"VideoLayer"},h="SceneServer"===s,x={parsedUrl:n,Constructor:null,layerId:((b="FeatureServer"===s)||h)&&null!==c&&void 0!==c?c:void 0,layers:[],tables:[]},e.t1=s,e.next="MapServer"===e.t1?13:"ImageServer"===e.t1?35:"SceneServer"===e.t1?42:"3DTilesServer"===e.t1?47:"FeatureServer"===e.t1?48:54;break;case 13:if(null==c){e.next=26;break}return e.next=16,(0,d.T)(r,{customParameters:t});case 16:m=e.sent,w=m.type,e.t2=(i="FeatureLayer",w),e.next="Catalog Layer"===e.t2?21:"Catalog Dynamic Group Layer"===e.t2?23:24;break;case 21:return i="CatalogLayer",e.abrupt("break",24);case 23:throw new l.Z("arcgis-layers:unsupported",'fromUrl() not supported for "'.concat(w,'" layers'));case 24:e.next=34;break;case 26:return e.next=28,D(r,t);case 28:if(!e.sent){e.next=32;break}e.t3="TileLayer",e.next=33;break;case 32:e.t3="MapImageLayer";case 33:i=e.t3;case 34:return e.abrupt("break",55);case 35:return e.next=37,(0,d.T)(r,{customParameters:t});case 37:return Z=e.sent,S=Z.tileInfo,g=Z.cacheType,i=S?"LERC"!==(null===S||void 0===S||null===(k=S.format)||void 0===k?void 0:k.toUpperCase())||g&&"elevation"!==g.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer",e.abrupt("break",55);case 42:return e.next=44,(0,d.T)(n.url.path,{customParameters:t});case 44:return T=e.sent,i="SceneLayer",T&&(P=null===T||void 0===T?void 0:T.layers,"Voxel"===(null===T||void 0===T?void 0:T.layerType)?i="VoxelLayer":null!==P&&void 0!==P&&P.length&&null!=(C=null===(U=P[0])||void 0===U?void 0:U.layerType)&&null!=f.fb[C]&&(i=f.fb[C])),e.abrupt("break",55);case 47:throw new l.Z("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case 48:if(i="FeatureLayer",null==c){e.next=53;break}return e.next=51,(0,d.T)(r,{customParameters:t});case 51:F=e.sent,x.sourceJSON=F,i=(0,p.W)(F.type);case 53:return e.abrupt("break",55);case 54:i=v[s];case 55:if(!y[i]||null!=c){e.next=71;break}return e.next=58,L(r,s,t);case 58:if(J=e.sent,b&&(x.sublayerInfos=J.layerInfos,x.tableInfos=J.tableInfos),1===J.layers.length+J.tables.length){e.next=70;break}if(x.layers=J.layers,x.tables=J.tables,e.t4=b&&(null===(N=J.layerInfos)||void 0===N?void 0:N.length),!e.t4){e.next=68;break}return e.next=67,V(J.layerInfos);case 67:x.sublayerConstructorProvider=e.sent;case 68:e.next=71;break;case 70:(b||h)&&(R=null!==(M=null===(j=J.layerInfos)||void 0===j?void 0:j[0])&&void 0!==M?M:null===(E=J.tableInfos)||void 0===E?void 0:E[0],x.layerId=null!==(A=null===(K=J.layers[0])||void 0===K?void 0:K.id)&&void 0!==A?A:null===(G=J.tables[0])||void 0===G?void 0:G.id,x.sourceJSON=R,b&&(q=null===R||void 0===R?void 0:R.type,i=(0,p.W)(q)));case 71:return e.next=73,O(i);case 73:return x.Constructor=e.sent,e.abrupt("return",x);case 75:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function I(e,r){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)((0,a.Z)().mark((function e(r,t){var n,u,s,l,i,p,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.T)(r,{customParameters:t});case 2:if(s=e.sent,l=null,i=null,"Feature Layer"===(p=s.type)||"Table"===p?(l="FeatureServer",i=null!==(n=s.id)&&void 0!==n?n:null):"indexedVector"===p?l="VectorTileServer":s.hasOwnProperty("mapName")?l="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?l="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?l="FeatureServer":s.hasOwnProperty("streamUrls")?l="StreamServer":T(s)?(l="SceneServer",i=s.id):s.hasOwnProperty("layers")&&T(null===(u=s.layers)||void 0===u?void 0:u[0])&&(l="SceneServer"),l){e.next=7;break}return e.abrupt("return",null);case 7:return f=null!=i?(0,o.DR)(r):null,e.abrupt("return",{title:null!=f&&s.name||(0,c.vt)(r),serverType:l,sublayer:i,url:{path:null!=f?f.serviceUrl:(0,c.mN)(r).path}});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}function L(e,r,t){return P.apply(this,arguments)}function P(){return(P=(0,s.Z)((0,a.Z)().mark((function e(r,t,n){var u,s,l,c,o,i,f,v,y;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=!1,e.t0=t,e.next="FeatureServer"===e.t0?4:"SceneServer"===e.t0?9:14;break;case 4:return e.next=6,(0,p.V)(r,{customParameters:n});case 6:return i=e.sent,o=!!i.layersJSON,l=i.layersJSON||i.serviceJSON,e.abrupt("break",17);case 9:return e.next=11,U(r,n);case 11:return f=e.sent,l=f.serviceInfo,c=f.tableServerUrl,e.abrupt("break",17);case 14:return e.next=16,(0,d.T)(r,{customParameters:n});case 16:l=e.sent;case 17:return v=null===(u=l)||void 0===u?void 0:u.layers,y=null===(s=l)||void 0===s?void 0:s.tables,e.abrupt("return",{layers:(null===v||void 0===v?void 0:v.map((function(e){return{id:e.id}})).reverse())||[],tables:(null===y||void 0===y?void 0:y.map((function(e){return{serverUrl:c,id:e.id}})).reverse())||[],layerInfos:o?v:[],tableInfos:o?y:[]});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,r){return C.apply(this,arguments)}function C(){return(C=(0,s.Z)((0,a.Z)().mark((function e(r,t){var n,u,s,l,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.T)(r,{customParameters:t});case 2:if(u=e.sent,null===(n=u.layers)||void 0===n?void 0:n[0]){e.next=6;break}return e.abrupt("return",{serviceInfo:u});case 6:return e.prev=6,e.next=9,(0,i.w)(r);case 9:return s=e.sent,l=s.serverUrl,e.next=13,(0,d.T)(l,{customParameters:t}).catch((function(){return null}));case 13:return c=e.sent,e.abrupt("return",(c&&(u.tables=c.tables),{serviceInfo:u,tableServerUrl:l}));case 17:return e.prev=17,e.t0=e.catch(6),e.abrupt("return",{serviceInfo:u});case 20:case"end":return e.stop()}}),e,null,[[6,17]])})))).apply(this,arguments)}function O(e){return F.apply(this,arguments)}function F(){return(F=(0,s.Z)((0,a.Z)().mark((function e(r){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,v.T[r])());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,r){return N.apply(this,arguments)}function N(){return(N=(0,s.Z)((0,a.Z)().mark((function e(r,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.T)(r,{customParameters:t});case 2:return e.abrupt("return",e.sent.tileInfo);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return J.apply(this,arguments)}function J(){return(J=(0,s.Z)((0,a.Z)().mark((function e(r){var t,u,s,l,c,o,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.length){e.next=2;break}return e.abrupt("return");case 2:t=new Set,u=[],s=(0,n.Z)(r);try{for(s.s();!(l=s.n()).done;)c=l.value.type,t.has(c)||(t.add(c),u.push(O((0,p.W)(c))))}catch(a){s.e(a)}finally{s.f()}return e.next=7,Promise.all(u);case 7:return o=e.sent,i=new Map,e.abrupt("return",(Array.from(t).forEach((function(e,r){i.set(e,o[r])})),function(e){return i.get(e.type)}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},84076:function(e,r,t){t.d(r,{w:function(){return d}});var n=t(29439),a=t(74165),u=t(1413),s=t(15861),l=t(19545),c=t(76200),o=t(10064),i=t(66978),p=t(25899),f=t(7575),v=t(98995);function d(e,r){return y.apply(this,arguments)}function y(){return y=(0,s.Z)((0,a.Z)().mark((function e(r,t){var n,s,l,c,i,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=(0,p.Qc)(r)){e.next=3;break}throw new o.Z("invalid-url","Invalid scene service url");case 3:if(c=(0,u.Z)((0,u.Z)({},t),{},{sceneServerUrl:l.url.path,layerId:null!==(n=l.sublayer)&&void 0!==n?n:void 0}),null===(s=c.sceneLayerItem)||void 0===s){e.next=8;break}e.next=11;break;case 8:return e.next=10,b(c);case 10:c.sceneLayerItem=e.sent;case 11:if(null!=c.sceneLayerItem){e.next=13;break}return e.abrupt("return",Z(c.sceneServerUrl.replace("/SceneServer","/FeatureServer"),c));case 13:return e.next=15,I(c);case 15:if(null!==(i=e.sent)&&void 0!==i&&i.url){e.next=18;break}throw new o.Z("related-service-not-found","Could not find feature service through portal item relationship");case 18:return c.featureServiceItem=i,e.next=21,Z(i.url,c);case 21:return f=e.sent,e.abrupt("return",(f.portalItem=i,f));case 23:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(r);case 2:if(t=e.sent.serviceItemId){e.next=5;break}return e.abrupt("return",null);case 5:return n=new v.default({id:t,apiKey:r.apiKey}),e.next=8,w(r);case 8:return null!=(u=e.sent)&&(n.portal=new f.Z({url:u})),e.prev=10,e.abrupt("return",n.load({signal:r.signal}));case 14:return e.prev=14,e.t0=e.catch(10),e.abrupt("return",((0,i.r9)(e.t0),null));case 17:case"end":return e.stop()}}),e,null,[[10,14]])})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.rootDocument){e.next=2;break}return e.abrupt("return",r.rootDocument);case 2:return t={query:(0,u.Z)((0,u.Z)({f:"json"},r.customParameters),{},{token:r.apiKey}),responseType:"json",signal:r.signal},e.prev=3,e.next=6,(0,c.Z)(r.sceneServerUrl,t);case 6:n=e.sent,r.rootDocument=n.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),r.rootDocument={};case 13:return e.abrupt("return",r.rootDocument);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}function w(e){return k.apply(this,arguments)}function k(){return(k=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=null===l.id||void 0===l.id?void 0:l.id.findServerInfo(r.sceneServerUrl))||void 0===t||!t.owningSystemUrl){e.next=3;break}return e.abrupt("return",t.owningSystemUrl);case 3:return n=r.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info",e.prev=4,e.next=7,(0,c.Z)(n,{query:{f:"json"},responseType:"json",signal:r.signal});case 7:if(!(u=e.sent.data.owningSystemUrl)){e.next=10;break}return e.abrupt("return",u);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),(0,i.r9)(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[4,12]])})))).apply(this,arguments)}function Z(e,r){return S.apply(this,arguments)}function S(){return S=(0,s.Z)((0,a.Z)().mark((function e(r,t){var s,l,i,f,v,d,y,b,h,m,w,k,Z,S,I,g,T,L;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f=(0,p.Qc)(r)){e.next=3;break}throw new o.Z("invalid-feature-service-url","Invalid feature service url");case 3:if(v=f.url.path,null!=(d=t.layerId)){e.next=6;break}return e.abrupt("return",{serverUrl:v});case 6:if(y=x(t),!t.featureServiceItem){e.next=13;break}return e.next=10,t.featureServiceItem.fetchData("json");case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=null;case 14:return b=e.t0,h=null===(s=(null===b||void 0===b||null===(l=b.layers)||void 0===l?void 0:l[0])||(null===b||void 0===b||null===(i=b.tables)||void 0===i?void 0:i[0]))||void 0===s?void 0:s.customParameters,m=function(e){var r={query:(0,u.Z)({f:"json"},h),responseType:"json",authMode:e,signal:t.signal};return(0,c.Z)(v,r)},w=m("anonymous").catch((function(){return m("no-prompt")})),e.next=20,Promise.all([w,y]);case 20:if(k=e.sent,Z=(0,n.Z)(k,2),S=Z[0],I=Z[1],g=null===I||void 0===I?void 0:I.layers,T=S.data&&S.data.layers,Array.isArray(T)){e.next=28;break}throw new Error("expected layers array");case 28:if(!Array.isArray(g)){e.next=38;break}L=0;case 30:if(!(L<Math.min(g.length,T.length))){e.next=36;break}if(g[L].id!==d){e.next=33;break}return e.abrupt("return",{serverUrl:v,layerId:T[L].id});case 33:L++,e.next=30;break;case 36:e.next=40;break;case 38:if(!(null!=d&&d<T.length)){e.next=40;break}return e.abrupt("return",{serverUrl:v,layerId:T[d].id});case 40:throw new Error("could not find matching associated sublayer");case 41:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function I(e){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)((0,a.Z)().mark((function e(r){var t,n,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.sceneLayerItem,n=r.signal,t){e.next=3;break}return e.abrupt("return",null);case 3:return e.prev=3,e.next=6,t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:n});case 6:if(e.t0=e.sent.find((function(e){return"Feature Service"===e.type})),e.t0){e.next=9;break}e.t0=null;case 9:if(u=e.t0){e.next=12;break}return e.abrupt("return",null);case 12:return s=new v.default({portal:u.portal,id:u.id}),e.next=15,s.load();case 15:return e.abrupt("return",s);case 18:return e.prev=18,e.t1=e.catch(3),e.abrupt("return",((0,i.r9)(e.t1),null));case 21:case"end":return e.stop()}}),e,null,[[3,18]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=94650.32d21d99.chunk.js.map