"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[2644],{2644:function(e,t,i){i.r(t),i.d(t,{arcgis_table_list:function(){return v}});var n=i(74165),r=i(15861),o=i(15671),s=i(43144),a=i(62042),l=i(62153),c=i(53466),h=i(34872),u=i(20077),d=(i(14285),(0,u.m)(l.a9)),v=function(){function e(t){(0,o.Z)(this,e),(0,a.r)(this,t),this.arcgisReady=(0,a.c)(this,"arcgisReady",7),this.arcgisPropertyChange=(0,a.c)(this,"arcgisPropertyChange",7),this.widgetTriggerAction=(0,a.c)(this,"arcgisTriggerAction",7),this.manager=(0,h.u)(this),this.widget=d(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=(0,c.u)()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.collapsed=this.widget.collapsed,this.dragEnabled=this.widget.dragEnabled,this.filterPlaceholder=this.widget.filterPlaceholder,this.filterText=this.widget.filterText,this.icon=this.widget.icon,this.label=this.widget.label,this.minDragEnabledItems=this.widget.minDragEnabledItems,this.minFilterItems=this.widget.minFilterItems,this.selectedItems=this.widget.selectedItems,this.selectionMode=this.widget.selectionMode,this.listItemCreatedFunction=this.widget.listItemCreatedFunction,this.visibleElementsCloseButton=!1,this.visibleElementsCollapseButton=!1,this.visibleElementsErrors=!1,this.visibleElementsFilter=!1,this.visibleElementsFlow=!0,this.visibleElementsHeading=!1,this.visibleElementsStatusIndicators=!0,this.visibleElementsTemporaryTableIndicators=!1,this.position="bottom-left",this.state=this.viewModel.state}return(0,s.Z)(e,[{key:"destroy",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.manager.destroy();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"el",get:function(){return(0,a.g)(this)}}]),e}();v.style="arcgis-table-list{}"},53466:function(e,t,i){i.d(t,{l:function(){return s},m:function(){return a},u:function(){return l}});var n=i(1413),r=i(34872),o=i(62153),s=function(e){return(0,r.b)(e)},a=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.blocking,s=void 0!==i&&i,a=t.name;return(0,r.b)((function(t,i){if(i.onLifecycle((function(){return(0,o.s)(t.el,e("./assets"),(function(e){var r,o=e.t9nLocale,s=e.t9nStrings,a=e.lang;i.exports=(0,n.Z)((0,n.Z)({},s),{},{_lang:a,_t9nLocale:o});var l,c=null!==(r=s.componentLabel)&&void 0!==r?r:s.widgetLabel;"string"===typeof c&&"label"in t&&null==t.label&&(null!==(l=t.label)&&void 0!==l||(t.label=c))}),a)})),s)return i.ready;var r=(0,o.g)(t.el);return{_lang:r.lang,_t9nLocale:r.t9nLocale}}))}},l=function(e){return h},c="arcgisPropertyChange",h=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.b)((function(e,i){var n=e;e.manager.isLit&&(n[c]={emit:function(t){var i=new CustomEvent(c,{detail:t,cancelable:!0});return e.el.dispatchEvent(i),i}});var r=n[c];return i.onLoad((function(){return i.onLifecycle((function(){return t.map((function(t){return e.manager.watch(t,(function(){return r.emit({name:t})}))}))}))})),r}))}},20077:function(e,t,i){i.d(t,{m:function(){return m}});var n=i(74165),r=i(37762),o=i(29439),s=i(15861),a=i(15671),l=i(43144),c=i(88301),h=i(61120),u=i(60136),d=i(29388),v=i(34872),f=(i(62153),i(14285)),m=function(e,t){return function(t,i){return w(t,e,i)}},p=function(e){(0,u.Z)(i,e);var t=(0,d.Z)(i);function i(e,n,r){var o;return(0,a.Z)(this,i),(o=t.call(this,e,n,r))._watchedViewModelProperties=new Map,o._watchedVisibleElementsProperties={},o._isBindingViewModel={value:!0},Object.defineProperty(o.exports,"viewModel",{value:v.a.makeGetterProxy(e,o._watchedViewModelProperties,o._isBindingViewModel)}),Object.defineProperty(o.exports,"visibleElements",{value:o._makeVisibleElementsBinder()}),o}return(0,l.Z)(i,[{key:"hostConnected",value:function(){(0,c.Z)((0,h.Z)(i.prototype),"hostConnected",this).call(this),this._isBindingViewModel.value=!1,this.component.manager.didLoadCalled&&(0,f.a)(this.component)}},{key:"hostLoad",value:function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t,s,a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._watchedProperties.delete("viewModel"),e.next=3,(0,c.Z)((0,h.Z)(i.prototype),"hostLoad",this).call(this);case 3:if(!this.component.manager.destroyed){e.next=5;break}return e.abrupt("return");case 5:if(this._watchMetaProperties(),v.a.reEmitAccessorEvents(this,this._instance,this.reactiveUtils,"widget"),this.onLifecycle((function(){return a.reactiveUtils.watch((function(){return a._instance.viewModel}),(function(e){a.component.viewModel=e}),{initial:!0})})),"object"!==typeof(t=this._instance.viewModel)){e.next=15;break}v.a.reEmitAccessorEvents(this,t,this.reactiveUtils,"viewModel"),v.a.watchComponentUpdates(this,t,this._watchedViewModelProperties),v.a.watchAccessorUpdates(this,t,this._watchedViewModelProperties),e.next=17;break;case 15:if(!(this._watchedViewModelProperties.size>0)){e.next=17;break}throw new Error("The widget does not have a viewModel to bind to. Tried to bind the following properties: ".concat(Array.from(this._watchedViewModelProperties.keys()).join(", ")));case 17:(s=Object.entries(this._watchedVisibleElementsProperties)).length>0&&this.onLifecycle((function(){return s.map((function(e){var t,i,n,s=(0,o.Z)(e,2),l=s[0],c=s[1],h=null!==(t=a._instance.visibleElements)&&void 0!==t?t:{},u=void 0,d=(0,r.Z)(c.slice(0,-1));try{for(d.s();!(i=d.n()).done;){var v=i.value;if("object"!==typeof h[v]||null===h[v]){u=Boolean(h[v]);break}h=h[v]}}catch(p){d.e(p)}finally{d.f()}void 0===u&&(u=Boolean(null===(n=h[c.slice(-1)[0]])||void 0===n||n));l.startsWith("hide");var f=l.startsWith("hide")||l.startsWith("show")?l.startsWith("hide"):u,m=a.component;return"boolean"===typeof m[l]?a._updateWidgetVisibleElement(c,m[l],f):m[l]=!1,a.watch(l,(function(e){return a._updateWidgetVisibleElement(c,e,f)}))}))}));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_updateWidgetVisibleElement",value:function(e,t,i){var n,o,s=null!==(n=this._instance.visibleElements)&&void 0!==n?n:{},a=(0,r.Z)(e.slice(0,-1));try{for(a.s();!(o=a.n()).done;){var l=o.value;"object"===typeof s[l]&&null!==s[l]||(s[l]={}),s=s[l]}}catch(h){a.e(h)}finally{a.f()}var c=Boolean(i?!t:t);s[e.at(-1)]=c}},{key:"hostLoaded",value:function(){var e,t=this,i=this.component.el;null!==(e=i.childElem)&&void 0!==e||(i.childElem=document.createElement("div")),this._instance.container=i.childElem;var n=!1,r=this.component.el.view;Object.defineProperty(this.component.el,"view",{get:function(){var e,i;return null!==(e=t._instance.view)&&void 0!==e?e:null===(i=t._instance.viewModel)||void 0===i?void 0:i.view},set:function(e){"view"in t._instance||"object"!==typeof t._instance.viewModel?t._instance.view=e:t._instance.viewModel.view=e,t._watchViewDestroy(),n||(n=!0,t.component.arcgisReady.emit())},configurable:!0,enumerable:!0}),r&&(this._instance.view=r),this.component.el.isConnected&&((0,f.a)(this.component),this._watchViewDestroy())}},{key:"hostDisconnected",value:function(){var e,t;"object"===typeof this.component.el.childElem&&(null===(e=this.component.el.view)||void 0===e||null===(t=e.ui)||void 0===t||t.remove(this.component.el.childElem))}},{key:"hostDestroy",value:function(){var e;(0,c.Z)((0,h.Z)(i.prototype),"hostDestroy",this).call(this),null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove()}},{key:"_watchMetaProperties",value:function(){var e=this;this.watch("position",(function(t){null!=e.component.el.childElem&&"string"===typeof t&&(0,f.a)(e.component)})),this.watch("referenceElement",(function(){return(0,f.a)(e.component)}))}},{key:"_makeVisibleElementsBinder",value:function(){var e=this;return new Proxy({},{has:function(e,t){return"string"===typeof t||Reflect.has(e,t)},get:function(t,i){if("symbol"===typeof i||i in Promise.prototype)return Reflect.get(t,i);var n=[i],r=e._makeRecursiveProxy(n);return e.component.manager.trackPropKey((function(t){if(void 0===t)throw new Error("Unable to bind visibleElements property. Check for incorrect this.widget.visibleElements usage");e.component[t]=!1,e._watchedVisibleElementsProperties[t]=n}),r)}})}},{key:"_makeRecursiveProxy",value:function(e){var t=new Proxy({},{get:function(i,n){var r=Reflect.get(i,n);return"symbol"===typeof n||n in Promise.prototype?r:(e.push(n),t)}});return t}},{key:"_watchViewDestroy",value:function(){var e,t=this;null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove(),this._watchViewDestroyHandle=this.reactiveUtils.when((function(){var e;return!0===(null===(e=t.component.el.view)||void 0===e?void 0:e.destroyed)}),(function(){t.component.destroy().catch(console.error)}),{sync:!0})}}]),i}(v.A),w=(0,v.p)(p)}}]);
//# sourceMappingURL=2644.4e11dab4.chunk.js.map