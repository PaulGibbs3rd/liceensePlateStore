"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[65623],{79347:function(t,e,n){n.d(e,{e:function(){return x}});var r,i,u,o=n(84397),h={exports:{}};r=h,i=function(){function t(t,n,i){i=i||2;var u,o,h,s,f,a,l,c=n&&n.length,y=c?n[0]*i:t.length,v=e(t,0,y,i,!0),d=[];if(!v||v.next===v.prev)return d;if(c&&(v=x(t,n,v,i)),t.length>80*i){u=h=t[0],o=s=t[1];for(var g=i;g<y;g+=i)(f=t[g])<u&&(u=f),(a=t[g+1])<o&&(o=a),f>h&&(h=f),a>s&&(s=a);l=0!==(l=Math.max(h-u,s-o))?1/l:0}return r(v,d,i,u,o,l),d}function e(t,e,n,r,i){var u,o;if(i===O(t,e,n,r)>0)for(u=e;u<n;u+=r)o=M(u,t[u],t[u+1],o);else for(u=n-r;u>=e;u-=r)o=M(u,t[u],t[u+1],o);if(o&&_(o,o.next)){var h=o.next;z(o),o=h}return o}function n(t,e){if(!t)return t;e||(e=t);var n,r=t;do{if(n=!1,r.steiner||!_(r,r.next)&&0!==p(r.prev,r,r.next))r=r.next;else{var i=r.prev;if(z(r),(r=e=i)===r.next)break;n=!0}}while(n||r!==e);return e}function r(t,e,x,s,f,a,l){if(t){!l&&a&&c(t,s,f,a);for(var y,v,d=t;t.prev!==t.next;)if(y=t.prev,v=t.next,a?u(t,s,f,a):i(t))e.push(y.i/x),e.push(t.i/x),e.push(v.i/x),z(t),t=v.next,d=v.next;else if((t=v)===d){l?1===l?r(t=o(n(t),e,x),e,x,s,f,a,2):2===l&&h(t,e,x,s,f,a):r(n(t),e,x,s,f,a,1);break}}}function i(t){var e=t.prev,n=t,r=t.next;if(p(e,n,r)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(d(e.x,e.y,n.x,n.y,r.x,r.y,i.x,i.y)&&p(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(t,e,n,r){var i=t.prev,u=t,o=t.next;if(p(i,u,o)>=0)return!1;for(var h=i.x<u.x?i.x<o.x?i.x:o.x:u.x<o.x?u.x:o.x,x=i.y<u.y?i.y<o.y?i.y:o.y:u.y<o.y?u.y:o.y,s=i.x>u.x?i.x>o.x?i.x:o.x:u.x>o.x?u.x:o.x,f=i.y>u.y?i.y>o.y?i.y:o.y:u.y>o.y?u.y:o.y,a=y(h,x,e,n,r),l=y(s,f,e,n,r),c=t.prevZ,v=t.nextZ;c&&c.z>=a&&v&&v.z<=l;){if(c!==t.prev&&c!==t.next&&d(i.x,i.y,u.x,u.y,o.x,o.y,c.x,c.y)&&p(c.prev,c,c.next)>=0)return!1;if(c=c.prevZ,v!==t.prev&&v!==t.next&&d(i.x,i.y,u.x,u.y,o.x,o.y,v.x,v.y)&&p(v.prev,v,v.next)>=0)return!1;v=v.nextZ}for(;c&&c.z>=a;){if(c!==t.prev&&c!==t.next&&d(i.x,i.y,u.x,u.y,o.x,o.y,c.x,c.y)&&p(c.prev,c,c.next)>=0)return!1;c=c.prevZ}for(;v&&v.z<=l;){if(v!==t.prev&&v!==t.next&&d(i.x,i.y,u.x,u.y,o.x,o.y,v.x,v.y)&&p(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function o(t,e,r){var i=t;do{var u=i.prev,o=i.next.next;!_(u,o)&&b(u,i,i.next,o)&&Z(u,o)&&Z(o,u)&&(e.push(u.i/r),e.push(i.i/r),e.push(o.i/r),z(i),z(i.next),i=t=o),i=i.next}while(i!==t);return n(i)}function h(t,e,i,u,o,h){var x=t;do{for(var s=x.next.next;s!==x.prev;){if(x.i!==s.i&&g(x,s)){var f=w(x,s);return x=n(x,x.next),f=n(f,f.next),r(x,e,i,u,o,h),void r(f,e,i,u,o,h)}s=s.next}x=x.next}while(x!==t)}function x(t,r,i,u){var o,h,x,f=[];for(o=0,h=r.length;o<h;o++)(x=e(t,r[o]*u,o<h-1?r[o+1]*u:t.length,u,!1))===x.next&&(x.steiner=!0),f.push(v(x));for(f.sort(s),o=0;o<f.length;o++)i=n(i=a(f[o],i),i.next);return i}function s(t,e){return t.x-e.x}function f(t){if(t.next.prev===t)return t;for(var e=t;;){var n=e.next;if(n.prev===e||n===e||n===t)break;e=n}return e}function a(t,e){var r=function(t,e){var n,r=e,i=t.x,u=t.y,o=-1/0;do{if(u<=r.y&&u>=r.next.y&&r.next.y!==r.y){var h=r.x+(u-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(h<=i&&h>o){if(o=h,h===i){if(u===r.y)return r;if(u===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!n)return null;if(i===o)return n;var x,s=n,f=n.x,a=n.y,c=1/0;r=n;do{i>=r.x&&r.x>=f&&i!==r.x&&d(u<a?i:o,u,f,a,u<a?o:i,u,r.x,r.y)&&(x=Math.abs(u-r.y)/(i-r.x),Z(r,t)&&(x<c||x===c&&(r.x>n.x||r.x===n.x&&l(n,r)))&&(n=r,c=x)),r=r.next}while(r!==s);return n}(t,e);if(!r)return e;var i=w(r,t),u=n(r,r.next),o=f(i);return n(o,o.next),u=f(u),f(e===r?u:e)}function l(t,e){return p(t.prev,t,e.prev)<0&&p(e.next,t,t.next)<0}function c(t,e,n,r){var i=t;do{null===i.z&&(i.z=y(i.x,i.y,e,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,function(t){var e,n,r,i,u,o,h,x,s=1;do{for(n=t,t=null,u=null,o=0;n;){for(o++,r=n,h=0,e=0;e<s&&(h++,r=r.nextZ);e++);for(x=s;h>0||x>0&&r;)0!==h&&(0===x||!r||n.z<=r.z)?(i=n,n=n.nextZ,h--):(i=r,r=r.nextZ,x--),u?u.nextZ=i:t=i,i.prevZ=u,u=i;n=r}u.nextZ=null,s*=2}while(o>1)}(i)}function y(t,e,n,r,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function v(t){var e=t,n=t;do{(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next}while(e!==t);return n}function d(t,e,n,r,i,u,o,h){return(i-o)*(e-h)-(t-o)*(u-h)>=0&&(t-o)*(r-h)-(n-o)*(e-h)>=0&&(n-o)*(u-h)-(i-o)*(r-h)>=0}function g(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(t,e){var n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&b(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}(t,e)&&(Z(t,e)&&Z(e,t)&&function(t,e){var n=t,r=!1,i=(t.x+e.x)/2,u=(t.y+e.y)/2;do{n.y>u!=n.next.y>u&&n.next.y!==n.y&&i<(n.next.x-n.x)*(u-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==t);return r}(t,e)&&(p(t.prev,t,e.prev)||p(t,e.prev,e))||_(t,e)&&p(t.prev,t,t.next)>0&&p(e.prev,e,e.next)>0)}function p(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function _(t,e){return t.x===e.x&&t.y===e.y}function b(t,e,n,r){var i=k(p(t,e,n)),u=k(p(t,e,r)),o=k(p(n,r,t)),h=k(p(n,r,e));return i!==u&&o!==h||!(0!==i||!m(t,n,e))||!(0!==u||!m(t,r,e))||!(0!==o||!m(n,t,r))||!(0!==h||!m(n,e,r))}function m(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function k(t){return t>0?1:t<0?-1:0}function Z(t,e){return p(t.prev,t,t.next)<0?p(t,e,t.next)>=0&&p(t,t.prev,e)>=0:p(t,e,t.prev)<0||p(t,t.next,e)<0}function w(t,e){var n=new A(t.i,t.x,t.y),r=new A(e.i,e.x,e.y),i=t.next,u=e.prev;return t.next=e,e.prev=t,n.next=i,i.prev=n,r.next=n,n.prev=r,u.next=r,r.prev=u,r}function M(t,e,n,r){var i=new A(t,e,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function z(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function A(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O(t,e,n,r){for(var i=0,u=e,o=n-r;u<n;u+=r)i+=(t[o]-t[u])*(t[u+1]+t[o+1]),o=u;return i}return t.deviation=function(t,e,n,r){var i=e&&e.length,u=i?e[0]*n:t.length,o=Math.abs(O(t,0,u,n));if(i)for(var h=0,x=e.length;h<x;h++){var s=e[h]*n,f=h<x-1?e[h+1]*n:t.length;o-=Math.abs(O(t,s,f,n))}var a=0;for(h=0;h<r.length;h+=3){var l=r[h]*n,c=r[h+1]*n,y=r[h+2]*n;a+=Math.abs((t[l]-t[y])*(t[c+1]-t[l+1])-(t[l]-t[c])*(t[y+1]-t[l+1]))}return 0===o&&0===a?0:Math.abs((a-o)/o)},t.flatten=function(t){for(var e=t[0][0].length,n={vertices:[],holes:[],dimensions:e},r=0,i=0;i<t.length;i++){for(var u=0;u<t[i].length;u++)for(var o=0;o<e;o++)n.vertices.push(t[i][u][o]);i>0&&(r+=t[i-1].length,n.holes.push(r))}return n},t},void 0!==(u=i())&&(r.exports=u);var x=(0,o.g)(h.exports)},93311:function(t,e,n){function r(){return new Float32Array(3)}function i(t){var e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function u(t,e,n){var r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=n,r}function o(){return r()}function h(){return u(1,1,1)}function x(){return u(1,0,0)}function s(){return u(0,1,0)}function f(){return u(0,0,1)}n.d(e,{Ue:function(){return r},al:function(){return u},d9:function(){return i},ll:function(){return o}});var a=o(),l=h(),c=x(),y=s(),v=f();Object.freeze(Object.defineProperty({__proto__:null,ONES:l,UNIT_X:c,UNIT_Y:y,UNIT_Z:v,ZEROS:a,clone:i,create:r,createView:function(t,e){return new Float32Array(t,e,3)},fromValues:u,ones:h,unitX:x,unitY:s,unitZ:f,zeros:o},Symbol.toStringTag,{value:"Module"}))},46618:function(t,e,n){n.d(e,{JM:function(){return u},R8:function(){return r},cn:function(){return i},v7:function(){return o}});var r=!0,i=32,u=1.5,o=200},61441:function(t,e,n){n.d(e,{As:function(){return o},cD:function(){return h},sy:function(){return u}});var r=n(8548),i=n(61109),u={geometry:[new i.G("a_pos",2,r.g.BYTE,0,2)]},o={geometry:[new i.G("a_pos",2,r.g.BYTE,0,4),new i.G("a_tex",2,r.g.BYTE,2,4)]},h={geometry:[new i.G("a_pos",2,r.g.UNSIGNED_SHORT,0,4)]}},72900:function(t,e,n){n.d(e,{I:function(){return a}});var r=n(29439),i=n(15671),u=n(43144),o=n(60136),h=n(29388),x=n(29303),s=n(87422),f=n(73828),a=function(t){(0,o.Z)(n,t);var e=(0,h.Z)(n);function n(t,r,u,o,h,x){var s,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:h,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:x;return(0,i.Z)(this,n),(s=e.call(this)).tileDebugInfoTexture=null,s.debugInfo={display:{length:0,minOrderedLength:0,minUnorderedLength:0,triangleCount:0},memory:{bytesUsed:0,bytesReserved:0}},s._destroyed=!1,s.key=new f.Z(t),s.resolution=r,s.x=u,s.y=o,s.width=h,s.height=x,s.rangeX=a,s.rangeY=l,s}return(0,u.Z)(n,[{key:"destroy",value:function(){this.tileDebugInfoTexture&&(this.tileDebugInfoTexture.dispose(),this.tileDebugInfoTexture=null),this._destroyed=!0}},{key:"debugSlot",get:function(){for(var t=this;t.parent!==this._stage;){if(!t.parent)return 0;t=t.parent}return this._stage.children.indexOf(t)}},{key:"setTransform",value:function(t){var e=this.resolution/(t.resolution*t.pixelRatio),n=this.transforms.tileMat3,i=t.toScreenNoRotation([0,0],[this.x,this.y]),u=(0,r.Z)(i,2),o=u[0],h=u[1],s=this.width/this.rangeX*e,f=this.height/this.rangeY*e;(0,x.t8)(n,s,0,0,0,f,0,o,h,1),(0,x.Jp)(this.transforms.displayViewScreenMat3,t.displayViewMat3,n)}},{key:"destroyed",get:function(){return this._destroyed}}]),n}(s.s)},28289:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(15671),i=n(43144),u=n(30932),o=function(){function t(e,n,i,o){(0,r.Z)(this,t),this.computedX=0,this.computedY=0,this.center=(0,u.al)(e,n),this.centerT=(0,u.Ue)(),this.halfWidth=i/2,this.halfHeight=o/2,this.width=i,this.height=o}return(0,i.Z)(t,[{key:"x",get:function(){return this.center[0]},set:function(t){this.center[0]=t}},{key:"y",get:function(){return this.center[1]},set:function(t){this.center[1]=t}},{key:"blX",get:function(){return this.center[0]+this.halfWidth}},{key:"blY",get:function(){return this.center[1]+this.halfHeight}},{key:"trX",get:function(){return this.center[0]-this.halfWidth}},{key:"trY",get:function(){return this.center[1]-this.halfHeight}},{key:"xmin",get:function(){return this.x-this.halfWidth}},{key:"xmax",get:function(){return this.x+this.halfWidth}},{key:"ymin",get:function(){return this.y-this.halfHeight}},{key:"ymax",get:function(){return this.y+this.halfHeight}},{key:"clone",value:function(){return new t(this.x,this.y,this.width,this.height)}},{key:"serialize",value:function(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}},{key:"findCollisionDelta",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=Math.abs(t.centerT[0]-this.centerT[0]),r=Math.abs(t.centerT[1]-this.centerT[1]),i=(t.halfWidth+this.halfWidth+e)/n,u=(t.halfHeight+this.halfHeight+e)/r,o=Math.min(i,u);return Math.log2(o)}},{key:"extend",value:function(t){var e=Math.min(this.xmin,t.xmin),n=Math.min(this.ymin,t.ymin),r=Math.max(this.xmax,t.xmax)-e,i=Math.max(this.ymax,t.ymax)-n,u=e+r/2,o=n+i/2;this.width=r,this.height=i,this.halfWidth=r/2,this.halfHeight=i/2,this.x=u,this.y=o}}],[{key:"deserialize",value:function(e){return new t(e.readF32(),e.readF32(),e.readInt32(),e.readInt32())}}]),t}()},45412:function(t,e,n){n.d(e,{U:function(){return a}});var r=n(15671),i=n(43144),u=n(32718),o=n(92026),h=n(18722),x=n(8548),s=n(3384),f=function(){return u.Z.getLogger("esri.views.webgl.VertexArrayObject")},a=function(){function t(e,n,i,u){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;(0,r.Z)(this,t),this._context=e,this._locations=n,this._layout=i,this._buffers=u,this._indexBuffer=o,this._glName=null,this._initialized=!1}return(0,i.Z)(t,[{key:"glName",get:function(){return this._glName}},{key:"context",get:function(){return this._context}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},{key:"byteSize",get:function(){var t=this;return Object.keys(this._buffers).reduce((function(e,n){return e+t._buffers[n].usedMemory}),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}},{key:"usedMemory",get:function(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*h.ru}},{key:"dispose",value:function(){if(this._context){for(var t in this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers){var e;null!==(e=this._buffers[t])&&void 0!==e&&e.dispose(),delete this._buffers[t]}this._indexBuffer=(0,o.M2)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&f().warn("Leaked WebGL VAO")}},{key:"disposeVAOOnly",value:function(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(x._g.VertexArrayObject,this)),this._context=null}},{key:"initialize",value:function(){if(!this._initialized){var t=this._context.gl,e=t.createVertexArray();t.bindVertexArray(e),this._bindLayout(),t.bindVertexArray(null),this._glName=e,this._context.instanceCounter.increment(x._g.VertexArrayObject,this),this._initialized=!0}}},{key:"bind",value:function(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}},{key:"_bindLayout",value:function(){var t=this._buffers,e=this._layout,n=this._indexBuffer;t||f().error("Vertex buffer dictionary is empty!");var r=this._context.gl;for(var i in t){var u=t[i];u||f().error("Vertex buffer is uninitialized!");var o=e[i];o||f().error("Vertex element descriptor is empty!"),(0,s.XP)(this._context,this._locations,u,o)}null!=n&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n.glName)}},{key:"unbind",value:function(){this.initialize(),this._context.gl.bindVertexArray(null)}}]),t}()}}]);
//# sourceMappingURL=65623.83d711e4.chunk.js.map