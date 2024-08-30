"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[95283],{17768:function(e,t,n){n.d(t,{BV:function(){return h},Q4:function(){return l},c5:function(){return c},pE:function(){return o}});var i=n(15671),r=n(43144),a=n(16889),o=function(){function e(t,n){(0,i.Z)(this,e),this.min=t,this.max=n,this.range=n-t}return(0,r.Z)(e,[{key:"normalize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u(this.range,this.min,this.max,e,t,n)}},{key:"clamp",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,a.uZ)(e-t,this.min,this.max)+t}},{key:"monotonic",value:function(e,t,n){return e<t?t:t+s(this.range,e-t,n)}},{key:"minimalMonotonic",value:function(e,t,n){return u(this.range,e,e+this.range,t,n)}},{key:"center",value:function(e,t,n){return t=this.monotonic(e,t,n),this.normalize((e+t)/2,n)}},{key:"diff",value:function(e,t,n){return this.monotonic(e,t,n)-e}},{key:"shortestSignedDiff",value:function(e,t){e=this.normalize(e);var n=(t=this.normalize(t))-e,i=t<e?this.minimalMonotonic(e,t)-e:t-this.minimalMonotonic(t,e);return Math.abs(n)<Math.abs(i)?n:i}},{key:"contains",value:function(e,t,n){return t=this.minimalMonotonic(e,t),(n=this.minimalMonotonic(e,n))>e&&n<t}}]),e}();function u(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];return(i-=r)<t?i+=s(e,t-i):i>n&&(i-=s(e,i-n)),a&&i===n&&(i=t),i+r}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Math.ceil((t-n)/e)*e+n}var c=new o(0,2*Math.PI),l=new o(-Math.PI,Math.PI),h=new o(0,360)},13611:function(e,t,n){n.d(t,{$X:function(){return u},AK:function(){return P},EU:function(){return I},Fp:function(){return h},Fv:function(){return m},I6:function(){return w},IH:function(){return o},JG:function(){return r},LG:function(){return S},TE:function(){return f},TK:function(){return x},U1:function(){return T},VV:function(){return l},bA:function(){return d},bI:function(){return p},c:function(){return M},fS:function(){return C},iu:function(){return E},kC:function(){return k},kE:function(){return _},lu:function(){return H},od:function(){return v},t7:function(){return b},t8:function(){return a},tk:function(){return g},we:function(){return y}});var i=n(24204);function r(e,t){return e[0]=t[0],e[1]=t[1],e}function a(e,t,n){return e[0]=t,e[1]=n,e}function o(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function u(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function s(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e}function c(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e}function l(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e}function h(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e}function d(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function v(e,t,n,i){return e[0]=t[0]+n[0]*i,e[1]=t[1]+n[1]*i,e}function f(e,t){var n=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(n*n+i*i)}function p(e,t){var n=t[0]-e[0],i=t[1]-e[1];return n*n+i*i}function _(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)}function y(e){var t=e[0],n=e[1];return t*t+n*n}function g(e,t){return e[0]=-t[0],e[1]=-t[1],e}function m(e,t){var n=t[0],i=t[1],r=n*n+i*i;return r>0&&(r=1/Math.sqrt(r),e[0]=t[0]*r,e[1]=t[1]*r),e}function P(e,t){return e[0]*t[0]+e[1]*t[1]}function k(e,t,n){var i=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=i,e}function b(e,t,n,i){var r=t[0],a=t[1];return e[0]=r+i*(n[0]-r),e[1]=a+i*(n[1]-a),e}function M(e,t,n){var i=t[0],r=t[1];return e[0]=n[0]*i+n[2]*r,e[1]=n[1]*i+n[3]*r,e}function E(e,t,n){var i=t[0],r=t[1];return e[0]=n[0]*i+n[2]*r+n[4],e[1]=n[1]*i+n[3]*r+n[5],e}function T(e,t,n,i){var r=t[0]-n[0],a=t[1]-n[1],o=Math.sin(i),u=Math.cos(i);return e[0]=r*u-a*o+n[0],e[1]=r*o+a*u+n[1],e}function I(e,t){var n=e[0],i=e[1],r=t[0],a=t[1],o=n*n+i*i;o>0&&(o=1/Math.sqrt(o));var u=r*r+a*a;u>0&&(u=1/Math.sqrt(u));var s=(n*r+i*a)*o*u;return s>1?0:s<-1?Math.PI:Math.acos(s)}function w(e,t){return e[0]===t[0]&&e[1]===t[1]}function C(e,t){var n=e[0],r=e[1],a=t[0],o=t[1],u=(0,i.bn)();return Math.abs(n-a)<=u*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-o)<=u*Math.max(1,Math.abs(r),Math.abs(o))}function S(e,t,n,i,r){var a=t[0]-n[0],o=t[1]-n[1],u=(i[0]*a+i[1]*o)*(r-1);return a=i[0]*u,o=i[1]*u,e[0]=t[0]+a,e[1]=t[1]+o,e}var Z=_,H=u,D=s,A=c,x=f,q=p,K=y;Object.freeze(Object.defineProperty({__proto__:null,add:o,angle:I,ceil:function(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e},copy:r,cross:k,dist:x,distance:f,div:A,divide:c,dot:P,equals:C,exactEquals:w,floor:function(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e},inverse:function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e},len:Z,length:_,lerp:b,max:h,min:l,mul:D,multiply:s,negate:g,normalize:m,projectAndScale:S,random:function(e,t){t=t||1;var n=2*(0,i.FD)()*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e},rotate:T,round:function(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e},scale:d,scaleAndAdd:v,set:a,sqrDist:q,sqrLen:K,squaredDistance:p,squaredLength:y,str:function(e){return"vec2("+e[0]+", "+e[1]+")"},sub:H,subtract:u,transformMat2:M,transformMat2d:E,transformMat3:function(e,t,n){var i=t[0],r=t[1];return e[0]=n[0]*i+n[3]*r+n[6],e[1]=n[1]*i+n[4]*r+n[7],e},transformMat4:function(e,t,n){var i=t[0],r=t[1];return e[0]=n[0]*i+n[4]*r+n[12],e[1]=n[1]*i+n[5]*r+n[13],e}},Symbol.toStringTag,{value:"Module"}))},76432:function(e,t,n){n.d(t,{t:function(){return c}});var i=n(15671),r=n(43144),a=n(84652),o=n(39052),u=n(56885),s=function(){function e(t,n){(0,i.Z)(this,e),this._observable=new u.s,this._value=t,this._equalityFunction=n}return(0,r.Z)(e,[{key:"value",get:function(){return(0,o.it)(this._observable),this._value},set:function(e){this._equalityFunction(e,this._value)||(this._value=e,this._observable.notify())}},{key:"mutate",value:function(e){e(this._value),this._observable.notify()}}]),e}();function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.y7;return new s(e,t)}},76419:function(e,t,n){n.d(t,{L:function(){return s}});var i=n(37762),r=n(15671),a=n(43144),o=n(18107),u=n(3073),s=function(){function e(t,n){var i=this;for(var a in(0,r.Z)(this,e),this._owner=n,this._properties={},this._afterDispatchHandle=null,t){var s=t[a],c=new o.e(s,void 0,void 0,2,2);this._properties[a]={pool:c,acquired:[]}}this._afterDispatchHandle=(0,u.Fs)((function(){return i._release()}))}return(0,a.Z)(e,[{key:"destroy",value:function(){for(var e in this._afterDispatchHandle&&(this._afterDispatchHandle.remove(),this._afterDispatchHandle=null),this._properties){var t,n=this._properties[e],r=(0,i.Z)(n.acquired);try{for(r.s();!(t=r.n()).done;){var a=t.value;(0,u.NC)(a)||n.pool.release(a)}}catch(o){r.e(o)}finally{r.f()}n.pool.destroy(),n.pool=null,n.acquired=null}this._properties=null,this._owner=null}},{key:"get",value:function(e){var t=this._owner._get(e),n=this._properties[e],i=n.pool.acquire();for(n.acquired.push(i);i===t;)n.acquired.push(i),i=n.pool.acquire();return i}},{key:"_release",value:function(){for(var e in this._properties){var t,n=this._properties[e],r=0,a=(0,i.Z)(n.acquired);try{for(a.s();!(t=a.n()).done;){var o=t.value;(0,u.NC)(o)?n.acquired[r++]=o:n.pool.release(o)}}catch(s){a.e(s)}finally{a.f()}n.acquired.length=r}}}]),e}()},45371:function(e,t,n){n.d(t,{a:function(){return u}});var i=n(37762),r=n(15671),a=n(43144),o=(n(93169),n(32718),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];(0,r.Z)(this,e),this.eventType=t,this.keyModifiers=n}return(0,a.Z)(e,[{key:"matches",value:function(e){if(e.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;var t,n=e.modifiers,r=(0,i.Z)(this.keyModifiers);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(!n.has(a))return!1}}catch(o){r.e(o)}finally{r.f()}return!0}}]),e}()),u=function(){function e(t){(0,r.Z)(this,e),this._manager=null,this._incoming={},this._outgoing={},this._incomingEventMatches=null,this._incomingEventTypes=null,this._outgoingEventTypes=null,this._hasSideEffects=t}return(0,a.Z)(e,[{key:"incomingEventMatches",get:function(){if(!this._incomingEventMatches)for(var e in this._incomingEventMatches=[],this._incoming){var t,n=this._incoming[e],r=(0,i.Z)(n);try{for(r.s();!(t=r.n()).done;){var a=t.value;this._incomingEventMatches.push(a.match)}}catch(o){r.e(o)}finally{r.f()}}return this._incomingEventMatches}},{key:"incomingEventTypes",get:function(){return this._incomingEventTypes||(this._incomingEventTypes=this.incomingEventMatches.map((function(e){return e.eventType}))),this._incomingEventTypes}},{key:"outgoingEventTypes",get:function(){return this._outgoingEventTypes||(this._outgoingEventTypes=Object.keys(this._outgoing)),this._outgoingEventTypes}},{key:"hasSideEffects",get:function(){return this._hasSideEffects}},{key:"hasPendingInputs",get:function(){return!1}},{key:"onInstall",value:function(e){var t=this;this._manager||(e.setEventCallback((function(e){return t._handleEvent(e)})),e.setUninstallCallback((function(){return t._onUninstall()})),this._manager=e)}},{key:"onUninstall",value:function(){}},{key:"registerIncoming",value:function(e,t,n){var i,r=this;"function"==typeof t?(n=t,i=[]):i=t||[];var a="string"==typeof e?new o(e,i):e,u=function(){r._incomingEventTypes=null,r._incomingEventMatches=null},c=function(e){var t=r._incoming[e.match.eventType];if(t){var n=t.indexOf(e);t.splice(n,1),u(),r._manager&&r._manager.updateDependencies()}},l=new s(a,n,{onPause:c,onRemove:c,onResume:function(e){var t=r._incoming[e.match.eventType];t&&!t.includes(e)&&(t.push(e),u(),r._manager&&r._manager.updateDependencies())}}),h=this._incoming[a.eventType];return h||(h=[],this._incoming[a.eventType]=h),h.push(l),u(),this._manager&&this._manager.updateDependencies(),l}},{key:"registerOutgoing",value:function(e){var t=this;if(this._outgoing[e])throw new Error("There is already a callback registered for this outgoing InputEvent: "+e);var n=new c(e,{onEmit:function(e,n,i,r){var a;null===(a=t._manager)||void 0===a||a.emit(e.eventType,n,i,r)},onRemove:function(e){var n;delete t._outgoing[e.eventType],null===(n=t._manager)||void 0===n||n.updateDependencies()}});return this._outgoing[e]=n,this._outgoingEventTypes=null,this._manager&&this._manager.updateDependencies(),n}},{key:"startCapturingPointer",value:function(e){var t;null===(t=this._manager)||void 0===t||t.setPointerCapture(e,!0)}},{key:"stopCapturingPointer",value:function(e){var t;null===(t=this._manager)||void 0===t||t.setPointerCapture(e,!1)}},{key:"refreshHasPendingInputs",value:function(){var e;null===(e=this._manager)||void 0===e||e.refreshHasPendingInputs()}},{key:"_onUninstall",value:function(){this._manager&&(this.onUninstall(),this._manager=null)}},{key:"_handleEvent",value:function(e){var t=this._incoming[e.type];if(t){var n,r=(0,i.Z)(t);try{for(r.s();!(n=r.n()).done;){var a,o=n.value;if(o.match.matches(e)&&(null!==(a=o.callback)&&void 0!==a&&a.call(o,e),e.shouldStopPropagation()))break}}catch(u){r.e(u)}finally{r.f()}}}}]),e}(),s=function(){function e(t,n,i){(0,r.Z)(this,e),this.match=t,this._callback=n,this._handler=i}return(0,a.Z)(e,[{key:"pause",value:function(){this._handler.onPause(this)}},{key:"resume",value:function(){this._handler.onResume(this)}},{key:"remove",value:function(){this._handler.onRemove(this)}},{key:"callback",get:function(){return this._callback}}]),e}(),c=function(){function e(t,n){(0,r.Z)(this,e),this.eventType=t,this._removed=!1,this._handler=n}return(0,a.Z)(e,[{key:"emit",value:function(e,t,n){this._removed||this._handler.onEmit(this,e,t,n)}},{key:"remove",value:function(){this._removed=!0,this._handler.onRemove(this)}}]),e}()},1614:function(e,t,n){n.d(t,{$:function(){return k},f:function(){return T}});var i=n(37762),r=n(15671),a=n(43144),o=n(97326),u=n(60136),s=n(29388),c=n(27366),l=n(7138),h=(n(93169),n(32718)),d=n(43e3),v=n(49861),f=(n(84936),n(69912)),p=n(76419),_=n(67750),y=n(45371),g=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,!0))._onChange=e,i._value="mouse",i._x=null,i._y=null,i.registerIncoming("pointer-move",(function(e){i._update(e.data)})),i}return(0,a.Z)(n,[{key:"_update",value:function(e){var t="touch"===e.native.pointerType?"touch":"mouse",n=e.x,i=e.y;t===this._value&&this._x===n&&this._y===i||(this._value=t,this._x=n,this._y=i,this._onChange(t,n,i))}}]),n}(y.a),m=n(76432),P=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this,!0))._activeTouchPointerIds=new Set,e._multiTouchActive=(0,m.t)(!1),e._onPointerAdd=function(t){var n=t.data;"touch"===n.pointerType&&(e._activeTouchPointerIds.add(n.native.pointerId),e._update())},e._onPointerRemove=function(t){var n=t.data;"touch"===n.pointerType&&(e._activeTouchPointerIds.delete(n.native.pointerId),e._update())},e.registerIncoming("pointer-down",e._onPointerAdd),e.registerIncoming("pointer-up",e._onPointerRemove),e.registerIncoming("pointer-capture-lost",e._onPointerRemove),e.registerIncoming("pointer-cancel",e._onPointerRemove),e}return(0,a.Z)(n,[{key:"multiTouchActive",get:function(){return this._multiTouchActive.value}},{key:"_update",value:function(){this._multiTouchActive.value=this._activeTouchPointerIds.size>1}}]),n}(y.a),k=function(e){(0,u.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,r.Z)(this,n),(i=t.call(this,e))._pointerCaptures=new Map,i._nameToGroup={},i._handlers=[],i._handlersPriority=[],i._currentPropagation=null,i._updateDependenciesAfterPropagation=!1,i._sourceEvents=new Set,i._keyModifiers=new Set,i._activeKeyModifiers=new Set,i._stoppedPropagationEventIds=new Set,i.primaryKey=_.C,i._latestPointerType="mouse",i._propertiesPool=new p.L({latestPointerLocation:I},(0,o.Z)(i)),i.latestPointerLocation=null,i._paused=!1,i.test={timestamp:void 0,hasCurrentPropagation:function(){return!!i._currentPropagation}},i}return(0,a.Z)(n,[{key:"initialize",value:function(){this.eventSource.onEventReceived=this._onEventReceived.bind(this),this._installRecognizers()}},{key:"destroy",value:function(){for(var e=0,t=Object.keys(this._nameToGroup);e<t.length;e++){var n=t[e];this.uninstallHandlers(n)}this.eventSource.destroy(),this._currentPropagation=null,this._propertiesPool.destroy()}},{key:"hasPendingInputs",get:function(){return this._handlers.some((function(e){return e.handler.hasPendingInputs}))}},{key:"latestPointerType",get:function(){return this._latestPointerType}},{key:"multiTouchActive",get:function(){return this._multiTouchHandler.multiTouchActive}},{key:"updating",get:function(){return this.hasPendingInputs||this._paused}},{key:"installHandlers",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T.INTERNAL;if(!this._nameToGroup[e]&&0!==t.length){var r={name:e,handlers:t.map((function(e){return{handler:e,active:!0,removed:!1,priorityIndex:0,groupPriority:i,eventCallback:null,uninstallCallback:null}}))};this._nameToGroup[e]=r;for(var a=function(e){var t=r.handlers[e];n._handlers.push(t),t.handler.onInstall({updateDependencies:function(){n.updateDependencies()},emit:function(e,i,r,a,o){n._emitInputEvent(t.priorityIndex+1,e,i,r,o,a)},setPointerCapture:function(e,i){n._setPointerCapture(r,t,e,i)},setEventCallback:function(e){t.eventCallback=e},setUninstallCallback:function(e){t.uninstallCallback=e},refreshHasPendingInputs:function(){n.notifyChange("hasPendingInputs")}})},o=r.handlers.length-1;o>=0;o--)a(o);this.updateDependencies()}}},{key:"uninstallHandlers",value:function(e){var t=this._nameToGroup[e];t?(t.handlers.forEach((function(e){var t;e.removed=!0,null===(t=e.uninstallCallback)||void 0===t||t.call(e)})),delete this._nameToGroup[e],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):h.Z.getLogger(this).error("There is no InputHandler group registered under the name `"+e+"`")}},{key:"hasHandlers",value:function(e){return void 0!==this._nameToGroup[e]}},{key:"isModifierKeyDown",value:function(e){return this._activeKeyModifiers&&this._activeKeyModifiers.has(e)}},{key:"updateDependencies",value:function(){if(this._currentPropagation)this._updateDependenciesAfterPropagation=!0;else{this._updateDependenciesAfterPropagation=!1;var e=new Set,t=new Set;this._handlersPriority=[];for(var n=this._handlers.length-1;n>=0;n--){var r=this._handlers[n];r.priorityIndex=n,this._handlersPriority.push(r)}this._handlersPriority=this._sortHandlersPriority(this._handlersPriority);for(var a=this._handlersPriority.length-1;a>=0;a--){var o=this._handlersPriority[a];o.priorityIndex=a;var u=o.handler.hasSideEffects;if(!u){var s,c=(0,i.Z)(o.handler.outgoingEventTypes);try{for(c.s();!(s=c.n()).done;){var l=s.value;if(e.has(l)){u=!0;break}}}catch(g){c.e(g)}finally{c.f()}}if(u){var h,d=(0,i.Z)(o.handler.incomingEventMatches);try{for(d.s();!(h=d.n()).done;){var v=h.value;e.add(v.eventType);var f,p=(0,i.Z)(v.keyModifiers);try{for(p.s();!(f=p.n()).done;){var y=f.value;(0,_.w)(y)||t.add(y)}}catch(g){p.e(g)}finally{p.f()}}}catch(g){d.e(g)}finally{d.f()}}o.active=u}this._sourceEvents=e,this._keyModifiers=t,this._pointerCaptures.size>0&&this._sourceEvents.add("pointer-capture-lost"),this._keyModifiers.size>0&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up")),this.eventSource&&(this.eventSource.activeEvents=this._sourceEvents)}}},{key:"_setLatestPointer",value:function(e,t,n){this._latestPointerType=e;var i=this._get("latestPointerLocation");if(null==i||i.x!==t||i.y!==n){var r=this._propertiesPool.get("latestPointerLocation");r.x=t,r.y=n,this._set("latestPointerLocation",r)}}},{key:"_onEventReceived",value:function(e,t){if("pointer-capture-lost"===e){var n=t;this._pointerCaptures.delete(n.native.pointerId)}this._updateKeyModifiers(e,t);var i=null!=this.test.timestamp?this.test.timestamp:t.native?t.native.timestamp:void 0,r=t.native?t.native.cancelable:void 0;this._emitInputEventFromSource(e,t,i,r)}},{key:"_updateKeyModifiers",value:function(e,t){var n=this;if(t){var i=!1,r=function(){if(!i){var e=new Set;n._activeKeyModifiers.forEach((function(t){e.add(t)})),n._activeKeyModifiers=e,i=!0}},a=function(e,t){t&&!n._activeKeyModifiers.has(e)?(r(),n._activeKeyModifiers.add(e)):!t&&n._activeKeyModifiers.has(e)&&(r(),n._activeKeyModifiers.delete(e))};if("key-down"===e||"key-up"===e){var o=t.key;this._keyModifiers.has(o)&&a(o,"key-down"===e)}var u=t.native;a("Alt",!(!u||!u.altKey)),a("Control",!(!u||!u.ctrlKey)),a("Ctrl",!(!u||!u.ctrlKey)),a("Shift",!(!u||!u.shiftKey)),a("Meta",!(!u||!u.metaKey)),a("Primary",this._activeKeyModifiers.has(this.primaryKey))}}},{key:"_installRecognizers",value:function(){var e=this;this._latestPointerHandler=new g((function(t,n,i){return e._setLatestPointer(t,n,i)})),this._multiTouchHandler=new P,this.installHandlers("input-manager-logic",[this._latestPointerHandler,this._multiTouchHandler],T.ALWAYS),this.recognizers.length>0&&this.installHandlers("default",this.recognizers,T.INTERNAL)}},{key:"_setPointerCapture",value:function(e,t,n,i){var r=e.name+"-"+t.priorityIndex,a=this._pointerCaptures.get(n.pointerId)||new Set;this._pointerCaptures.set(n.pointerId,a),i?(a.add(r),1===a.size&&this.eventSource&&this.eventSource.setPointerCapture(n,!0)):a.has(r)&&(a.delete(r),0===a.size&&(this._pointerCaptures.delete(n.pointerId),this.eventSource&&this.eventSource.setPointerCapture(n,!1)))}},{key:"_garbageCollectRemovedHandlers",value:function(){this._handlers=this._handlers.filter((function(e){return!e.removed})),this.updateDependencies()}},{key:"_emitInputEventFromSource",value:function(e,t,n,i){this._emitInputEvent(0,e,t,n,i)}},{key:"_emitInputEvent",value:function(e,t,n,i,r,a){var o=void 0!==i?i:this._currentPropagation?this._currentPropagation.timestamp:performance.now(),u=void 0!==r&&r,s={event:new E(t,n,o,a||this._activeKeyModifiers,u),priorityIndex:e};this._currentPropagation?this._currentPropagation.events.push(s):this._doNewPropagation(s)}},{key:"_doNewPropagation",value:function(e){this._currentPropagation={events:new d.Z,currentHandler:null,needsHandlerGarbageCollect:!1,timestamp:e.event.timestamp},this._currentPropagation.events.push(e),this._continuePropagation()}},{key:"_continuePropagation",value:function(){var e=this;this._paused=!1;var t=this._currentPropagation;if(t){for(;t.events.length>0;){var n,i=t.events.pop(),r=i.event,a=i.priorityIndex,o=null===(n=r.data)||void 0===n?void 0:n.eventId;if(null==o||!this._stoppedPropagationEventIds.has(o))for(t.currentHandler=this._handlersPriority[a];t.currentHandler;){if(t.currentHandler.removed)t.needsHandlerGarbageCollect=!0;else{var u,s;if(t.currentHandler.active&&!r.shouldStopPropagation()&&null!==(u=(s=t.currentHandler).eventCallback)&&void 0!==u&&u.call(s,r),r.shouldStopPropagation()){null!=o&&this._stoppedPropagationEventIds.add(o);break}if(r.shouldPausePropagation((function(){return e._continuePropagation()})))return void this._pausePropagation({event:r,priorityIndex:t.currentHandler.priorityIndex+1})}t.currentHandler=this._handlersPriority[t.currentHandler.priorityIndex+1]}}t.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers(),this.hasPendingInputs||this._stoppedPropagationEventIds.clear(),this._currentPropagation=null,this._updateDependenciesAfterPropagation&&this.updateDependencies()}}},{key:"_pausePropagation",value:function(e){var t=new d.Z;t.push(e);var n=this._currentPropagation;if(n){for(;n.events.length;)t.push(n.events.pop());n.events=t,n.currentHandler=null,this._paused=!0}}},{key:"_compareHandlerPriority",value:function(e,t){if(e.handler.hasSideEffects!==t.handler.hasSideEffects)return e.handler.hasSideEffects?1:-1;if(e.groupPriority!==t.groupPriority)return e.groupPriority>t.groupPriority?-1:1;var n,r=(0,i.Z)(e.handler.incomingEventMatches);try{for(r.s();!(n=r.n()).done;){var a,o=n.value,u=(0,i.Z)(t.handler.incomingEventMatches);try{var s=function(){var e=a.value;if(o.eventType!==e.eventType)return"continue";var t=o.keyModifiers.filter((function(t){return e.keyModifiers.includes(t)}));return t.length===o.keyModifiers.length!==(t.length===e.keyModifiers.length)?{v:o.keyModifiers.length>e.keyModifiers.length?-1:1}:void 0};for(u.s();!(a=u.n()).done;){var c=s();if("continue"!==c&&"object"===typeof c)return c.v}}catch(l){u.e(l)}finally{u.f()}}}catch(l){r.e(l)}finally{r.f()}return e.priorityIndex>t.priorityIndex?-1:1}},{key:"_sortHandlersPriority",value:function(e){var t,n=[],r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){for(var a=t.value,o=0;o<n.length&&this._compareHandlerPriority(a,n[o])>=0;)o++;n.splice(o,0,a)}}catch(u){r.e(u)}finally{r.f()}return n}},{key:"debug",get:function(){var e=this,t=function(t){var n=e._setPointerCapture;e._setPointerCapture=function(){},t(),e._setPointerCapture=n};return{injectEvent:function(n,i){t((function(){e._onEventReceived(n,i)}))},disablePointerCapture:t}}}]),n}(l.default);(0,c._)([(0,v.Cb)({readOnly:!0})],k.prototype,"hasPendingInputs",null),(0,c._)([(0,v.Cb)({constructOnly:!0})],k.prototype,"eventSource",void 0),(0,c._)([(0,v.Cb)({constructOnly:!0})],k.prototype,"recognizers",void 0),(0,c._)([(0,v.Cb)()],k.prototype,"_latestPointerType",void 0),(0,c._)([(0,v.Cb)()],k.prototype,"latestPointerType",null),(0,c._)([(0,v.Cb)()],k.prototype,"multiTouchActive",null),(0,c._)([(0,v.Cb)({readOnly:!0})],k.prototype,"latestPointerLocation",void 0),(0,c._)([(0,v.Cb)()],k.prototype,"_paused",void 0),(0,c._)([(0,v.Cb)({readOnly:!0})],k.prototype,"updating",null),k=(0,c._)([(0,f.j)("esri.views.input.InputManager")],k);var b,M,E=function(){function e(t,n,i,a,o){(0,r.Z)(this,e),this.type=t,this.data=n,this.timestamp=i,this.modifiers=a,this.cancelable=o,this._propagationState=b.NONE,this._resumeCallback=null}return(0,a.Z)(e,[{key:"stopPropagation",value:function(){this._propagationState|=b.STOPPED}},{key:"shouldStopPropagation",value:function(){return!!(this._propagationState&b.STOPPED)}},{key:"async",value:function(e){var t=this;this._propagationState|=b.PAUSED;var n=function(e,n){t._propagationState&=~b.PAUSED;var i=t._resumeCallback;if(t._resumeCallback=null,i&&i(),n)throw e;return e};return("function"==typeof e?e():e).then((function(e){return n(e,!1)}),(function(e){return n(e,!0)}))}},{key:"shouldPausePropagation",value:function(e){return!!(this._propagationState&b.PAUSED)&&(this._resumeCallback=e,!0)}},{key:"preventDefault",value:function(){this.data.native.preventDefault()}}]),e}();(M=b||(b={}))[M.NONE=0]="NONE",M[M.STOPPED=1]="STOPPED",M[M.PAUSED=2]="PAUSED";var T={ALWAYS:1,DEFAULT:0,TOOL:-1,WIDGET:-2,INTERNAL:-3},I=(0,a.Z)((function e(){(0,r.Z)(this,e)}))},67750:function(e,t,n){n.d(t,{C:function(){return i},w:function(){return a}});var i=(0,n(93169).Z)("mac")?"Meta":"Control",r=new Set(["Alt","Control","Meta","Shift","Ctrl","Primary"]),a=function(e){return r.has(e)}},7021:function(e,t,n){n.d(t,{z:function(){return i}});var i={anchor:"esri-widget__anchor",anchorDisabled:"esri-widget__anchor--disabled",button:"esri-button",buttonDisabled:"esri-button--disabled",buttonHalf:"esri-button--half",buttonSecondary:"esri-button--secondary",buttonSmall:"esri-button--small",buttonTertiary:"esri-button--tertiary",buttonThird:"esri-button--third",disabled:"esri-disabled",empty:"esri-widget__content--empty",emptyIllustration:"esri-widget__content-illustration--empty",heading:"esri-widget__heading",hidden:"esri-hidden",input:"esri-input",interactive:"esri-interactive",loader:"esri-widget__loader",loaderAnimation:"esri-widget__loader-animation",loaderText:"esri-widget__loader-text",menu:"esri-menu",menuHeader:"esri-menu__header",menuItem:"esri-menu__list-item",menuItemActive:"esri-menu__list-item--active",menuItemFocus:"esri-menu__list-item--focus",menuList:"esri-menu__list",panel:"esri-widget--panel",panelHeightOnly:"esri-widget--panel-height-only",primaryTick:"primary-tick",primaryTickAmPm:"primary-tick__ampm",primaryTickLabel:"primary-tick__label",rotating:"esri-rotating",secondaryTick:"secondary-tick",select:"esri-select",table:"esri-widget__table",widget:"esri-widget",widgetButton:"esri-widget--button",widgetButtonActive:"esri-widget--button-active",widgetDisabled:"esri-widget--disabled"}}}]);
//# sourceMappingURL=95283.0ec2feb3.chunk.js.map