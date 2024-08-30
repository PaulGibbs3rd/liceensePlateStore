"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[83644],{11186:function(t,n,r){r.d(n,{a:function(){return i},b:function(){return s},c:function(){return o},d:function(){return e},e:function(){return c},f:function(){return u},n:function(){return l},s:function(){return f},t:function(){return a}});r(93169),r(32718);function e(t,n,r){i(t.typedBuffer,n.typedBuffer,r,t.typedBufferStride,n.typedBufferStride)}function i(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e;if(t.length/e!==Math.ceil(n.length/i))return t;for(var o=t.length/e,a=r[0],u=r[1],f=r[2],s=r[4],c=r[5],l=r[6],h=r[8],v=r[9],d=r[10],p=r[12],g=r[13],m=r[14],M=0,y=0,b=0;b<o;b++){var _=n[M],B=n[M+1],T=n[M+2];t[y]=a*_+s*B+h*T+p,t[y+1]=u*_+c*B+v*T+g,t[y+2]=f*_+l*B+d*T+m,M+=i,y+=e}return t}function o(t,n,r){a(t.typedBuffer,n.typedBuffer,r,t.typedBufferStride,n.typedBufferStride)}function a(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e;if(t.length/e===Math.ceil(n.length/i))for(var o=t.length/e,a=r[0],u=r[1],f=r[2],s=r[3],c=r[4],l=r[5],h=r[6],v=r[7],d=r[8],p=0,g=0,m=0;m<o;m++){var M=n[p],y=n[p+1],b=n[p+2];t[g]=a*M+s*y+h*b,t[g+1]=u*M+c*y+v*b,t[g+2]=f*M+l*y+d*b,p+=i,g+=e}}function u(t,n,r){f(t.typedBuffer,n.typedBuffer,r,t.typedBufferStride,n.typedBufferStride)}function f(t,n,r){for(var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e,o=Math.min(t.length/e,n.length/i),a=0,u=0,f=0;f<o;f++)t[u]=r*n[a],t[u+1]=r*n[a+1],t[u+2]=r*n[a+2],a+=i,u+=e;return t}function s(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e,o=t.length/e;if(o!==Math.ceil(n.length/i))return t;for(var a=0,u=0,f=0;f<o;f++)t[u]=n[a]+r[0],t[u+1]=n[a+1]+r[1],t[u+2]=n[a+2]+r[2],a+=i,u+=e;return t}function c(t,n){l(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function l(t,n){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r,i=Math.min(t.length/r,n.length/e),o=0,a=0,u=0;u<i;u++){var f=n[o],s=n[o+1],c=n[o+2],l=f*f+s*s+c*c;if(l>0){var h=1/Math.sqrt(l);t[a]=h*f,t[a+1]=h*s,t[a+2]=h*c}o+=e,a+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:l,normalizeView:c,scale:f,scaleView:u,shiftRight:function(t,n,r){for(var e=Math.min(t.count,n.count),i=t.typedBuffer,o=t.typedBufferStride,a=n.typedBuffer,u=n.typedBufferStride,f=0,s=0,c=0;c<e;c++)i[s]=a[f]>>r,i[s+1]=a[f+1]>>r,i[s+2]=a[f+2]>>r,f+=u,s+=o},transformMat3:a,transformMat3View:o,transformMat4:i,transformMat4View:e,translate:s},Symbol.toStringTag,{value:"Module"}))},6754:function(t,n,r){r.d(n,{a:function(){return o},b:function(){return f},n:function(){return u},s:function(){return s},t:function(){return a}});r(93169);var e=r(32718),i=function(){return e.Z.getLogger("esri.views.3d.support.buffer.math")};function o(t,n,r){a(t.typedBuffer,n.typedBuffer,r,t.typedBufferStride,n.typedBufferStride)}function a(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e;if(t.length/e==n.length/i)for(var o=t.length/e,a=r[0],u=r[1],f=r[2],s=r[3],c=r[4],l=r[5],h=r[6],v=r[7],d=r[8],p=0,g=0,m=0;m<o;m++){var M=n[p],y=n[p+1],b=n[p+2],_=n[p+3];t[g]=a*M+s*y+h*b,t[g+1]=u*M+c*y+v*b,t[g+2]=f*M+l*y+d*b,t[g+3]=_,p+=i,g+=e}}function u(t,n){for(var r=Math.min(t.count,n.count),e=t.typedBuffer,i=t.typedBufferStride,o=n.typedBuffer,a=n.typedBufferStride,u=0;u<r;u++){var f=u*i,s=u*a,c=o[s],l=o[s+1],h=o[s+2],v=c*c+l*l+h*h;if(v>0){var d=1/Math.sqrt(v);e[f]=d*c,e[f+1]=d*l,e[f+2]=d*h}}}function f(t,n,r){s(t.typedBuffer,n,r,t.typedBufferStride)}function s(t,n,r){for(var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,i=Math.min(t.length/e,n.count),o=n.typedBuffer,a=n.typedBufferStride,u=0,f=0,s=0;s<i;s++)t[f]=r*o[u],t[f+1]=r*o[u+1],t[f+2]=r*o[u+2],t[f+3]=r*o[u+3],u+=a,f+=e}Object.freeze(Object.defineProperty({__proto__:null,normalize:u,scale:s,scaleView:f,transformMat3:a,transformMat3View:o,transformMat4:function(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e;if(t.length/e==n.length/o)for(var a=t.length/e,u=r[0],f=r[1],s=r[2],c=r[3],l=r[4],h=r[5],v=r[6],d=r[7],p=r[8],g=r[9],m=r[10],M=r[11],y=r[12],b=r[13],_=r[14],B=r[15],T=0,x=0,k=0;k<a;k++){var O=n[T],S=n[T+1],A=n[T+2],V=n[T+3];t[x]=u*O+l*S+p*A+y*V,t[x+1]=f*O+h*S+g*A+b*V,t[x+2]=s*O+v*S+m*A+_*V,t[x+3]=c*O+d*S+M*A+B*V,T+=o,x+=e}else i().error("source and destination buffers need to have the same number of elements")},transformMat4View:function(t,n,r){if(t.count===n.count)for(var e=t.count,i=r[0],o=r[1],a=r[2],u=r[3],f=r[4],s=r[5],c=r[6],l=r[7],h=r[8],v=r[9],d=r[10],p=r[11],g=r[12],m=r[13],M=r[14],y=r[15],b=t.typedBuffer,_=t.typedBufferStride,B=n.typedBuffer,T=n.typedBufferStride,x=0;x<e;x++){var k=x*_,O=x*T,S=B[O],A=B[O+1],V=B[O+2],U=B[O+3];b[k]=i*S+f*A+h*V+g*U,b[k+1]=o*S+s*A+v*V+m*U,b[k+2]=a*S+c*A+d*V+M*U,b[k+3]=u*S+l*A+p*V+y*U}}},Symbol.toStringTag,{value:"Module"}))},13611:function(t,n,r){r.d(n,{$X:function(){return u},AK:function(){return b},EU:function(){return O},Fp:function(){return l},Fv:function(){return y},I6:function(){return S},IH:function(){return a},JG:function(){return i},LG:function(){return V},TE:function(){return d},TK:function(){return q},U1:function(){return k},VV:function(){return c},bA:function(){return h},bI:function(){return p},c:function(){return T},fS:function(){return A},iu:function(){return x},kC:function(){return _},kE:function(){return g},lu:function(){return w},od:function(){return v},t7:function(){return B},t8:function(){return o},tk:function(){return M},we:function(){return m}});var e=r(24204);function i(t,n){return t[0]=n[0],t[1]=n[1],t}function o(t,n,r){return t[0]=n,t[1]=r,t}function a(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function u(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function f(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function s(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function c(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function l(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function h(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function v(t,n,r,e){return t[0]=n[0]+r[0]*e,t[1]=n[1]+r[1]*e,t}function d(t,n){var r=n[0]-t[0],e=n[1]-t[1];return Math.sqrt(r*r+e*e)}function p(t,n){var r=n[0]-t[0],e=n[1]-t[1];return r*r+e*e}function g(t){var n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function m(t){var n=t[0],r=t[1];return n*n+r*r}function M(t,n){return t[0]=-n[0],t[1]=-n[1],t}function y(t,n){var r=n[0],e=n[1],i=r*r+e*e;return i>0&&(i=1/Math.sqrt(i),t[0]=n[0]*i,t[1]=n[1]*i),t}function b(t,n){return t[0]*n[0]+t[1]*n[1]}function _(t,n,r){var e=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=e,t}function B(t,n,r,e){var i=n[0],o=n[1];return t[0]=i+e*(r[0]-i),t[1]=o+e*(r[1]-o),t}function T(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[2]*i,t[1]=r[1]*e+r[3]*i,t}function x(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[2]*i+r[4],t[1]=r[1]*e+r[3]*i+r[5],t}function k(t,n,r,e){var i=n[0]-r[0],o=n[1]-r[1],a=Math.sin(e),u=Math.cos(e);return t[0]=i*u-o*a+r[0],t[1]=i*a+o*u+r[1],t}function O(t,n){var r=t[0],e=t[1],i=n[0],o=n[1],a=r*r+e*e;a>0&&(a=1/Math.sqrt(a));var u=i*i+o*o;u>0&&(u=1/Math.sqrt(u));var f=(r*i+e*o)*a*u;return f>1?0:f<-1?Math.PI:Math.acos(f)}function S(t,n){return t[0]===n[0]&&t[1]===n[1]}function A(t,n){var r=t[0],i=t[1],o=n[0],a=n[1],u=(0,e.bn)();return Math.abs(r-o)<=u*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(i-a)<=u*Math.max(1,Math.abs(i),Math.abs(a))}function V(t,n,r,e,i){var o=n[0]-r[0],a=n[1]-r[1],u=(e[0]*o+e[1]*a)*(i-1);return o=e[0]*u,a=e[1]*u,t[0]=n[0]+o,t[1]=n[1]+a,t}var U=g,w=u,I=f,Z=s,q=d,L=p,C=m;Object.freeze(Object.defineProperty({__proto__:null,add:a,angle:O,ceil:function(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t},copy:i,cross:_,dist:q,distance:d,div:Z,divide:s,dot:b,equals:A,exactEquals:S,floor:function(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t},inverse:function(t,n){return t[0]=1/n[0],t[1]=1/n[1],t},len:U,length:g,lerp:B,max:l,min:c,mul:I,multiply:f,negate:M,normalize:y,projectAndScale:V,random:function(t,n){n=n||1;var r=2*(0,e.FD)()*Math.PI;return t[0]=Math.cos(r)*n,t[1]=Math.sin(r)*n,t},rotate:k,round:function(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t},scale:h,scaleAndAdd:v,set:o,sqrDist:L,sqrLen:C,squaredDistance:p,squaredLength:m,str:function(t){return"vec2("+t[0]+", "+t[1]+")"},sub:w,subtract:u,transformMat2:T,transformMat2d:x,transformMat3:function(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[3]*i+r[6],t[1]=r[1]*e+r[4]*i+r[7],t},transformMat4:function(t,n,r){var e=n[0],i=n[1];return t[0]=r[0]*e+r[4]*i+r[12],t[1]=r[1]*e+r[5]*i+r[13],t}},Symbol.toStringTag,{value:"Module"}))},85981:function(t,n,r){r.d(n,{AR:function(){return M},Gr:function(){return m},JG:function(){return c},Jk:function(){return v},KU:function(){return p},Ue:function(){return f},al:function(){return l},ct:function(){return g},nF:function(){return d},re:function(){return s},zk:function(){return h}});var e=r(16889),i=r(21530),o=r(32035),a=r(12400),u=r(51378);function f(t){return t?{origin:(0,a.d9)(t.origin),vector:(0,a.d9)(t.vector)}:{origin:(0,a.Ue)(),vector:(0,a.Ue)()}}function s(t,n){var r=_.get();return r.origin=t,r.vector=n,r}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f();return l(t.origin,t.vector,n)}function l(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f();return(0,o.c)(r.origin,t),(0,o.c)(r.vector,n),r}function h(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f();return(0,o.c)(r.origin,t),(0,o.f)(r.vector,n,t),r}function v(t,n){var r=(0,o.f)(u.WM.get(),n,t.origin),i=(0,o.m)(t.vector,r),a=(0,o.m)(t.vector,t.vector),f=(0,e.uZ)(i/a,0,1),s=(0,o.f)(u.WM.get(),(0,o.j)(u.WM.get(),t.vector,f),r);return(0,o.m)(s,s)}function d(t,n,r){return g(t,n,0,1,r)}function p(t,n,r){return(0,o.g)(r,t.origin,(0,o.j)(r,t.vector,n))}function g(t,n,r,i,a){var f=t.vector,s=t.origin,c=(0,o.f)(u.WM.get(),n,s),l=(0,o.m)(f,c)/(0,o.q)(f);return(0,o.j)(a,f,(0,e.uZ)(l,r,i)),(0,o.g)(a,a,t.origin)}function m(t,n){if(y(t,s(n.origin,n.direction),!1,b)){var r=b.tA,e=b.pB,i=b.distance2;if(r>=0&&r<=1)return i;if(r<0)return(0,o.a)(t.origin,e);if(r>1)return(0,o.a)((0,o.g)(u.WM.get(),t.origin,t.vector),e)}return null}function M(t,n,r){return!!y(t,n,!0,b)&&((0,o.c)(r,b.pA),!0)}function y(t,n,r,i){var a=1e-6,f=t.origin,s=(0,o.g)(u.WM.get(),f,t.vector),c=n.origin,l=(0,o.g)(u.WM.get(),c,n.vector),h=u.WM.get(),v=u.WM.get();if(h[0]=f[0]-c[0],h[1]=f[1]-c[1],h[2]=f[2]-c[2],v[0]=l[0]-c[0],v[1]=l[1]-c[1],v[2]=l[2]-c[2],Math.abs(v[0])<a&&Math.abs(v[1])<a&&Math.abs(v[2])<a)return!1;var d=u.WM.get();if(d[0]=s[0]-f[0],d[1]=s[1]-f[1],d[2]=s[2]-f[2],Math.abs(d[0])<a&&Math.abs(d[1])<a&&Math.abs(d[2])<a)return!1;var p=h[0]*v[0]+h[1]*v[1]+h[2]*v[2],g=v[0]*d[0]+v[1]*d[1]+v[2]*d[2],m=h[0]*d[0]+h[1]*d[1]+h[2]*d[2],M=v[0]*v[0]+v[1]*v[1]+v[2]*v[2],y=(d[0]*d[0]+d[1]*d[1]+d[2]*d[2])*M-g*g;if(Math.abs(y)<a)return!1;var b=(p*g-m*M)/y,_=(p+g*b)/M;r&&(b=(0,e.uZ)(b,0,1),_=(0,e.uZ)(_,0,1));var B=u.WM.get(),T=u.WM.get();return B[0]=f[0]+b*d[0],B[1]=f[1]+b*d[1],B[2]=f[2]+b*d[2],T[0]=c[0]+_*v[0],T[1]=c[1]+_*v[1],T[2]=c[2]+_*v[2],i.tA=b,i.tB=_,i.pA=B,i.pB=T,i.distance2=(0,o.a)(B,T),!0}var b={tA:0,tB:0,pA:(0,a.Ue)(),pB:(0,a.Ue)(),distance2:0},_=new i.x((function(){return f()}))},49420:function(t,n,r){r.d(n,{F5:function(){return a},HB:function(){return u},a9:function(){return e}});var e,i,o=r(16889);function a(t){switch(t){case"multiply":default:return e.Multiply;case"ignore":return e.Ignore;case"replace":return e.Replace;case"tint":return e.Tint}}function u(t,n,r){if(null==t||n===e.Ignore)return r[0]=255,r[1]=255,r[2]=255,void(r[3]=255);var i=(0,o.uZ)(Math.round(t[3]*s),0,s),a=0===i||n===e.Tint?0:n===e.Replace?c:l;r[0]=(0,o.uZ)(Math.round(t[0]*f),0,f),r[1]=(0,o.uZ)(Math.round(t[1]*f),0,f),r[2]=(0,o.uZ)(Math.round(t[2]*f),0,f),r[3]=i+a}(i=e||(e={}))[i.Multiply=1]="Multiply",i[i.Ignore=2]="Ignore",i[i.Replace=3]="Replace",i[i.Tint=4]="Tint";var f=255,s=85,c=s,l=2*s},77343:function(t,n,r){r.d(n,{A:function(){return u}});var e,i=r(30168),o=r(49420),a=r(98634);function u(t){t.vertex.code.add((0,a.H)(e||(e=(0,i.Z)(["\n    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {\n      float symbolAlpha = 0.0;\n\n      const float maxTint = 85.0;\n      const float maxReplace = 170.0;\n      const float scaleAlpha = 3.0;\n\n      if (symbolColor.a > maxReplace) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);\n      } else if (symbolColor.a > maxTint) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);\n      } else if (symbolColor.a > 0.0) {\n        colorMixMode = ",";\n        symbolAlpha = scaleAlpha * symbolColor.a;\n      } else {\n        colorMixMode = ",";\n        symbolAlpha = 0.0;\n      }\n\n      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);\n    }\n  "])),a.H.int(o.a9.Multiply),a.H.int(o.a9.Replace),a.H.int(o.a9.Tint),a.H.int(o.a9.Multiply)))}},76783:function(t,n,r){r.d(n,{W9:function(){return b},iO:function(){return B},lV:function(){return x},xX:function(){return k},yn:function(){return d}});var e=r(15671),i=r(43144),o=r(29303),a=r(21389),u=r(29134),f=r(7025),s=r(32035),c=r(12400),l=r(23470),h=r(50951),v=r(89414),d=function(){function t(){(0,e.Z)(this,t),this._transform=(0,f.Ue)(),this._transformInverse=new p({value:this._transform},u.U_,f.Ue),this._transformInverseTranspose=new p(this._transformInverse,u.p4,f.Ue),this._transformTranspose=new p({value:this._transform},u.p4,f.Ue),this._transformInverseRotation=new p({value:this._transform},o.f6,a.Ue)}return(0,i.Z)(t,[{key:"_invalidateLazyTransforms",value:function(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}},{key:"transform",get:function(){return this._transform}},{key:"inverse",get:function(){return this._transformInverse.value}},{key:"inverseTranspose",get:function(){return this._transformInverseTranspose.value}},{key:"inverseRotation",get:function(){return this._transformInverseRotation.value}},{key:"transpose",get:function(){return this._transformTranspose.value}},{key:"setTransformMatrix",value:function(t){(0,u.JG)(this._transform,t)}},{key:"multiplyTransform",value:function(t){(0,u.Jp)(this._transform,this._transform,t)}},{key:"set",value:function(t){(0,u.JG)(this._transform,t),this._invalidateLazyTransforms()}},{key:"setAndInvalidateLazyTransforms",value:function(t,n){this.setTransformMatrix(t),this.multiplyTransform(n),this._invalidateLazyTransforms()}}]),t}(),p=function(){function t(n,r,i){(0,e.Z)(this,t),this._original=n,this._update=r,this._dirty=!0,this._transform=i()}return(0,i.Z)(t,[{key:"invalidate",value:function(){this._dirty=!0}},{key:"value",get:function(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}}]),t}(),g=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;(0,e.Z)(this,t),this.offset=n,this.tmpVertex=(0,c.Ue)()}return(0,i.Z)(t,[{key:"applyToVertex",value:function(t,n,r){var e=(0,s.s)(O,t,n,r),i=(0,s.g)(S,e,this.localOrigin),o=this.offset/(0,s.l)(i);return(0,s.r)(this.tmpVertex,e,i,o),this.tmpVertex}},{key:"applyToAabb",value:function(t){for(var n=this,r=A,e=V,i=U,o=0;o<3;++o)r[o]=t[0+o]+this.localOrigin[o],e[o]=t[3+o]+this.localOrigin[o],i[o]=r[o];for(var a=this.applyToVertex(r[0],r[1],r[2]),u=0;u<3;++u)t[u]=a[u],t[u+3]=a[u];for(var f=function(r){for(var e=n.applyToVertex(r[0],r[1],r[2]),i=0;i<3;++i)t[i]=Math.min(t[i],e[i]),t[i+3]=Math.max(t[i+3],e[i])},s=1;s<8;++s){for(var c=0;c<3;++c)i[c]=s&1<<c?e[c]:r[c];f(i)}for(var l=0,h=0;h<3;++h)r[h]*e[h]<0&&(l|=1<<h);if(0!==l&&7!==l)for(var v=0;v<8;++v)if(!(l&v)){for(var d=0;d<3;++d)i[d]=l&1<<d?0:v&1<<d?r[d]:e[d];f(i)}for(var p=0;p<3;++p)t[p]-=this.localOrigin[p],t[p+3]-=this.localOrigin[p];return t}}]),t}(),m=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;(0,e.Z)(this,t),this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=(0,c.Ue)(),this._tmpMbs=(0,l.c)(),this._tmpObb=new v.Oo,this._resetOffset(n)}return(0,i.Z)(t,[{key:"_resetOffset",value:function(t){this._offset=t,this._totalOffset=t}},{key:"offset",get:function(){return this._offset},set:function(t){this._resetOffset(t)}},{key:"componentOffset",set:function(t){this._totalOffset=this._offset+t}},{key:"localOrigin",set:function(t){this.componentLocalOriginLength=(0,s.l)(t)}},{key:"applyToVertex",value:function(t,n,r){var e=(0,s.s)(O,t,n,r),i=(0,s.s)(S,t,n,r+this.componentLocalOriginLength),o=this._totalOffset/(0,s.l)(i);return(0,s.r)(this._tmpVertex,e,i,o),this._tmpVertex}},{key:"applyToAabb",value:function(t){var n=this.componentLocalOriginLength,r=t[0],e=t[1],i=t[2]+n,o=t[3],a=t[4],u=t[5]+n,f=Math.abs(r),s=Math.abs(e),c=Math.abs(i),l=Math.abs(o),h=Math.abs(a),v=Math.abs(u),d=.5*(1+Math.sign(r*o))*Math.min(f,l),p=.5*(1+Math.sign(e*a))*Math.min(s,h),g=.5*(1+Math.sign(i*u))*Math.min(c,v),m=Math.max(f,l),M=Math.max(s,h),y=Math.max(c,v),b=Math.sqrt(d*d+p*p+g*g),_=Math.sign(f+r),B=Math.sign(s+e),T=Math.sign(c+i),x=Math.sign(l+o),k=Math.sign(h+a),O=Math.sign(v+u),S=this._totalOffset;if(b<S)return t[0]-=(1-_)*S,t[1]-=(1-B)*S,t[2]-=(1-T)*S,t[3]+=x*S,t[4]+=k*S,t[5]+=O*S,t;var A=S/Math.sqrt(m*m+M*M+y*y),V=S/b,U=V-A,w=-U;return t[0]+=r*(_*w+V),t[1]+=e*(B*w+V),t[2]+=i*(T*w+V),t[3]+=o*(x*U+A),t[4]+=a*(k*U+A),t[5]+=u*(O*U+A),t}},{key:"applyToMbs",value:function(t){var n=(0,s.l)((0,l.g)(t)),r=this._totalOffset/n;return(0,s.r)((0,l.g)(this._tmpMbs),(0,l.g)(t),(0,l.g)(t),r),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/n,this._tmpMbs}},{key:"applyToObb",value:function(t){return(0,v.gI)(t,this._totalOffset,this._totalOffset,h.JY.Global,this._tmpObb),this._tmpObb}}]),t}(),M=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;(0,e.Z)(this,t),this.offset=n,this.sphere=(0,l.c)(),this.tmpVertex=(0,c.Ue)()}return(0,i.Z)(t,[{key:"applyToVertex",value:function(t,n,r){var e=this.objectTransform.transform,i=(0,s.s)(O,t,n,r),o=(0,s.h)(i,i,e),a=this.offset/(0,s.l)(o);(0,s.r)(o,o,o,a);var u=this.objectTransform.inverse;return(0,s.h)(this.tmpVertex,o,u),this.tmpVertex}},{key:"applyToMinMax",value:function(t,n){var r=this.offset/(0,s.l)(t);(0,s.r)(t,t,t,r);var e=this.offset/(0,s.l)(n);(0,s.r)(n,n,n,e)}},{key:"applyToAabb",value:function(t){var n=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*n,t[1]+=t[1]*n,t[2]+=t[2]*n;var r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}},{key:"applyToBoundingSphere",value:function(t){var n=(0,s.l)((0,l.g)(t)),r=this.offset/n;return(0,s.r)((0,l.g)(this.sphere),(0,l.g)(t),(0,l.g)(t),r),this.sphere[3]=t[3]+t[3]*this.offset/n,this.sphere}}]),t}(),y=new M;function b(t){return null!=t?(y.offset=t,y):null}var _=new m;function B(t){return null!=t?(_.offset=t,_):null}var T=new g;function x(t){return null!=t?(T.offset=t,T):null}var k="terrain",O=(0,c.Ue)(),S=(0,c.Ue)(),A=(0,c.Ue)(),V=(0,c.Ue)(),U=(0,c.Ue)()}}]);
//# sourceMappingURL=83644.de3832f6.chunk.js.map