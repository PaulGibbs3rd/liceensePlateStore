"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[44011],{28278:function(e,t,r){r.d(t,{Es:function(){return w},I_:function(){return h},W7:function(){return g},qM:function(){return m}});var n=r(1413),o=r(37762),a=r(10064),i=r(84652),u=r(32718),c=r(2821),l=r(4760),s=function(){return u.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader")};function f(e,t,r){for(var n="",o=0;o<r;){var i=e[t+o];if(i<128)n+=String.fromCharCode(i),o++;else if(i>=192&&i<224){if(o+1>=r)throw new a.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var u=(31&i)<<6|63&e[t+o+1];n+=String.fromCharCode(u),o+=2}else if(i>=224&&i<240){if(o+2>=r)throw new a.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(15&i)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(c),o+=3}else{if(!(i>=240&&i<248))throw new a.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new a.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var l=(7&i)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(l>=65536){var s=55296+(l-65536>>10),f=56320+(1023&l);n+=String.fromCharCode(s,f)}else n+=String.fromCharCode(l);o+=4}}return n}function d(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var a=t[o],i=a.valueType||a.type,u=U[i];r.fields[a.property]=u(e,n),n+=I[i].BYTES_PER_ELEMENT}return r.byteCount=n,r}function v(e,t,r){var n,o,i=[],u=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(i.push(f(r,u,n-1)),0!==r[u+n-1])throw new a.Z("string-array-error","Invalid string array: missing null termination.")}else i.push(null);u+=n}return i}function h(e,t){return new(0,I[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function p(e,t,r){for(var n=null!=t.header?d(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},u=n.byteCount,c=0;c<t.ordering.length;c++){var l,s,f=t.ordering[c],v=(0,i.d9)(t[f]);if(v.count=null!==(l=n.fields.count)&&void 0!==l?l:0,"String"===v.valueType){if(v.byteOffset=u,v.byteCount=n.fields[f+"ByteCount"],"UTF-8"!==v.encoding)throw new a.Z("unsupported-encoding","Unsupported String encoding.",{encoding:v.encoding});if(v.timeEncoding&&"ECMA_ISO8601"!==v.timeEncoding)throw new a.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:v.timeEncoding})}else{if(!Z(v.valueType))throw new a.Z("unsupported-value-type","Unsupported binary valueType",{valueType:v.valueType});var h=S(v.valueType);u+=u%h!=0?h-u%h:0,v.byteOffset=u,v.byteCount=h*v.valuesPerElement*v.count}u+=null!==(s=v.byteCount)&&void 0!==s?s:0,o.entries[f]=v}return o.byteCount=u-o.byteOffset,o}function y(e,t,r){if(t!==e&&s().error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new a.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function g(e,t){var r,a=d(e,t&&t.header),i=a.byteCount,u={isDraco:!1,header:a,byteOffset:a.byteCount,byteCount:0,vertexAttributes:{}},c=a.fields,l=null!=c.vertexCount?c.vertexCount:c.count,s=(0,o.Z)(t.ordering);try{for(s.s();!(r=s.n()).done;){var f=r.value;if(t.vertexAttributes[f]){var v=(0,n.Z)((0,n.Z)({},t.vertexAttributes[f]),{},{byteOffset:i,count:l}),h=b[f]||"_"+f;u.vertexAttributes[h]=v,i+=S(v.valueType)*v.valuesPerElement*l}}}catch(x){s.e(x)}finally{s.f()}var p=c.faceCount;if(t.faces&&p){u.faces={};var g,w=(0,o.Z)(t.ordering);try{for(w.s();!(g=w.n()).done;){var m=g.value;if(t.faces[m]){var I=(0,n.Z)((0,n.Z)({},t.faces[m]),{},{byteOffset:i,count:p});u.faces[m]=I,i+=S(I.valueType)*I.valuesPerElement*p}}}catch(x){w.e(x)}finally{w.f()}}var U=c.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&U){u.featureAttributes={};var Z,T=(0,o.Z)(t.featureAttributeOrder);try{for(T.s();!(Z=T.n()).done;){var C=Z.value;if(t.featureAttributes[C]){var M=(0,n.Z)((0,n.Z)({},t.featureAttributes[C]),{},{byteOffset:i,count:U});u.featureAttributes[C]=M,i+=("UInt64"===M.valueType?8:S(M.valueType))*M.valuesPerElement*U}}}catch(x){T.e(x)}finally{T.f()}}return y(i,e.byteLength,"geometry"),u.byteCount=i-u.byteOffset,u}function w(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function(e){var t,r={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},n=(0,o.Z)(e);try{for(n.s();!(t=n.n()).done;){switch(t.value){case"position":break;case"normal":r.normal=!0;break;case"uv0":r.uv0=!0;break;case"color":r.color=!0;break;case"uv-region":r.uvRegion=!0;break;case"feature-index":r.featureIndex=!0}}}catch(a){n.e(a)}finally{n.f()}return r}(e.compressedAttributes.attributes):e?function(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function(e){var t,r={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1},n=(0,o.Z)(e.ordering);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(e.vertexAttributes[a])switch(a){case"position":break;case"normal":r.normal=!0;break;case"color":r.color=!0;break;case"uv0":r.uv0=!0;break;case"region":r.uvRegion=!0}}}catch(i){n.e(i)}finally{n.f()}return e.featureAttributes&&e.featureAttributeOrder&&(r.featureIndex=!0),r}(t)}var b={position:l.T.POSITION,normal:l.T.NORMAL,color:l.T.COLOR,uv0:l.T.UV0,region:l.T.UVREGION};function m(e,t,r){if("lepcc-rgb"===e.encoding)return(0,c.IT)(t);if("lepcc-intensity"===e.encoding)return(0,c.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new a.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(s().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(s().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=p(t,e,r);y(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var i=n.entries.attributeByteCounts,u=h(t,i),l=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return o.timeEncoding?function(e,t,r){return v(e,t,r).map((function(e){var t=e?Date.parse(e):null;return null==t||Number.isNaN(t)?null:t}))}(i.count,u,l):v(i.count,u,l)}return h(t,o)}throw new a.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var I={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},U={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function Z(e){return I.hasOwnProperty(e)}function S(e){return Z(e)?I[e].BYTES_PER_ELEMENT:0}},47570:function(e,t,r){r.d(t,{c:function(){return u}});var n=r(7025),o=r(12400),a=r(83448),i=r(37998);function u(e,t,r,a,u){var l="east-north-up"===r?(0,o.d9)(e):c(e,t,a),s=(0,n.Ue)();return(0,i.B)(a,l,s,u),s}function c(e,t,r){var n=(0,o.Ue)(),i=e[3],u=Math.pow(2,4*Math.ceil(Math.log(i)*Math.LOG2E/4)+1);if(r.isGeographic){var c=u/(0,a.Iu)(r).radius*180/Math.PI,l=Math.round(e[1]/c),s=Math.max(-90,Math.min(90,l*c)),f=c/Math.cos((Math.abs(s)-c/2)/180*Math.PI),d=Math.round(e[0]/f)*f;n[0]=d,n[1]=s}else{var v=Math.round(e[0]/u),h=Math.round(e[1]/u);n[0]=v*u,n[1]=h*u}var p=e[2]+t,y=Math.round(p/u);return n[2]=y*u,n}},44011:function(e,t,r){r.d(t,{Cx:function(){return he},HV:function(){return ve},Jf:function(){return te},Jx:function(){return J},OJ:function(){return ne},T2:function(){return Q},WD:function(){return ye},X5:function(){return A},Yb:function(){return F},a7:function(){return le},bf:function(){return _},c$:function(){return pe},cr:function(){return P},e8:function(){return z},ei:function(){return ee},gn:function(){return ae},hv:function(){return O},ix:function(){return de},ns:function(){return N},p8:function(){return oe},pD:function(){return L},tS:function(){return k},tp:function(){return $},tq:function(){return re},uC:function(){return se},xe:function(){return Y},yS:function(){return ue},zW:function(){return ie}});var n=r(1413),o=r(74165),a=r(43144),i=r(15671),u=r(15861),c=r(37762),l=(r(59486),r(76200)),s=r(63780),f=r(10064),d=r(93169),v=r(18722),h=r(29134),p=r(7025),y=r(32035),g=r(12400),w=r(79803),b=r(29691),m=r(5986),I=r(65156),U=r(23470),Z=r(21149),S=r(28278),T=r(47570),C=r(97689),M=r(49420),x=r(89414),E=r(78952);function R(e){return e?parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10):void 0}function A(e){if((0,d.Z)("disable-feature:i3s-draco")||!e)return!1;var t,r=(0,c.Z)(e);try{for(r.s();!(t=r.n()).done;){var n,o=t.value,a=(0,c.Z)(o.geometryBuffers);try{for(a.s();!(n=a.n()).done;){var i;if("draco"===(null===(i=n.value.compressedAttributes)||void 0===i?void 0:i.encoding))return!0}}catch(u){a.e(u)}finally{a.f()}}}catch(u){r.e(u)}finally{r.f()}return!1}function k(e,t,r,n){r.traverse(t,(function(t){var r=t.serviceMbsInIndexSR;return(null!=r&&P(e,r))!==L.OUTSIDE&&(n(t),!0)}))}function O(e,t,r){for(var n=0,o=0,a=0;a<t.length&&n<e.length;a++)e[n]===t[a]&&(r(a)&&(e[o]=e[n],o++),n++);e.length=o}function F(e,t,r){for(var n=0,o=0;n<r.length;)(0,s.$A)(e,r[n])>=0===t&&(r[o]=r[n],o++),n++;r.length=o}var L,D,B=(0,I.Ue)();function N(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return B[0]=(e[0]-t.position[0])/t.rotationScale[0],B[1]=(e[1]-t.position[1])/t.rotationScale[4],B[2]=(e[2]-t.position[0])/t.rotationScale[0],B[3]=(e[3]-t.position[1])/t.rotationScale[4],B}function P(e,t){var r=t[0],n=t[1],o=t[3],a=e[0]-r,i=r-e[2],u=e[1]-n,c=n-e[3],l=Math.max(a,i,0),s=Math.max(u,c,0),f=l*l+s*s;return f>o*o?L.OUTSIDE:f>0?L.INTERSECTS_CENTER_OUTSIDE:-Math.max(a,i,u,c)>o?L.INSIDE:L.INTERSECTS_CENTER_INSIDE}function z(e,t,r){var n,o=[],a=null===r||void 0===r?void 0:r.missingFields,i=null===r||void 0===r?void 0:r.originalFields,u=(0,c.Z)(e);try{for(u.s();!(n=u.n()).done;){var l,s=n.value,f=s.toLowerCase(),d=!1,v=(0,c.Z)(t);try{for(v.s();!(l=v.n()).done;){var h=l.value;if(f===h.name.toLowerCase()){o.push(h.name),d=!0,i&&i.push(s);break}}}catch(p){v.e(p)}finally{v.f()}!d&&a&&a.push(s)}}catch(p){u.e(p)}finally{u.f()}return o}function _(e,t,r,n,o,a){return W.apply(this,arguments)}function W(){return(W=(0,u.Z)((0,o.Z)().mark((function e(t,r,n,a,i,u){var c,l,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r.length){e.next=2;break}return e.abrupt("return",[]);case 2:if(c=t.attributeStorageInfo,null==t.associatedLayer){e.next=14;break}return e.prev=4,e.next=7,q(t.associatedLayer,r,n,a,u);case 7:return e.abrupt("return",e.sent);case 10:if(e.prev=10,e.t0=e.catch(4),!t.associatedLayer.loaded){e.next=14;break}throw e.t0;case 14:if(!c){e.next=22;break}if(null!=(l=V(r,n,i))){e.next=18;break}throw new f.Z("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");case 18:return s=t.parsedUrl.path,e.next=21,Promise.all(l.map((function(e){return H(s,c,e.node,e.indices,a,t.apiKey,t.customParameters,u).then((function(t){for(var r=0;r<e.graphics.length;r++){var n=e.graphics[r],o=t[r];if(n.attributes)for(var a in n.attributes)a in o||(o[a]=n.attributes[a]);n.attributes=o}return e.graphics}))})));case 21:return e.abrupt("return",e.sent.flat());case 22:throw new f.Z("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available");case 23:case"end":return e.stop()}}),e,null,[[4,10]])})))).apply(this,arguments)}function V(e,t,r){var n,o=new Map,a=[],i=r(),u=(0,c.Z)(e);try{for(u.s();!(n=u.n()).done;)for(var l=n.value,s=l.attributes[t],f=0;f<i.length;f++){var d=i[f],v=d.featureIds.indexOf(s);if(v>=0){var h=o.get(d.node);h||(h={node:d.node,indices:[],graphics:[]},a.push(h),o.set(d.node,h)),h.indices.push(v),h.graphics.push(l);for(var p=f;p>0;p--)i[p]=i[p-1];i[0]=d;break}}}catch(y){u.e(y)}finally{u.f()}return a}function q(e,t,r,n,o){return j.apply(this,arguments)}function j(){return(j=(0,u.Z)((0,o.Z)().mark((function e(t,r,n,a,i){var u,c,l,s,f,d,v,h,p,y;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.sort((function(e,t){return e.attributes[n]-t.attributes[n]})),u=r.map((function(e){return e.attributes[n]})),c=[],l=z(a,t.fields,{originalFields:c}),e.next=6,G(t,u,l,i);case 6:for(s=e.sent,f=0;f<r.length;f++){if(d=r[f],v=s[f],h={},d.attributes)for(p in d.attributes)h[p]=d.attributes[p];for(y=0;y<c.length;y++)h[c[y]]=v[l[y]];d.attributes=h}return e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t,r,n){var o=e.capabilities.query.maxRecordCount;if(null!=o&&t.length>o){var a=(0,s.vr)(t,o);return Promise.all(a.map((function(t){return G(e,t,r,n)}))).then((function(e){return e.flat()}))}var i=new Z.Z({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(i,n).then((function(e){if(e&&e.features&&e.features.length===t.length)return e.features.map((function(e){return e.attributes}));throw new f.Z("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function H(e,t,r,n,o,a,i,u){return Y(e,t,r.resources.attributes,n,o,a,i,u)}function Y(e,t,r,n,o,a,i,u){return K.apply(this,arguments)}function K(){return(K=(0,u.Z)((0,o.Z)().mark((function e(t,r,a,i,u,s,f,d){var v,h,p,y,g,w,b,m,I,U,Z,T,C,M;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v=[],h=(0,c.Z)(r);try{for(h.s();!(p=h.n()).done;)(y=p.value)&&u.includes(y.name)&&(g="".concat(t,"/nodes/").concat(a,"/attributes/").concat(y.key,"/0"),v.push({url:g,storageInfo:y}))}catch(o){h.e(o)}finally{h.f()}return e.next=5,Promise.allSettled(v.map((function(e){return(0,l.Z)(e.url,{responseType:"array-buffer",query:(0,n.Z)((0,n.Z)({},f),{},{token:s}),signal:null===d||void 0===d?void 0:d.signal}).then((function(t){return(0,S.qM)(e.storageInfo,t.data)}))})));case 5:w=e.sent,b=[],m=(0,c.Z)(i);try{for(m.s();!(I=m.n()).done;){for(U=I.value,Z={},T=0;T<w.length;T++)"fulfilled"===(C=w[T]).status&&(M=C.value,Z[v[T].storageInfo.name]=J(M,U));b.push(Z)}}catch(o){m.e(o)}finally{m.f()}return e.abrupt("return",b);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(D=L||(L={}))[D.OUTSIDE=0]="OUTSIDE",D[D.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",D[D.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",D[D.INSIDE=3]="INSIDE";var X=-Math.pow(2,31);function J(e,t){if(!e)return null;var r=e[t];return(0,v.z3)(e)?-32768===r?null:r:(0,v.Hx)(e)?r===X?null:r:r!=r?null:r}function $(e){var t=e.store,r=t.indexCRS||t.geographicCRS,n=void 0===r?t.indexWKT:void 0;if(n){if(!e.spatialReference)throw new f.Z("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new f.Z("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}var o=r?new E.Z(R(r)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function Q(e){var t=e.store,r=t.vertexCRS||t.projectedCRS,n=void 0===r?t.vertexWKT:void 0;if(n){if(!e.spatialReference)throw new f.Z("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new f.Z("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}var o=r?new E.Z(R(r)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function ee(e,t){return null==t?"@null":t===(0,b.rS)(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function te(e,t,r){if(!(0,w.canProjectWithoutEngine)(e,t))throw new f.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&!function(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}(e,t))throw new f.Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{})}function re(e,t,r){var n,o,a,i;if((null===(n=e.serviceUpdateTimeStamp)||void 0===n?void 0:n.lastUpdate)!==(null===(o=t.serviceUpdateTimeStamp)||void 0===o?void 0:o.lastUpdate)||!r.isEmpty||(null===(a=e.associatedLayer)||void 0===a?void 0:a.url)!==(null===(i=t.associatedLayer)||void 0===i?void 0:i.url))throw new f.Z("layerview:recycle-failed")}function ne(e,t,r){var n=$(e),o=Q(e);te(n,t,r),te(o,t,r)}function oe(e){var t;if(null==(null===(t=e.store)||void 0===t?void 0:t.defaultGeometrySchema)||!function(e){var t;return(null==e.geometryType||"triangles"===e.geometryType)&&(null==e.topology||"PerAttributeArray"===e.topology)&&null!=(null===(t=e.vertexAttributes)||void 0===t?void 0:t.position)}(e.store.defaultGeometrySchema))throw new f.Z("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function ae(e,t){ne(e,t.spatialReference,t.viewingMode)}function ie(e){var t;if(null==(null===(t=e.store)||void 0===t?void 0:t.defaultGeometrySchema)||!function(e){var t;return null!=e.geometryType&&"points"===e.geometryType&&(null==e.topology||"PerAttributeArray"===e.topology)&&(null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&null!=(null===(t=e.vertexAttributes)||void 0===t?void 0:t.position)}(e.store.defaultGeometrySchema))throw new f.Z("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function ue(e,t){te(e.spatialReference,t.spatialReference,t.viewingMode)}function ce(e){return"mesh-3d"===e.type}function le(e){if(null==e||!function(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;var t=e.getSymbols();if(0===t.length)return!0;var r,n=(0,c.Z)(t);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(!ce(o)||0===o.symbolLayers.length)return!0;var a,i=(0,c.Z)(o.symbolLayers.items);try{for(i.s();!(a=i.n()).done;){var u,l=a.value;if("fill"!==l.type||null==(null===(u=l.material)||void 0===u?void 0:u.color)||"replace"!==l.material.colorMixMode)return!0}}catch(s){i.e(s)}finally{i.f()}}}catch(s){n.e(s)}finally{n.f()}return!1}var se=(0,C.$s)({color:[0,0,0,0],opacity:0}),fe=(0,a.Z)((function e(){(0,i.Z)(this,e),this.edgeMaterial=null,this.material=null,this.castShadows=!0}));function de(e){var t,r=new fe,n=!1,o=!1,a=(0,c.Z)(e.symbolLayers.items);try{for(a.s();!(t=a.n()).done;){var i=t.value;if("fill"===i.type&&i.enabled){var u=i.material,l=i.edges;if(null!=u&&!n){var s=u.color,f=(0,M.F5)(u.colorMixMode);r.material=null!=s?{color:[s.r/255,s.g/255,s.b/255],alpha:s.a,colorMixMode:f}:{color:[1,1,1],alpha:1,colorMixMode:M.a9.Multiply},r.castShadows=i.castShadows,n=!0}null==l||o||(r.edgeMaterial=(0,C.C8)(l,{}),o=!0)}}}catch(d){a.e(d)}finally{a.f()}return r.material||(r.material={color:[1,1,1],alpha:1,colorMixMode:M.a9.Multiply}),r}function ve(e,t){return(0|e)+(0|t)|0}function he(e,t,r,n,o,a,i){if(!a||0===a.length||null==t||!e.serviceMbsInIndexSR)return null;var u=(0,T.c)(e.serviceMbsInIndexSR,o,"none",r,t);(0,h.U_)(Ze,u);var l=null,s=function(){if(!l)if(l=ge,(0,I.cS)(be),null!=e.serviceObbInIndexSR){e.serviceObbInIndexSR.transform(me,r,t,o,i),me.getCorners(l);var n,a=(0,c.Z)(l);try{for(a.s();!(n=a.n()).done;){var u=n.value;(0,y.h)(u,u,Ze),(0,I.Ho)(be,u)}}catch(w){a.e(w)}finally{a.f()}}else{var s=e.serviceMbsInIndexSR;if(!s)return;var f=s[3];(0,m.S)((0,U.g)(s),r,Ie,t),(0,y.h)(Ie,Ie,Ze),Ie[2]+=o;for(var d=0;d<8;++d){var v=1&d?f:-f,h=2&d?f:-f,p=4&d?f:-f,g=l[d];(0,y.c)(g,[Ie[0]+v,Ie[1]+h,Ie[2]+p]),(0,I.Ho)(be,g)}}},f=1/0,d=-1/0;if(a.forEach((function(e){return function(e){if("replace"===e.type){var r=e.geometry;if(null!==r&&void 0!==r&&r.hasZ){(0,I.cS)(we);var o=r.spatialReference||n,a=r.rings.reduce((function(e,r){return r.reduce((function(e,r){return(0,y.s)(Ie,r[0],r[1],r[2]),(0,m.S)(Ie,o,Ie,t),(0,y.h)(Ie,Ie,Ze),(0,I.Ho)(we,Ie),Math.min(Ie[2],e)}),e)}),1/0);s(),(0,I.kK)(be,we)&&(f=Math.min(f,a),d=Math.max(d,a))}}}(e)})),f===1/0)return null;for(var v=function(e,t,r){(0,y.h)(Ie,r,u),e[t]=Ie[0],e[t+1]=Ie[1],e[t+2]=Ie[2],t+=24,r[2]=f,(0,y.h)(Ie,r,u),e[t]=Ie[0],e[t+1]=Ie[1],e[t+2]=Ie[2],t+=24,r[2]=d,(0,y.h)(Ie,r,u),e[t]=Ie[0],e[t+1]=Ie[1],e[t+2]=Ie[2]},p=0;p<8;++p)v(Ue.data,3*p,l[p]);return(0,x.Qb)(Ue)}function pe(e){return e[3]>=0}function ye(e){null!=e&&(e[3]=-1)}var ge=[(0,g.Ue)(),(0,g.Ue)(),(0,g.Ue)(),(0,g.Ue)(),(0,g.Ue)(),(0,g.Ue)(),(0,g.Ue)(),(0,g.Ue)()],we=(0,I.Ue)(),be=(0,I.Ue)(),me=new x.Oo,Ie=(0,g.Ue)(),Ue={data:new Array(72),size:3,exclusive:!0,stride:3},Ze=(0,p.Ue)()},2821:function(e,t,r){r.d(t,{Gi:function(){return C},IT:function(){return B},ti:function(){return G}});var n=r(10064),o=!0,a=0,i=10,u=10,c=12,l=16;function s(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+a,i)),version:t.getUint16(r+u,o),checksum:t.getUint32(r+c,o)}}var f=0,d=4,v=8,h=16,p=24,y=32,g=40,w=48,b=56,m=64,I=72,U=80,Z=84,S=88;function T(e,t){return{sizeLo:e.getUint32(t+f,o),sizeHi:e.getUint32(t+d,o),minX:e.getFloat64(t+v,o),minY:e.getFloat64(t+h,o),minZ:e.getFloat64(t+p,o),maxX:e.getFloat64(t+y,o),maxY:e.getFloat64(t+g,o),maxZ:e.getFloat64(t+w,o),errorX:e.getFloat64(t+b,o),errorY:e.getFloat64(t+m,o),errorZ:e.getFloat64(t+I,o),count:e.getUint32(t+U,o),reserved:e.getUint32(t+Z,o)}}function C(e){var t=new DataView(e,0),r=0,o=s(e,t,r),a=o.identifier,i=o.version;if(r+=l,"LEPCC     "!==a)throw new n.Z("lepcc-decode-error","Bad identifier");if(i>1)throw new n.Z("lepcc-decode-error","Unknown version");var u=T(t,r);if(r+=S,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var c=new Float64Array(3*u.count),f=[],d=[],v=[],h=[];if(r=M(e,r,f),r=M(e,r,d),r=M(e,r,v),(r=M(e,r,h))!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad length");for(var p=0,y=0,g=0;g<f.length;g++){y+=f[g];for(var w=0,b=0;b<d[g];b++){w+=v[p];var m=h[p];c[3*p]=Math.min(u.maxX,u.minX+2*u.errorX*w),c[3*p+1]=Math.min(u.maxY,u.minY+2*u.errorY*y),c[3*p+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*m),p++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:c}}function M(e,t,r){var n=[];t=x(e,t,n);for(var o=[],a=0;a<n.length;a++){o.length=0,t=x(e,t,o);for(var i=0;i<o.length;i++)r.push(o[i]+n[a])}return t}function x(e,t,r){var a=new DataView(e,t),i=a.getUint8(0),u=31&i,c=!!(32&i),l=(192&i)>>6,s=0;if(0===l)s=a.getUint32(1,o),t+=5;else if(1===l)s=a.getUint16(1,o),t+=3;else{if(2!==l)throw new n.Z("lepcc-decode-error","Bad count type");s=a.getUint8(1),t+=2}if(c)throw new n.Z("lepcc-decode-error","LUT not implemented");for(var f=Math.ceil(s*u/8),d=new Uint8Array(e,t,f),v=0,h=0,p=0,y=-1>>>32-u,g=0;g<s;g++){for(;h<u;)v|=d[p]<<h,h+=8,p+=1;r[g]=v&y,v>>>=u,(h-=u)+u>32&&(v|=d[p-1]>>8-h)}return t+p}var E=0,R=4,A=8,k=12,O=14,F=15,L=16;function D(e,t){return{sizeLo:e.getUint32(t+E,o),sizeHi:e.getUint32(t+R,o),count:e.getUint32(t+A,o),colorMapCount:e.getUint16(t+k,o),lookupMethod:e.getUint8(t+O),compressionMethod:e.getUint8(t+F)}}function B(e){var t=new DataView(e,0),r=0,o=s(e,t,r),a=o.identifier,i=o.version;if(r+=l,"ClusterRGB"!==a)throw new n.Z("lepcc-decode-error","Bad identifier");if(i>1)throw new n.Z("lepcc-decode-error","Unknown version");var u=D(t,r);if(r+=L,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");if((2===u.lookupMethod||1===u.lookupMethod)&&0===u.compressionMethod){if(3*u.colorMapCount+u.count+r!==e.byteLength||u.colorMapCount>256)throw new n.Z("lepcc-decode-error","Bad count");for(var c=new Uint8Array(e,r,3*u.colorMapCount),f=new Uint8Array(e,r+3*u.colorMapCount,u.count),d=new Uint8Array(3*u.count),v=0;v<u.count;v++){var h=f[v];d[3*v]=c[3*h],d[3*v+1]=c[3*h+1],d[3*v+2]=c[3*h+2]}return d}if(0===u.lookupMethod&&0===u.compressionMethod){if(3*u.count+r!==e.byteLength||0!==u.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(u.lookupMethod<=2&&1===u.compressionMethod){if(r+3!==e.byteLength||1!==u.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");for(var p=t.getUint8(r),y=t.getUint8(r+1),g=t.getUint8(r+2),w=new Uint8Array(3*u.count),b=0;b<u.count;b++)w[3*b]=p,w[3*b+1]=y,w[3*b+2]=g;return w}throw new n.Z("lepcc-decode-error","Bad method "+u.lookupMethod+","+u.compressionMethod)}var N=0,P=4,z=8,_=12,W=14,V=15,q=16;function j(e,t){return{sizeLo:e.getUint32(t+N,o),sizeHi:e.getUint32(t+P,o),count:e.getUint32(t+z,o),scaleFactor:e.getUint16(t+_,o),bitsPerPoint:e.getUint8(t+W),reserved:e.getUint8(t+V)}}function G(e){var t=new DataView(e,0),r=0,o=s(e,t,r),a=o.identifier,i=o.version;if(r+=l,"Intensity "!==a)throw new n.Z("lepcc-decode-error","Bad identifier");if(i>1)throw new n.Z("lepcc-decode-error","Unknown version");var u=j(t,r);if(r+=q,u.sizeHi*Math.pow(2,32)+u.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var c=new Uint16Array(u.count);if(8===u.bitsPerPoint){if(u.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var f=new Uint8Array(e,r,u.count),d=0;d<u.count;d++)c[d]=f[d]*u.scaleFactor}else if(16===u.bitsPerPoint){if(2*u.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var v=new Uint16Array(e,r,u.count),h=0;h<u.count;h++)c[h]=v[h]*u.scaleFactor}else{var p=[];if(x(e,r,p)!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var y=0;y<u.count;y++)c[y]=p[y]*u.scaleFactor}return c}}}]);
//# sourceMappingURL=44011.b4339b34.chunk.js.map