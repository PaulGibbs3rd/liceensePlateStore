"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[37366],{37366:function(e,t,n){n.r(t),n.d(t,{arcgis_area_measurement_2d:function(){return v}});var i=n(74165),o=n(15861),r=n(15671),s=n(43144),a=n(62042),c=n(62153),l=n(53466),u=n(34872),h=n(20077),d=(n(14285),(0,h.m)(c.l)),v=function(){function e(t){(0,r.Z)(this,e),(0,a.r)(this,t),this.arcgisReady=(0,a.c)(this,"arcgisReady",7),this.arcgisPropertyChange=(0,a.c)(this,"arcgisPropertyChange",7),this.manager=(0,u.u)(this),this.widget=d(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=(0,l.u)()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.label=this.widget.label,this.icon=this.widget.icon,this.unit=this.widget.unit,this.unitOptions=this.widget.unitOptions,this.position="bottom-left",this.state=this.viewModel.state}return(0,s.Z)(e,[{key:"destroy",value:function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.manager.destroy();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"el",get:function(){return(0,a.g)(this)}}]),e}();v.style=""},53466:function(e,t,n){n.d(t,{l:function(){return s},m:function(){return a},u:function(){return c}});var i=n(1413),o=n(34872),r=n(62153),s=function(e){return(0,o.b)(e)},a=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.blocking,s=void 0!==n&&n,a=t.name;return(0,o.b)((function(t,n){if(n.onLifecycle((function(){return(0,r.s)(t.el,e("./assets"),(function(e){var o,r=e.t9nLocale,s=e.t9nStrings,a=e.lang;n.exports=(0,i.Z)((0,i.Z)({},s),{},{_lang:a,_t9nLocale:r});var c,l=null!==(o=s.componentLabel)&&void 0!==o?o:s.widgetLabel;"string"===typeof l&&"label"in t&&null==t.label&&(null!==(c=t.label)&&void 0!==c||(t.label=l))}),a)})),s)return n.ready;var o=(0,r.g)(t.el);return{_lang:o.lang,_t9nLocale:o.t9nLocale}}))}},c=function(e){return u},l="arcgisPropertyChange",u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.b)((function(e,n){var i=e;e.manager.isLit&&(i[l]={emit:function(t){var n=new CustomEvent(l,{detail:t,cancelable:!0});return e.el.dispatchEvent(n),n}});var o=i[l];return n.onLoad((function(){return n.onLifecycle((function(){return t.map((function(t){return e.manager.watch(t,(function(){return o.emit({name:t})}))}))}))})),o}))}},20077:function(e,t,n){n.d(t,{m:function(){return p}});var i=n(74165),o=n(37762),r=n(29439),s=n(15861),a=n(15671),c=n(43144),l=n(88301),u=n(61120),h=n(60136),d=n(29388),v=n(34872),f=(n(62153),n(14285)),p=function(e,t){return function(t,n){return m(t,e,n)}},w=function(e){(0,h.Z)(n,e);var t=(0,d.Z)(n);function n(e,i,o){var r;return(0,a.Z)(this,n),(r=t.call(this,e,i,o))._watchedViewModelProperties=new Map,r._watchedVisibleElementsProperties={},r._isBindingViewModel={value:!0},Object.defineProperty(r.exports,"viewModel",{value:v.a.makeGetterProxy(e,r._watchedViewModelProperties,r._isBindingViewModel)}),Object.defineProperty(r.exports,"visibleElements",{value:r._makeVisibleElementsBinder()}),r}return(0,c.Z)(n,[{key:"hostConnected",value:function(){(0,l.Z)((0,u.Z)(n.prototype),"hostConnected",this).call(this),this._isBindingViewModel.value=!1,this.component.manager.didLoadCalled&&(0,f.a)(this.component)}},{key:"hostLoad",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,s,a=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._watchedProperties.delete("viewModel"),e.next=3,(0,l.Z)((0,u.Z)(n.prototype),"hostLoad",this).call(this);case 3:if(!this.component.manager.destroyed){e.next=5;break}return e.abrupt("return");case 5:if(this._watchMetaProperties(),v.a.reEmitAccessorEvents(this,this._instance,this.reactiveUtils,"widget"),this.onLifecycle((function(){return a.reactiveUtils.watch((function(){return a._instance.viewModel}),(function(e){a.component.viewModel=e}),{initial:!0})})),"object"!==typeof(t=this._instance.viewModel)){e.next=15;break}v.a.reEmitAccessorEvents(this,t,this.reactiveUtils,"viewModel"),v.a.watchComponentUpdates(this,t,this._watchedViewModelProperties),v.a.watchAccessorUpdates(this,t,this._watchedViewModelProperties),e.next=17;break;case 15:if(!(this._watchedViewModelProperties.size>0)){e.next=17;break}throw new Error("The widget does not have a viewModel to bind to. Tried to bind the following properties: ".concat(Array.from(this._watchedViewModelProperties.keys()).join(", ")));case 17:(s=Object.entries(this._watchedVisibleElementsProperties)).length>0&&this.onLifecycle((function(){return s.map((function(e){var t,n,i,s=(0,r.Z)(e,2),c=s[0],l=s[1],u=null!==(t=a._instance.visibleElements)&&void 0!==t?t:{},h=void 0,d=(0,o.Z)(l.slice(0,-1));try{for(d.s();!(n=d.n()).done;){var v=n.value;if("object"!==typeof u[v]||null===u[v]){h=Boolean(u[v]);break}u=u[v]}}catch(w){d.e(w)}finally{d.f()}void 0===h&&(h=Boolean(null===(i=u[l.slice(-1)[0]])||void 0===i||i));c.startsWith("hide");var f=c.startsWith("hide")||c.startsWith("show")?c.startsWith("hide"):h,p=a.component;return"boolean"===typeof p[c]?a._updateWidgetVisibleElement(l,p[c],f):p[c]=!1,a.watch(c,(function(e){return a._updateWidgetVisibleElement(l,e,f)}))}))}));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_updateWidgetVisibleElement",value:function(e,t,n){var i,r,s=null!==(i=this._instance.visibleElements)&&void 0!==i?i:{},a=(0,o.Z)(e.slice(0,-1));try{for(a.s();!(r=a.n()).done;){var c=r.value;"object"===typeof s[c]&&null!==s[c]||(s[c]={}),s=s[c]}}catch(u){a.e(u)}finally{a.f()}var l=Boolean(n?!t:t);s[e.at(-1)]=l}},{key:"hostLoaded",value:function(){var e,t=this,n=this.component.el;null!==(e=n.childElem)&&void 0!==e||(n.childElem=document.createElement("div")),this._instance.container=n.childElem;var i=!1,o=this.component.el.view;Object.defineProperty(this.component.el,"view",{get:function(){var e,n;return null!==(e=t._instance.view)&&void 0!==e?e:null===(n=t._instance.viewModel)||void 0===n?void 0:n.view},set:function(e){"view"in t._instance||"object"!==typeof t._instance.viewModel?t._instance.view=e:t._instance.viewModel.view=e,t._watchViewDestroy(),i||(i=!0,t.component.arcgisReady.emit())},configurable:!0,enumerable:!0}),o&&(this._instance.view=o),this.component.el.isConnected&&((0,f.a)(this.component),this._watchViewDestroy())}},{key:"hostDisconnected",value:function(){var e,t;"object"===typeof this.component.el.childElem&&(null===(e=this.component.el.view)||void 0===e||null===(t=e.ui)||void 0===t||t.remove(this.component.el.childElem))}},{key:"hostDestroy",value:function(){var e;(0,l.Z)((0,u.Z)(n.prototype),"hostDestroy",this).call(this),null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove()}},{key:"_watchMetaProperties",value:function(){var e=this;this.watch("position",(function(t){null!=e.component.el.childElem&&"string"===typeof t&&(0,f.a)(e.component)})),this.watch("referenceElement",(function(){return(0,f.a)(e.component)}))}},{key:"_makeVisibleElementsBinder",value:function(){var e=this;return new Proxy({},{has:function(e,t){return"string"===typeof t||Reflect.has(e,t)},get:function(t,n){if("symbol"===typeof n||n in Promise.prototype)return Reflect.get(t,n);var i=[n],o=e._makeRecursiveProxy(i);return e.component.manager.trackPropKey((function(t){if(void 0===t)throw new Error("Unable to bind visibleElements property. Check for incorrect this.widget.visibleElements usage");e.component[t]=!1,e._watchedVisibleElementsProperties[t]=i}),o)}})}},{key:"_makeRecursiveProxy",value:function(e){var t=new Proxy({},{get:function(n,i){var o=Reflect.get(n,i);return"symbol"===typeof i||i in Promise.prototype?o:(e.push(i),t)}});return t}},{key:"_watchViewDestroy",value:function(){var e,t=this;null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove(),this._watchViewDestroyHandle=this.reactiveUtils.when((function(){var e;return!0===(null===(e=t.component.el.view)||void 0===e?void 0:e.destroyed)}),(function(){t.component.destroy().catch(console.error)}),{sync:!0})}}]),n}(v.A),m=(0,v.p)(w)}}]);
//# sourceMappingURL=37366.d57363eb.chunk.js.map