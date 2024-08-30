"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[73725],{46798:function(e,t,n){n.d(t,{q:function(){return d}});var i=n(37762),r=n(1413),a=n(15671),s=n(43144),o=n(63780),l=n(42537),u=n(32718),h=n(66978),c=n(70431),d=function(){function e(t,n,s,o){var l=this,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};(0,a.Z)(this,e),this._mainMethod=n,this._transferLists=s,this._listeners=[],this._promise=(0,c.bA)(t,(0,r.Z)((0,r.Z)({},h),{},{schedule:o})).then((function(e){if(void 0===l._thread){l._thread=e,l._promise=null,h.hasInitialize&&l.broadcast({},"initialize");var t,n=(0,i.Z)(l._listeners);try{for(n.s();!(t=n.n()).done;){var r=t.value;l._connectListener(r)}}catch(a){n.e(a)}finally{n.f()}}else e.close()})),this._promise.catch((function(e){return u.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return(0,s.Z)(e,[{key:"on",value:function(e,t){var n=this,i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,l.kB)((function(){i.removed=!0,(0,o.Od)(n._listeners,i),n._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,n){var i=this;if(this._thread){var r=this._transferLists[e],a=r?r(t):[];return this._thread.invoke(e,t,{transferList:a,signal:n})}return this._promise?this._promise.then((function(){return(0,h.k_)(n),i.invokeMethod(e,t,n)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var n=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return n.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}()},48932:function(e,t,n){n.d(t,{v:function(){return s}});var i=n(37762),r=n(15671),a=n(43144),s=function(){function e(t,n,i,a){(0,r.Z)(this,e),this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in t?(this.values=t.pixelData,this.width=t.width,this.height=t.height,this.noDataValue=t.noDataValue):(this.values=t,this.width=n,this.height=i,this.noDataValue=a)}return(0,a.Z)(e,[{key:"hasNoDataValues",get:function(){if(null==this._hasNoDataValues){var e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}},{key:"minValue",get:function(){return this._ensureBounds(),this._minValue}},{key:"maxValue",get:function(){return this._ensureBounds(),this._maxValue}},{key:"_ensureBounds",value:function(){if(null==this._minValue){var e,t=this.noDataValue,n=this.values,r=1/0,a=-1/0,s=!0,o=(0,i.Z)(n);try{for(o.s();!(e=o.n()).done;){var l=e.value;l===t?this._hasNoDataValues=!0:(r=l<r?l:r,a=l>a?l:a,s=!1)}}catch(u){o.e(u)}finally{o.f()}s?(this._minValue=0,this._maxValue=0):(this._minValue=r,this._maxValue=a>-3e38?a:0)}}}]),e}()},41665:function(e,t,n){n.d(t,{w:function(){return u}});var i=n(15671),r=n(43144),a=n(60136),s=n(29388),o=function(e){(0,a.Z)(n,e);var t=(0,s.Z)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(0,i.Z)(this,n),(e=t.call(this,"LercWorker","_decode",{_decode:function(e){return[e.buffer]}},r,{strategy:"dedicated"})).schedule=r,e.ref=0,e}return(0,r.Z)(n,[{key:"decode",value:function(e,t,n){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},n):Promise.resolve(null)}},{key:"release",value:function(){var e=this;--this.ref<=0&&(l.forEach((function(t,n){t===e&&l.delete(n)})),this.destroy())}}]),n}(n(46798).q),l=new Map;function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=l.get(e);return t||(null!=e?(t=new o((function(t){return e.immediate.schedule(t)})),l.set(e,t)):(t=new o,l.set(null,t))),++t.ref,t}},73725:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(74165),r=n(15861),a=n(15671),s=n(43144),o=n(60136),l=n(29388),u=n(27366),h=n(10064),c=n(32718),d=n(92026),f=n(66978),v=n(49861),_=(n(93169),n(84936),n(69912)),y=n(48932),m=n(41665),k=n(42069),p=n(77385),g=n(35535),V=n(53379),w=n(67581),Z=function(e){(0,o.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,a.Z)(this,n),(e=t.apply(this,arguments)).type="elevation-3d",e}return(0,s.Z)(n,[{key:"tileInfo",get:function(){return this.layer.tileInfo}},{key:"initialize",value:function(){var e,t,n,i=this.view,r=null===(e=i.map)||void 0===e?void 0:e.allLayers,a=r&&r.includes(this.layer),s=null===(t=i.map)||void 0===t||null===(n=t.ground)||void 0===n?void 0:n.layers,o=s&&s.includes(this.layer);if(a&&!o){var l=new h.Z("layerview:elevation-layer-only","3D elevation layer '".concat(this.layer.id,"' can only be added to layers in map.ground"));this.addResolvingPromise(Promise.reject(l))}this._lercDecoder=(0,m.w)(i.resourceController),this._addTilingSchemeMatchPromise()}},{key:"destroy",value:function(){this._lercDecoder=(0,d.RY)(this._lercDecoder)}},{key:"fetchTile",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t,n){var r,a,s,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.layer,!(0,V.FZ)(r)){e.next=6;break}return e.next=4,r.fetchTile(t[0],t[1],t[2],{noDataValue:g.zl,signal:n.signal});case 4:return a=e.sent,e.abrupt("return",(0,f.Hc)(n)?void c.Z.getLogger(this).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."):a);case 6:return s=this.getTileUrl(t),e.next=9,n.requester.request(s,"binary",n);case 9:return o=e.sent,e.next=12,this._lercDecoder.decode(o,{noDataValue:g.zl},n.signal);case 12:if(!(l=e.sent)){e.next=15;break}return e.abrupt("return",new y.v(l));case 15:throw new Error("LERC decoding failed");case 16:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),n}((0,p.r)((0,k.A)(w.Z)));(0,u._)([(0,v.Cb)()],Z.prototype,"layer",void 0),(0,u._)([(0,v.Cb)()],Z.prototype,"tileInfo",null);var b=Z=(0,u._)([(0,_.j)("esri.views.3d.layers.ElevationLayerView3D")],Z)}}]);
//# sourceMappingURL=73725.152685a7.chunk.js.map