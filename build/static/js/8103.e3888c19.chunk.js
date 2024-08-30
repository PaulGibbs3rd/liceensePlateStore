"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[8103],{82272:function(e,t,n){n.d(t,{BN:function(){return m},Yc:function(){return y},em:function(){return u},hZ:function(){return v},mx:function(){return f}});var a=n(74165),i=n(15861),l=n(43144),o=n(15671),r=n(42265),u="arial-unicode-ms",s="woff2",c=new Map,d=new Set,h=(0,l.Z)((function e(t,n){(0,o.Z)(this,e),this.fontFace=t,this.promise=n}));function f(e){return p.apply(this,arguments)}function p(){return p=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,l,o,u,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g(t),i=y(t),!(l=c.get(n))){e.next=3;break}return e.abrupt("return",l.promise);case 3:if(o=new FontFace(t.family,"url('".concat(r.Z.fontsUrl,"/woff2/").concat(i,".").concat(s,"') format('").concat(s,"')"),{style:t.style,weight:t.weight}),!(u=document.fonts).has(o)||"loading"!==o.status){e.next=6;break}return e.abrupt("return",o.loaded);case 6:return f=o.load().then((function(){return u.add(o),o})),e.abrupt("return",(c.set(n,new h(o,f)),d.add(o),f));case 8:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function v(e){return d.has(e)}function m(e){if(!e)return u;var t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function y(e){var t=w(e)+b(e);return m(e.family)+(t.length>0?t:"-regular")}function g(e){var t=w(e)+b(e);return(e.family||u)+(t.length>0?t:"-regular")}function w(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function b(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}},8103:function(e,t,n){n.r(t),n.d(t,{getContrastingBackgroundTheme:function(){return E},getRenderSymbolParameters:function(){return B},previewSymbol2D:function(){return _}});var a=n(74165),i=n(1413),l=n(15861),o=n(51995),r=n(86950),u=n(10064),s=n(82272),c=n(17842),d=n(79563),h=n(37817),f=n(69157),p=n(81283),v="picture-fill",m=h.b_.size,y=h.b_.maxSize,g=h.b_.maxOutlineSize,w=h.b_.lineWidth,b=225,x=document.createElement("canvas");function k(e,t){var n=x.getContext("2d"),a=[];t&&(t.weight&&a.push(t.weight),t.size&&a.push(t.size+"px"),t.family&&a.push(t.family)),n.font=a.join(" ");var i=n.measureText(e),l=i.width,o=i.actualBoundingBoxLeft,r=i.actualBoundingBoxRight,u=i.actualBoundingBoxAscent,s=i.actualBoundingBoxDescent;return{width:Math.ceil(Math.max(l,o+r)),height:Math.ceil(u+s),x:Math.floor(o),y:Math.floor((u-s)/2)}}function M(e){var t=null===e||void 0===e?void 0:e.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,c.F2)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,c.F2)(t.height):null}}function Z(e,t){return L.apply(this,arguments)}function L(){return(L=(0,l.Z)((0,a.Z)().mark((function e(t,n){var i,l,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.fill,l=t.color,"pattern"!==(null===i||void 0===i?void 0:i.type)||!l||t.type===v){e.next=6;break}return e.next=4,(0,d.Od)(i.src,l.toCss(!0));case 4:o=e.sent,i.src=o,n.fill=i;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t,n,a){return C.apply(this,arguments)}function C(){return(C=(0,l.Z)((0,a.Z)().mark((function e(t,n,i,l){var o,r,u,c,d,h,f,p,v,m,y,g,w,b,x;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("font"in t&&t.font&&"text"===n.shape.type){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,s.mx)(t.font);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:o=M(l),r=o.width,u=o.height,/[\uE600-\uE6FF]/.test(n.shape.text)||(f=k(n.shape.text,{weight:null===(c=n.font)||void 0===c?void 0:c.weight,size:null===(d=n.font)||void 0===d?void 0:d.size,family:null===(h=n.font)||void 0===h?void 0:h.family}),p=f.width,v=f.height,m=f.x,y=f.y,i[0]=null!==r&&void 0!==r?r:p,i[1]=null!==u&&void 0!==u?u:v,n.shape.x=m,n.shape.y=y,(g=null!=(null===l||void 0===l?void 0:l.rotation)?l.rotation:"angle"in t?t.angle:null)&&(w=g*(Math.PI/180),b=Math.abs(Math.sin(w)),x=Math.abs(Math.cos(w)),i[1]=i[0]*b+i[1]*x));case 11:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function F(e,t,n,a,l){var o;if(null!=e.haloColor&&null!=e.haloSize){var r;null!==(r=l.masking)&&void 0!==r||(l.masking=n.map((function(){return[]})));var u=(0,c.F2)(e.haloSize);a[0]+=u,a[1]+=u,n.unshift([(0,i.Z)((0,i.Z)({},t),{},{fill:null,stroke:{color:e.haloColor,width:2*u,join:"round",cap:"round"}})]),l.masking.unshift([{shape:{type:"rect",x:0,y:0,width:a[0]+2*p.c9,height:a[1]+2*p.c9},fill:[255,255,255],stroke:null},(0,i.Z)((0,i.Z)({},t),{},{fill:[0,0,0,0],stroke:null})])}null==e.backgroundColor&&null==e.borderLineColor||(a[0]+=2*p.c9,a[1]+=2*p.c9,n.unshift([{shape:{type:"rect",x:0,y:0,width:a[0],height:a[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,c.F2)(e.borderLineSize)}}]),null===(o=l.masking)||void 0===o||o.unshift([]))}function S(e,t){return e>t?"dark":"light"}function B(e,t){var n,a,l="number"==typeof(null===t||void 0===t?void 0:t.size)?null===t||void 0===t?void 0:t.size:null,o=null!=l?(0,c.F2)(l):null,r=null!=(null===t||void 0===t?void 0:t.maxSize)?(0,c.F2)(t.maxSize):null,u=null!=(null===t||void 0===t?void 0:t.rotation)?t.rotation:"angle"in e?e.angle:null,s=(0,d._M)(e),f=(0,d.mx)(e);"dark"!==E(e,245)||(null===t||void 0===t?void 0:t.ignoreWhiteSymbols)||(f=(0,i.Z)((0,i.Z)({width:.75},f),{},{color:"#bdc3c7"}));var p={shape:null,fill:s,stroke:f,offset:[0,0]};(null===(n=f)||void 0===n?void 0:n.width)&&(f.width=Math.min(f.width,g));var b=(null===(a=f)||void 0===a?void 0:a.width)||0,x=null!=(null===t||void 0===t?void 0:t.size)&&(null==(null===t||void 0===t?void 0:t.scale)||(null===t||void 0===t?void 0:t.scale)),Z=0,L=0,z=!1;switch(e.type){case"simple-marker":var C=e.style,F=M(t),S=F.width,B=S===F.height&&null!=S?S:null!=o?o:Math.min((0,c.F2)(e.size),r||y);switch(Z=B,L=B,C){case"circle":p.shape={type:"circle",cx:0,cy:0,r:.5*B},x||(Z+=b,L+=b);break;case"cross":p.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[Z,.5*L]},{command:"M",values:[.5*Z,0]},{command:"L",values:[.5*Z,L]}]};break;case"diamond":p.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*Z,0]},{command:"L",values:[Z,.5*L]},{command:"L",values:[.5*Z,L]},{command:"Z",values:[]}]},x||(Z+=b,L+=b);break;case"square":p.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[Z,0]},{command:"L",values:[Z,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},x||(Z+=b,L+=b),u&&(z=!0);break;case"triangle":p.shape={type:"path",path:[{command:"M",values:[.5*Z,0]},{command:"L",values:[Z,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},x||(Z+=b,L+=b),u&&(z=!0);break;case"x":p.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[Z,L]},{command:"M",values:[Z,0]},{command:"L",values:[0,L]}]},u&&(z=!0);break;case"path":p.shape={type:"path",path:e.path||""},x||(Z+=b,L+=b),u&&(z=!0),x=!0}break;case"simple-line":var _,j=M(t),D=j.width,O=j.height,P=(0,d.iI)(f).reduce((function(e,t){return e+t}),0),T=P&&Math.ceil(w/P),q=null!==(_=null!==O&&void 0!==O?O:o)&&void 0!==_?_:b,A=null!==D&&void 0!==D?D:P*T||w;f&&(f.width=q),Z=A,L=q,x=!0,p.shape={type:"path",path:[{command:"M",values:[q/2,L/2]},{command:"L",values:[Z-q/2,L/2]}]};break;case v:case"simple-fill":var R,I="object"==typeof(null===t||void 0===t?void 0:t.symbolConfig)&&!(null===t||void 0===t||null===(R=t.symbolConfig)||void 0===R||!R.isSquareFill),V=M(t),W=V.width,X=V.height;Z=!I&&W!==X||null==W?null!=o?o:m:W,L=!I&&W!==X||null==X?Z:X,x||(Z+=b,L+=b),x=!0,p.shape=I?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[Z,0]},{command:"L",values:[Z,L]},{command:"L",values:[0,L]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:h.JZ.fill[0];break;case"picture-marker":var H=Math.min((0,c.F2)(e.width),r||y),J=Math.min((0,c.F2)(e.height),r||y),N=M(t),U=N.width,Y=U===N.height&&null!=U?U:null!=o?o:Math.max(H,J),G=H/J;Z=G<=1?Math.ceil(Y*G):Y,L=G<=1?Y:Math.ceil(Y/G),p.shape={type:"image",x:-Math.round(Z/2),y:-Math.round(L/2),width:Z,height:L,src:e.url||""},u&&(z=!0);break;case"text":var K=e,Q=(null===t||void 0===t?void 0:t.overrideText)||K.text||"Aa",$=K.font,ee=M(t),te=ee.width,ne=ee.height,ae=null!=ne?ne:null!=o?o:Math.min((0,c.F2)($.size),r||y),ie=k(Q,{weight:$.weight,size:ae,family:$.family}),le=ie.width,oe=ie.height,re=/[\uE600-\uE6FF]/.test(Q);Z=null!==te&&void 0!==te?te:re?ae:le,L=re?ae:oe;var ue=.5*(re?ae:oe);re&&(ue+=5),p.shape={type:"text",text:Q,x:K.xoffset||0,y:K.yoffset||ue,align:"middle",alignBaseline:K.verticalAlignment,decoration:$&&$.decoration,rotated:K.rotated,kerning:K.kerning},p.font=$&&{size:ae,style:$.style,decoration:$.decoration,weight:$.weight,family:$.family}}return{shapeDescriptor:p,size:[Z,L],renderOptions:{node:null===t||void 0===t?void 0:t.node,scale:x,opacity:null===t||void 0===t?void 0:t.opacity,rotation:u,useRotationSize:z,effectView:null===t||void 0===t?void 0:t.effectView,ariaLabel:null===t||void 0===t?void 0:t.ariaLabel}}}function _(e,t){return j.apply(this,arguments)}function j(){return(j=(0,l.Z)((0,a.Z)().mark((function e(t,n){var l,o,r,s,c,d,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=B(t,n),r=o.shapeDescriptor,s=o.size,c=o.renderOptions,r.shape){e.next=3;break}throw new u.Z("symbolPreview: renderPreviewHTML2D","symbol not supported.");case 3:return e.next=5,Z(t,r);case 5:return e.next=7,z(t,r,s,n);case 7:return d=[[r]],"object"==typeof(null===n||void 0===n?void 0:n.symbolConfig)&&null!==n&&void 0!==n&&null!==(l=n.symbolConfig)&&void 0!==l&&l.applyColorModulation&&(p=.6*s[0],d.unshift([(0,i.Z)((0,i.Z)({},r),{},{offset:[-p,0],fill:(0,h.dc)(r.fill,-.3)})]),d.push([(0,i.Z)((0,i.Z)({},r),{},{offset:[p,0],fill:(0,h.dc)(r.fill,.3)})]),s[0]+=2*p,c.scale=!1),e.abrupt("return",("text"===t.type&&F(t,r,d,s,c),(0,f.wh)(d,s,c)));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b,n=(0,d._M)(e),a=(0,d.mx)(e),i=!n||"type"in n?null:new o.Z(n),l=null!==a&&void 0!==a&&a.color?new o.Z(null===a||void 0===a?void 0:a.color):null,u=i?S((0,r.EX)(i),t):null,s=l?S((0,r.EX)(l),t):null;return s?u?u===s?u:t>=b?"light":"dark":s:u}}}]);
//# sourceMappingURL=8103.e3888c19.chunk.js.map