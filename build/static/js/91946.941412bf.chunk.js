"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[91946],{13611:function(n,t,e){e.d(t,{$X:function(){return _},AK:function(){return C},EU:function(){return l},Fp:function(){return R},Fv:function(){return I},I6:function(){return D},IH:function(){return E},JG:function(){return i},LG:function(){return G},TE:function(){return f},TK:function(){return g},U1:function(){return U},VV:function(){return T},bA:function(){return c},bI:function(){return N},c:function(){return d},fS:function(){return P},iu:function(){return h},kC:function(){return M},kE:function(){return s},lu:function(){return v},od:function(){return a},t7:function(){return L},t8:function(){return u},tk:function(){return S},we:function(){return O}});var r=e(24204);function i(n,t){return n[0]=t[0],n[1]=t[1],n}function u(n,t,e){return n[0]=t,n[1]=e,n}function E(n,t,e){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n}function _(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n}function o(n,t,e){return n[0]=t[0]*e[0],n[1]=t[1]*e[1],n}function A(n,t,e){return n[0]=t[0]/e[0],n[1]=t[1]/e[1],n}function T(n,t,e){return n[0]=Math.min(t[0],e[0]),n[1]=Math.min(t[1],e[1]),n}function R(n,t,e){return n[0]=Math.max(t[0],e[0]),n[1]=Math.max(t[1],e[1]),n}function c(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n}function a(n,t,e,r){return n[0]=t[0]+e[0]*r,n[1]=t[1]+e[1]*r,n}function f(n,t){var e=t[0]-n[0],r=t[1]-n[1];return Math.sqrt(e*e+r*r)}function N(n,t){var e=t[0]-n[0],r=t[1]-n[1];return e*e+r*r}function s(n){var t=n[0],e=n[1];return Math.sqrt(t*t+e*e)}function O(n){var t=n[0],e=n[1];return t*t+e*e}function S(n,t){return n[0]=-t[0],n[1]=-t[1],n}function I(n,t){var e=t[0],r=t[1],i=e*e+r*r;return i>0&&(i=1/Math.sqrt(i),n[0]=t[0]*i,n[1]=t[1]*i),n}function C(n,t){return n[0]*t[0]+n[1]*t[1]}function M(n,t,e){var r=t[0]*e[1]-t[1]*e[0];return n[0]=n[1]=0,n[2]=r,n}function L(n,t,e,r){var i=t[0],u=t[1];return n[0]=i+r*(e[0]-i),n[1]=u+r*(e[1]-u),n}function d(n,t,e){var r=t[0],i=t[1];return n[0]=e[0]*r+e[2]*i,n[1]=e[1]*r+e[3]*i,n}function h(n,t,e){var r=t[0],i=t[1];return n[0]=e[0]*r+e[2]*i+e[4],n[1]=e[1]*r+e[3]*i+e[5],n}function U(n,t,e,r){var i=t[0]-e[0],u=t[1]-e[1],E=Math.sin(r),_=Math.cos(r);return n[0]=i*_-u*E+e[0],n[1]=i*E+u*_+e[1],n}function l(n,t){var e=n[0],r=n[1],i=t[0],u=t[1],E=e*e+r*r;E>0&&(E=1/Math.sqrt(E));var _=i*i+u*u;_>0&&(_=1/Math.sqrt(_));var o=(e*i+r*u)*E*_;return o>1?0:o<-1?Math.PI:Math.acos(o)}function D(n,t){return n[0]===t[0]&&n[1]===t[1]}function P(n,t){var e=n[0],i=n[1],u=t[0],E=t[1],_=(0,r.bn)();return Math.abs(e-u)<=_*Math.max(1,Math.abs(e),Math.abs(u))&&Math.abs(i-E)<=_*Math.max(1,Math.abs(i),Math.abs(E))}function G(n,t,e,r,i){var u=t[0]-e[0],E=t[1]-e[1],_=(r[0]*u+r[1]*E)*(i-1);return u=r[0]*_,E=r[1]*_,n[0]=t[0]+u,n[1]=t[1]+E,n}var F=s,v=_,B=o,p=A,g=f,y=N,H=O;Object.freeze(Object.defineProperty({__proto__:null,add:E,angle:l,ceil:function(n,t){return n[0]=Math.ceil(t[0]),n[1]=Math.ceil(t[1]),n},copy:i,cross:M,dist:g,distance:f,div:p,divide:A,dot:C,equals:P,exactEquals:D,floor:function(n,t){return n[0]=Math.floor(t[0]),n[1]=Math.floor(t[1]),n},inverse:function(n,t){return n[0]=1/t[0],n[1]=1/t[1],n},len:F,length:s,lerp:L,max:R,min:T,mul:B,multiply:o,negate:S,normalize:I,projectAndScale:G,random:function(n,t){t=t||1;var e=2*(0,r.FD)()*Math.PI;return n[0]=Math.cos(e)*t,n[1]=Math.sin(e)*t,n},rotate:U,round:function(n,t){return n[0]=Math.round(t[0]),n[1]=Math.round(t[1]),n},scale:c,scaleAndAdd:a,set:u,sqrDist:y,sqrLen:H,squaredDistance:N,squaredLength:O,str:function(n){return"vec2("+n[0]+", "+n[1]+")"},sub:v,subtract:_,transformMat2:d,transformMat2d:h,transformMat3:function(n,t,e){var r=t[0],i=t[1];return n[0]=e[0]*r+e[3]*i+e[6],n[1]=e[1]*r+e[4]*i+e[7],n},transformMat4:function(n,t,e){var r=t[0],i=t[1];return n[0]=e[0]*r+e[4]*i+e[12],n[1]=e[1]*r+e[5]*i+e[13],n}},Symbol.toStringTag,{value:"Module"}))},38461:function(n,t,e){e.d(t,{AA:function(){return _},XO:function(){return E},YI:function(){return u},xx:function(){return i}});var r=e(18722);function i(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n<=r.c8?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}function u(n){return(0,r.kJ)(n)?n.length<r.c8?n:new Float32Array(n):n.length<r.c8?Array.from(n):n}function E(n){return((0,r.kJ)(n)?n.length:n.byteLength/8)<=r.c8?Array.from(n):new Float32Array(n)}function _(n,t,e){return Array.isArray(n)?n.slice(t,t+e):n.subarray(t,t+e)}},39406:function(n,t,e){e.d(t,{$z:function(){return E},KF:function(){return R},LE:function(){return a},X9:function(){return _},mi:function(){return u}});var r=e(37762),i=e(18722);function u(n){if((0,i.kJ)(n)){if(n.length<i.c8)return n}else if(n.length<i.c8)return Array.from(n);var t=!0,e=!0;return n.some((function(n,r){return e=e&&n===r,!(t=t&&0===n)&&!e})),t?a(n.length):e?R(n.length):(0,i.kJ)(n)||n.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?function(n){var t,e=!0,u=(0,r.Z)(n);try{for(u.s();!(t=u.n()).done;){var E=t.value;if(E>=65536)return(0,i.kJ)(n)?new Uint32Array(n):n;E>=256&&(e=!1)}}catch(_){u.e(_)}finally{u.f()}return e?new Uint8Array(n):new Uint16Array(n)}(n):n}function E(n){return n<=i.c8?new Array(n):n<=65536?new Uint16Array(n):new Uint32Array(n)}function _(n){return n<=i.c8?new Array(n):new Uint32Array(n)}var o=function(){for(var n=new Uint32Array(131072),t=0;t<n.length;++t)n[t]=t;return n}(),A=[0],T=function(){for(var n=new Uint16Array(65536),t=0;t<n.length;++t)n[t]=t;return n}();function R(n){if(1===n)return A;if(n<i.c8)return Array.from(new Uint16Array(T.buffer,0,n));if(n<T.length)return new Uint16Array(T.buffer,0,n);if(n>o.length){var t=Math.max(2*o.length,n);o=new Uint32Array(t);for(var e=0;e<o.length;e++)o[e]=e}return new Uint32Array(o.buffer,0,n)}var c=new Uint8Array(65536);function a(n){if(1===n)return A;if(n<i.c8)return new Array(n).fill(0);if(n>c.length){var t=Math.max(2*c.length,n);c=new Uint8Array(t)}return new Uint8Array(c.buffer,0,n)}},48734:function(n,t,e){function r(n){switch(n){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}e.d(t,{n1:function(){return r}})},85981:function(n,t,e){e.d(t,{AR:function(){return S},Gr:function(){return O},JG:function(){return T},Jk:function(){return a},KU:function(){return N},Ue:function(){return o},al:function(){return R},ct:function(){return s},nF:function(){return f},re:function(){return A},zk:function(){return c}});var r=e(16889),i=e(21530),u=e(32035),E=e(12400),_=e(51378);function o(n){return n?{origin:(0,E.d9)(n.origin),vector:(0,E.d9)(n.vector)}:{origin:(0,E.Ue)(),vector:(0,E.Ue)()}}function A(n,t){var e=M.get();return e.origin=n,e.vector=t,e}function T(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o();return R(n.origin,n.vector,t)}function R(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o();return(0,u.c)(e.origin,n),(0,u.c)(e.vector,t),e}function c(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o();return(0,u.c)(e.origin,n),(0,u.f)(e.vector,t,n),e}function a(n,t){var e=(0,u.f)(_.WM.get(),t,n.origin),i=(0,u.m)(n.vector,e),E=(0,u.m)(n.vector,n.vector),o=(0,r.uZ)(i/E,0,1),A=(0,u.f)(_.WM.get(),(0,u.j)(_.WM.get(),n.vector,o),e);return(0,u.m)(A,A)}function f(n,t,e){return s(n,t,0,1,e)}function N(n,t,e){return(0,u.g)(e,n.origin,(0,u.j)(e,n.vector,t))}function s(n,t,e,i,E){var o=n.vector,A=n.origin,T=(0,u.f)(_.WM.get(),t,A),R=(0,u.m)(o,T)/(0,u.q)(o);return(0,u.j)(E,o,(0,r.uZ)(R,e,i)),(0,u.g)(E,E,n.origin)}function O(n,t){if(I(n,A(t.origin,t.direction),!1,C)){var e=C.tA,r=C.pB,i=C.distance2;if(e>=0&&e<=1)return i;if(e<0)return(0,u.a)(n.origin,r);if(e>1)return(0,u.a)((0,u.g)(_.WM.get(),n.origin,n.vector),r)}return null}function S(n,t,e){return!!I(n,t,!0,C)&&((0,u.c)(e,C.pA),!0)}function I(n,t,e,i){var E=1e-6,o=n.origin,A=(0,u.g)(_.WM.get(),o,n.vector),T=t.origin,R=(0,u.g)(_.WM.get(),T,t.vector),c=_.WM.get(),a=_.WM.get();if(c[0]=o[0]-T[0],c[1]=o[1]-T[1],c[2]=o[2]-T[2],a[0]=R[0]-T[0],a[1]=R[1]-T[1],a[2]=R[2]-T[2],Math.abs(a[0])<E&&Math.abs(a[1])<E&&Math.abs(a[2])<E)return!1;var f=_.WM.get();if(f[0]=A[0]-o[0],f[1]=A[1]-o[1],f[2]=A[2]-o[2],Math.abs(f[0])<E&&Math.abs(f[1])<E&&Math.abs(f[2])<E)return!1;var N=c[0]*a[0]+c[1]*a[1]+c[2]*a[2],s=a[0]*f[0]+a[1]*f[1]+a[2]*f[2],O=c[0]*f[0]+c[1]*f[1]+c[2]*f[2],S=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],I=(f[0]*f[0]+f[1]*f[1]+f[2]*f[2])*S-s*s;if(Math.abs(I)<E)return!1;var C=(N*s-O*S)/I,M=(N+s*C)/S;e&&(C=(0,r.uZ)(C,0,1),M=(0,r.uZ)(M,0,1));var L=_.WM.get(),d=_.WM.get();return L[0]=o[0]+C*f[0],L[1]=o[1]+C*f[1],L[2]=o[2]+C*f[2],d[0]=T[0]+M*a[0],d[1]=T[1]+M*a[1],d[2]=T[2]+M*a[2],i.tA=C,i.tB=M,i.pA=L,i.pB=d,i.distance2=(0,u.a)(L,d),!0}var C={tA:0,tB:0,pA:(0,E.Ue)(),pB:(0,E.Ue)(),distance2:0},M=new i.x((function(){return o()}))},55158:function(n,t,e){e.d(t,{Gw:function(){return a},U$:function(){return c},pV:function(){return R}});var r=e(1413),i=e(37762),u=e(15671),E=e(43144),_=e(25158),o=e(48734),A=e(97731),T=function(){function n(t,e){(0,u.Z)(this,n),this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;var r,E=(0,i.Z)(t.fields.keys());try{for(E.s();!(r=E.n()).done;){var _=r.value,o=t.fields.get(_);this[_]=new o.constructor(this.buffer,o.offset,this.stride)}}catch(A){E.e(A)}finally{E.f()}}return(0,E.Z)(n,[{key:"stride",get:function(){return this.layout.stride}},{key:"count",get:function(){return this.buffer.byteLength/this.stride}},{key:"byteLength",get:function(){return this.buffer.byteLength}},{key:"getField",value:function(n,t){var e=this[n];return e&&e.elementCount===t.ElementCount&&e.elementType===t.ElementType?e:null}},{key:"slice",value:function(t,e){return new n(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}},{key:"copyFrom",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.count,i=this.stride;if(i%4==0){var u=new Uint32Array(n.buffer,t*i,r*i/4);new Uint32Array(this.buffer,e*i,r*i/4).set(u)}else{var E=new Uint8Array(n.buffer,t*i,r*i);new Uint8Array(this.buffer,e*i,r*i).set(E)}return this}},{key:"usedMemory",get:function(){return this.byteLength}},{key:"dispose",value:function(){}}]),n}(),R=function(){function n(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(0,u.Z)(this,n),this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((function(n){return t._fields.set(n[0],(0,r.Z)((0,r.Z)({},n[1]),{},{constructor:s(n[1].constructor)}))})))}return(0,E.Z)(n,[{key:"freeze",value:function(){return this}},{key:"vec2f",value:function(n,t){return this._appendField(n,_.Eu,t),this}},{key:"vec2f64",value:function(n,t){return this._appendField(n,_.q6,t),this}},{key:"vec3f",value:function(n,t){return this._appendField(n,_.ct,t),this}},{key:"vec3f64",value:function(n,t){return this._appendField(n,_.fP,t),this}},{key:"vec4f",value:function(n,t){return this._appendField(n,_.ek,t),this}},{key:"vec4f64",value:function(n,t){return this._appendField(n,_.Cd,t),this}},{key:"mat3f",value:function(n,t){return this._appendField(n,_.gK,t),this}},{key:"mat3f64",value:function(n,t){return this._appendField(n,_.ey,t),this}},{key:"mat4f",value:function(n,t){return this._appendField(n,_.bj,t),this}},{key:"mat4f64",value:function(n,t){return this._appendField(n,_.O1,t),this}},{key:"vec4u8",value:function(n,t){return this._appendField(n,_.mc,t),this}},{key:"f32",value:function(n,t){return this._appendField(n,_.ly,t),this}},{key:"f64",value:function(n,t){return this._appendField(n,_.oS,t),this}},{key:"u8",value:function(n,t){return this._appendField(n,_.D_,t),this}},{key:"u16",value:function(n,t){return this._appendField(n,_.av,t),this}},{key:"i8",value:function(n,t){return this._appendField(n,_.Hz,t),this}},{key:"vec2i8",value:function(n,t){return this._appendField(n,_.Vs,t),this}},{key:"vec2i16",value:function(n,t){return this._appendField(n,_.or,t),this}},{key:"vec2u8",value:function(n,t){return this._appendField(n,_.xA,t),this}},{key:"vec4u16",value:function(n,t){return this._appendField(n,_.v6,t),this}},{key:"u32",value:function(n,t){return this._appendField(n,_.Nu,t),this}},{key:"_appendField",value:function(n,t,e){if(this._fields.has(n))(0,A.hu)(!1,"".concat(n," already added to vertex buffer layout"));else{var r=t.ElementCount*(0,o.n1)(t.ElementType),i=this._stride;this._stride+=r,this._fields.set(n,{size:r,constructor:t,offset:i,optional:e})}}},{key:"createBuffer",value:function(n){return new T(this,n)}},{key:"createView",value:function(n){return new T(this,n)}},{key:"clone",value:function(){var t=new n;return t._stride=this._stride,t._fields=new Map,this._fields.forEach((function(n,e){return t._fields.set(e,n)})),t.BufferType=this.BufferType,t}},{key:"stride",get:function(){if(this._lastAligned!==this._fields.size){var n=1;this._fields.forEach((function(t){return n=Math.max(n,(0,o.n1)(t.constructor.ElementType))})),this._stride=Math.floor((this._stride+n-1)/n)*n,this._lastAligned=this._fields.size}return this._stride}},{key:"fields",get:function(){return this._fields}}]),n}();function c(){return new R}var a=(0,E.Z)((function n(t){var e=this;(0,u.Z)(this,n),this.fields=new Array,t.fields.forEach((function(n,t){var i=(0,r.Z)((0,r.Z)({},n),{},{constructor:N(n.constructor)});e.fields.push([t,i])})),this.stride=t.stride})),f=[_.ly,_.Eu,_.ct,_.ek,_.gK,_.bj,_.oS,_.q6,_.fP,_.Cd,_.ey,_.O1,_.D_,_.xA,_.ne,_.mc,_.av,_.TS,_.mw,_.v6,_.Nu,_.qt,_.G5,_.hu,_.Hz,_.Vs,_.P_,_.ir,_.o7,_.or,_.n1,_.zO,_.Jj,_.wA,_.PP,_.TN];function N(n){return"".concat(n.ElementType,"_").concat(n.ElementCount)}function s(n){return O.get(n)}var O=new Map;f.forEach((function(n){return O.set(N(n),n)}))},97731:function(n,t,e){e.d(t,{E6:function(){return f},T:function(){return T},ep:function(){return c},hu:function(){return A},iV:function(){return a},kG:function(){return s},u_:function(){return N},yK:function(){return R}});var r=e(15671),i=e(43144),u=e(6644),E=e(19093),_=(0,e(86361).Ue)(),o=function(){function n(t){(0,r.Z)(this,n),this.message=t}return(0,i.Z)(n,[{key:"toString",value:function(){return"AssertException: ".concat(this.message)}}]),n}();function A(n,t){if(!n){t=t||"Assertion";var e=new Error(t).stack;throw new o("".concat(t," at ").concat(e))}}function T(n,t){n||(t=t||"",console.warn("Verify failed: "+t+"\n"+new Error("verify").stack))}function R(n,t,e,r){var i,u=(e[0]-n[0])/t[0],E=(r[0]-n[0])/t[0];u>E&&(i=u,u=E,E=i);var _=(e[1]-n[1])/t[1],o=(r[1]-n[1])/t[1];if(_>o&&(i=_,_=o,o=i),u>o||_>E)return!1;_>u&&(u=_),o<E&&(E=o);var A=(e[2]-n[2])/t[2],T=(r[2]-n[2])/t[2];return A>T&&(i=A,A=T,T=i),!(u>T||A>E)&&(T<E&&(E=T),!(E<0))}function c(n,t,e,r,i){var E=arguments.length>5&&void 0!==arguments[5]?arguments[5]:(0,u.Ue)(),_=(r[i]-e[i])*(t[0]-n[0])-(r[0]-e[0])*(t[i]-n[i]),o=(r[0]-e[0])*(n[i]-e[i])-(r[i]-e[i])*(n[0]-e[0]);if(0===_)return!1;var A=o/_;return E[0]=n[0]+A*(t[0]-n[0]),E[1]=n[i]+A*(t[i]-n[i]),!0}function a(n,t,e,r,i){_[0]=n[0],_[1]=n[1],_[2]=n[2],_[3]=1,(0,E.t)(_,_,t),i.length>2&&(i[2]=-_[2]),(0,E.t)(_,_,e),A(0!==_[3]),i[0]=_[0]/_[3],i[1]=_[1]/_[3],i[2]=_[2]/_[3],i[0]=(.5*i[0]+.5)*r[2]+r[0],i[1]=(.5*i[1]+.5)*r[3]+r[1]}function f(n,t){return Math.log(n)/Math.log(t)}function N(n,t,e,r){n[12]=t,n[13]=e,n[14]=r}function s(n){return 1===n[0]&&0===n[1]&&0===n[2]&&0===n[3]&&0===n[4]&&1===n[5]&&0===n[6]&&0===n[7]&&0===n[8]&&0===n[9]&&1===n[10]&&0===n[11]&&1===n[15]}},4760:function(n,t,e){var r;function i(n){return n===r.POSITION}e.d(t,{T:function(){return r},j:function(){return i}}),function(n){n.POSITION="position",n.NORMAL="normal",n.NORMALCOMPRESSED="normalCompressed",n.UV0="uv0",n.COLOR="color",n.SYMBOLCOLOR="symbolColor",n.SIZE="size",n.TANGENT="tangent",n.OFFSET="offset",n.PERSPECTIVEDIVIDE="perspectiveDivide",n.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",n.LENGTH="length",n.PREVPOSITION="prevPosition",n.NEXTPOSITION="nextPosition",n.SUBDIVISIONFACTOR="subdivisionFactor",n.COLORFEATUREATTRIBUTE="colorFeatureAttribute",n.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",n.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",n.DISTANCETOSTART="distanceToStart",n.UVMAPSPACE="uvMapSpace",n.BOUNDINGRECT="boundingRect",n.UVREGION="uvRegion",n.PROFILERIGHT="profileRight",n.PROFILEUP="profileUp",n.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",n.FEATUREVALUE="featureValue",n.INSTANCEMODELORIGINHI="instanceModelOriginHi",n.INSTANCEMODELORIGINLO="instanceModelOriginLo",n.INSTANCEMODEL="instanceModel",n.INSTANCEMODELNORMAL="instanceModelNormal",n.INSTANCECOLOR="instanceColor",n.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",n.LOCALTRANSFORM="localTransform",n.GLOBALTRANSFORM="globalTransform",n.BOUNDINGSPHERE="boundingSphere",n.MODELORIGIN="modelOrigin",n.MODELSCALEFACTORS="modelScaleFactors",n.FEATUREATTRIBUTE="featureAttribute",n.STATE="state",n.LODLEVEL="lodLevel",n.POSITION0="position0",n.POSITION1="position1",n.NORMAL2COMPRESSED="normal2Compressed",n.COMPONENTINDEX="componentIndex",n.VARIANTOFFSET="variantOffset",n.VARIANTSTROKE="variantStroke",n.VARIANTEXTENSION="variantExtension",n.SIDENESS="sideness",n.START="start",n.END="end",n.UP="up",n.EXTRUDE="extrude",n.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",n.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(r||(r={}))},50319:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r=e(37762),i=e(74165),u=e(15861),E=e(15671),_=e(43144),o=e(27366),A=e(66978),T=(e(32718),e(93169),e(84936),e(10064),e(69912)),R=e(32035),c=e(12400),a=e(85981),f=e(23470),N=e(78329),s=e(79762);function O(n,t,e){var r=(0,f.c)(),i=(0,f.g)(r);return(0,R.r)(i,i,n,.5),(0,R.r)(i,i,t,.5),r[3]=(0,R.p)(i,n),(0,R.g)(i,i,e),r}var S=function(){function n(){(0,E.Z)(this,n),this._idToComponent=new Map,this._components=new N.Z((function(n){return n.bounds})),this._edges=new N.Z((function(n){return n.bounds})),this._tmpLineSegment=(0,a.Ue)(),this._tmpP1=(0,c.Ue)(),this._tmpP2=(0,c.Ue)(),this._tmpP3=(0,c.Ue)(),this.remoteClient=null}return(0,_.Z)(n,[{key:"fetchCandidates",value:function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t,e){var r,u=this;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve();case 2:return(0,A.k_)(e),n.next=5,this._ensureEdgeLocations(t,e);case 5:return r=[],n.abrupt("return",(this._edges.forEachNeighbor((function(n){return u._addCandidates(t,n,r),r.length<1e3}),t.bounds),{result:{candidates:r}}));case 7:case"end":return n.stop()}}),n,this)})));return function(t,e){return n.apply(this,arguments)}}()},{key:"_ensureEdgeLocations",value:function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t,e){var u,E,_,o,A,T;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u=[],this._components.forEachNeighbor((function(n){if(null==n.info){var t=n.id,e=n.uid;u.push({id:t,uid:e})}return!0}),t.bounds),u.length){n.next=3;break}return n.abrupt("return");case 3:return E={components:u},n.next=6,this.remoteClient.invoke("fetchAllEdgeLocations",E,null!==e&&void 0!==e?e:{});case 6:_=n.sent,o=(0,r.Z)(_.components);try{for(o.s();!(A=o.n()).done;)T=A.value,this._setFetchEdgeLocations(T)}catch(i){o.e(i)}finally{o.f()}case 9:case"end":return n.stop()}}),n,this)})));return function(t,e){return n.apply(this,arguments)}}()},{key:"add",value:function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new M(t.id,t.bounds),n.abrupt("return",(this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}));case 2:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"remove",value:function(){var n=(0,u.Z)((0,i.Z)().mark((function n(t){var e,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(e=this._idToComponent.get(t.id))&&(r=[],this._edges.forEachNeighbor((function(n){return n.component===e&&r.push(n),!0}),e.bounds),this._edges.remove(r),this._components.remove([e]),this._idToComponent.delete(e.id)),n.abrupt("return",{result:{}});case 3:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"_setFetchEdgeLocations",value:function(n){var t=this._idToComponent.get(n.id);if(null!=t&&n.uid===t.uid){for(var e=s.n_.createView(n.locations),r=new Array(e.count),i=(0,c.Ue)(),u=(0,c.Ue)(),E=0;E<e.count;E++){e.position0.getVec(E,i),e.position1.getVec(E,u);var _=O(i,u,n.origin),o=new L(t,E,_);r[E]=o}this._edges.add(r);var A=n.objectIds,T=n.origin;t.info={locations:e,objectIds:A,origin:T}}}},{key:"_addCandidates",value:function(n,t,e){var r=t.component.info,i=r.origin,u=r.objectIds,E=r.locations,_=E.position0.getVec(t.index,this._tmpP1),o=E.position1.getVec(t.index,this._tmpP2);(0,R.g)(_,_,i),(0,R.g)(o,o,i);var A=u[E.componentIndex.get(t.index)];this._addEdgeCandidate(n,A,_,o,e),C(n,A,_,e),C(n,A,o,e)}},{key:"_addEdgeCandidate",value:function(n,t,e,r,i){if(n.returnEdge){var u=(0,f.g)(n.bounds),E=(0,a.zk)(e,r,this._tmpLineSegment),_=(0,a.nF)(E,u,this._tmpP3);(0,f.n)(n.bounds,_)&&i.push({type:"edge",objectId:t,target:(0,c.d9)(_),distance:(0,R.p)(u,_),start:(0,c.d9)(e),end:(0,c.d9)(r)})}}}]),n}(),I=S=(0,o._)([(0,T.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],S);function C(n,t,e,r){if(n.returnVertex&&(0,f.n)(n.bounds,e)){var i=(0,f.g)(n.bounds);r.push({type:"vertex",objectId:t,target:(0,c.d9)(e),distance:(0,R.p)(i,e)})}}var M=(0,_.Z)((function n(t,e){(0,E.Z)(this,n),this.id=t,this.bounds=e,this.info=null,this.uid=++n.uid}));M.uid=0;var L=(0,_.Z)((function n(t,e,r){(0,E.Z)(this,n),this.component=t,this.index=e,this.bounds=r}))},61109:function(n,t,e){e.d(t,{G:function(){return u}});var r=e(43144),i=e(15671),u=(0,r.Z)((function n(t,e,r,u,E){var _=arguments.length>5&&void 0!==arguments[5]&&arguments[5],o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;(0,i.Z)(this,n),this.name=t,this.count=e,this.type=r,this.offset=u,this.stride=E,this.normalized=_,this.divisor=o}))},8548:function(n,t,e){var r,i,u,E,_,o,A,T,R,c,a,f,N,s,O,S,I,C,M,L;e.d(t,{Br:function(){return S},Ho:function(){return M},LR:function(){return o},Lu:function(){return g},MX:function(){return i},No:function(){return N},Se:function(){return P},Tg:function(){return I},V1:function(){return l},V7:function(){return B},VI:function(){return s},VY:function(){return h},Wf:function(){return A},Xg:function(){return U},Y5:function(){return v},_g:function(){return d},cw:function(){return a},db:function(){return E},e8:function(){return f},g:function(){return T},l1:function(){return C},lP:function(){return O},lk:function(){return r},q_:function(){return D},qi:function(){return L},w0:function(){return _},wb:function(){return R},xS:function(){return c},zi:function(){return u}}),function(n){n[n.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",n[n.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",n[n.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(r||(r={})),function(n){n[n.POINTS=0]="POINTS",n[n.LINES=1]="LINES",n[n.LINE_LOOP=2]="LINE_LOOP",n[n.LINE_STRIP=3]="LINE_STRIP",n[n.TRIANGLES=4]="TRIANGLES",n[n.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",n[n.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(i||(i={})),function(n){n[n.ZERO=0]="ZERO",n[n.ONE=1]="ONE",n[n.SRC_COLOR=768]="SRC_COLOR",n[n.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",n[n.SRC_ALPHA=770]="SRC_ALPHA",n[n.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",n[n.DST_ALPHA=772]="DST_ALPHA",n[n.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",n[n.DST_COLOR=774]="DST_COLOR",n[n.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",n[n.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",n[n.CONSTANT_COLOR=32769]="CONSTANT_COLOR",n[n.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",n[n.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",n[n.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(u||(u={})),function(n){n[n.ADD=32774]="ADD",n[n.MIN=32775]="MIN",n[n.MAX=32776]="MAX",n[n.SUBTRACT=32778]="SUBTRACT",n[n.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(E||(E={})),function(n){n[n.ARRAY_BUFFER=34962]="ARRAY_BUFFER",n[n.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",n[n.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",n[n.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",n[n.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",n[n.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",n[n.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",n[n.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(_||(_={})),function(n){n[n.FRONT=1028]="FRONT",n[n.BACK=1029]="BACK",n[n.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(o||(o={})),function(n){n[n.CW=2304]="CW",n[n.CCW=2305]="CCW"}(A||(A={})),function(n){n[n.BYTE=5120]="BYTE",n[n.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",n[n.SHORT=5122]="SHORT",n[n.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",n[n.INT=5124]="INT",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.FLOAT=5126]="FLOAT",n[n.HALF_FLOAT=5131]="HALF_FLOAT"}(T||(T={})),function(n){n[n.NEVER=512]="NEVER",n[n.LESS=513]="LESS",n[n.EQUAL=514]="EQUAL",n[n.LEQUAL=515]="LEQUAL",n[n.GREATER=516]="GREATER",n[n.NOTEQUAL=517]="NOTEQUAL",n[n.GEQUAL=518]="GEQUAL",n[n.ALWAYS=519]="ALWAYS"}(R||(R={})),function(n){n[n.ZERO=0]="ZERO",n[n.KEEP=7680]="KEEP",n[n.REPLACE=7681]="REPLACE",n[n.INCR=7682]="INCR",n[n.DECR=7683]="DECR",n[n.INVERT=5386]="INVERT",n[n.INCR_WRAP=34055]="INCR_WRAP",n[n.DECR_WRAP=34056]="DECR_WRAP"}(c||(c={})),function(n){n[n.NEAREST=9728]="NEAREST",n[n.LINEAR=9729]="LINEAR",n[n.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",n[n.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",n[n.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",n[n.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(a||(a={})),function(n){n[n.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",n[n.REPEAT=10497]="REPEAT",n[n.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(f||(f={})),function(n){n[n.TEXTURE_2D=3553]="TEXTURE_2D",n[n.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",n[n.TEXTURE_3D=32879]="TEXTURE_3D",n[n.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",n[n.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",n[n.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",n[n.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",n[n.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",n[n.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(N||(N={})),function(n){n[n.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",n[n.DEPTH_STENCIL=34041]="DEPTH_STENCIL",n[n.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",n[n.ALPHA=6406]="ALPHA",n[n.RGB=6407]="RGB",n[n.RGBA=6408]="RGBA",n[n.LUMINANCE=6409]="LUMINANCE",n[n.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",n[n.RED=6403]="RED",n[n.RG=33319]="RG",n[n.RED_INTEGER=36244]="RED_INTEGER",n[n.RG_INTEGER=33320]="RG_INTEGER",n[n.RGB_INTEGER=36248]="RGB_INTEGER",n[n.RGBA_INTEGER=36249]="RGBA_INTEGER"}(s||(s={})),function(n){n[n.RGBA4=32854]="RGBA4",n[n.R16F=33325]="R16F",n[n.RG16F=33327]="RG16F",n[n.RGB32F=34837]="RGB32F",n[n.RGBA16F=34842]="RGBA16F",n[n.R32F=33326]="R32F",n[n.RG32F=33328]="RG32F",n[n.RGBA32F=34836]="RGBA32F",n[n.R11F_G11F_B10F=35898]="R11F_G11F_B10F",n[n.RGB8=32849]="RGB8",n[n.RGBA8=32856]="RGBA8",n[n.RGB5_A1=32855]="RGB5_A1",n[n.R8=33321]="R8",n[n.RG8=33323]="RG8",n[n.R8I=33329]="R8I",n[n.R8UI=33330]="R8UI",n[n.R16I=33331]="R16I",n[n.R16UI=33332]="R16UI",n[n.R32I=33333]="R32I",n[n.R32UI=33334]="R32UI",n[n.RG8I=33335]="RG8I",n[n.RG8UI=33336]="RG8UI",n[n.RG16I=33337]="RG16I",n[n.RG16UI=33338]="RG16UI",n[n.RG32I=33339]="RG32I",n[n.RG32UI=33340]="RG32UI",n[n.RGB16F=34843]="RGB16F",n[n.RGB9_E5=35901]="RGB9_E5",n[n.SRGB8=35905]="SRGB8",n[n.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",n[n.RGB565=36194]="RGB565",n[n.RGBA32UI=36208]="RGBA32UI",n[n.RGB32UI=36209]="RGB32UI",n[n.RGBA16UI=36214]="RGBA16UI",n[n.RGB16UI=36215]="RGB16UI",n[n.RGBA8UI=36220]="RGBA8UI",n[n.RGB8UI=36221]="RGB8UI",n[n.RGBA32I=36226]="RGBA32I",n[n.RGB32I=36227]="RGB32I",n[n.RGBA16I=36232]="RGBA16I",n[n.RGB16I=36233]="RGB16I",n[n.RGBA8I=36238]="RGBA8I",n[n.RGB8I=36239]="RGB8I",n[n.R8_SNORM=36756]="R8_SNORM",n[n.RG8_SNORM=36757]="RG8_SNORM",n[n.RGB8_SNORM=36758]="RGB8_SNORM",n[n.RGBA8_SNORM=36759]="RGBA8_SNORM",n[n.RGB10_A2=32857]="RGB10_A2",n[n.RGB10_A2UI=36975]="RGB10_A2UI"}(O||(O={})),function(n){n[n.FLOAT=5126]="FLOAT",n[n.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",n[n.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",n[n.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",n[n.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",n[n.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",n[n.BYTE=5120]="BYTE",n[n.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",n[n.SHORT=5122]="SHORT",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.INT=5124]="INT",n[n.HALF_FLOAT=5131]="HALF_FLOAT",n[n.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",n[n.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",n[n.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",n[n.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(S||(S={})),function(n){n[n.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",n[n.STENCIL_INDEX8=36168]="STENCIL_INDEX8",n[n.DEPTH_STENCIL=34041]="DEPTH_STENCIL",n[n.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",n[n.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",n[n.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",n[n.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(I||(I={})),function(n){n[n.STATIC_DRAW=35044]="STATIC_DRAW",n[n.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",n[n.STREAM_DRAW=35040]="STREAM_DRAW",n[n.STATIC_READ=35045]="STATIC_READ",n[n.DYNAMIC_READ=35049]="DYNAMIC_READ",n[n.STREAM_READ=35041]="STREAM_READ",n[n.STATIC_COPY=35046]="STATIC_COPY",n[n.DYNAMIC_COPY=35050]="DYNAMIC_COPY",n[n.STREAM_COPY=35042]="STREAM_COPY"}(C||(C={})),function(n){n[n.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",n[n.VERTEX_SHADER=35633]="VERTEX_SHADER"}(M||(M={})),function(n){n[n.FRAMEBUFFER=36160]="FRAMEBUFFER",n[n.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",n[n.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={}));var d,h,U,l=33984;!function(n){n[n.Texture=0]="Texture",n[n.BufferObject=1]="BufferObject",n[n.VertexArrayObject=2]="VertexArrayObject",n[n.Shader=3]="Shader",n[n.Program=4]="Program",n[n.FramebufferObject=5]="FramebufferObject",n[n.Renderbuffer=6]="Renderbuffer",n[n.TransformFeedback=7]="TransformFeedback",n[n.Sync=8]="Sync",n[n.UNCOUNTED=9]="UNCOUNTED",n[n.LinesOfCode=9]="LinesOfCode",n[n.Uniform=10]="Uniform",n[n.COUNT=11]="COUNT"}(d||(d={})),function(n){n[n.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",n[n.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",n[n.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",n[n.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",n[n.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",n[n.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",n[n.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",n[n.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",n[n.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",n[n.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",n[n.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",n[n.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",n[n.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",n[n.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",n[n.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",n[n.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(h||(h={})),function(n){n[n.NONE=0]="NONE",n[n.BACK=1029]="BACK"}(U||(U={}));var D,P,G,F,v,B,p,g=33306;!function(n){n[n.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",n[n.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",n[n.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",n[n.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",n[n.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",n[n.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",n[n.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",n[n.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",n[n.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",n[n.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",n[n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(D||(D={})),function(n){n[n.FLOAT=5126]="FLOAT",n[n.FLOAT_VEC2=35664]="FLOAT_VEC2",n[n.FLOAT_VEC3=35665]="FLOAT_VEC3",n[n.FLOAT_VEC4=35666]="FLOAT_VEC4",n[n.INT=5124]="INT",n[n.INT_VEC2=35667]="INT_VEC2",n[n.INT_VEC3=35668]="INT_VEC3",n[n.INT_VEC4=35669]="INT_VEC4",n[n.BOOL=35670]="BOOL",n[n.BOOL_VEC2=35671]="BOOL_VEC2",n[n.BOOL_VEC3=35672]="BOOL_VEC3",n[n.BOOL_VEC4=35673]="BOOL_VEC4",n[n.FLOAT_MAT2=35674]="FLOAT_MAT2",n[n.FLOAT_MAT3=35675]="FLOAT_MAT3",n[n.FLOAT_MAT4=35676]="FLOAT_MAT4",n[n.SAMPLER_2D=35678]="SAMPLER_2D",n[n.SAMPLER_CUBE=35680]="SAMPLER_CUBE",n[n.UNSIGNED_INT=5125]="UNSIGNED_INT",n[n.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",n[n.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",n[n.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",n[n.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",n[n.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",n[n.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",n[n.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",n[n.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",n[n.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",n[n.SAMPLER_3D=35679]="SAMPLER_3D",n[n.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",n[n.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",n[n.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",n[n.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",n[n.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",n[n.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",n[n.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",n[n.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",n[n.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",n[n.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",n[n.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",n[n.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(P||(P={})),function(n){n[n.OBJECT_TYPE=37138]="OBJECT_TYPE",n[n.SYNC_CONDITION=37139]="SYNC_CONDITION",n[n.SYNC_STATUS=37140]="SYNC_STATUS",n[n.SYNC_FLAGS=37141]="SYNC_FLAGS"}(G||(G={})),function(n){n[n.UNSIGNALED=37144]="UNSIGNALED",n[n.SIGNALED=37145]="SIGNALED"}(F||(F={})),function(n){n[n.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",n[n.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",n[n.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",n[n.WAIT_FAILED=37149]="WAIT_FAILED"}(v||(v={})),function(n){n[n.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(B||(B={})),function(n){n[n.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(p||(p={}))}}]);
//# sourceMappingURL=91946.941412bf.chunk.js.map