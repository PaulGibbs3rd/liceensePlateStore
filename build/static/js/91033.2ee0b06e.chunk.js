"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[91033],{91033:function(e,t,i){i.r(t),i.d(t,{arcgis_scene:function(){return d}});var n=i(44925),r=i(74165),a=i(15861),s=i(15671),o=i(43144),c=i(62042),u=i(53466),h=i(34872),v=i(62153),l=i(14285),p=["basemap"],w=(0,h.m)(v.a0),g=(0,h.m)(v.a1),d=function(){function e(t){var i=this;(0,s.Z)(this,e),(0,c.r)(this,t),this.arcgisViewReadyChange=(0,c.c)(this,"arcgisViewReadyChange",7),this.arcgisViewChange=(0,c.c)(this,"arcgisViewChange",7),this.arcgisViewClick=(0,c.c)(this,"arcgisViewClick",7),this.arcgisViewDoubleClick=(0,c.c)(this,"arcgisViewDoubleClick",7),this.arcgisViewDrag=(0,c.c)(this,"arcgisViewDrag",7),this.arcgisViewHold=(0,c.c)(this,"arcgisViewHold",7),this.arcgisViewImmediateClick=(0,c.c)(this,"arcgisViewImmediateClick",7),this.arcgisViewImmediateDoubleClick=(0,c.c)(this,"arcgisViewImmediateDoubleClick",7),this.arcgisViewKeyDown=(0,c.c)(this,"arcgisViewKeyDown",7),this.arcgisViewKeyUp=(0,c.c)(this,"arcgisViewKeyUp",7),this.arcgisViewLayerviewCreate=(0,c.c)(this,"arcgisViewLayerviewCreate",7),this.arcgisViewLayerviewCreateError=(0,c.c)(this,"arcgisViewLayerviewCreateError",7),this.arcgisViewLayerviewDestroy=(0,c.c)(this,"arcgisViewLayerviewDestroy",7),this.arcgisViewMouseWheel=(0,c.c)(this,"arcgisViewMouseWheel",7),this.arcgisViewPointerDown=(0,c.c)(this,"arcgisViewPointerDown",7),this.arcgisViewPointerEnter=(0,c.c)(this,"arcgisViewPointerEnter",7),this.arcgisViewPointerLeave=(0,c.c)(this,"arcgisViewPointerLeave",7),this.arcgisViewPointerMove=(0,c.c)(this,"arcgisViewPointerMove",7),this.arcgisViewPointerUp=(0,c.c)(this,"arcgisViewPointerUp",7),this.manager=(0,h.u)(this),this.reactiveUtils=(0,u.l)(v.i),this._map=w(this,{editConstructorProperties:this._editMapProperties}),this._setChildElement=function(e){i.el.childElem=e},this.autoDestroyDisabled=!1,this.view=this.manager.readonly(g(this,{editConstructorProperties:this._editViewProperties})),this.map=this.view.map,this.allLayerViews=this.view.allLayerViews,this.alphaCompositingEnabled=this.view.alphaCompositingEnabled,this.analyses=this.view.analyses,this.basemapView=this.view.basemapView,this.basemap=this._map.basemap,this.camera=this.manager.getSet(void 0,{get:function(){return i.view.camera},set:function(e,t){return(0,l.c)(t,e)?e:t}}),this.center=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.center)&&void 0!==t?t:e},set:function(e){var t=(0,l.p)(e,i.ready?i.view:void 0);return i.ready?(i.view.center=t,i.view.center):t}}),this.clippingArea=this.manager.getSet(this.view.clippingArea,{set:function(e,t){return null!==t&&void 0!==t&&t.equals(e)?t:e}}),this.constraints=this.view.constraints,this.environment=this.manager.getSet(this.view.environment,{set:function(e,t){return(0,l.e)(t,e)?e:t}}),this.extent=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.extent)&&void 0!==t?t:e},set:function(e,t){return i.view.ready?(!e||null!==t&&void 0!==t&&t.equals(e)||(i.view.extent=e),i.view.extent):e}}),this.fatalError=this.view.fatalError,this.floors=this.view.floors,this.gamepad=this.manager.getSet(void 0,{get:function(){return i.ready?i.view.input.gamepad:void 0},set:"ignore"}),this.graphics=this.view.graphics,this.ground=this._map.ground,this.groundView=this.view.groundView,this.highlightOptions=this.view.highlightOptions,this.interacting=this.manager.getSet(!1,{get:function(){return i.view.interacting},set:"ignore"}),this.itemId=this.manager.getSet(void 0,{get:function(e){var t,n;return null!==(t=null===(n=i._map.portalItem)||void 0===n?void 0:n.id)&&void 0!==t?t:e},set:function(e){return i.ready&&h.a.reCreate(i._map,i).then((function(){i.view.map=i._map})).catch(console.error),e}}),this.layerViews=this.view.layerViews,this.magnifier=this.view.magnifier,this.navigating=this.manager.getSet(!1,{get:function(){return i.view.navigating},set:"ignore"}),this.navigation=this.view.navigation,this.padding=this.view.padding,this.performanceInfo=this.manager.getSet(void 0,{get:function(){return i.view.performanceInfo},set:"ignore"}),this.popup=this.view.popup,this.popupDisabled=this.view.popupEnabled,this.qualityProfile=this.view.qualityProfile,this.ready=this.view.ready,this.resolution=this.manager.getSet(void 0,{get:function(){return i.view.resolution},set:"ignore"}),this.scale=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.scale)&&void 0!==t?t:e},set:function(e){return i.ready&&(i.view.scale=e),e}}),this.spatialReference=this.manager.getSet(this.view.spatialReference,{set:function(e,t){return null!==t&&void 0!==t&&t.equals(e)?t:e}}),this.stationary=this.manager.getSet(!0,{get:function(){return i.view.stationary},set:"ignore"}),this.suspended=this.view.suspended,this.theme=this.view.theme,this.timeExtent=this.view.timeExtent,this.toMap=this.manager.readonly((function(){var e;return(e=i.view).toMap.apply(e,arguments)})),this.toScreen=this.manager.readonly((function(){var e;return(e=i.view).toScreen.apply(e,arguments)})),this.updating=this.view.updating,this.viewingMode=this.view.viewingMode,this.viewpoint=this.manager.getSet(void 0,{get:function(){return i.view.viewpoint},set:function(e,t){return(0,l.i)(t,e)?e:t}}),this.zoom=this.manager.getSet(void 0,{get:function(e){var t;return null!==(t=i.view.zoom)&&void 0!==t?t:e},set:function(e){return i.ready&&(i.view.zoom=e),e}})}return(0,o.Z)(e,[{key:"addLayer",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=this.map)||void 0===n||n.add(t,i);case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"addLayers",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(n=this.map)||void 0===n||n.addMany(t,i);case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"closePopup",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.view)||void 0===t||t.closePopup();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.manager.destroy();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"goTo",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this.view)||void 0===n?void 0:n.goTo(t,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"hitTest",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,i){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=this.view)||void 0===n?void 0:n.hitTest(t,i);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"openPopup",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=this.view)||void 0===i?void 0:i.openPopup(t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"takeScreenshot",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=this.view)||void 0===i?void 0:i.takeScreenshot(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"tryFatalErrorRecovery",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.view)||void 0===t||t.tryFatalErrorRecovery();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"whenAnalysisView",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=this.view)||void 0===i?void 0:i.whenAnalysisView(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"whenLayerView",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(i=this.view)||void 0===i?void 0:i.whenLayerView(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){var e,t,i=this;null!==(e=(t=this.view).container)&&void 0!==e||(t.container=this.el.childElem);var n=this.reactiveUtils.watch;this.manager.onLifecycle((function(){return[n((function(){return i.view.stationary}),(function(){i.arcgisViewChange.emit()}),{initial:!0}),n((function(){return i.view.ready}),(function(){return i.arcgisViewReadyChange.emit()}),{initial:i.view.ready})]})),h.a.reEmitAccessorEvents(this.manager,this.view,this.reactiveUtils,"arcgisView")}},{key:"render",value:function(){return(0,c.h)("div",{key:"6ba77135d59e49e02877423619ed7dad7cd01d19",class:"arcgis-scene",ref:this._setChildElement})}},{key:"_editMapProperties",value:function(e){this.map&&(this._map=this.map),this.itemId?e.portalItem={id:this.itemId}:this.basemap||(e.basemap="topo-vector"),this.ground||(e.ground="world-elevation");var t=e,i=t.basemap,r=(0,n.Z)(t,p);return i||(e=r),e}},{key:"_editViewProperties",value:function(e){var t;this.view.ui||(e.ui={components:["attribution"]}),null!==(t=e.map)&&void 0!==t||(e.map=this._map);var i=(0,l.p)(this.center,void 0);return i&&(e.center=i),this.viewpoint&&(e.viewpoint=this.viewpoint),void 0!==this.scale&&(e.scale=this.scale),this.extent&&(e.extent=this.extent),this.camera&&(e.camera=this.camera),void 0!==this.zoom&&(e.zoom=this.zoom),e}},{key:"el",get:function(){return(0,c.g)(this)}}]),e}();d.style=".arcgis-scene{padding:0;margin:0;height:100%;width:100%}"},53466:function(e,t,i){i.d(t,{l:function(){return s},m:function(){return o},u:function(){return c}});var n=i(1413),r=i(34872),a=i(62153),s=function(e){return(0,r.b)(e)},o=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.blocking,s=void 0!==i&&i,o=t.name;return(0,r.b)((function(t,i){if(i.onLifecycle((function(){return(0,a.s)(t.el,e("./assets"),(function(e){var r,a=e.t9nLocale,s=e.t9nStrings,o=e.lang;i.exports=(0,n.Z)((0,n.Z)({},s),{},{_lang:o,_t9nLocale:a});var c,u=null!==(r=s.componentLabel)&&void 0!==r?r:s.widgetLabel;"string"===typeof u&&"label"in t&&null==t.label&&(null!==(c=t.label)&&void 0!==c||(t.label=u))}),o)})),s)return i.ready;var r=(0,a.g)(t.el);return{_lang:r.lang,_t9nLocale:r.t9nLocale}}))}},c=function(e){return h},u="arcgisPropertyChange",h=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.b)((function(e,i){var n=e;e.manager.isLit&&(n[u]={emit:function(t){var i=new CustomEvent(u,{detail:t,cancelable:!0});return e.el.dispatchEvent(i),i}});var r=n[u];return i.onLoad((function(){return i.onLifecycle((function(){return t.map((function(t){return e.manager.watch(t,(function(){return r.emit({name:t})}))}))}))})),r}))}}}]);
//# sourceMappingURL=91033.2ee0b06e.chunk.js.map