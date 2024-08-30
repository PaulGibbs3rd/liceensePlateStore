"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[22175],{91340:function(e,t,n){n.d(t,{it:function(){return U},wK:function(){return P},aX:function(){return _},or:function(){return N},hR:function(){return L}});var r=n(74165),i=n(29439),a=n(15861),u=n(37762),s=n(42265),o=n(10064),f=n(32718),c=n(80885),p=n(29909),l=n(76335),h=n(92975),v=n(81753),y=n(1413),g=(n(59486),n(76200)),d=n(77981),Z=n(23084);function m(e,t,n,r){return x.apply(this,arguments)}function x(){return x=(0,a.Z)((0,r.Z)().mark((function e(t,n,i,a){var u,s,o,f,c,p,l,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=(0,Z.en)(t),s=n[0].spatialReference,o=(0,y.Z)((0,y.Z)({},a),{},{responseType:"json",query:(0,y.Z)((0,y.Z)({},u.query),{},{f:"json",sr:(0,h.B9)(s),target:JSON.stringify({geometryType:(0,d.Ji)(n[0]),geometries:n}),cutter:JSON.stringify(i)})}),e.next=5,(0,g.Z)(u.path+"/cut",o);case 5:return f=e.sent,c=f.data,p=c.cutIndexes,l=c.geometries,v=void 0===l?[]:l,e.abrupt("return",{cutIndexes:p,geometries:v.map((function(e){var t=(0,d.im)(e);return t.spatialReference=s,t}))});case 11:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var w=n(35995),b=n(35594);function M(e,t,n){return k.apply(this,arguments)}function k(){return k=(0,a.Z)((0,r.Z)().mark((function e(t,n,i){var a,u,s,o,f,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="string"==typeof t?(0,w.mN)(t):t,u=n[0].spatialReference,s=(0,d.Ji)(n[0]),o=(0,y.Z)((0,y.Z)({},i),{},{query:(0,y.Z)((0,y.Z)({},a.query),{},{f:"json",sr:(0,h.B9)(u),geometries:JSON.stringify((0,b.F)(n))})}),e.next=6,(0,g.Z)(a.path+"/simplify",o);case 6:return f=e.sent,c=f.data,e.abrupt("return",(0,b.o)(c.geometries,s,u));case 9:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}var R=function(){return f.Z.getLogger("esri.geometry.support.normalizeUtils")};function X(e){for(var t=[],n=0,r=0,i=0;i<e.length;i++){for(var a=e[i],u=null,s=0;s<a.length;s++)u=a[s],t.push(u),0===s?r=n=u[0]:(n=Math.min(n,u[0]),r=Math.max(r,u[0]));u&&t.push([(n+r)/2,0])}return t}function L(e,t){if(!(e instanceof p.Z||e instanceof c.Z)){var n="straightLineDensify: the input geometry is neither polyline nor polygon";throw R().error(n),new o.Z(n)}var r,i=(0,l.x3)(e),a=[],s=(0,u.Z)(i);try{for(s.s();!(r=s.n()).done;){var f=r.value,h=[];a.push(h),h.push([f[0][0],f[0][1]]);for(var v=0;v<f.length-1;v++){var y=f[v][0],g=f[v][1],d=f[v+1][0],Z=f[v+1][1],m=Math.sqrt((d-y)*(d-y)+(Z-g)*(Z-g)),x=(Z-g)/m,w=(d-y)/m,b=m/t;if(b>1){for(var M=1;M<=b-1;M++){var k=M*t,X=w*k+y,L=x*k+g;h.push([X,L])}var F=(m+Math.floor(b-1)*t)/2,H=w*F+y,S=x*F+g;h.push([H,S])}h.push([d,Z])}}}catch(_){s.e(_)}finally{s.f()}return function(e){return"polygon"===e.type}(e)?new c.Z({rings:a,spatialReference:e.spatialReference}):new p.Z({paths:a,spatialReference:e.spatialReference})}function F(e,t,n){if(t){var r=L(e,1e6);e=(0,v.Sx)(r,!0)}return n&&(e=(0,l.Sy)(e,n)),e}function H(e,t,n){if(Array.isArray(e)){var r=e[0];if(r>t){var i=(0,l.XZ)(r,t);e[0]=r+i*(-2*t)}else if(r<n){var a=(0,l.XZ)(r,n);e[0]=r+a*(-2*n)}}else{var u=e.x;if(u>t){var s=(0,l.XZ)(u,t);e=e.clone().offset(s*(-2*t),0)}else if(u<n){var o=(0,l.XZ)(u,n);e=e.clone().offset(o*(-2*n),0)}}return e}function S(e,t){for(var n=-1,r=function(r){for(var i=t.cutIndexes[r],a=t.geometries[r],s=(0,l.x3)(a),o=function(e){var t=s[e];t.some((function(n){if(n[0]<180)return!0;for(var r=0,i=0;i<t.length;i++){var u=t[i][0];r=u>r?u:r}r=Number(r.toFixed(9));for(var s=-360*(0,l.XZ)(r,180),o=0;o<t.length;o++){var f=a.getPoint(e,o);a.setPoint(e,o,f.clone().offset(s,0))}return!0}))},f=0;f<s.length;f++)o(f);if(i===n){if(function(e){return"polygon"===e[0].type}(e)){var c,p=(0,u.Z)((0,l.x3)(a));try{for(p.s();!(c=p.n()).done;){var h=c.value;e[i]=e[i].addRing(h)}}catch(d){p.e(d)}finally{p.f()}}else if(function(e){return"polyline"===e[0].type}(e)){var v,y=(0,u.Z)((0,l.x3)(a));try{for(y.s();!(v=y.n()).done;){var g=v.value;e[i]=e[i].addPath(g)}}catch(d){y.e(d)}finally{y.f()}}}else n=i,e[i]=a},i=0;i<t.cutIndexes.length;i++)r(i);return e}function _(e,t,n){return C.apply(this,arguments)}function C(){return C=(0,a.Z)((0,r.Z)().mark((function e(t,n,i){var a,o,f,y,g,d,Z,x,w,b,k,X,L,C,P,U,N,j,A,I,W,q,J,z,O,V,D,G,T,$,B,E,K,Q,Y,ee,te,ne,re,ie,ae,ue,se;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(t)){e.next=2;break}return e.abrupt("return",_([t],n));case 2:n&&"string"!=typeof n&&R().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead"),o="string"==typeof n?n:null!==(a=null===n||void 0===n?void 0:n.url)&&void 0!==a?a:s.Z.geometryServiceUrl,k=0,X=[],L=[],C=(0,u.Z)(t);try{for(C.s();!(P=C.n()).done;)null!=(U=P.value)?(f||(f=U.spatialReference,y=(0,h.C5)(f),g=f.isWebMercator,x=g?102100:4326,d=l.UZ[x].maxX,Z=l.UZ[x].minX,w=l.UZ[x].plus180Line,b=l.UZ[x].minus180Line),y?"mesh"===U.type?L.push(U):"point"===U.type?L.push(H(U.clone(),d,Z)):"multipoint"===U.type?((N=U.clone()).points=N.points.map((function(e){return H(e,d,Z)})),L.push(N)):"extent"===U.type?(j=U.clone()._normalize(!1,!1,y),L.push(j.rings?new c.Z(j):j)):U.extent?(A=U.extent,I=(0,l.XZ)(A.xmin,Z)*(2*d),W=0===I?U.clone():(0,l.Sy)(U.clone(),I),A.offset(I,0),q=A.xmin,J=A.xmax,q=Number(q.toFixed(9)),J=Number(J.toFixed(9)),A.intersects(w)&&J!==d?(k=J>k?J:k,W=F(W,g),X.push(W),L.push("cut")):A.intersects(b)&&q!==Z?(k=J*(2*d)>k?J*(2*d):k,W=F(W,g,360),X.push(W),L.push("cut")):L.push(W)):L.push(U.clone()):L.push(U)):L.push(U)}catch(r){C.e(r)}finally{C.f()}for(z=(0,l.XZ)(k,d),O=-90,V=z,D=new p.Z;z>0;)G=360*z-180,D.addPath([[G,O],[G,-1*O]]),O*=-1,z--;if(!(X.length>0&&V>0)){e.next=29;break}return e.t0=S,e.t1=X,e.next=16,m(o,X,D,i);case 16:for(e.t2=e.sent,T=(0,e.t0)(e.t1,e.t2),$=[],B=[],E=0;E<L.length;E++)"cut"!==(K=L[E])?B.push(K):(Q=T.shift(),null!=(Y=t[E])&&"polygon"===Y.type&&Y.rings&&Y.rings.length>1&&Q.rings.length>=Y.rings.length?($.push(Q),B.push("simplify")):B.push(g?(0,v.$)(Q):Q));if($.length){e.next=23;break}return e.abrupt("return",B);case 23:return e.next=25,M(o,$,i);case 25:for(ee=e.sent,te=[],ne=0;ne<B.length;ne++)"simplify"!==(re=B[ne])?te.push(re):te.push(g?(0,v.$)(ee.shift()):ee.shift());return e.abrupt("return",te);case 29:for(ie=[],ae=0;ae<L.length;ae++)"cut"!==(ue=L[ae])?ie.push(ue):(se=X.shift(),ie.push(!0===g?(0,v.$)(se):se));return e.abrupt("return",ie);case 32:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function P(e){var t;if(!e)return null;var n=e.extent;if(!n)return null;var r=e.spatialReference&&(0,h.C5)(e.spatialReference);if(!r)return n;var a,u=(0,i.Z)(r.valid,2),s=u[0],o=u[1],f=2*o,c=n.width,p=n.xmin,l=n.xmax;if(p=(t=[l,p])[0],l=t[1],"extent"===e.type||0===c||c<=o||c>f||p<s||l>o)return n;switch(e.type){case"polygon":if(!(e.rings.length>1))return n;a=X(e.rings);break;case"polyline":if(!(e.paths.length>1))return n;a=X(e.paths);break;case"multipoint":a=e.points}for(var v=n.clone(),y=0;y<a.length;y++){var g=a[y][0];g<0?(g+=o,l=Math.max(g,l)):(g-=o,p=Math.min(g,p))}return v.xmin=p,v.xmax=l,v.width<c?(v.xmin-=o,v.xmax-=o,v):n}function U(e,t,n){var r=(0,h.C5)(n);if(null==r)return e;var a=(0,i.Z)(r.valid,2),u=a[0],s=a[1],o=2*s,f=0,c=0;t>s?f=Math.ceil(Math.abs(t-s)/o):t<u&&(f=-Math.ceil(Math.abs(t-u)/o)),e>s?c=Math.ceil(Math.abs(e-s)/o):e<u&&(c=-Math.ceil(Math.abs(e-u)/o));var p=e+(f-c)*o,l=p-t;return l>s?p-=o:l<u&&(p+=o),p}function N(e,t){var n=(0,h.C5)(t);if(n){var r=(0,i.Z)(n.valid,2),a=r[0],u=r[1],s=u-a;if(e<a)for(;e<a;)e+=s;if(e>u)for(;e>u;)e-=s}return e}},76335:function(e,t,n){n.d(t,{Sy:function(){return f},UZ:function(){return s},XZ:function(){return o},x3:function(){return c}});var r=n(37762),i=n(29909),a=n(78952),u=n(77981),s={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new i.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator}),minus180Line:new i.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new i.Z({paths:[[[180,-180],[180,180]]],spatialReference:a.Z.WGS84}),minus180Line:new i.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:a.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function f(e,t){var n,i=c(e),a=(0,r.Z)(i);try{for(a.s();!(n=a.n()).done;){var u,s=n.value,o=(0,r.Z)(s);try{for(o.s();!(u=o.n()).done;){u.value[0]+=t}}catch(f){o.e(f)}finally{o.f()}}}catch(f){a.e(f)}finally{a.f()}return e}function c(e){return(0,u.oU)(e)?e.rings:e.paths}},23344:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(15671),i=n(43144),a=n(60136),u=n(29388),s=n(27366),o=(n(32718),n(93169),n(84936),n(10064),n(69912)),f=n(69229),c=n(21881),p=n(32645),l=n(45008),h=function(e){(0,a.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.apply(this,arguments)).type="map-image-3d",e}return(0,i.Z)(n,[{key:"initialize",value:function(){var e=this;this._updatingHandles.add((function(){return e.exportImageVersion}),(function(){return e._updatingHandles.addPromise(e.refreshDebounced())})),this._popupHighlightHelper=new p.VF({createFetchPopupFeaturesQueryGeometry:function(t,n){return(0,l.K)(t,n,e.view)},layerView:this,updatingHandles:this._updatingHandles})}},{key:"destroy",value:function(){var e;null===(e=this._popupHighlightHelper)||void 0===e||e.destroy()}},{key:"fetchPopupFeaturesAtLocation",value:function(e,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t)}},{key:"getFetchOptions",value:function(){return{timeExtent:this.timeExtent}}}]),n}((0,c.Z)(f.Z)),v=h=(0,s._)([(0,o.j)("esri.views.3d.layers.MapImageLayerView3D")],h)},38675:function(e,t,n){function r(e){return null!=e&&"object"==typeof e&&"declaredClass"in e&&"esri.WebMap"===e.declaredClass}n.d(t,{s:function(){return r}})}}]);
//# sourceMappingURL=22175.2557c3b1.chunk.js.map