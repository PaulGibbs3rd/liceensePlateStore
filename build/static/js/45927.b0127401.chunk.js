"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[45927],{63231:function(e,t,n){function r(e){return null!=u(e)||null!=o(e)}function a(e){return s.test(e)}function i(e){var t;return null!==(t=u(e))&&void 0!==t?t:o(e)}function o(e){var t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;var n=!0;if(l&&/\d+\W*$/.test(t)){var r=t.match(/[a-zA-Z]{2,}/);if(r){for(var a=!1,i=0;!a&&i<=r.length;)a=!c.test(r[i]),i++;n=!a}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function u(e){var t,n,r,a,i=s.exec(e);if(null===i||void 0===i||!i.groups)return null;var o=i.groups,u=+o.year,c=+o.month-1,l=+o.day,p=+(null!==(t=o.hours)&&void 0!==t?t:"0"),f=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),d=+(null!==(r=o.seconds)&&void 0!==r?r:"0");if(p>23)return null;if(f>59)return null;if(d>59)return null;var v,y=null!==(a=o.ms)&&void 0!==a?a:"0",m=y?+y.padEnd(3,"0").substring(0,3):0;if(o.isUTC||!o.offsetSign)v=Date.UTC(u,c,l,p,f,d,m);else{var g=+o.offsetHours,h=+o.offsetMinutes;v=6e4*("+"===o.offsetSign?-1:1)*(60*g+h)+Date.UTC(u,c,l,p,f,d,m)}return Number.isNaN(v)?null:v}n.d(t,{mu:function(){return a},of:function(){return r},sG:function(){return i}});var s=(0,n(70804).Z)(/^(?:(\x2D?\d{4,})\x2D(\d{2})\x2D(\d{2}))(?:T(\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?)?(?:(Z)|(?:(\+|\x2D)(\d{2}):(\d{2})))?$/,{year:1,month:2,day:3,hours:4,minutes:5,seconds:6,ms:7,isUTC:8,offsetSign:9,offsetHours:10,offsetMinutes:11});var c=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,l=!Number.isNaN(new Date("technology 10").getTime())},47615:function(e,t,n){n.d(t,{O3:function(){return N},lG:function(){return G},my:function(){return R},q9:function(){return m}});var r=n(29439),a=n(74165),i=n(37762),o=n(63231),u=n(10064),s=n(92975),c=n(3182),l=n(80457),p=n(37270),f=(0,a.Z)().mark(g),d=(0,a.Z)().mark(h),v=(0,a.Z)().mark(b),y={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function m(e){return y[e]}function g(e){var t,n,r;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:a.t0=e.type,a.next="Feature"===a.t0?3:"FeatureCollection"===a.t0?6:25;break;case 3:return a.next=5,e;case 5:return a.abrupt("break",25);case 6:t=(0,i.Z)(e.features),a.prev=7,t.s();case 9:if((n=t.n()).done){a.next=17;break}if(r=n.value,a.t1=r,!a.t1){a.next=15;break}return a.next=15,r;case 15:a.next=9;break;case 17:a.next=22;break;case 19:a.prev=19,a.t2=a.catch(7),t.e(a.t2);case 22:return a.prev=22,t.f(),a.finish(22);case 25:case"end":return a.stop()}}),f,null,[[7,19,22,25]])}function h(e){var t,n,r,o,u,s,c,l,p;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=57;break}a.t0=e.type,a.next="Point"===a.t0?4:"LineString"===a.t0||"MultiPoint"===a.t0?7:"MultiLineString"===a.t0||"Polygon"===a.t0?9:"MultiPolygon"===a.t0?26:57;break;case 4:return a.next=6,e.coordinates;case 6:return a.abrupt("break",57);case 7:return a.delegateYield(e.coordinates,"t1",8);case 8:return a.abrupt("break",57);case 9:t=(0,i.Z)(e.coordinates),a.prev=10,t.s();case 12:if((n=t.n()).done){a.next=17;break}return r=n.value,a.delegateYield(r,"t2",15);case 15:a.next=12;break;case 17:a.next=22;break;case 19:a.prev=19,a.t3=a.catch(10),t.e(a.t3);case 22:return a.prev=22,t.f(),a.finish(22);case 25:return a.abrupt("break",57);case 26:o=(0,i.Z)(e.coordinates),a.prev=27,o.s();case 29:if((u=o.n()).done){a.next=49;break}s=u.value,c=(0,i.Z)(s),a.prev=32,c.s();case 34:if((l=c.n()).done){a.next=39;break}return p=l.value,a.delegateYield(p,"t4",37);case 37:a.next=34;break;case 39:a.next=44;break;case 41:a.prev=41,a.t5=a.catch(32),c.e(a.t5);case 44:return a.prev=44,c.f(),a.finish(44);case 47:a.next=29;break;case 49:a.next=54;break;case 51:a.prev=51,a.t6=a.catch(27),o.e(a.t6);case 54:return a.prev=54,o.f(),a.finish(54);case 57:case"end":return a.stop()}}),d,null,[[10,19,22,25],[27,51,54,57],[32,41,44,47]])}function b(e){var t,n,r,o,u,s,p,f,d,y,g,h,b,w=arguments;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=w.length>1&&void 0!==w[1]?w[1]:{},n=t.geometryType,r=t.objectIdField,o=(0,i.Z)(e),a.prev=3,o.s();case 5:if((u=o.n()).done){a.next=18;break}if(p=u.value,f=p.geometry,d=p.properties,y=p.id,!f||m(f.type)===n){a.next=10;break}return a.abrupt("continue",16);case 10:return g=d||{},h=void 0,r&&(h=g[r],null==y||h||(g[r]=h=y)),b=new c.u_(f?k(new l.Z,f,t):null,g,null,null!==(s=h)&&void 0!==s?s:void 0),a.next=16,b;case 16:a.next=5;break;case 18:a.next=23;break;case 20:a.prev=20,a.t0=a.catch(3),o.e(a.t0);case 23:return a.prev=23,o.f(),a.finish(23);case 26:case"end":return a.stop()}}),v,null,[[3,20,23,26]])}function w(e){var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){if(t.value.length>2)return!0}}catch(r){n.e(r)}finally{n.f()}return!1}function x(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],a=e[(n+1)%e.length];t+=r[0]*a[1]-a[0]*r[1]}return t<=0}function Z(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function k(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){F(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,a=(0,i.Z)(t.coordinates);try{for(a.s();!(r=a.n()).done;){var o=r.value;T(e,o[0],n);for(var u=1;u<o.length;u++)S(e,o[u],n)}}catch(s){a.e(s)}finally{a.f()}return e}(e,t,n);case"Point":return function(e,t,n){return C(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;T(e,r[0],n);for(var a=1;a<r.length;a++)S(e,r[a],n);return e}(e,t,n)}}function T(e,t,n){var r=Z(t);!function(e){return!x(e)}(r)?F(e,r,n):P(e,r,n)}function S(e,t,n){var r=Z(t);!function(e){return x(e)}(r)?F(e,r,n):P(e,r,n)}function F(e,t,n){var r,a=(0,i.Z)(t);try{for(a.s();!(r=a.n()).done;){C(e,r.value,n)}}catch(o){a.e(o)}finally{a.f()}e.lengths.push(t.length)}function P(e,t,n){for(var r=t.length-1;r>=0;r--)C(e,t[r],n);e.lengths.push(t.length)}function C(e,t,n){var a=(0,r.Z)(t,3),i=a[0],o=a[1],u=a[2];e.coords.push(i,o),n.hasZ&&e.coords.push(u||0)}function E(e){switch(typeof e){case"string":return(0,o.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new u.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new u.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var n=e.crs;if(n){var r="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,a=(0,s.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!r||!a.test(r))throw new u.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}}function R(e){var t,n,r,a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=[],s=new Set,c=new Set,l=!1,f=null,d=!1,v=o.geometryType,y=void 0===v?null:v,b=!1,x=(0,i.Z)(g(e));try{var Z=function(){var e=a.value,t=e.geometry,n=e.properties,i=e.id;if((!t||(y||(y=m(t.type)),m(t.type)===y))&&(l||(l=w(h(t))),d||(d=null!=i)&&(r=typeof i,n&&(f=Object.keys(n).filter((function(e){return n[e]===i})))),n&&f&&d&&null!=i&&(f.length>1?f=f.filter((function(e){return n[e]===i})):1===f.length&&(f=n[f[0]]===i?f:[])),!b&&n)){var o=!0;for(var v in n)if(!s.has(v)){var g=n[v];if(null!=g){var x=E(g);if("unknown"!==x){c.delete(v),s.add(v);var Z=(0,p.q6)(v);Z&&u.push({name:Z,alias:v,type:x})}else c.add(v)}else o=!1,c.add(v)}b=o}};for(x.s();!(a=x.n()).done;)Z()}catch(P){x.e(P)}finally{x.f()}var k=null!==(t=(0,p.q6)(1===(null===(n=f)||void 0===n?void 0:n.length)&&f[0]||null))&&void 0!==t?t:void 0;if(k){var T,S=(0,i.Z)(u);try{for(S.s();!(T=S.n()).done;){var F=T.value;if(F.name===k&&(0,p.H7)(F)){F.type="esriFieldTypeOID";break}}}catch(P){S.e(P)}finally{S.f()}}return{fields:u,geometryType:y,hasZ:l,objectIdFieldName:k,objectIdFieldType:r,unknownFields:Array.from(c)}}function G(e,t){return Array.from(b(g(e),t))}},45927:function(e,t,n){n.d(t,{Bm:function(){return re},FU:function(){return M},be:function(){return q},bx:function(){return oe},eB:function(){return J},fU:function(){return pe},ft:function(){return H},u2:function(){return F}});var r=n(74165),a=n(1413),i=n(29439),o=n(93433),u=n(70804),s=n(37762),c=n(15861),l=(n(59486),n(76200)),p=n(10064),f=n(83704),d=n(35995),v=n(79803),y=n(92975),m=n(27823),g=n(47615),h=n(39098),b=n(25899),w=n(83040),x=n(37270),Z=n(53866),k=n(78952),T="xlink:href",S="2.0.0",F="__esri_wfs_id__",P="wfs-layer:getWFSLayerTypeInfo-error",C="wfs-layer:empty-service",E="wfs-layer:feature-type-not-found",N="wfs-layer:malformed-json",R="wfs-layer:unknown-geometry-type",G="wfs-layer:unknown-field-type",A="wfs-layer:unsupported-spatial-reference",j="wfs-layer:unsupported-wfs-version";function M(e,t){return D.apply(this,arguments)}function D(){return(D=(0,c.Z)((0,r.Z)().mark((function e(t,n){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=U,e.next=3,(0,l.Z)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:S},null===n||void 0===n?void 0:n.customParameters),signal:null===n||void 0===n?void 0:n.signal});case 3:return e.t1=e.sent.data,i=(0,e.t0)(e.t1),e.abrupt("return",(V(t,i),i));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){var t=se(e);(function(e){var t,n=null===(t=e.firstElementChild)||void 0===t?void 0:t.getAttribute("version");if(n&&n!==S)throw new p.Z(j,"Unsupported WFS version ".concat(n,". Supported version: ").concat(S))})(t),le(t);var n=t.firstElementChild,r=(0,f.Fs)(function(e){return(0,h.H)(e,{FeatureTypeList:{FeatureType:function(e){var t,n={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return(0,h.h)(e,{Name:function(e){var t=ce(e.textContent),r=t.name,a=t.prefix;n.typeName="".concat(a,":").concat(r),n.name=r,n.namespacePrefix=a,n.namespaceUri=e.lookupNamespaceURI(a)},Abstract:function(e){n.description=e.textContent},Title:function(e){n.title=e.textContent},WGS84BoundingBox:function(e){n.extent=Z.Z.fromJSON(function(e){var t,n,r,a,o,u=(0,s.Z)(e.children);try{for(u.s();!(o=u.n()).done;){var c=o.value;switch(c.localName){case"LowerCorner":var l=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),p=(0,i.Z)(l,2);t=p[0],n=p[1];break;case"UpperCorner":var f=c.textContent.split(" ").map((function(e){return Number.parseFloat(e)})),d=(0,i.Z)(f,2);r=d[0],a=d[1]}}}catch(v){u.e(v)}finally{u.f()}return{xmin:t,ymin:n,xmax:r,ymax:a,spatialReference:y.YU}}(e))},DefaultCRS:function(e){var t=Y(e);t&&(n.defaultSpatialReference=t,r.add(t))},OtherCRS:function(e){var t=Y(e);t&&r.add(t)}}),n.title||(n.title=n.name),r.add(4326),(t=n.supportedSpatialReferences).push.apply(t,(0,o.Z)(r)),n}}})}(n));return{operations:L(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}var O=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function I(e){var t,n=(0,s.Z)(O);try{var r=function(){var n=t.value,r=e.findIndex((function(e){return e.toLowerCase()===n}));if(r>=0)return{v:e[r]}};for(n.s();!(t=n.n()).done;){var a=r();if("object"===typeof a)return a.v}}catch(i){n.e(i)}finally{n.f()}return null}function L(e){var t,n=!1,r={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],i=[];if((0,h.h)(e,{OperationsMetadata:{Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;t&&a.push(t)}}}},Operation:function(e){switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:function(e){r.GetCapabilities.url=e.getAttribute(T)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:function(e){r.DescribeFeatureType.url=e.getAttribute(T)}}}};case"GetFeature":return{DCP:{HTTP:{Get:function(e){r.GetFeature.url=e.getAttribute(T)}}},Parameter:function(e){if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:function(e){var t=e.textContent;t&&i.push(t)}}}}}}},Constraint:function(e){switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:function(e){n="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:function(e){r.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),r.GetFeature.outputFormat=null!==(t=I(i))&&void 0!==t?t:I(a),!n)throw new p.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if(null==r.GetFeature.outputFormat)throw new p.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return r}function V(e,t){(0,d.$U)(e)&&((0,d.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,d.hO)(t.operations.DescribeFeatureType.url)),(0,d.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,d.hO)(t.operations.GetFeature.url)))}function Y(e){var t,n,r,a,i=parseInt(null!==(t=null===(n=e.textContent)||void 0===n||null===(r=n.match((0,u.Z)(/(\d+$)/i,{wkid:1})))||void 0===r||null===(a=r.groups)||void 0===a?void 0:a.wkid)&&void 0!==t?t:"",10);if(!Number.isNaN(i))return i}function H(e,t,n){return(0,f.sE)(e,(function(e){return n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t}))}function q(e,t,n){return z.apply(this,arguments)}function z(){return z=(0,c.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,u,s,c,l,p,f,d,v,y,m,g,h=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=h.length>3&&void 0!==h[3]?h[3]:{},e.next=3,W(t,n,a,o);case 3:return u=e.sent,s=u.featureType,c=u.extent,l=pe(t.operations.GetFeature.url,s,o.spatialReference),p=l.spatialReference,e.next=10,X(t,s,p,o);case 10:return f=e.sent,d=f.fields,v=f.geometryType,y=f.swapXY,m=f.objectIdField,g=f.geometryField,e.abrupt("return",{url:t.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:d,geometryField:g,geometryType:v,objectIdField:m,spatialReference:null!==(i=o.spatialReference)&&void 0!==i?i:new k.Z({wkid:s.defaultSpatialReference}),extent:c,swapXY:y,wfsCapabilities:t,customParameters:o.customParameters});case 17:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function W(e,t,n){return $.apply(this,arguments)}function $(){return $=(0,c.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,u,s,c,l,f=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=f.length>3&&void 0!==f[3]?f[3]:{},o=t.readFeatureTypes(),u=n?H(o,n,a):o.next().value,s=i.spatialReference,c=void 0===s?new k.Z({wkid:null===u||void 0===u?void 0:u.defaultSpatialReference}):s,null!=u){e.next=4;break}throw n?new p.Z(E,"The type '".concat(n,"' could not be found in the service")):new p.Z(C,"The service is empty");case 4:if(!(l=u.extent)||(0,y.fS)(l.spatialReference,c)){e.next=15;break}return e.prev=6,e.next=9,(0,v.initializeProjection)(l.spatialReference,c,void 0,i);case 9:l=(0,v.project)(l,c),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(6),new p.Z(A,"Projection not supported");case 15:return e.abrupt("return",{extent:l,spatialReference:c,featureType:u});case 16:case"end":return e.stop()}}),e,null,[[6,12]])}))),$.apply(this,arguments)}function X(e,t,n){return _.apply(this,arguments)}function _(){return _=(0,c.Z)((0,r.Z)().mark((function e(t,n,o){var u,s,c,l,f,d,v,y,m,g,h,b,w,x,Z,k,T,S=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d=S.length>3&&void 0!==S[3]?S[3]:{},v=n.typeName,e.next=4,Promise.allSettled([K(t.operations.DescribeFeatureType.url,v,d),B(t,v,o,d)]);case 4:if(y=e.sent,m=(0,i.Z)(y,2),g=m[0],h=m[1],b=function(e){return new p.Z(P,"An error occurred while getting info about the feature type '".concat(v,"'"),{error:e})},"rejected"!==g.status){e.next=11;break}throw b(g.reason);case 11:if("rejected"!==h.status){e.next=13;break}throw b(h.reason);case 13:if(w=null!==(u=g.value)&&void 0!==u?u:{},x=w.fields,Z=w.errors,k=(null===(s=g.value)||void 0===s?void 0:s.geometryType)||(null===(c=h.value)||void 0===c?void 0:c.geometryType),T=null!==(l=null===(f=h.value)||void 0===f?void 0:f.swapXY)&&void 0!==l&&l,null!=k){e.next=16;break}throw new p.Z(R,"The geometry type could not be determined for type '".concat(v),{typeName:v,geometryType:k,fields:x,errors:Z});case 16:return e.abrupt("return",(0,a.Z)((0,a.Z)({},J(null!==x&&void 0!==x?x:[])),{},{geometryType:k,swapXY:T}));case 17:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function J(e){var t,n=e.find((function(e){return"geometry"===e.type})),r=e.find((function(e){return"oid"===e.type}));return e=e.filter((function(e){return"geometry"!==e.type})),r||(r=new w.Z({name:F,type:"oid",alias:F}),e.unshift(r)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:r.name,fields:e}}function B(e,t,n){return Q.apply(this,arguments)}function Q(){return Q=(0,c.Z)((0,r.Z)().mark((function e(t,n,o){var u,s,c,p,f,d,v,y,h,b,w,x,Z,k,T=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=T.length>3&&void 0!==T[3]?T[3]:{},p=!1,e.next=4,Promise.all([re(t.operations.GetFeature.url,n,o,t.operations.GetFeature.outputFormat,(0,a.Z)((0,a.Z)({},s),{},{count:1})),(0,l.Z)(t.operations.GetFeature.url,{responseType:"text",query:ie(n,o,void 0,(0,a.Z)((0,a.Z)({},s),{},{count:1})),signal:null===s||void 0===s?void 0:s.signal})]);case 4:if(f=e.sent,d=(0,i.Z)(f,2),v=d[0],y=d[1],!(h="FeatureCollection"===v.type&&(null===(u=v.features[0])||void 0===u?void 0:u.geometry))){e.next=22;break}e.t0=(c=m.M.fromJSON((0,g.q9)(h.type)),h.type),e.next="Point"===e.t0?13:"LineString"===e.t0||"MultiPoint"===e.t0?15:"MultiLineString"===e.t0||"Polygon"===e.t0?17:"MultiPolygon"===e.t0?19:20;break;case 13:return b=h.coordinates,e.abrupt("break",20);case 15:return b=h.coordinates[0],e.abrupt("break",20);case 17:return b=h.coordinates[0][0],e.abrupt("break",20);case 19:b=h.coordinates[0][0][0];case 20:(w=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(y.data))&&(x=b[0].toFixed(3),Z=b[1].toFixed(3),k=parseFloat(w[1]).toFixed(3),x===parseFloat(w[2]).toFixed(3)&&Z===k&&(p=!0));case 22:return e.abrupt("return",{geometryType:c,swapXY:p});case 23:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function K(e,t,n){return ee.apply(this,arguments)}function ee(){return(ee=(0,c.Z)((0,r.Z)().mark((function e(t,n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=te,e.t1=n,e.next=4,(0,l.Z)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:S,TYPENAME:n,TYPENAMES:n},null===i||void 0===i?void 0:i.customParameters),signal:null===i||void 0===i?void 0:i.signal});case 4:return e.t2=e.sent.data,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t){var n=ce(e).name,r=se(t);le(r);var a=(0,f.sE)((0,h.H)(r.firstElementChild,{element:function(e){return e}}),(function(e){return e.getAttribute("name")===n}));if(null!=a){var i=a.getAttribute("type"),o=i?(0,f.sE)((0,h.H)(r.firstElementChild,{complexType:function(e){return e}}),(function(e){return e.getAttribute("name")===ce(i).name})):(0,f.sE)((0,h.H)(a,{complexType:function(e){return e}}),(function(){return!0}));if(o)return function(e){var t,n,r,a,i=[],o=[],u=(0,h.H)(e,{complexContent:{extension:{sequence:{element:function(e){return e}}}}}),c=(0,s.Z)(u);try{for(c.s();!(a=c.n()).done;){var l=a.value,f=l.getAttribute("name");if(f){var d=void 0,v=void 0;if(l.hasAttribute("type")?d=ce(l.getAttribute("type")).name:(0,h.h)(l,{simpleType:{restriction:function(e){return d=ce(e.getAttribute("base")).name,{maxLength:function(e){v=+e.getAttribute("value")}}}}}),d){var y="true"===l.getAttribute("nillable"),m=!1;switch(d.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":o.push(new w.Z({name:f,alias:f,type:"integer",nullable:y,length:(0,x.ZR)("integer")}));break;case"float":case"double":case"decimal":o.push(new w.Z({name:f,alias:f,type:"double",nullable:y,length:(0,x.ZR)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":o.push(new w.Z({name:f,alias:f,type:"string",nullable:y,length:null!==(t=v)&&void 0!==t?t:(0,x.ZR)("string")}));break;case"datetime":case"date":o.push(new w.Z({name:f,alias:f,type:"date",nullable:y,length:null!==(n=v)&&void 0!==n?n:(0,x.ZR)("date")}));break;case"pointpropertytype":r="point",m=!0;break;case"multipointpropertytype":r="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,i.push(new p.Z(R,"geometry type '".concat(d,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:i.push(new p.Z(G,"Unknown field type '".concat(d,"'"),{type:(new XMLSerializer).serializeToString(e)}))}m&&o.push(new w.Z({name:f,alias:f,type:"geometry",nullable:y}))}}}}catch(k){c.e(k)}finally{c.f()}for(var g=0,b=o;g<b.length;g++){var Z=b[g];if("integer"===Z.type&&!Z.nullable&&ne.has(Z.name.toLowerCase())){Z.type="oid";break}}return{geometryType:r,fields:o,errors:i}}(o)}throw new p.Z(E,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(r)})}var ne=new Set(["objectid","fid"]);function re(e,t,n,r,a){return ae.apply(this,arguments)}function ae(){return(ae=(0,c.Z)((0,r.Z)().mark((function e(t,n,a,i,o){var u,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)(t,{responseType:"text",query:ie(n,a,i,o),signal:null===o||void 0===o?void 0:o.signal});case 2:return u=e.sent,s=(s=u.data).replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3'),e.prev=5,e.abrupt("return",JSON.parse(s));case 9:throw e.prev=9,e.t0=e.catch(5),new p.Z(N,"Error while parsing the\xa0response",{response:s,error:e.t0});case 12:case"end":return e.stop()}}),e,null,[[5,9]])})))).apply(this,arguments)}function ie(e,t,n,r){var i="number"==typeof t?t:t.wkid;return(0,a.Z)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:S,TYPENAMES:e,OUTPUTFORMAT:n,SRSNAME:"EPSG:"+i,STARTINDEX:null===r||void 0===r?void 0:r.startIndex,COUNT:null===r||void 0===r?void 0:r.count},null===r||void 0===r?void 0:r.customParameters)}function oe(e,t,n){return ue.apply(this,arguments)}function ue(){return(ue=(0,c.Z)((0,r.Z)().mark((function e(t,n,i){var o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Z)(t,{responseType:"text",query:(0,a.Z)({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:S,TYPENAMES:n,RESULTTYPE:"hits"},null===i||void 0===i?void 0:i.customParameters),signal:null===i||void 0===i?void 0:i.signal});case 2:if(o=e.sent,null===(s=(0,u.Z)(/numberMatched=["'](\d+)["']/gi,{numberMatched:1}).exec(o.data))||void 0===s||!s.groups){e.next=6;break}return e.abrupt("return",+s.groups.numberMatched);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function ce(e){var t=e.split(":"),n=(0,i.Z)(t,2),r=n[0],a=n[1];return{prefix:a?r:"",name:null!==a&&void 0!==a?a:r}}function le(e){var t="",n="";if((0,h.h)(e.firstElementChild,{Exception:function(e){return t=e.getAttribute("exceptionCode"),{ExceptionText:function(e){n=e.textContent}}}}),t)throw new p.Z("wfs-layer:".concat(t),n)}function pe(e,t,n){var r={wkid:t.defaultSpatialReference},a=null!=(null===n||void 0===n?void 0:n.wkid)?{wkid:n.wkid}:r;return{spatialReference:a,getFeatureSpatialReference:(0,b.B5)(e)||a.wkid&&t.supportedSpatialReferences.includes(a.wkid)?{wkid:a.wkid}:{wkid:t.defaultSpatialReference}}}},39098:function(e,t,n){n.d(t,{H:function(){return u},h:function(){return o}});var r=n(74165),a=n(37762),i=(0,r.Z)().mark(u);function o(e,t){if(e&&t){var n,r=(0,a.Z)(e.children);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(i.localName in t){var u=t[i.localName];if("function"==typeof u){var s=u(i);s&&o(i,s)}else o(i,u)}}}catch(c){r.e(c)}finally{r.f()}}}function u(e,t){var n,o,s,c;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=(0,a.Z)(e.children),r.prev=1,n.s();case 3:if((o=n.n()).done){r.next=15;break}if(!((s=o.value).localName in t)){r.next=13;break}if("function"!=typeof(c=t[s.localName])){r.next=12;break}return r.next=10,c(s);case 10:r.next=13;break;case 12:return r.delegateYield(u(s,c),"t0",13);case 13:r.next=3;break;case 15:r.next=20;break;case 17:r.prev=17,r.t1=r.catch(1),n.e(r.t1);case 20:return r.prev=20,n.f(),r.finish(20);case 23:case"end":return r.stop()}}),i,null,[[1,17,20,23]])}}}]);
//# sourceMappingURL=45927.b0127401.chunk.js.map