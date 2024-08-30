"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[56593],{96669:function(e,t,i){function n(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function r(e,t){var i;return"number"==typeof e?e:null!==e&&void 0!==e&&null!==(i=e.stops)&&void 0!==i&&i.length?function(e){for(var t=0,i=0,n=0;n<e.length;n++){var r=e[n].size;"number"==typeof r&&(t+=r,i++)}return t/i}(e.stops):t}function a(e,t){if(!t)return e;var i=t.filter((function(e){return"size"===e.type})).map((function(t){var i=t.maxSize,n=t.minSize;return(r(i,e)+r(n,e))/2})),n=0,a=i.length;if(0===a)return e;for(var s=0;s<a;s++)n+=i[s];var l=Math.floor(n/a);return Math.max(l,e)}function s(e){var t=null===e||void 0===e?void 0:e.renderer,i="touch"===(null===e||void 0===e?void 0:e.pointerType)?9:6;if(!t)return i;var r="visualVariables"in t?a(i,t.visualVariables):i;if("simple"===t.type)return n(r,t.symbol);if("unique-value"===t.type){var s,l=r;return null!==(s=t.uniqueValueInfos)&&void 0!==s&&s.forEach((function(e){l=n(l,e.symbol)})),l}if("class-breaks"===t.type){var o=r;return t.classBreakInfos.forEach((function(e){o=n(o,e.symbol)})),o}return"dot-density"===t.type||t.type,r}i.d(t,{k:function(){return s}})},23037:function(e,t,i){i.d(t,{Bf:function(){return y},Bj:function(){return w},Df:function(){return d},Py:function(){return x},Qs:function(){return A},Us:function(){return M},aL:function(){return L},iG:function(){return g},ql:function(){return _},se:function(){return m},vZ:function(){return b},zb:function(){return G}});var n,r=i(29439),a=i(54557),s=i(42265),l=i(80987),o=i(32718),u=i(92026),c=i(35995),h=i(25243),f=i(32551),v=i(68954),p=function(){return o.Z.getLogger("esri.support.basemapUtils")};function d(){return{}}function y(e){for(var t in e){var i=e[t];(0,u.SC)(i),delete e[t]}}function m(e,t){var i,n;if("string"==typeof e){var l=e in v.s,o=!l&&e.includes("/");if(!l&&!o){var u=Object.entries(v.s).filter((function(e){var t=(0,r.Z)(e,2),i=(t[0],t[1]);return s.Z.apiKey&&!i.classic||!s.Z.apiKey&&(i.classic||i.is3d)})).map((function(e){var t=(0,r.Z)(e,1)[0];return'"'.concat(t,'"')})).sort().join(", ");return p().warn("Unable to find basemap definition for: ".concat(e,". Try one of these: ").concat(u)),null}t&&(n=t[e]),n||(n=l?a.default.fromId(e):new a.default({style:{id:e}}),t&&(t[e]=n))}else n=(0,h.se)(a.default,e);return null!==(i=n)&&void 0!==i&&i.destroyed&&(p().warn("The provided basemap is already destroyed",{basemap:n}),n=null),n}function g(e){var t;return"Web Scene"===(null===(t=e.portalItem)||void 0===t?void 0:t.type)||e.referenceLayers.some((function(e){return"scene"===e.type}))}function b(e){var t,i;return!(null===e||void 0===e||null===(t=e.portalItem)||void 0===t||null===(i=t.tags)||void 0===i||!i.some((function(e){return"beta"===e.toLowerCase()})))}function _(e,t){var i,n,r,a;return(null===(i=e.basemap)||void 0===i||null===(n=i.referenceLayers)||void 0===n?void 0:n.some((function(e){return e.uid===t})))||(null===(r=e.basemap)||void 0===r||null===(a=r.baseLayers)||void 0===a?void 0:a.some((function(e){return e.uid===t})))}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=m(e);if(!i)return null;var n=i.clone();return t&&(n.baseLayers=k(n.baseLayers,t.baseLayers),n.referenceLayers=k(n.referenceLayers,t.referenceLayers)),n}function w(e,t){var i,n;return e===t||(null!=(null===e||void 0===e||null===(i=e.portalItem)||void 0===i?void 0:i.id)&&e.portalItem.id===(null===t||void 0===t||null===(n=t.portalItem)||void 0===n?void 0:n.id)||"equal"===C(E(e),E(t),{mustMatchReferences:!0}))}function k(e,t){var i=new l.Z;return e.forEach((function(e){var n=t.find((function(t){return"scene"!==t.type&&P(H(e),H(t))}))||e;i.includes(n)?i.push(e):i.push(n)})),i}function G(e){return!(null===e||void 0===e||!e.baseLayers.concat(e.referenceLayers).some(L))}function L(e){if(S(e.url))return!0;if("vector-tile"===e.type)for(var t in e.sourceNameToSource){var i=e.sourceNameToSource[t];if(S(null===i||void 0===i?void 0:i.sourceUrl))return!0}return!1}function M(e,t){var i,n,r;if(null==t||null==e)return{spatialReference:null,updating:!1};if("not-loaded"===t.loadStatus)return t.load(),{spatialReference:null,updating:!0};if(t.spatialReference)return{spatialReference:t.spatialReference,updating:!1};if(0===t.baseLayers.length)return{spatialReference:null,updating:!1};var a=t.baseLayers.at(0);switch(a.loadStatus){case"not-loaded":a.load();case"loading":return{spatialReference:null,updating:!0};case"failed":return{spatialReference:null,updating:!1}}var s=(("supportedSpatialReferences"in a?a.supportedSpatialReferences:null)||["tileInfo"in a?null===(i=a.tileInfo)||void 0===i?void 0:i.spatialReference:a.spatialReference]).filter(Boolean),l=e.spatialReference;return l?{spatialReference:null!==(n=null!==(r=s.find((function(e){return l.equals(e)})))&&void 0!==r?r:s[0])&&void 0!==n?n:null,updating:!1}:{spatialReference:s[0],updating:!1}}var Z=/^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;function S(e){if(!e)return!1;var t=new c.R9((0,c.hF)(e));return!!t.authority&&Z.test(t.authority)}function E(e){return e?!e.loaded&&e.resourceInfo?T(e.resourceInfo.data):{baseLayers:O(e.baseLayers),referenceLayers:O(e.referenceLayers)}:null}function O(e){return(l.Z.isCollection(e)?e.toArray():e).map(H)}function H(e){var t,i;return{type:e.type,effect:"effect"in e?e.effect:void 0,url:R("urlTemplate"in e&&e.urlTemplate||e.url||"styleUrl"in e&&e.styleUrl||""),minScale:"minScale"in e&&null!=e.minScale?e.minScale:0,maxScale:"maxScale"in e&&null!=e.maxScale?e.maxScale:0,opacity:null!=e.opacity?e.opacity:1,visible:null==e.visible||!!e.visible,sublayers:"map-image"!==e.type&&"wms"!==e.type||null==e.sublayers||null===(t=e.sublayers)||void 0===t?void 0:t.map((function(e){return{id:e.id,visible:e.visible}})),activeLayerId:"wmts"===e.type?null===(i=e.activeLayer)||void 0===i?void 0:i.id:void 0}}function I(e){return e.isReference||"ArcGISSceneServiceLayer"===e.layerType}function T(e){var t,i;return e?{baseLayers:U((null!==(t=e.baseMapLayers)&&void 0!==t?t:[]).filter((function(e){return!I(e)}))),referenceLayers:U((null!==(i=e.baseMapLayers)&&void 0!==i?i:[]).filter((function(e){return I(e)})))}:null}function U(e){return e.map((function(e){return function(e){var t,i,n,r;switch(e.layerType){case"VectorTileLayer":r="vector-tile";break;case"ArcGISTiledMapServiceLayer":r="tile";break;case"ArcGISSceneServiceLayer":r="scene";break;default:r="unknown"}return{type:r,effect:e.effect,url:R(e.templateUrl||e.urlTemplate||e.styleUrl||e.url),minScale:null!==(t=e.minScale)&&void 0!==t?t:0,maxScale:null!==(i=e.maxScale)&&void 0!==i?i:0,opacity:null!==(n=e.opacity)&&void 0!==n?n:1,visible:null==e.visibility||!!e.visibility,sublayers:void 0,activeLayerId:void 0}}(e)}))}function C(e,t,i){return null!=e!=(null!=t)?"not-equal":e&&t?D(e.baseLayers,t.baseLayers)?D(e.referenceLayers,t.referenceLayers)?"equal":i.mustMatchReferences?"not-equal":"base-layers-equal":"not-equal":"equal"}function D(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!P(e[i],t[i]))return!1;return!0}function P(e,t){if(e.type!==t.type||e.url!==t.url||e.minScale!==t.minScale||e.maxScale!==t.maxScale||e.visible!==t.visible||e.opacity!==t.opacity)return!1;if(!(0,f.yQ)(e.effect,t.effect))return!1;if(null!=e.activeLayerId||null!=t.activeLayerId)return e.activeLayerId===t.activeLayerId;if(null!=e.sublayers||null!=t.sublayers){if(null==e.sublayers||null==t.sublayers||e.sublayers.length!==t.sublayers.length)return!1;for(var i=0;i<e.sublayers.length;i++){var n=e.sublayers.at(i),r=t.sublayers.at(i);if((null===n||void 0===n?void 0:n.id)!==(null===r||void 0===r?void 0:r.id)||(null===n||void 0===n?void 0:n.visible)!==(null===r||void 0===r?void 0:r.visible))return!1}}return!0}function R(e){return e?(0,c.Fv)(e).replace(/^\s*https?:/i,"").toLowerCase():""}function A(e){if(!e)return null;var t=e.thumbnailUrl;if(t)return t;var i=function(e){if(n)return n(e);var t=null,i=E(e),r=!(null!==i&&void 0!==i&&i.baseLayers.length);for(var a in v.s){var s=C(i,T(v.s[a]),{mustMatchReferences:r});if("equal"===s){t=a;break}"base-layers-equal"===s&&(t=a)}return t}(e);return i?v.s[i].thumbnailUrl:(0,u.ei)(e.baseLayers,z)}function z(e){var t;return"portalItem"in e?null===(t=e.portalItem)||void 0===t?void 0:t.thumbnailUrl:void 0}},53503:function(e,t,i){i.r(t),i.d(t,{default:function(){return D}});var n=i(93433),r=i(37762),a=i(15671),s=i(43144),l=i(60136),o=i(29388),u=i(27366),c=(i(51508),i(91505)),h=i(84652),f=i(94172),v=i(49861),p=(i(93169),i(32718),i(69912)),d=i(93655),y=i(20008),m=i(74982),g=i(83089),b=(0,s.Z)((function e(t,i,n,r,s){(0,a.Z)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-click"})),_=(0,s.Z)((function e(t,i,n,r,s){(0,a.Z)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-double-click"})),x=function(){function e(t,i,n,r,s,l,o,u,c,h){(0,a.Z)(this,e),this.graphic=t,this.allGraphics=i,this.index=n,this.x=r,this.y=s,this.dx=l,this.dy=o,this.totalDx=u,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-start"}return(0,s.Z)(e,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),e}(),w=function(){function e(t,i,n,r,s,l,o,u,c,h){(0,a.Z)(this,e),this.graphic=t,this.allGraphics=i,this.index=n,this.x=r,this.y=s,this.dx=l,this.dy=o,this.totalDx=u,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move"}return(0,s.Z)(e,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),e}(),k=function(){function e(t,i,n,r,s,l,o,u,c,h){(0,a.Z)(this,e),this.graphic=t,this.allGraphics=i,this.index=n,this.x=r,this.y=s,this.dx=l,this.dy=o,this.totalDx=u,this.totalDy=c,this.viewEvent=h,this.defaultPrevented=!1,this.type="graphic-move-stop"}return(0,s.Z)(e,[{key:"preventDefault",value:function(){this.defaultPrevented=!0}}]),e}(),G=(0,s.Z)((function e(t,i,n,r,s){(0,a.Z)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-over"})),L=(0,s.Z)((function e(t,i,n,r,s){(0,a.Z)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-out"})),M=(0,s.Z)((function e(t,i,n,r,s){(0,a.Z)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-down"})),Z=(0,s.Z)((function e(t,i,n,r,s){(0,a.Z)(this,e),this.graphic=t,this.index=i,this.x=n,this.y=r,this.viewEvent=s,this.type="graphic-pointer-up"})),S=i(1614),E=i(2346),O=i(72612),H=i(16072),I=i(14404),T=i(61459),U="indicator-symbols",C=function(e){(0,l.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e))._activeGraphic=null,n._dragEvent=null,n._hoverGraphic=null,n._indicators=[],n._initialDragGeometry=null,n._manipulators=[],n._layerViews=null,n.type="graphic-mover",n.callbacks={onGraphicClick:function(){},onGraphicDoubleClick:function(){},onGraphicMoveStart:function(){},onGraphicMove:function(){},onGraphicMoveStop:function(){},onGraphicPointerOver:function(){},onGraphicPointerOut:function(){},onGraphicPointerDown:function(){},onGraphicPointerUp:function(){}},n.enableMoveAllGraphics=!1,n.graphics=[],n.indicatorsEnabled=!1,n.layer=new d.default({listMode:"hide",internal:!0,title:"GraphicMover highlight layer"}),n.view=null,n}return(0,s.Z)(i,[{key:"initialize",value:function(){var e=this;(0,g.p)(this.view,this.layer),this._highlightHelper=new m.Z({view:this.view}),this.refresh(),this.addHandles([(0,f.watch)((function(){return e.graphics.length}),(function(){return e.refresh()})),(0,f.when)((function(){var t;return null===(t=e.view)||void 0===t?void 0:t.ready}),(function(){e.addHandles([e.view.on("immediate-click",(function(t){return e._clickHandler(t)}),S.f.TOOL),e.view.on("double-click",(function(t){return e._doubleClickHandler(t)}),S.f.TOOL),e.view.on("pointer-down",(function(t){return e._pointerDownHandler(t)}),S.f.TOOL),e.view.on("pointer-move",(function(t){return e._pointerMoveHandler(t)}),S.f.TOOL),e.view.on("pointer-up",(function(t){return e._pointerUpHandler(t)}),S.f.TOOL),e.view.on("drag",(function(t){return e._dragHandler(t)}),S.f.TOOL),e.view.on("key-down",(function(t){return e._keyDownHandler(t)}),S.f.TOOL)])}),{once:!0,initial:!0}),(0,f.watch)((function(){return e.view}),(function(t){e._highlightHelper.removeAll(),e._highlightHelper.view=t}))])}},{key:"destroy",value:function(){var e;this._removeIndicators(),null!==(e=this.view.map)&&void 0!==e&&e.remove(this.layer),this.layer.destroy(),this.reset(),this._manipulators.forEach((function(e){return e.destroy()})),this._manipulators=null}},{key:"highlightsEnabled",set:function(e){var t,i;null!==(t=this._highlightHelper)&&void 0!==t&&t.removeAll(),this._set("highlightsEnabled",e),e&&(null===(i=this._highlightHelper)||void 0===i||i.add(this.graphics))}},{key:"state",get:function(){var e=this.view.ready,t=this.graphics.length>0,i=this._activeGraphic;return e&&t?i?"moving":"active":e?"ready":"disabled"}},{key:"refresh",value:function(){this.reset(),this._setup()}},{key:"reset",value:function(){this._activeGraphic=null,this._hoverGraphic=null,this._dragEvent=null,this._highlightHelper.removeAll()}},{key:"updateGeometry",value:function(e,t){var i=this.graphics[e];i&&(i.set("geometry",t),this._setUpIndicators())}},{key:"_setup",value:function(){this._setUpHighlights(),this._setUpIndicators(),this._setUpManipulators(),this._syncLayerViews()}},{key:"_clickHandler",value:function(e){var t=this._findTargetGraphic((0,O.vT)(e));if(t){var i=new b(t,this.graphics.indexOf(t),e.x,e.y,e);this.emit("graphic-click",i),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(i)}}},{key:"_doubleClickHandler",value:function(e){var t=this._findTargetGraphic((0,O.vT)(e));if(t){var i=new _(t,this.graphics.indexOf(t),e.x,e.y,e);this.emit("graphic-double-click",i),this.callbacks.onGraphicDoubleClick&&this.callbacks.onGraphicDoubleClick(i)}}},{key:"_pointerDownHandler",value:function(e){var t=this._findTargetGraphic((0,O.vT)(e));if(t){this._activeGraphic=t;var i=e.x,n=e.y,r=new M(t,this.graphics.indexOf(t),i,n,e);this.emit("graphic-pointer-down",r),this.callbacks.onGraphicPointerDown&&this.callbacks.onGraphicPointerDown(r)}else this._activeGraphic=null}},{key:"_pointerUpHandler",value:function(e){if(this._activeGraphic){var t=e.x,i=e.y,n=this.graphics.indexOf(this._activeGraphic),r=new Z(this._activeGraphic,n,t,i,e);this.emit("graphic-pointer-up",r),this.callbacks.onGraphicPointerUp&&this.callbacks.onGraphicPointerUp(r)}}},{key:"_pointerMoveHandler",value:function(e){if(!this._dragEvent){var t=this._findTargetGraphic((0,O.vT)(e));if(t){var i=e.x,n=e.y;if(this._hoverGraphic){if(this._hoverGraphic===t)return;var r=this.graphics.indexOf(this._hoverGraphic),a=new L(this.graphics[r],r,i,n,e);this._hoverGraphic=null,this.emit("graphic-pointer-out",a),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(a)}var s=this.graphics.indexOf(t),l=new G(t,s,i,n,e);return this._hoverGraphic=t,this.emit("graphic-pointer-over",l),void(this.callbacks.onGraphicPointerOver&&this.callbacks.onGraphicPointerOver(l))}if(this._hoverGraphic){var o=e.x,u=e.y,c=this.graphics.indexOf(this._hoverGraphic),h=new L(this.graphics[c],c,o,u,e);this._hoverGraphic=null,this.emit("graphic-pointer-out",h),this.callbacks.onGraphicPointerOut&&this.callbacks.onGraphicPointerOut(h)}}}},{key:"_dragHandler",value:function(e){var t,i=this;if(("start"===e.action||this._dragEvent)&&null!==(t=this._activeGraphic)&&void 0!==t&&t.geometry){"start"===e.action&&this._removeIndicators(),e.stopPropagation();var n=e.action,r=e.x,a=e.y,s=this.graphics.indexOf(this._activeGraphic),l=this._dragEvent?r-this._dragEvent.x:0,o=this._dragEvent?a-this._dragEvent.y:0,u=r-e.origin.x,c=a-e.origin.y,f="start"===n?this._activeGraphic.geometry:this._initialDragGeometry,v=(0,y.e7)(f,u,c,this.view);if(this._activeGraphic.geometry=v,this.enableMoveAllGraphics&&this.graphics.forEach((function(e){e!==i._activeGraphic&&(e.geometry=(0,y.e7)(e.geometry,l,o,i.view))})),this._dragEvent=e,"start"===n){this._initialDragGeometry=(0,h.d9)(f);var p=new x(this._activeGraphic,this.graphics,s,r,a,l,o,u,c,e);this.emit("graphic-move-start",p),this.callbacks.onGraphicMoveStart&&this.callbacks.onGraphicMoveStart(p),p.defaultPrevented&&this._activeGraphic.set("geometry",f)}else if("update"===n){var d=new w(this._activeGraphic,this.graphics,s,r,a,l,o,u,c,e);this.emit("graphic-move",d),this.callbacks.onGraphicMove&&this.callbacks.onGraphicMove(d),d.defaultPrevented&&(this._activeGraphic.geometry=f)}else{var m=new k(this._activeGraphic,this.graphics,s,r,a,l,o,u,c,e);this._dragEvent=null,this._activeGraphic=null,this._setUpIndicators(),this.emit("graphic-move-stop",m),this.callbacks.onGraphicMoveStop&&this.callbacks.onGraphicMoveStop(m),m.defaultPrevented&&(this.graphics[s].set("geometry",this._initialDragGeometry),this._setUpIndicators()),this._initialDragGeometry=null}}}},{key:"_keyDownHandler",value:function(e){"a"!==e.key&&"d"!==e.key&&"n"!==e.key||"moving"!==this.state||e.stopPropagation()}},{key:"_findTargetGraphic",value:function(e){var t=this.view.toMap(e),i=this.graphics,n=null,r=Number.MAX_VALUE;this._syncLayerViews();var a=this._layerViews.flatMap((function(e){return"graphicsViews"in e?Array.from(e.graphicsViews(),(function(e){return e.hitTest(t)})).flat():e.graphicsView.hitTest(t)})).filter((function(e){return i.includes(e)})).sort((function(e,t){return i.indexOf(e)-i.indexOf(t)}));return a.length?a[0]:(this._manipulators.forEach((function(t){var i=t.intersectionDistance(e);null!=i&&i<r&&(r=i,n=t.graphic)})),n)}},{key:"_syncLayerViews",value:function(){this._layerViews=[];var e,t=new Set,i=(0,r.Z)(this.graphics);try{for(i.s();!(e=i.n()).done;){var a=e.value,s=(0,g.j)(this.view,a.layer);s&&t.add(s)}}catch(l){i.e(l)}finally{i.f()}this._layerViews=(0,n.Z)(t)}},{key:"_setUpManipulators",value:function(){var e=this.graphics,t=this.view;this._manipulators.forEach((function(e){return e.destroy()})),this._manipulators=e.length?e.map((function(e){return new E.L({graphic:e,view:t})})):[]}},{key:"_setUpHighlights",value:function(){this.highlightsEnabled&&this._highlightHelper.add(this.graphics)}},{key:"_setUpIndicators",value:function(){var e=this;if(this._removeIndicators(),this.indicatorsEnabled){var t,i=(0,r.Z)(this.graphics);try{var n=function(){var i=t.value,n=i.clone();n.symbol=function(e){var t=12;if(null==e.symbol)return null;switch(e.symbol.type){case"cim":return new H.default({style:"circle",size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"picture-marker":var i=e.symbol,n=i.xoffset,r=i.yoffset,a=i.height,s=i.width,l=a===s?s:Math.max(a,s);return new H.default({xoffset:n,yoffset:r,size:l,style:"square",color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-marker":var o=e.symbol,u=o.xoffset,c=o.yoffset,h=o.size,f=o.style;return new H.default({xoffset:u,yoffset:c,style:"circle"===f?"circle":"square",size:h+2,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});case"simple-fill":return new T.default({color:[0,0,0,0],outline:{style:"dash",color:[255,127,0,1],width:1}});case"simple-line":return new I.default({color:[255,127,0,1],style:"dash",width:1});case"text":var v=e.symbol,p=v.xoffset,d=v.yoffset;return new H.default({xoffset:p,yoffset:d,size:t,color:[0,0,0,0],outline:{color:[255,127,0,1],width:1}});default:return null}}(i),e._indicators.push(n),e.addHandles((0,f.watch)((function(){return i.symbol}),(function(){return e._setUpIndicators()})),U)};for(i.s();!(t=i.n()).done;)n()}catch(a){i.e(a)}finally{i.f()}this.layer.addMany(this._indicators)}}},{key:"_removeIndicators",value:function(){this.removeHandles(U),this._indicators.length&&(this.layer.removeMany(this._indicators),this._indicators.forEach((function(e){return e.destroy()})),this._indicators=[])}}]),i}(c.Z.EventedAccessor);(0,u._)([(0,v.Cb)()],C.prototype,"_activeGraphic",void 0),(0,u._)([(0,v.Cb)({readOnly:!0})],C.prototype,"type",void 0),(0,u._)([(0,v.Cb)()],C.prototype,"callbacks",void 0),(0,u._)([(0,v.Cb)()],C.prototype,"enableMoveAllGraphics",void 0),(0,u._)([(0,v.Cb)()],C.prototype,"graphics",void 0),(0,u._)([(0,v.Cb)({value:!1})],C.prototype,"highlightsEnabled",null),(0,u._)([(0,v.Cb)()],C.prototype,"indicatorsEnabled",void 0),(0,u._)([(0,v.Cb)()],C.prototype,"layer",void 0),(0,u._)([(0,v.Cb)({readOnly:!0})],C.prototype,"state",null),(0,u._)([(0,v.Cb)()],C.prototype,"view",void 0);var D=C=(0,u._)([(0,p.j)("esri.views.draw.support.GraphicMover")],C)},74982:function(e,t,i){i.d(t,{Z:function(){return d}});var n=i(15671),r=i(43144),a=i(60136),s=i(29388),l=i(27366),o=i(7138),u=i(49861),c=(i(93169),i(32718),i(84936),i(69912)),h=i(83089),f=i(69787),v=i(45276),p=function(e){(0,a.Z)(i,e);var t=(0,s.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).view=null,r}return(0,r.Z)(i,[{key:"add",value:function(e){var t=this,i=!e||Array.isArray(e)?e:[e];(null===i||void 0===i?void 0:i.length)&&i.forEach((function(e){return t._highlight(e)}))}},{key:"remove",value:function(e){var t=this,i=!e||Array.isArray(e)?e:[e];(null===i||void 0===i?void 0:i.length)&&i.forEach((function(e){return t._removeHighlight(e)}))}},{key:"removeAll",value:function(){this.removeAllHandles()}},{key:"_highlight",value:function(e){var t=(0,h.j)(this.view,e.layer);(0,f.tl)(t)&&this.addHandles(t.highlight(e),(0,v.wi)(e))}},{key:"_removeHighlight",value:function(e){e&&this.removeHandles((0,v.wi)(e))}}]),i}(o.default);(0,l._)([(0,u.Cb)()],p.prototype,"view",void 0);var d=p=(0,l._)([(0,c.j)("esri.views.draw.support.HighlightHelper")],p)},20008:function(e,t,i){i.d(t,{Ru:function(){return h},bA:function(){return c},cM:function(){return f},e7:function(){return u}});var n=i(29439),r=i(16889),a=i(65156),s=i(376),l=i(69662);function o(e,t,i,n){var r,a;if(null==n||e.hasZ||(n=void 0),"point"===e.type)return e.x+=t,e.y+=i,e.hasZ&&null!=n&&(e.z+=n),e;if("multipoint"===e.type){for(var s=e.points,o=0;o<s.length;o++)s[o]=v(s[o],t,i,n);return e}if("extent"===e.type)return e.xmin+=t,e.xmax+=t,e.ymin+=i,e.ymax+=i,null!=n&&(null!==(r=e.zmin)&&void 0!==r||(e.zmin=0),e.zmin+=n,null!==(a=e.zmax)&&void 0!==a||(e.zmax=0),e.zmax+=n),e;for(var u=(0,l.nA)(e),c="polyline"===e.type?e.paths:e.rings,h=0;h<u.length;h++)for(var f=u[h],p=0;p<f.length;p++)f[p]=v(f[p],t,i,n);return"paths"in e?e.paths=c:e.rings=c,e}function u(e,t,i,n,r){var a=e.clone(),s=n.resolution;if("point"===a.type){if(r)o(a,t*s,-i*s);else{var u=n.state.transform,c=n.state.inverseTransform,h=u[0]*a.x+u[2]*a.y+u[4],f=u[1]*a.x+u[3]*a.y+u[5];a.x=c[0]*(h+t)+c[2]*(f+i)+c[4],a.y=c[1]*(h+t)+c[3]*(f+i)+c[5]}return a}if("multipoint"===a.type){if(r)o(a,t*s,-i*s);else for(var v=a.points,d=n.state.transform,y=n.state.inverseTransform,m=0;m<v.length;m++){var g=v[m],b=d[0]*g[0]+d[2]*g[1]+d[4],_=d[1]*g[0]+d[3]*g[1]+d[5],x=y[0]*(b+t)+y[2]*(_+i)+y[4],w=y[1]*(b+t)+y[3]*(_+i)+y[5];v[m]=p(g,x,w,void 0)}return a}if("extent"===a.type){if(r)o(a,t*s,-i*s);else{var k=n.state.transform,G=n.state.inverseTransform,L=k[0]*a.xmin+k[2]*a.ymin+k[4],M=k[1]*a.xmin+k[3]*a.ymin+k[5],Z=k[0]*a.xmax+k[2]*a.ymax+k[4],S=k[1]*a.xmax+k[3]*a.ymax+k[5];a.xmin=G[0]*(L+t)+G[2]*(M+i)+G[4],a.ymin=G[1]*(L+t)+G[3]*(M+i)+G[5],a.xmax=G[0]*(Z+t)+G[2]*(S+i)+G[4],a.ymax=G[1]*(Z+t)+G[3]*(S+i)+G[5]}return a}if(r)o(a,t*s,-i*s);else{for(var E=(0,l.nA)(a),O="polyline"===a.type?a.paths:a.rings,H=n.state.transform,I=n.state.inverseTransform,T=0;T<E.length;T++)for(var U=E[T],C=0;C<U.length;C++){var D=U[C],P=H[0]*D[0]+H[2]*D[1]+H[4],R=H[1]*D[0]+H[3]*D[1]+H[5],A=I[0]*(P+t)+I[2]*(R+i)+I[4],z=I[1]*(P+t)+I[3]*(R+i)+I[5];U[C]=p(D,A,z,void 0)}"paths"in a?a.paths=O:a.rings=O}return a}function c(e,t,i,r){if("point"===e.type){var o=e.x,u=e.y,c=r?r[0]:o,h=r?r[1]:u,f=e.clone(),v=(o-c)*t+c,d=(u-h)*i+h;return f.x=v,f.y=d,f}if("multipoint"===e.type){for(var y=(0,l.nA)(e),m=(0,a.Ue)(),g=(0,s.C6)(m,[y]),b=(0,n.Z)(g,4),_=b[0],x=b[1],w=b[2],k=b[3],G=r?r[0]:(_+w)/2,L=r?r[1]:(k+x)/2,M=e.clone(),Z=M.points,S=0;S<Z.length;S++){var E=Z[S],O=(0,n.Z)(E,2),H=(O[0]-G)*t+G,I=(O[1]-L)*i+L;Z[S]=p(E,H,I,void 0)}return M}if("extent"===e.type){var T=e.xmin,U=e.xmax,C=e.ymin,D=e.ymax,P=r?r[0]:(T+U)/2,R=r?r[1]:(D+C)/2,A=e.clone();if(A.xmin=(T-P)*t+P,A.ymax=(D-R)*i+R,A.xmax=(U-P)*t+P,A.ymin=(C-R)*i+R,A.xmin>A.xmax){var z=A.xmin,q=A.xmax;A.xmin=q,A.xmax=z}if(A.ymin>A.ymax){var V=A.ymin,j=A.ymax;A.ymin=j,A.ymax=V}return A}for(var B=(0,l.nA)(e),K=(0,a.Ue)(),N=(0,s.C6)(K,B),F=(0,n.Z)(N,4),Q=F[0],W=F[1],X=F[2],$=F[3],J=r?r[0]:(Q+X)/2,Y=r?r[1]:($+W)/2,ee=e.clone(),te="polyline"===ee.type?ee.paths:ee.rings,ie=0;ie<B.length;ie++)for(var ne=B[ie],re=0;re<ne.length;re++){var ae=ne[re],se=(0,n.Z)(ae,2),le=(se[0]-J)*t+J,oe=(se[1]-Y)*i+Y;te[ie][re]=p(ae,le,oe,void 0)}return"paths"in ee?ee.paths=te:ee.rings=te,ee}function h(e,t,i,n,r,a){var s=Math.sqrt((i-e)*(i-e)+(n-t)*(n-t));return Math.sqrt((r-e)*(r-e)+(a-t)*(a-t))/s}function f(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=Math.atan2(t.y-i.y,t.x-i.x)-Math.atan2(e.y-i.y,e.x-i.x),s=Math.atan2(Math.sin(a),Math.cos(a));return n?s:(0,r.BV)(s)}function v(e,t,i,n){return p(e,e[0]+t,e[1]+i,null!=e[2]&&null!=n?e[2]+n:void 0)}function p(e,t,i,n){var r=[t,i];return e.length>2&&r.push(null!=n?n:e[2]),e.length>3&&r.push(e[3]),r}},45008:function(e,t,i){i.d(t,{D:function(){return l},K:function(){return s}});i(59486);var n=i(68860),r=i(96669),a=i(53866);function s(e,t,i){var r,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new a.Z,l=0;if("2d"===i.type)l=t*(null!==(r=i.resolution)&&void 0!==r?r:0);else if("3d"===i.type){var o=i.overlayPixelSizeInMapUnits(e),u=i.basemapSpatialReference;l=null==u||u.equals(i.spatialReference)?t*o:(0,n.c9)(u)/(0,n.c9)(i.spatialReference)}var c=e.x-l,h=e.y-l,f=e.x+l,v=e.y+l,p=i.spatialReference;return s.xmin=Math.min(c,f),s.ymin=Math.min(h,v),s.xmax=Math.max(c,f),s.ymax=Math.max(h,v),s.spatialReference=p,s}function l(e,t,i){var n=i.toMap(e);return null!=n&&s(n,(0,r.k)(),i,o).intersects(t)}var o=new a.Z}}]);
//# sourceMappingURL=56593.02be0e01.chunk.js.map