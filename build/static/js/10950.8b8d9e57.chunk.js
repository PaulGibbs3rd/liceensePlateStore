"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[10950],{10950:function(e,t,i){i.r(t),i.d(t,{arcgis_features:function(){return g},arcgis_map:function(){return b}});var n=i(44925),r=i(74165),s=i(15861),a=i(15671),o=i(43144),c=i(62042),u=i(53466),h=i(34872),l=i(62153),v=i(20077),d=i(14285),p=["basemap"],w=["ground"],f=(0,v.m)(l.n),g=function(){function e(t){(0,a.Z)(this,e),(0,c.r)(this,t),this.arcgisReady=(0,c.c)(this,"arcgisReady",7),this.arcgisPropertyChange=(0,c.c)(this,"arcgisPropertyChange",7),this.widgetTriggerAction=(0,c.c)(this,"arcgisTriggerAction",7),this.manager=(0,h.u)(this),this.widget=f(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=(0,u.u)()("selectedFeature","selectedFeatureIndex","state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.collapsed=this.widget.collapsed,this.actions=this.viewModel.actions,this.active=this.widget.active,this.content=this.widget.content,this.features=this.widget.features,this.featuresPerPage=this.viewModel.featuresPerPage,this.featureViewModelAbilities=this.viewModel.featureViewModelAbilities,this.goToOverride=this.viewModel.goToOverride,this.headingLevel=this.widget.headingLevel,this.includeDefaultActions=this.viewModel.includeDefaultActions,this.icon=this.widget.icon,this.label=this.widget.label,this.map=this.widget.map,this.promises=this.widget.promises,this.selectedFeature=this.widget.selectedFeature,this.selectedFeatureIndex=this.widget.selectedFeatureIndex,this.spatialReference=this.widget.spatialReference,this.featuresTitle=this.widget.title,this.timeZone=this.widget.timeZone,this.hideActionBar=this.widget.visibleElements.actionBar,this.hideCloseButton=this.widget.visibleElements.closeButton,this.showCollapseButton=this.widget.visibleElements.collapseButton,this.hideFeatureNavigation=this.widget.visibleElements.featureNavigation,this.hideFlow=this.widget.visibleElements.flow,this.hideHeading=this.widget.visibleElements.heading,this.hideSpinner=this.widget.visibleElements.spinner,this.position="bottom-left",this.state=this.viewModel.state}return(0,o.Z)(e,[{key:"destroy",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.manager.destroy();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchFeatures",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this.widget)||void 0===n?void 0:n.fetchFeatures(t,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"clear",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.widget)||void 0===t||t.clear();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"close",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.widget)||void 0===t||t.close();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"next",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(t=this.widget)||void 0===t?void 0:t.next());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"open",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(i=this.widget)||void 0===i||i.open(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"previous",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null===(t=this.widget)||void 0===t?void 0:t.previous());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"triggerAction",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(i=this.widget)||void 0===i||i.triggerAction(t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"el",get:function(){return(0,c.g)(this)}}]),e}();g.style="arcgis-features{}";var m=(0,h.m)(l.a),y=(0,h.m)(l.b),b=function(){function e(t){var i=this;(0,a.Z)(this,e),(0,c.r)(this,t),this.arcgisViewReadyChange=(0,c.c)(this,"arcgisViewReadyChange",7),this.arcgisViewChange=(0,c.c)(this,"arcgisViewChange",7),this.arcgisViewClick=(0,c.c)(this,"arcgisViewClick",7),this.arcgisViewDoubleClick=(0,c.c)(this,"arcgisViewDoubleClick",7),this.arcgisViewDrag=(0,c.c)(this,"arcgisViewDrag",7),this.arcgisViewHold=(0,c.c)(this,"arcgisViewHold",7),this.arcgisViewImmediateClick=(0,c.c)(this,"arcgisViewImmediateClick",7),this.arcgisViewImmediateDoubleClick=(0,c.c)(this,"arcgisViewImmediateDoubleClick",7),this.arcgisViewKeyDown=(0,c.c)(this,"arcgisViewKeyDown",7),this.arcgisViewKeyUp=(0,c.c)(this,"arcgisViewKeyUp",7),this.arcgisViewLayerviewCreate=(0,c.c)(this,"arcgisViewLayerviewCreate",7),this.arcgisViewLayerviewCreateError=(0,c.c)(this,"arcgisViewLayerviewCreateError",7),this.arcgisViewLayerviewDestroy=(0,c.c)(this,"arcgisViewLayerviewDestroy",7),this.arcgisViewMouseWheel=(0,c.c)(this,"arcgisViewMouseWheel",7),this.arcgisViewPointerDown=(0,c.c)(this,"arcgisViewPointerDown",7),this.arcgisViewPointerEnter=(0,c.c)(this,"arcgisViewPointerEnter",7),this.arcgisViewPointerLeave=(0,c.c)(this,"arcgisViewPointerLeave",7),this.arcgisViewPointerMove=(0,c.c)(this,"arcgisViewPointerMove",7),this.arcgisViewPointerUp=(0,c.c)(this,"arcgisViewPointerUp",7),this.manager=(0,h.u)(this),this.reactiveUtils=(0,u.l)(l.i),this._map=m(this,{editConstructorProperties:this._editMapProperties}),this._setChildElement=function(e){i.el.childElem=e},this.autoDestroyDisabled=!1,this.view=this.manager.readonly(y(this,{editConstructorProperties:this._editViewProperties})),this.map=this.view.map,this.allLayerViews=this.view.allLayerViews,this.background=this.view.background,this.basemapView=this.view.basemapView,this.basemap=this._map.basemap,this.center=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.center)&&void 0!==t?t:e},set:function(e){var t=(0,d.p)(e,i.ready?i.view:void 0);return i.ready?(i.view.center=t,i.view.center):t}}),this.constraints=this.view.constraints,this.extent=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.extent)&&void 0!==t?t:e},set:function(e,t){return i.view.ready?(!e||null!==t&&void 0!==t&&t.equals(e)||(i.view.extent=e),i.view.extent):e}}),this.fatalError=this.view.fatalError,this.floors=this.view.floors,this.gamepad=this.manager.getSet(void 0,{get:function(){return i.ready?i.view.input.gamepad:void 0},set:"ignore"}),this.graphics=this.view.graphics,this.ground=this._map.ground,this.highlightOptions=this.view.highlightOptions,this.interacting=this.manager.getSet(!1,{get:function(){return i.view.interacting},set:"ignore"}),this.itemId=this.manager.getSet(void 0,{get:function(e){var t,n;return null!==(t=null===(n=i._map.portalItem)||void 0===n?void 0:n.id)&&void 0!==t?t:e},set:function(e){return i.ready&&h.a.reCreate(i._map,i).then((function(){i.view.map=i._map})).catch(console.error),e}}),this.layerViews=this.view.layerViews,this.magnifier=this.view.magnifier,this.navigating=this.manager.getSet(!1,{get:function(){return i.view.navigating},set:"ignore"}),this.navigation=this.view.navigation,this.padding=this.view.padding,this.popup=this.view.popup,this.popupDisabled=this.view.popupEnabled,this.ready=this.view.ready,this.resizeAlign=this.view.resizeAlign,this.resolution=this.view.resolution,this.rotation=this.view.rotation,this.scale=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.scale)&&void 0!==t?t:e},set:function(e){return i.ready&&(i.view.scale=e),e}}),this.spatialReference=this.manager.getSet(this.view.spatialReference,{set:function(e,t){return null!==t&&void 0!==t&&t.equals(e)?t:e}}),this.stationary=this.manager.getSet(!0,{get:function(){return i.view.stationary},set:"ignore"}),this.suspended=this.view.suspended,this.theme=this.view.theme,this.timeExtent=this.view.timeExtent,this.timeZone=this.view.timeZone,this.toMap=this.manager.readonly((function(){var e;return(e=i.view).toMap.apply(e,arguments)})),this.toScreen=this.manager.readonly((function(){var e;return(e=i.view).toScreen.apply(e,arguments)})),this.updating=this.view.updating,this.viewpoint=this.manager.getSet(void 0,{get:function(){return i.view.viewpoint},set:function(e,t){return(0,d.i)(t,e)?e:t}}),this.zoom=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.zoom)&&void 0!==t?t:e},set:function(e){return i.ready&&(i.view.zoom=e),e}})}return(0,o.Z)(e,[{key:"addLayer",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=this.map)||void 0===n||n.add(t,i);case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"addLayers",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=this.map)||void 0===n||n.addMany(t,i);case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"closePopup",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.view)||void 0===t||t.closePopup();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.manager.destroy();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"goTo",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this.view)||void 0===n?void 0:n.goTo(t,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"hitTest",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this.view)||void 0===n?void 0:n.hitTest(t,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"openPopup",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=this.view)||void 0===i?void 0:i.openPopup(t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"takeScreenshot",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=this.view)||void 0===i?void 0:i.takeScreenshot(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"tryFatalErrorRecovery",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.view)||void 0===t||t.tryFatalErrorRecovery();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"whenLayerView",value:function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=this.view)||void 0===i?void 0:i.whenLayerView(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){var e,t,i=this;null!==(e=(t=this.view).container)&&void 0!==e||(t.container=this.el.childElem);var n=this.reactiveUtils.watch;this.manager.onLifecycle((function(){return[n((function(){return i.view.stationary}),(function(){i.arcgisViewChange.emit()}),{initial:!0}),n((function(){return i.view.ready}),(function(){return i.arcgisViewReadyChange.emit()}),{initial:i.view.ready})]})),h.a.reEmitAccessorEvents(this.manager,this.view,this.reactiveUtils,"arcgisView")}},{key:"render",value:function(){return(0,c.h)("div",{key:"97efc66cc36badcb3451aab1621fed3187510e74",class:"arcgis-map",ref:this._setChildElement})}},{key:"_editMapProperties",value:function(e){this.map&&(this._map=this.map),this.itemId?e.portalItem={id:this.itemId}:this.basemap||(e.basemap="topo-vector");var t=e,i=t.basemap,r=(0,n.Z)(t,p);i||(e=r);var s=e,a=s.ground,o=(0,n.Z)(s,w);return a||(e=o),e}},{key:"_editViewProperties",value:function(e){var t;this.view.ui||(e.ui={components:["attribution"]}),null!==(t=e.map)&&void 0!==t||(e.map=this._map);var i=(0,d.p)(this.center,void 0);return i&&(e.center=i),this.viewpoint&&(e.viewpoint=this.viewpoint),void 0!==this.scale&&(e.scale=this.scale),this.extent&&(e.extent=this.extent),void 0!==this.zoom&&(e.zoom=this.zoom),e}},{key:"el",get:function(){return(0,c.g)(this)}}]),e}();b.style=".arcgis-map{padding:0;margin:0;height:100%;width:100%}"},53466:function(e,t,i){i.d(t,{l:function(){return a},m:function(){return o},u:function(){return c}});var n=i(1413),r=i(34872),s=i(62153),a=function(e){return(0,r.b)(e)},o=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.blocking,a=void 0!==i&&i,o=t.name;return(0,r.b)((function(t,i){if(i.onLifecycle((function(){return(0,s.s)(t.el,e("./assets"),(function(e){var r,s=e.t9nLocale,a=e.t9nStrings,o=e.lang;i.exports=(0,n.Z)((0,n.Z)({},a),{},{_lang:o,_t9nLocale:s});var c,u=null!==(r=a.componentLabel)&&void 0!==r?r:a.widgetLabel;"string"===typeof u&&"label"in t&&null==t.label&&(null!==(c=t.label)&&void 0!==c||(t.label=u))}),o)})),a)return i.ready;var r=(0,s.g)(t.el);return{_lang:r.lang,_t9nLocale:r.t9nLocale}}))}},c=function(e){return h},u="arcgisPropertyChange",h=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.b)((function(e,i){var n=e;e.manager.isLit&&(n[u]={emit:function(t){var i=new CustomEvent(u,{detail:t,cancelable:!0});return e.el.dispatchEvent(i),i}});var r=n[u];return i.onLoad((function(){return i.onLifecycle((function(){return t.map((function(t){return e.manager.watch(t,(function(){return r.emit({name:t})}))}))}))})),r}))}},20077:function(e,t,i){i.d(t,{m:function(){return w}});var n=i(74165),r=i(37762),s=i(29439),a=i(15861),o=i(15671),c=i(43144),u=i(88301),h=i(61120),l=i(60136),v=i(29388),d=i(34872),p=(i(62153),i(14285)),w=function(e,t){return function(t,i){return g(t,e,i)}},f=function(e){(0,l.Z)(i,e);var t=(0,v.Z)(i);function i(e,n,r){var s;return(0,o.Z)(this,i),(s=t.call(this,e,n,r))._watchedViewModelProperties=new Map,s._watchedVisibleElementsProperties={},s._isBindingViewModel={value:!0},Object.defineProperty(s.exports,"viewModel",{value:d.a.makeGetterProxy(e,s._watchedViewModelProperties,s._isBindingViewModel)}),Object.defineProperty(s.exports,"visibleElements",{value:s._makeVisibleElementsBinder()}),s}return(0,c.Z)(i,[{key:"hostConnected",value:function(){(0,u.Z)((0,h.Z)(i.prototype),"hostConnected",this).call(this),this._isBindingViewModel.value=!1,this.component.manager.didLoadCalled&&(0,p.a)(this.component)}},{key:"hostLoad",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,a,o=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._watchedProperties.delete("viewModel"),e.next=3,(0,u.Z)((0,h.Z)(i.prototype),"hostLoad",this).call(this);case 3:if(!this.component.manager.destroyed){e.next=5;break}return e.abrupt("return");case 5:if(this._watchMetaProperties(),d.a.reEmitAccessorEvents(this,this._instance,this.reactiveUtils,"widget"),this.onLifecycle((function(){return o.reactiveUtils.watch((function(){return o._instance.viewModel}),(function(e){o.component.viewModel=e}),{initial:!0})})),"object"!==typeof(t=this._instance.viewModel)){e.next=15;break}d.a.reEmitAccessorEvents(this,t,this.reactiveUtils,"viewModel"),d.a.watchComponentUpdates(this,t,this._watchedViewModelProperties),d.a.watchAccessorUpdates(this,t,this._watchedViewModelProperties),e.next=17;break;case 15:if(!(this._watchedViewModelProperties.size>0)){e.next=17;break}throw new Error("The widget does not have a viewModel to bind to. Tried to bind the following properties: ".concat(Array.from(this._watchedViewModelProperties.keys()).join(", ")));case 17:(a=Object.entries(this._watchedVisibleElementsProperties)).length>0&&this.onLifecycle((function(){return a.map((function(e){var t,i,n,a=(0,s.Z)(e,2),c=a[0],u=a[1],h=null!==(t=o._instance.visibleElements)&&void 0!==t?t:{},l=void 0,v=(0,r.Z)(u.slice(0,-1));try{for(v.s();!(i=v.n()).done;){var d=i.value;if("object"!==typeof h[d]||null===h[d]){l=Boolean(h[d]);break}h=h[d]}}catch(f){v.e(f)}finally{v.f()}void 0===l&&(l=Boolean(null===(n=h[u.slice(-1)[0]])||void 0===n||n));c.startsWith("hide");var p=c.startsWith("hide")||c.startsWith("show")?c.startsWith("hide"):l,w=o.component;return"boolean"===typeof w[c]?o._updateWidgetVisibleElement(u,w[c],p):w[c]=!1,o.watch(c,(function(e){return o._updateWidgetVisibleElement(u,e,p)}))}))}));case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_updateWidgetVisibleElement",value:function(e,t,i){var n,s,a=null!==(n=this._instance.visibleElements)&&void 0!==n?n:{},o=(0,r.Z)(e.slice(0,-1));try{for(o.s();!(s=o.n()).done;){var c=s.value;"object"===typeof a[c]&&null!==a[c]||(a[c]={}),a=a[c]}}catch(h){o.e(h)}finally{o.f()}var u=Boolean(i?!t:t);a[e.at(-1)]=u}},{key:"hostLoaded",value:function(){var e,t=this,i=this.component.el;null!==(e=i.childElem)&&void 0!==e||(i.childElem=document.createElement("div")),this._instance.container=i.childElem;var n=!1,r=this.component.el.view;Object.defineProperty(this.component.el,"view",{get:function(){var e,i;return null!==(e=t._instance.view)&&void 0!==e?e:null===(i=t._instance.viewModel)||void 0===i?void 0:i.view},set:function(e){"view"in t._instance||"object"!==typeof t._instance.viewModel?t._instance.view=e:t._instance.viewModel.view=e,t._watchViewDestroy(),n||(n=!0,t.component.arcgisReady.emit())},configurable:!0,enumerable:!0}),r&&(this._instance.view=r),this.component.el.isConnected&&((0,p.a)(this.component),this._watchViewDestroy())}},{key:"hostDisconnected",value:function(){var e,t;"object"===typeof this.component.el.childElem&&(null===(e=this.component.el.view)||void 0===e||null===(t=e.ui)||void 0===t||t.remove(this.component.el.childElem))}},{key:"hostDestroy",value:function(){var e;(0,u.Z)((0,h.Z)(i.prototype),"hostDestroy",this).call(this),null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove()}},{key:"_watchMetaProperties",value:function(){var e=this;this.watch("position",(function(t){null!=e.component.el.childElem&&"string"===typeof t&&(0,p.a)(e.component)})),this.watch("referenceElement",(function(){return(0,p.a)(e.component)}))}},{key:"_makeVisibleElementsBinder",value:function(){var e=this;return new Proxy({},{has:function(e,t){return"string"===typeof t||Reflect.has(e,t)},get:function(t,i){if("symbol"===typeof i||i in Promise.prototype)return Reflect.get(t,i);var n=[i],r=e._makeRecursiveProxy(n);return e.component.manager.trackPropKey((function(t){if(void 0===t)throw new Error("Unable to bind visibleElements property. Check for incorrect this.widget.visibleElements usage");e.component[t]=!1,e._watchedVisibleElementsProperties[t]=n}),r)}})}},{key:"_makeRecursiveProxy",value:function(e){var t=new Proxy({},{get:function(i,n){var r=Reflect.get(i,n);return"symbol"===typeof n||n in Promise.prototype?r:(e.push(n),t)}});return t}},{key:"_watchViewDestroy",value:function(){var e,t=this;null===(e=this._watchViewDestroyHandle)||void 0===e||e.remove(),this._watchViewDestroyHandle=this.reactiveUtils.when((function(){var e;return!0===(null===(e=t.component.el.view)||void 0===e?void 0:e.destroyed)}),(function(){t.component.destroy().catch(console.error)}),{sync:!0})}}]),i}(d.A),g=(0,d.p)(f)}}]);
//# sourceMappingURL=10950.8b8d9e57.chunk.js.map