"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[91836],{21389:function(t,n,e){function r(){return[1,0,0,0,1,0,0,0,1]}function u(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]}function o(t,n,e,r,u,o,a,i,l){return[t,n,e,r,u,o,a,i,l]}e.d(n,{Ue:function(){return r},Wd:function(){return a},al:function(){return o},d9:function(){return u}});var a=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:u,create:r,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},7025:function(t,n,e){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function u(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function o(t,n,e,r,u,o,a,i,l,c,s,d,f,p,v,h){return[t,n,e,r,u,o,a,i,l,c,s,d,f,p,v,h]}e.d(n,{Ue:function(){return r},Wd:function(){return a},al:function(){return o},d9:function(){return u}});var a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:u,create:r,createView:function(t,n){return new Float64Array(t,n,16)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},50894:function(t,n,e){function r(){return[0,0,0,1]}function u(t){return[t[0],t[1],t[2],t[3]]}function o(t,n,e,r){return[t,n,e,r]}e.d(n,{Ue:function(){return r},Wd:function(){return a},al:function(){return o},d9:function(){return u}});var a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:a,clone:u,create:r,createView:function(t,n){return new Float64Array(t,n,4)},fromValues:o},Symbol.toStringTag,{value:"Module"}))},68700:function(t,n,e){e.d(n,{Bh:function(){return s},I6:function(){return U},Jp:function(){return d},Kx:function(){return v},Su:function(){return b},U_:function(){return p},b0:function(){return T},t8:function(){return m},yY:function(){return c}});var r=e(21389),u=e(50894),o=e(12400),a=e(24204),i=e(32035),l=e(19093);function c(t,n,e){e*=.5;var r=Math.sin(e);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(e),t}function s(t,n){var e=2*Math.acos(n[3]),r=Math.sin(e/2);return r>(0,a.bn)()?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),e}function d(t,n,e){var r=n[0],u=n[1],o=n[2],a=n[3],i=e[0],l=e[1],c=e[2],s=e[3];return t[0]=r*s+a*i+u*c-o*l,t[1]=u*s+a*l+o*i-r*c,t[2]=o*s+a*c+r*l-u*i,t[3]=a*s-r*i-u*l-o*c,t}function f(t,n,e,r){var u,o,i,l,c,s=n[0],d=n[1],f=n[2],p=n[3],v=e[0],h=e[1],b=e[2],g=e[3];return(o=s*v+d*h+f*b+p*g)<0&&(o=-o,v=-v,h=-h,b=-b,g=-g),1-o>(0,a.bn)()?(u=Math.acos(o),i=Math.sin(u),l=Math.sin((1-r)*u)/i,c=Math.sin(r*u)/i):(l=1-r,c=r),t[0]=l*s+c*v,t[1]=l*d+c*h,t[2]=l*f+c*b,t[3]=l*p+c*g,t}function p(t,n){var e=n[0],r=n[1],u=n[2],o=n[3],a=e*e+r*r+u*u+o*o,i=a?1/a:0;return t[0]=-e*i,t[1]=-r*i,t[2]=-u*i,t[3]=o*i,t}function v(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function h(t,n){var e,r=n[0]+n[4]+n[8];if(r>0)e=Math.sqrt(r+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var o=(u+1)%3,a=(u+2)%3;e=Math.sqrt(n[3*u+u]-n[3*o+o]-n[3*a+a]+1),t[u]=.5*e,e=.5/e,t[3]=(n[3*o+a]-n[3*a+o])*e,t[o]=(n[3*o+u]+n[3*u+o])*e,t[a]=(n[3*a+u]+n[3*u+a])*e}return t}function b(t,n,e,r){var u=.5*Math.PI/180;n*=u,e*=u,r*=u;var o=Math.sin(n),a=Math.cos(n),i=Math.sin(e),l=Math.cos(e),c=Math.sin(r),s=Math.cos(r);return t[0]=o*l*s-a*i*c,t[1]=a*i*s+o*l*c,t[2]=a*l*c-o*i*s,t[3]=a*l*s+o*i*c,t}var g=l.c,m=l.s,y=l.f,M=d,I=l.b,Z=l.g,x=l.l,w=l.i,A=w,_=l.j,R=_,j=l.n,U=l.a,k=l.e;function T(t,n,e){var r=(0,i.m)(n,e);return r<-.999999?((0,i.b)(q,F,n),(0,i.H)(q)<1e-6&&(0,i.b)(q,P,n),(0,i.n)(q,q),c(t,q,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,i.b)(q,n,e),t[0]=q[0],t[1]=q[1],t[2]=q[2],t[3]=1+r,j(t,t))}var q=(0,o.Ue)(),F=(0,o.al)(1,0,0),P=(0,o.al)(0,1,0);var S=(0,u.Ue)(),C=(0,u.Ue)();var N=(0,r.Ue)();Object.freeze(Object.defineProperty({__proto__:null,add:y,calculateW:function(t,n){var e=n[0],r=n[1],u=n[2];return t[0]=e,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-e*e-r*r-u*u)),t},conjugate:v,copy:g,dot:Z,equals:k,exactEquals:U,fromEuler:b,fromMat3:h,getAxisAngle:s,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:p,len:A,length:w,lerp:x,mul:M,multiply:d,normalize:j,random:function(t){var n=a.FD,e=n(),r=n(),u=n(),o=Math.sqrt(1-e),i=Math.sqrt(e);return t[0]=o*Math.sin(2*Math.PI*r),t[1]=o*Math.cos(2*Math.PI*r),t[2]=i*Math.sin(2*Math.PI*u),t[3]=i*Math.cos(2*Math.PI*u),t},rotateX:function(t,n,e){e*=.5;var r=n[0],u=n[1],o=n[2],a=n[3],i=Math.sin(e),l=Math.cos(e);return t[0]=r*l+a*i,t[1]=u*l+o*i,t[2]=o*l-u*i,t[3]=a*l-r*i,t},rotateY:function(t,n,e){e*=.5;var r=n[0],u=n[1],o=n[2],a=n[3],i=Math.sin(e),l=Math.cos(e);return t[0]=r*l-o*i,t[1]=u*l+a*i,t[2]=o*l+r*i,t[3]=a*l-u*i,t},rotateZ:function(t,n,e){e*=.5;var r=n[0],u=n[1],o=n[2],a=n[3],i=Math.sin(e),l=Math.cos(e);return t[0]=r*l+u*i,t[1]=u*l-r*i,t[2]=o*l+a*i,t[3]=a*l-o*i,t},rotationTo:T,scale:I,set:m,setAxes:function(t,n,e,r){var u=N;return u[0]=e[0],u[3]=e[1],u[6]=e[2],u[1]=r[0],u[4]=r[1],u[7]=r[2],u[2]=-n[0],u[5]=-n[1],u[8]=-n[2],j(t,h(t,u))},setAxisAngle:c,slerp:f,sqlerp:function(t,n,e,r,u,o){return f(S,n,u,o),f(C,e,r,o),f(t,S,C,2*o*(1-o)),t},sqrLen:R,squaredLength:_,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))},76046:function(t,n,e){e.d(n,{Z:function(){return M}});var r,u=e(15671),o=e(43144),a=e(60136),i=e(29388),l=e(27366),c=e(46784),s=e(49861),d=(e(93169),e(32718),e(84936),e(69912)),f=e(29134),p=e(7025),v=e(68700),h=e(50894),b=e(12400),g=e(45238),m=r=function(t){(0,a.Z)(e,t);var n=(0,i.Z)(e);function e(t){var r;return(0,u.Z)(this,e),(r=n.call(this,t)).translation=(0,b.Ue)(),r.rotationAxis=(0,b.nI)(g.up),r.rotationAngle=0,r.scale=(0,b.al)(1,1,1),r}return(0,o.Z)(e,[{key:"rotation",get:function(){return(0,g.uT)(this.rotationAxis,this.rotationAngle)},set:function(t){this.rotationAxis=(0,b.d9)((0,g.ZZ)(t)),this.rotationAngle=(0,g.EU)(t)}},{key:"localMatrix",get:function(){var t=(0,p.Ue)();return(0,v.yY)(y,(0,g.ZZ)(this.rotation),(0,g.WH)(this.rotation)),(0,f.Iw)(t,y,this.translation,this.scale),t}},{key:"localMatrixInverse",get:function(){return(0,f.U_)((0,p.Ue)(),this.localMatrix)}},{key:"equals",value:function(t){return this===t||null!=t&&(0,f.I6)(this.localMatrix,t.localMatrix)}},{key:"clone",value:function(){var t={translation:(0,b.d9)(this.translation),rotationAxis:(0,b.d9)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,b.d9)(this.scale)};return new r(t)}}]),e}(c.wq);(0,l._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"translation",void 0),(0,l._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"rotationAxis",void 0),(0,l._)([(0,s.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"rotationAngle",void 0),(0,l._)([(0,s.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),(0,l._)([(0,s.Cb)()],m.prototype,"rotation",null),(0,l._)([(0,s.Cb)()],m.prototype,"localMatrix",null),(0,l._)([(0,s.Cb)()],m.prototype,"localMatrixInverse",null),m=r=(0,l._)([(0,d.j)("esri.geometry.support.MeshTransform")],m);var y=(0,h.Ue)(),M=m},45238:function(t,n,e){e.d(n,{EU:function(){return g},Ue:function(){return s},WH:function(){return m},ZZ:function(){return b},q_:function(){return p},qw:function(){return h},uT:function(){return d},up:function(){return M},zk:function(){return f}});var r=e(16889),u=e(29134),o=e(68700),a=e(50894),i=e(32035),l=e(12400),c=e(86361);function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;return[t[0],t[1],t[2],t[3]]}function d(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,i.c)(e,t),e[3]=n,e}function f(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,c.Ue)();return(0,i.b)(e,t,n),(0,i.n)(e,e),e[3]=-(0,i.d)(t,n),e}function p(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s(),e=(0,u.j6)(I,t);return y(n,(0,r.BV)((0,o.Bh)(n,e))),n}function v(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s();return(0,o.yY)(I,t,m(t)),(0,o.yY)(Z,n,m(n)),(0,o.Jp)(I,Z,I),y(e,(0,r.BV)((0,o.Bh)(e,I)))}function h(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s();return d(l.E9,t,x),d(l.IO,n,w),d(l.eG,e,A),v(x,w,x),v(x,A,r),r}function b(t){return t}function g(t){return t[3]}function m(t){return(0,r.Vl)(t[3])}function y(t,n){return t[3]=n,t}var M=[0,0,1,0],I=(0,a.Ue)(),Z=(0,a.Ue)(),x=(s(),s()),w=s(),A=s()},91836:function(t,n,e){e.d(n,{CJ:function(){return w},JK:function(){return U},JX:function(){return j},Q7:function(){return _},RZ:function(){return A},hw:function(){return M},mh:function(){return m}});var r=e(93433),u=e(74165),o=e(1413),a=e(37762),i=e(15861),l=e(52639),c=e(10064),s=e(32718),d=e(68860),f=e(35995),p=e(79803),v=e(77981),h=e(76046),b=e(92975),g=e(29887);function m(t,n,e){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)((0,u.Z)().mark((function t(n,e,r){var a,i,l,c,s,f,v,g,m,y,M,I,Z,x,w,A,_,R,j;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.geometry,i=(0,o.Z)({},e.attributes),null==r||"mesh"!==(null===a||void 0===a?void 0:a.type)){t.next=10;break}if(s=r.transformFieldRoles,f=a.origin,v=a.spatialReference,g=a.vertexSpace,m=null!==(l=a.transform)&&void 0!==l?l:new h.Z,y="local"===g.type,M=n.spatialReference,I=M.isGeographic,Z=(0,b.fS)(M,v),x=(0,p.isEqualBaseGCS)(v,M)&&(0,p.canProjectWithoutEngine)(v,M),y&&I&&x||!y&&!I&&Z){t.next=5;break}return t.abrupt("return",null);case 5:if(null!=(w=(0,p.projectWithoutEngine)(f,v,M))){t.next=8;break}return t.abrupt("return",null);case 8:return i[s.originX]=w.x,i[s.originY]=w.y,i[s.originZ]=null!==(c=w.z)&&void 0!==c?c:0,null!=m&&(A=m.translation,_=m.scale,R=m.rotation,j=y?1:(0,d.r6)(v)/(0,d.r6)(M),i[s.translationX]=A[0]*j,i[s.translationY]=A[2]*j,i[s.translationZ]=-A[1]*j,i[s.scaleX]=_[0],i[s.scaleY]=_[2],i[s.scaleZ]=_[1],i[s.rotationX]=R[0],i[s.rotationY]=R[2],i[s.rotationZ]=-R[1],i[s.rotationDeg]=R[3]),t.abrupt("return",{attributes:i});case 10:return t.abrupt("return",null==a?{attributes:i}:"mesh"===a.type||"extent"===a.type?null:{geometry:a.toJSON(),attributes:i});case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(t,n){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)((0,u.Z)().mark((function t(n,e){var o,a,i,l,c,s;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all((null!==(o=e.addAttachments)&&void 0!==o?o:[]).map((function(t){return Z(n,t)})));case 2:return l=t.sent,t.next=5,Promise.all((null!==(a=e.updateAttachments)&&void 0!==a?a:[]).map((function(t){return Z(n,t)})));case 5:return c=t.sent,s=null!==(i=e.deleteAttachments)&&void 0!==i?i:[],t.abrupt("return",l.length||c.length||s.length?{adds:l,updates:c,deletes:(0,r.Z)(s)}:null);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t,n){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)((0,u.Z)().mark((function t(n,e){var r,o,a,i,l,c,s,d,p,v;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.feature,a=e.attachment,i=a.globalId,l=a.name,c=a.contentType,s=a.data,d=a.uploadId,p={globalId:i},o&&("attributes"in o?p.parentGlobalId=null===(r=o.attributes)||void 0===r?void 0:r[n.globalIdField]:o.globalId&&(p.parentGlobalId=o.globalId)),!d){t.next=5;break}p.uploadId=d,t.next=10;break;case 5:if(!s){t.next=10;break}return t.next=8,(0,f.IR)(s);case 8:(v=t.sent)&&(p.contentType=v.mediaType,p.data=v.data),s instanceof File&&(p.name=s.name);case 10:return t.abrupt("return",(l&&(p.name=l),c&&(p.contentType=c),p));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t,n,e){if(!n||0===n.length)return[];if(e&&(0,g.isFeatureIdentifierArrayWithGlobalId)(n))return n.map((function(t){return t.globalId}));if((0,g.isFeatureIdentifierArrayWithObjectId)(n))return n.map((function(t){return t.objectId}));var r=e?t.globalIdField:t.objectIdField;return r?n.map((function(t){return t.getAttribute(r)})):[]}function A(t){var n,e,r,u,o,i,l=null===t||void 0===t?void 0:t.assetMaps;if(l){var c,d=(0,a.Z)(l.addResults);try{for(d.s();!(c=d.n()).done;){var f=c.value;f.success||s.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error("Failed to map asset to feature with globalId ".concat(f.globalId,"."))}}catch(m){d.e(m)}finally{d.f()}var p,v=(0,a.Z)(l.updateResults);try{for(v.s();!(p=v.n()).done;){var h=p.value;h.success||s.Z.getLogger("esri.layers.graphics.sources.support.sourceUtils").error("Failed to map asset to feature with globalId ".concat(h.globalId,"."))}}catch(m){v.e(m)}finally{v.f()}}var b=null===t||void 0===t?void 0:t.attachments,g={addFeatureResults:null!==(n=null===t||void 0===t||null===(e=t.addResults)||void 0===e?void 0:e.map(_))&&void 0!==n?n:[],updateFeatureResults:null!==(r=null===t||void 0===t||null===(u=t.updateResults)||void 0===u?void 0:u.map(_))&&void 0!==r?r:[],deleteFeatureResults:null!==(o=null===t||void 0===t||null===(i=t.deleteResults)||void 0===i?void 0:i.map(_))&&void 0!==o?o:[],addAttachmentResults:null!==b&&void 0!==b&&b.addResults?b.addResults.map(_):[],updateAttachmentResults:null!==b&&void 0!==b&&b.updateResults?b.updateResults.map(_):[],deleteAttachmentResults:null!==b&&void 0!==b&&b.deleteResults?b.deleteResults.map(_):[]};return null!==t&&void 0!==t&&t.editMoment&&(g.editMoment=t.editMoment),g}function _(t){var n=!0===t.success?null:t.error||{code:void 0,description:void 0};return{objectId:t.objectId,globalId:t.globalId,error:n?new c.Z("feature-layer-source:edit-failure",n.description,{code:n.code}):null}}function R(t,n){return new l.Z({attributes:t.attributes,geometry:(0,v.im)((0,o.Z)((0,o.Z)({},t.geometry),{},{spatialReference:n}))})}function j(t,n){var e,r,u;return{adds:(null===t||void 0===t||null===(e=t.adds)||void 0===e?void 0:e.map((function(t){return R(t,n)})))||[],updates:(null===t||void 0===t||null===(r=t.updates)||void 0===r?void 0:r.map((function(t){return{original:R(t[0],n),current:R(t[1],n)}})))||[],deletes:(null===t||void 0===t||null===(u=t.deletes)||void 0===u?void 0:u.map((function(t){return R(t,n)})))||[],spatialReference:n}}function U(t){var n=t.details.raw,e=+n.code,r=+n.extendedCode;return 500===e&&(-2147217144===r||-2147467261===r)}}}]);
//# sourceMappingURL=91836.7368d9bd.chunk.js.map