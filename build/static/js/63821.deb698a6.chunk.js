"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[63821],{63821:function(e,t,n){n.r(t),n.d(t,{arcgis_track:function(){return v}});var i=n(74165),r=n(15861),o=n(15671),s=n(43144),a=n(62042),c=n(62153),l=n(53466),u=n(34872),h=n(20077),d=(n(14285),(0,h.m)(c.ab)),v=function(){function e(t){(0,o.Z)(this,e),(0,a.r)(this,t),this.arcgisReady=(0,a.c)(this,"arcgisReady",7),this.arcgisPropertyChange=(0,a.c)(this,"arcgisPropertyChange",7),this.widgetTrack=(0,a.c)(this,"arcgisComplete",7),this.widgetTrackError=(0,a.c)(this,"arcgisError",7),this.manager=(0,u.u)(this),this.widget=d(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=(0,l.u)()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.error=this.viewModel.error,this.geolocationOptions=this.widget.geolocationOptions,this.goToLocationEnabled=this.widget.goToLocationEnabled,this.graphic=this.widget.graphic,this.icon=this.widget.icon,this.label=this.widget.label,this.positionFilterFunction=this.viewModel.positionFilterFunction,this.rotationEnabled=this.widget.rotationEnabled,this.scale=this.widget.scale,this.tracking=this.widget.tracking,this.position="bottom-left",this.state=this.viewModel.state}return(0,s.Z)(e,[{key:"destroy",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.manager.destroy();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"start",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.widget.start();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"stop",value:function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.widget.stop();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"el",get:function(){return(0,a.g)(this)}}]),e}();v.style=""},53466:function(e,t,n){n.d(t,{l:function(){return s},m:function(){return a},u:function(){return c}});var i=n(1413),r=n(34872),o=n(62153),s=function(e){return(0,r.b)(e)},a=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.blocking,s=void 0!==n&&n,a=t.name;return(0,r.b)((function(t,n){if(n.onLifecycle((function(){return(0,o.s)(t.el,e("./assets"),(function(e){var r,o=e.t9nLocale,s=e.t9nStrings,a=e.lang;n.exports=(0,i.Z)((0,i.Z)({},s),{},{_lang:a,_t9nLocale:o});var c,l=null!==(r=s.componentLabel)&&void 0!==r?r:s.widgetLabel;"string"===typeof l&&"label"in t&&null==t.label&&(null!==(c=t.label)&&void 0!==c||(t.label=l))}),a)})),s)return n.ready;var r=(0,o.g)(t.el);return{_lang:r.lang,_t9nLocale:r.t9nLocale}}))}},c=function(e){return u},l="arcgisPropertyChange",u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.b)((function(e,n){var i=e;e.manager.isLit&&(i[l]={emit:function(t){var n=new CustomEvent(l,{detail:t,cancelable:!0});return e.el.dispatchEvent(n),n}});var r=i[l];return n.onLoad((function(){return n.onLifecycle((function(){return t.map((function(t){return e.manager.watch(t,(function(){return r.emit({name:t})}))}))}))})),r}))}},20077:function(e,t,n){n.d(t,{m:function(){return p}});var i=n(74165),r=n(37762),o=n(29439),s=n(15861),a=n(15671),c=n(43144),l=n(88301),u=n(61120),h=n(60136),d=n(29388),v=n(34872),f=(n(62153),n(14285)),p=function(e,t){return function(t,n){return m(t,e,n)}},w=function(e){(0,h.Z)(n,e);var t=(0,d.Z)(n);function n(e,i,r){var o;return(0,a.Z)(this,n),(o=t.call(this,e,i,r))._watchedViewModelProperties=new Map,o._watchedVisibleElementsProperties={},o._isBindingViewModel={value:!0},Object.defineProperty(o.exports,"viewModel",{value:v.a.makeGetterProxy(e,o._watchedViewModelProperties,o._isBindingViewModel)}),Object.defineProperty(o.exports,"visibleElements",{value:o._makeVisibleElementsBinder()}),o}return(0,c.Z)(n,[{key:"hostConnected",value:function(){(0,l.Z)((0,u.Z)(n.prototype),"hostConnected",this).call(this),this._isBindingViewModel.value=!1,this.component.manager.didLoadCalled&&(0,f.a)(this.component)}},{key:"hostLoad",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,s,a=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._watchedProperties.delete("viewModel"),e.next=3,(0,l.Z)((0,u.Z)(n.prototype),"hostLoad",this).call(this);case 3:if(!this.component.manager.destroyed){e.next=5;break}return e.abrupt("return");case 5:if(this._watchMetaProperties(),v.a.reEmitAccessorEvents(this,this._instance,this.reactiveUtils,"widget"),this.onLifecycle((function(){return a.reactiveUtils.watch((function(){return a._instance.viewModel}),(function(e){a.component.viewModel=e}),{initial:!0})})),"object"!==typeof(t=this._instance.viewModel)){e.next=15;break}v.a.reEmitAccessorEvents(this,t,this.reactiveUtils,"viewModel"),v.a.watchComponentUpdates(this,t,this._watchedViewModelProperties),v.a.watchAccessorUpdates(this,t,this._watchedViewModelProperties),e.next=17;break;case 15:if(!(this._watchedViewModelProperties.size>0)){e.next=17;break}throw new Error("The widget does not have a viewModel to bind to. Tried to bind the following properties: ".concat(Array.from(this._watchedViewModelProperties.keys()).join(", ")));case 17:(s=Object.entries(this._watchedVisibleElementsProperties)).length>0&&this.onLifecycle((function(){return s.map((function(e){var t,n,i,s=(0,o.Z)(e,2),c=s[0],l=s[1],u=null!==(t=a._instance.visibleElements)&&void 0!==t?t:{},h=void 0,d=(0,r.Z)(l.slice(0,-1));try{for(d.s();!(n=d.n()).done;){var v=n.value;if("object"!==typeof u[v]||null===u[v]){h=Boolean(u[v]);break}u=u[v]}}catch(w){d.e(w)}finally{d.f()}void 0===h&&(h=Boolean(null===(i=u[l.slice(-1)[0]])||void 0===i||i));c.startsWith("hide");var f=c.startsWith("hide")||c.startsWith("show")?c.startsWith("hide"):h,p=a.component;return"boolean"===typeof p[c]?a._updateWidgetVisibleElement(l,p[c],f):p[c]=!1,a.watch(c,(function(e){return a._updateWidgetVisibleElement(l,e,f)}))}))}));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_updateWidgetVisibleElement",value:function(e,t,n){var i,o,s=null!==(i=this._instance.visibleElements)&&void 0!==i?i:{},a=(0,r.Z)(e.slice(0,-1));try{for(a.s();!(o=a.n()).done;){var c=o.value;"object"===typeof s[c]&&null!==s[c]||(s[c]={}),s=s[c]}}catch(u){a.e(u)}finally{a.f()}var l=Boolean(n?!t:t);s[e.at(-1)]=l}},{key:"hostLoaded",value:function(){var e,t=this,n=this.component.el;null!==(e=n.childElem)&&void 0!==e||(n.childElem=document.createElement("div")),this._instance.container=n.childElem;var i=!1,r=this.component.el.view;Object.defineProperty(this.component.el,"view",{get:function(){var e,n;return null!==(e=t._instance.view)&&void 0!==e?e:null===(n=t._instance.viewModel)||void 0===n?void 0:n.view},set:function(e){"view"in t._instance||"object"!==typeof t._instance.viewModel?t._instance.view=e:t._instance.viewModel.view=e,t._watchViewDestroy(),i||(i=!0,t.component.arcgisReady.emit())},configurable:!0,enumerable:!0}),r&&(this._instance.view=r),this.component.el.isConnected&&((0,f.a)(this.component),this._watchViewDestroy())}},{key:"hostDisconnected",value:function(){var e,t;"object"===typeof this.component.el.childElem&&(null===(e=this.component.el.view)||void 0===e||null===(t=e.ui)||void 0===t||t.remove(this.component.el.childElem))}},{key:"hostDestroy",value:function(){var e;(0,l.Z)((0,u.Z)(n.prototype),"hostDestroy",this).call(this),null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove()}},{key:"_watchMetaProperties",value:function(){var e=this;this.watch("position",(function(t){null!=e.component.el.childElem&&"string"===typeof t&&(0,f.a)(e.component)})),this.watch("referenceElement",(function(){return(0,f.a)(e.component)}))}},{key:"_makeVisibleElementsBinder",value:function(){var e=this;return new Proxy({},{has:function(e,t){return"string"===typeof t||Reflect.has(e,t)},get:function(t,n){if("symbol"===typeof n||n in Promise.prototype)return Reflect.get(t,n);var i=[n],r=e._makeRecursiveProxy(i);return e.component.manager.trackPropKey((function(t){if(void 0===t)throw new Error("Unable to bind visibleElements property. Check for incorrect this.widget.visibleElements usage");e.component[t]=!1,e._watchedVisibleElementsProperties[t]=i}),r)}})}},{key:"_makeRecursiveProxy",value:function(e){var t=new Proxy({},{get:function(n,i){var r=Reflect.get(n,i);return"symbol"===typeof i||i in Promise.prototype?r:(e.push(i),t)}});return t}},{key:"_watchViewDestroy",value:function(){var e,t=this;null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove(),this._watchViewDestroyHandle=this.reactiveUtils.when((function(){var e;return!0===(null===(e=t.component.el.view)||void 0===e?void 0:e.destroyed)}),(function(){t.component.destroy().catch(console.error)}),{sync:!0})}}]),n}(v.A),m=(0,v.p)(w)}}]);
//# sourceMappingURL=63821.deb698a6.chunk.js.map