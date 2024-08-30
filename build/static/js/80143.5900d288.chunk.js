"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[80143],{36231:function(t,i,e){e.d(i,{q:function(){return o}});var n,r,a,s=e(84397),u={exports:{}};n=u,r=function(){function t(e,n,r,a,s){for(;a>r;){if(a-r>600){var u=a-r+1,o=n-r+1,l=Math.log(u),h=.5*Math.exp(2*l/3),c=.5*Math.sqrt(l*h*(u-h)/u)*(o-u/2<0?-1:1);t(e,n,Math.max(r,Math.floor(n-o*h/u+c)),Math.min(a,Math.floor(n+(u-o)*h/u+c)),s)}var d=e[n],f=r,p=a;for(i(e,r,n),s(e[a],d)>0&&i(e,r,a);f<p;){for(i(e,f,p),f++,p--;s(e[f],d)<0;)f++;for(;s(e[p],d)>0;)p--}0===s(e[r],d)?i(e,r,p):i(e,++p,a),p<=n&&(r=p+1),n<=p&&(a=p-1)}}function i(t,i,e){var n=t[i];t[i]=t[e],t[e]=n}function e(t,i){return t<i?-1:t>i?1:0}return function(i,n,r,a,s){t(i,n,r||0,a||i.length-1,s||e)}},void 0!==(a=r())&&(n.exports=a);var o=(0,s.g)(u.exports)},13491:function(t,i,e){e.d(i,{Q:function(){return c}});var n=e(60136),r=e(29388),a=e(37762),s=e(15671),u=e(43144),o=e(63780),l=(e(93169),e(27546)),h=e(36231),c=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;(0,s.Z)(this,t),this._compareMinX=g,this._compareMinY=m,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,i||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}return(0,u.Z)(t,[{key:"destroy",value:function(){this.clear(),k.prune(),Y.prune(),M.prune(),E.prune()}},{key:"all",value:function(t){d(this._data,t)}},{key:"search",value:function(t,i){var e=this._data,n=this._toBBox;if(I(t,e))for(k.clear();e;){for(var r=0,a=e.children.length;r<a;r++){var s=e.children[r],u=e.leaf?n(s):s;I(t,u)&&(e.leaf?i(s):C(t,u)?d(s,i):k.push(s))}e=k.pop()}}},{key:"collides",value:function(t){var i=this._data,e=this._toBBox;if(!I(t,i))return!1;for(k.clear();i;){for(var n=0,r=i.children.length;n<r;n++){var a=i.children[n],s=i.leaf?e(a):a;if(I(t,s)){if(i.leaf||C(t,s))return!0;k.push(a)}}i=k.pop()}return!1}},{key:"load",value:function(t){if(!t.length)return this;if(t.length<this._minEntries){for(var i=0,e=t.length;i<e;i++)this.insert(t[i]);return this}var n=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===n.height)this._splitRoot(this._data,n);else{if(this._data.height<n.height){var r=this._data;this._data=n,n=r}this._insert(n,this._data.height-n.height-1,!0)}else this._data=n;return this}},{key:"insert",value:function(t){return t&&this._insert(t,this._data.height-1),this}},{key:"clear",value:function(){return this._data=new B([]),this}},{key:"remove",value:function(t){if(!t)return this;var i,e=this._data,n=null,r=0,a=!1,s=this._toBBox(t);for(M.clear(),E.clear();e||M.length>0;){var u;if(e||(e=M.pop(),n=M.data[M.length-1],r=null!==(u=E.pop())&&void 0!==u?u:0,a=!0),e.leaf&&-1!==(i=(0,o.cq)(e.children,t,e.children.length,e.indexHint)))return e.children.splice(i,1),M.push(e),this._condense(M),this;a||e.leaf||!C(e,s)?n?(r++,e=n.children[r],a=!1):e=null:(M.push(e),E.push(r),r=0,n=e,e=e.children[0])}return this}},{key:"toJSON",value:function(){return this._data}},{key:"fromJSON",value:function(t){return this._data=t,this}},{key:"_build",value:function(t,i,e,n){var r=e-i+1,a=this._maxEntries;if(r<=a){var s=new B(t.slice(i,e+1));return f(s,this._toBBox),s}n||(n=Math.ceil(Math.log(r)/Math.log(a)),a=Math.ceil(r/Math.pow(a,n-1)));var u=new N([]);u.height=n;var o=Math.ceil(r/a),l=o*Math.ceil(Math.sqrt(a));w(t,i,e,l,this._compareMinX);for(var h=i;h<=e;h+=l){var c=Math.min(h+l-1,e);w(t,h,c,o,this._compareMinY);for(var d=h;d<=c;d+=o){var p=Math.min(d+o-1,c);u.children.push(this._build(t,d,p,n-1))}}return f(u,this._toBBox),u}},{key:"_insert",value:function(t,i,e){var n=this._toBBox,r=e?t:n(t);M.clear();var a=function(t,i,e,n){for(;n.push(i),!0!==i.leaf&&n.length-1!==e;){for(var r=void 0,a=1/0,s=1/0,u=0,o=i.children.length;u<o;u++){var l=i.children[u],h=y(l),c=b(t,l)-h;c<s?(s=c,a=h<a?h:a,r=l):c===s&&h<a&&(a=h,r=l)}i=r||i.children[0]}return i}(r,this._data,i,M);for(a.children.push(t),v(a,r);i>=0&&M.data[i].children.length>this._maxEntries;)this._split(M,i),i--;!function(t,i,e){for(var n=e;n>=0;n--)v(i.data[n],t)}(r,M,i)}},{key:"_split",value:function(t,i){var e=t.data[i],n=e.children.length,r=this._minEntries;this._chooseSplitAxis(e,r,n);var a=this._chooseSplitIndex(e,r,n);if(a){var s=e.children.splice(a,e.children.length-a),u=e.leaf?new B(s):new N(s);u.height=e.height,f(e,this._toBBox),f(u,this._toBBox),i?t.data[i-1].children.push(u):this._splitRoot(e,u)}}},{key:"_splitRoot",value:function(t,i){this._data=new N([t,i]),this._data.height=t.height+1,f(this._data,this._toBBox)}},{key:"_chooseSplitIndex",value:function(t,i,e){var n,r,a;n=r=1/0;for(var s=i;s<=e-i;s++){var u=p(t,0,s,this._toBBox),o=p(t,s,e,this._toBBox),l=x(u,o),h=y(u)+y(o);l<n?(n=l,a=s,r=h<r?h:r):l===n&&h<r&&(r=h,a=s)}return a}},{key:"_chooseSplitAxis",value:function(t,i,e){var n=t.leaf?this._compareMinX:g,r=t.leaf?this._compareMinY:m;this._allDistMargin(t,i,e,n)<this._allDistMargin(t,i,e,r)&&t.children.sort(n)}},{key:"_allDistMargin",value:function(t,i,e,n){t.children.sort(n);for(var r=this._toBBox,a=p(t,0,i,r),s=p(t,e-i,e,r),u=_(a)+_(s),o=i;o<e-i;o++){var l=t.children[o];v(a,t.leaf?r(l):l),u+=_(a)}for(var h=e-i-1;h>=i;h--){var c=t.children[h];v(s,t.leaf?r(c):c),u+=_(s)}return u}},{key:"_condense",value:function(t){for(var i=t.length-1;i>=0;i--){var e=t.data[i];if(0===e.children.length)if(i>0){var n=t.data[i-1],r=n.children;r.splice((0,o.cq)(r,e,r.length,n.indexHint),1)}else this.clear();else f(e,this._toBBox)}}},{key:"_initFormat",value:function(t){var i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}]),t}();function d(t,i){var e=t;for(Y.clear();e;){var n;if(!0===e.leaf){var r,s=(0,a.Z)(e.children);try{for(s.s();!(r=s.n()).done;){i(r.value)}}catch(u){s.e(u)}finally{s.f()}}else Y.pushArray(e.children);e=null!==(n=Y.pop())&&void 0!==n?n:null}}function f(t,i){p(t,0,t.children.length,i,t)}function p(t,i,e,n,r){r||(r=new B([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var a,s=i;s<e;s++)a=t.children[s],v(r,t.leaf?n(a):a);return r}function v(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function g(t,i){return t.minX-i.minX}function m(t,i){return t.minY-i.minY}function y(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function _(t){return t.maxX-t.minX+(t.maxY-t.minY)}function b(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function x(t,i){var e=Math.max(t.minX,i.minX),n=Math.max(t.minY,i.minY),r=Math.min(t.maxX,i.maxX),a=Math.min(t.maxY,i.maxY);return Math.max(0,r-e)*Math.max(0,a-n)}function C(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function I(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function w(t,i,e,n,r){for(var a=[i,e];a.length;){var s=a.pop(),u=a.pop();if(!(s-u<=n)){var o=u+Math.ceil((s-u)/n/2)*n;(0,h.q)(t,o,u,s,r),a.push(u,o,o,s)}}}var k=new l.Z,Y=new l.Z,M=new l.Z,E=new l.Z({deallocator:void 0}),V=function(t){(0,n.Z)(e,t);var i=(0,r.Z)(e);function e(){var t;return(0,s.Z)(this,e),(t=i.apply(this,arguments)).height=1,t.indexHint=new o.SO,t}return(0,u.Z)(e)}((0,u.Z)((function t(){(0,s.Z)(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}))),B=function(t){(0,n.Z)(e,t);var i=(0,r.Z)(e);function e(t){var n;return(0,s.Z)(this,e),(n=i.call(this)).children=t,n.leaf=!0,n}return(0,u.Z)(e)}(V),N=function(t){(0,n.Z)(e,t);var i=(0,r.Z)(e);function e(t){var n;return(0,s.Z)(this,e),(n=i.call(this)).children=t,n.leaf=!1,n}return(0,u.Z)(e)}(V)},85403:function(t,i,e){e.d(i,{Y:function(){return a}});var n=e(37762);function r(t,i){return t?i?4:3:i?3:2}function a(t,i,e,a){if(null===i||void 0===i||!i.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);var o,l=t.coords,h=[],c=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],d=i.lengths,f=i.coords,p=r(e,a),v=0,g=(0,n.Z)(d);try{for(g.s();!(o=g.n()).done;){var m=o.value,y=s(c,f,v,m,e,a);y&&h.push(y),v+=m*p}}catch(x){g.e(x)}finally{g.f()}if(h.sort((function(t,i){var n=t[2]-i[2];return 0===n&&e&&(n=t[4]-i[4]),n})),h.length){var _=6*h[0][2];l[0]=h[0][0]/_,l[1]=h[0][1]/_,e&&(_=6*h[0][4],l[2]=0!==_?h[0][3]/_:0),(l[0]<c[0]||l[0]>c[1]||l[1]<c[2]||l[1]>c[3]||e&&(l[2]<c[4]||l[2]>c[5]))&&(l.length=0)}if(!l.length){var b=i.lengths[0]?u(f,0,d[0],e,a):null;if(!b)return null;l[0]=b[0],l[1]=b[1],e&&b.length>2&&(l[2]=b[2])}return t}function s(t,i,e,n,a,s){for(var u=r(a,s),o=e,l=e+u,h=0,c=0,d=0,f=0,p=0,v=0,g=n-1;v<g;v++,o+=u,l+=u){var m=i[o],y=i[o+1],_=i[o+2],b=i[l],x=i[l+1],C=i[l+2],I=m*x-b*y;f+=I,h+=(m+b)*I,c+=(y+x)*I,a&&(d+=(_+C)*(I=m*C-b*_),p+=I),m<t[0]&&(t[0]=m),m>t[1]&&(t[1]=m),y<t[2]&&(t[2]=y),y>t[3]&&(t[3]=y),a&&(_<t[4]&&(t[4]=_),_>t[5]&&(t[5]=_))}if(f>0&&(f*=-1),p>0&&(p*=-1),!f)return null;var w=[h,c,.5*f];return a&&(w[3]=d,w[4]=.5*p),w}function u(t,i,e,n,a){for(var s=r(n,a),u=i,d=i+s,f=0,p=0,v=0,g=0,m=0,y=e-1;m<y;m++,u+=s,d+=s){var _=t[u],b=t[u+1],x=t[u+2],C=t[d],I=t[d+1],w=t[d+2],k=n?l(_,b,x,C,I,w):o(_,b,C,I);if(k)if(f+=k,n){var Y=c(_,b,x,C,I,w);p+=k*Y[0],v+=k*Y[1],g+=k*Y[2]}else{var M=h(_,b,C,I);p+=k*M[0],v+=k*M[1]}}return f>0?n?[p/f,v/f,g/f]:[p/f,v/f]:e>0?n?[t[i],t[i+1],t[i+2]]:[t[i],t[i+1]]:null}function o(t,i,e,n){var r=e-t,a=n-i;return Math.sqrt(r*r+a*a)}function l(t,i,e,n,r,a){var s=n-t,u=r-i,o=a-e;return Math.sqrt(s*s+u*u+o*o)}function h(t,i,e,n){return[t+.5*(e-t),i+.5*(n-i)]}function c(t,i,e,n,r,a){return[t+.5*(n-t),i+.5*(r-i),e+.5*(a-e)]}},77835:function(t,i,e){e.d(i,{n:function(){return s}});var n=e(85403),r=e(3182),a=e(80457),s={getObjectId:function(t){return t.objectId},getAttributes:function(t){return t.attributes},getAttribute:function(t,i){return t.attributes[i]},cloneWithGeometry:function(t,i){return new r.u_(i,t.attributes,null,t.objectId)},getGeometry:function(t){return t.geometry},getCentroid:function(t,i){return null==t.centroid&&(t.centroid=(0,n.Y)(new a.Z,t.geometry,i.hasZ,i.hasM)),t.centroid}}},79510:function(t,i,e){e.d(i,{D:function(){return G}});var n=e(1413),r=e(74165),a=e(15861),s=e(15671),u=e(43144),o=e(60136),l=e(29388),h=e(27366),c=e(52639),d=e(7138),f=e(80987),p=e(42537),v=e(92026),g=e(66978),m=e(94172),y=e(49861),_=(e(93169),e(32718),e(84936),e(69912)),b=e(48732),x=e(46634),C=e(30651),I=e(37818),w=e(34610),k=e(21149),Y=e(26279),M=e(61310),E=e(8186),V=e(57848),B=e(24202),N=e(46568),X=e(59453),Z=e(96387),S=e(68401),O=e(78485),G=function(t){(0,o.Z)(e,t);var i=(0,l.Z)(e);function e(t){var n;return(0,s.Z)(this,e),(n=i.call(this,t)).type="graphics-3d",n.graphicsCore=null,n.drapeSourceType=Y.Lw.Features,n.scaleVisibilityEnabled=!1,n.frustumVisibilityEnabled=!1,n._suspendResumeExtent=null,n._updatingHandles=new x.R,n}return(0,u.Z)(e,[{key:"initialize",value:function(){var t=this,i=this.layer,e="effectiveScaleRange"in i?i:null,n=this.scaleVisibilityEnabled&&null!=e,r=new E.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:O.j.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:function(i,e){return new V._({graphicsCoreOwner:t,graphicsCore:i,queryGraphicUIDsInExtent:e,elevationProvider:t.view.elevationProvider})},scaleVisibility:n?function(i,n){return new X.c({graphicsCoreOwner:t,layer:e,queryGraphicUIDsInExtent:n,graphicsCore:i,basemapTerrain:t.owner.view.basemapTerrain})}:null,objectStates:function(t){return new N.d(t)}}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new B.L({graphicsCoreOwner:this})),"fullOpacity"in this.owner){var a=this.owner;this._updatingHandles.add((function(){return a.fullOpacity}),(function(){return t.graphicsCore.opacityChange()}))}if("elevationInfo"in i){var s=i;this._updatingHandles.add((function(){return s.elevationInfo}),(function(i,e){(0,b.Hg)(i,e)&&t._updatingHandles.addPromise(t.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}},{key:"_initializeAsync",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var i=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.graphicsCore.initializePromise;case 3:t.next=10;break;case 5:if(t.prev=5,t.t0=t.catch(0),!(0,g.D_)(t.t0)){t.next=9;break}return t.abrupt("return");case 9:throw t.t0;case 10:this.destroyed||(this.addHandles((0,m.watch)((function(){return i.view.clippingArea}),(function(){return i._updateClippingExtent()}),m.sync)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics());case 11:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(){return t.apply(this,arguments)}}()},{key:"destroy",value:function(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,v.SC)(this.frustumVisibility)),this._set("graphicsCore",(0,v.SC)(this.graphicsCore))}},{key:"layer",get:function(){return this.owner.layer}},{key:"view",get:function(){return this.owner.view}},{key:"scaleVisibility",get:function(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.scaleVisibility}},{key:"elevationAlignment",get:function(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.elevationAlignment}},{key:"scaleVisibilitySuspended",get:function(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}},{key:"frustumVisibilitySuspended",get:function(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}},{key:"suspended",get:function(){var t;return null!==(t=this.owner.suspended)&&void 0!==t&&t}},{key:"updating",get:function(){var t;return!!(null!==(t=this.graphicsCore)&&void 0!==t&&t.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}},{key:"graphics3DGraphics",get:function(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.graphics3DGraphics}},{key:"graphics3DGraphicsByObjectID",get:function(){var t;return null===(t=this.graphicsCore)||void 0===t?void 0:t.graphics3DGraphicsByObjectID}},{key:"loadedGraphics",get:function(){return this.owner.loadedGraphics}},{key:"fullOpacity",get:function(){var t;return null!==(t=this.owner.fullOpacity)&&void 0!==t?t:1}},{key:"slicePlaneEnabled",get:function(){return this.owner.slicePlaneEnabled}},{key:"updatePolicy",get:function(){return this.owner.updatePolicy}},{key:"notifyGraphicGeometryChanged",value:function(t){this.graphicsCore.notifyGraphicGeometryChanged(t)}},{key:"notifyGraphicVisibilityChanged",value:function(t){this.graphicsCore.notifyGraphicVisibilityChanged(t)}},{key:"getRenderingInfo",value:function(t,i,e){var n=(0,w.Kb)(t,{renderer:i,arcade:e});if(null!==n&&void 0!==n&&n.color){var r=n.color;r[0]=r[0]/255,r[1]=r[1]/255,r[2]=r[2]/255}return n}},{key:"getRenderingInfoAsync",value:function(t,i,e,r){return(0,w.xn)(t,(0,n.Z)({renderer:i,arcade:e},r))}},{key:"getHit",value:function(t){if(this.owner.loadedGraphics){var i=this.owner.loadedGraphics.find((function(i){return i.uid===t}));if(i){var e=this.layer instanceof C.Z?this.layer:null,n=(0,I.mW)(i,e);return{type:"graphic",graphic:n,layer:n.layer}}}return null}},{key:"whenGraphicBounds",value:function(t,i){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(t,i):Promise.reject()}},{key:"computeAttachmentOrigin",value:function(t,i){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(t,i):null}},{key:"getSymbolLayerSize",value:function(t,i){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(t,i):null}},{key:"maskOccludee",value:function(t){var i,e=null===(i=this.graphicsCore)||void 0===i?void 0:i.objectStates;if(!e)return(0,p.kB)();var n=e.acquireSet(S.V_.MaskOccludee,null),r=n.set,a=n.handle;return e.setUid(r,t.uid),a}},{key:"highlight",value:function(t){var i,e=null===(i=this.graphicsCore)||void 0===i?void 0:i.objectStates;if(!e)return(0,p.kB)();if(t instanceof k.Z)return A;if("number"==typeof t)return this.highlight([t]);if(t instanceof c.Z)return this.highlight([t]);if(t instanceof f.Z&&(t=t.toArray()),Array.isArray(t)&&t.length>0){if(t[0]instanceof c.Z){var n=t.map((function(t){return t.uid})),r=e.acquireSet(S.V_.Highlight,null),a=r.set,s=r.handle;return e.setUids(a,n),s}if("number"==typeof t[0]){var u=t,o=e.acquireSet(S.V_.Highlight,null),l=o.set,h=o.handle;return e.setObjectIds(l,u),h}}return A}},{key:"_setupSuspendResumeExtent",value:function(){var t=this,i=this.scaleVisibility,e=this.frustumVisibility;if(null!=i||null!=e){var n=function(n){var r=n.computedExtent,a=n.extentPadding;t._suspendResumeExtent=(0,Z.Go)(r,t._suspendResumeExtent,M.PY,a),null!=i&&i.setExtent(t._suspendResumeExtent),null!=e&&e.setExtent(t._suspendResumeExtent)};this.addHandles((0,m.watch)((function(){var i,e;return{computedExtent:null===(i=t.graphicsCore)||void 0===i?void 0:i.computedExtent,extentPadding:null===(e=t.graphicsCore)||void 0===e?void 0:e.extentPadding}}),(function(t){return n(t)}),m.syncAndInitial))}}},{key:"_updateClippingExtent",value:function(){var t=this.view.clippingArea;this.graphicsCore.setClippingExtent(t,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}}]),e}(d.default);(0,h._)([(0,y.Cb)()],G.prototype,"type",void 0),(0,h._)([(0,y.Cb)({constructOnly:!0})],G.prototype,"owner",void 0),(0,h._)([(0,y.Cb)()],G.prototype,"layer",null),(0,h._)([(0,y.Cb)()],G.prototype,"view",null),(0,h._)([(0,y.Cb)({constructOnly:!0})],G.prototype,"graphicsCore",void 0),(0,h._)([(0,y.Cb)()],G.prototype,"scaleVisibility",null),(0,h._)([(0,y.Cb)({constructOnly:!0})],G.prototype,"frustumVisibility",void 0),(0,h._)([(0,y.Cb)()],G.prototype,"elevationAlignment",null),(0,h._)([(0,y.Cb)()],G.prototype,"scaleVisibilitySuspended",null),(0,h._)([(0,y.Cb)({readOnly:!0})],G.prototype,"frustumVisibilitySuspended",null),(0,h._)([(0,y.Cb)()],G.prototype,"suspended",null),(0,h._)([(0,y.Cb)({readOnly:!0})],G.prototype,"updating",null),(0,h._)([(0,y.Cb)()],G.prototype,"loadedGraphics",null),(0,h._)([(0,y.Cb)()],G.prototype,"fullOpacity",null),(0,h._)([(0,y.Cb)()],G.prototype,"slicePlaneEnabled",null),(0,h._)([(0,y.Cb)()],G.prototype,"drapeSourceType",void 0),(0,h._)([(0,y.Cb)()],G.prototype,"updatePolicy",null),(0,h._)([(0,y.Cb)({constructOnly:!0})],G.prototype,"scaleVisibilityEnabled",void 0),(0,h._)([(0,y.Cb)({constructOnly:!0})],G.prototype,"frustumVisibilityEnabled",void 0),(0,h._)([(0,y.Cb)()],G.prototype,"initializePromise",void 0),G=(0,h._)([(0,_.j)("esri.views.3d.layers.graphics.GraphicsProcessor")],G);var A=(0,p.kB)()}}]);
//# sourceMappingURL=80143.5900d288.chunk.js.map