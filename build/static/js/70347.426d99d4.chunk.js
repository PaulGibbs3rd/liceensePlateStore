"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[70347],{82582:function(e,t,i){i.d(t,{D9:function(){return l},DE:function(){return s},dp:function(){return u},o2:function(){return o},yZ:function(){return a}});var n=i(16889),r=i(68860);function a(e,t){var i=t||e.extent,n=e.width,a=(0,r.c9)(null===i||void 0===i?void 0:i.spatialReference);return i&&n?i.width/n*a*r.hd*96:0}function u(e,t){return e/((0,r.c9)(t)*r.hd*96)}function s(e){return e/(96*r.hd)}function l(e,t){var i=e.extent,n=e.width-(e.padding?e.padding.left+e.padding.right:0),r=u(t,i.spatialReference);return i.clone().expand(r*n/i.width)}function o(e,t,i){return function(e,t){return 0===t||(0,n.W8)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,n.W8)(e,t)||e>t}(e,i)}},70056:function(e,t,i){i.r(t),i.d(t,{default:function(){return B}});var n=i(1413),r=i(29439),a=i(74165),u=i(15861),s=i(15671),l=i(43144),o=i(88301),h=i(61120),c=i(60136),f=i(29388),p=i(27366),d=i(42537),_=i(32718),g=i(66978),v=i(49861),y=(i(93169),i(84936),i(69912)),m=i(92975),w=i(78983),T=(i(10064),i(99346),i(86741),i(86950),i(42265),i(16889),i(53866),i(73268),i(13005),i(32238),i(77577),i(848),i(80885),i(29909),i(14320),i(40316),i(81241),i(8878),i(65057),i(53704),i(38901),i(13874),i(24434),i(12869),i(69093),i(91583),i(67993),i(64369),i(13957),i(38236),i(53986),i(1243),i(81624),i(50516),i(46628),i(93268),i(63156),i(48202),i(94109),i(30932),i(38999),i(61574),i(26707),i(46228),i(41978),i(91505),i(39594),i(80613),i(13594),i(99894),i(37825),i(8548),i(53634),i(3667),i(46888),i(57808),i(52120),i(61441),i(68571),i(67466),i(15532),i(73271),i(34517),i(86909),i(21391),i(10106),i(53456),i(76200),i(35995),i(78084),i(92841),i(93985),i(13163),i(93560),i(29660),i(755),i(94538),i(61669),i(11486),i(35783),i(72516),i(5964),i(69986),i(41414),i(51995),i(24799),i(7467),i(4297),i(99536),i(16336),i(36207),i(98634),i(39416),i(70812),i(85992)),b=(i(14921),i(80987),i(3073),i(50898),i(79347),i(93311),i(76335),i(78952),i(22186),i(59486),i(19545),i(582),i(46634),i(69610),i(2814)),E=i(65457),k=i(83978),x=i(34622),I=i(37995),Z=i(73828),S=i(32344),A=i(85269),V=i(67581),R=i(13107),C=i(32645),M=i(45008),U=[0,0],P=function(e){(0,c.Z)(i,e);var t=(0,f.Z)(i);function i(){var e;return(0,s.Z)(this,i),(e=t.apply(this,arguments))._fetchQueue=null,e._highlightGraphics=new w.J,e._highlightView=null,e._popupHighlightHelper=null,e._tileStrategy=null,e.layer=null,e}return(0,l.Z)(i,[{key:"resampling",get:function(){return!("resampling"in this.layer)||!1!==this.layer.resampling}},{key:"tilemapCache",get:function(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}},{key:"update",value:function(e){var t;this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),null===(t=this._highlightView)||void 0===t||t.processUpdate(e)}},{key:"attach",value:function(){var e=this,t="tileServers"in this.layer?this.layer.tileServers:null,n=this.tilemapCache;if(this._tileInfoView=new I.Z(this.layer.tileInfo,this.layer.fullExtent,null===n||void 0===n?void 0:n.effectiveMinLOD,null===n||void 0===n?void 0:n.effectiveMaxLOD),this._fetchQueue=new S.Z({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:function(t,i){return e.fetchTile(t,i)}}),this._tileStrategy=new A.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),(0,C.Uf)(this,this.layer)){var r=this._highlightView=new T.Z({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:function(){return e.requestUpdate()},container:new k.Z(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new C.VF({createFetchPopupFeaturesQueryGeometry:function(t,i){return(0,M.K)(t,i,e.view)},highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:function(e,t){r.graphicUpdateHandler({graphic:e,property:t})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((function(){return e.resampling}),(function(){e.doRefresh()}))),(0,o.Z)((0,h.Z)(i.prototype),"attach",this).call(this)}},{key:"detach",value:function(){var e,t;(0,o.Z)((0,h.Z)(i.prototype),"detach",this).call(this),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),null!==(e=this._popupHighlightHelper)&&void 0!==e&&e.destroy(),null!==(t=this._highlightView)&&void 0!==t&&t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}},{key:"fetchPopupFeaturesAtLocation",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i):[]);case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):(0,d.kB)()}},{key:"viewChange",value:function(){this.requestUpdate()}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"supportsSpatialReference",value:function(e){var t;return(0,m.fS)(null===(t=this.layer.tileInfo)||void 0===t?void 0:t.spatialReference,e)}},{key:"doRefresh",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.attached){e.next=4;break}if(!this.suspended){e.next=3;break}return e.abrupt("return",(this._tileStrategy.clear(),void this.requestUpdate()));case 3:this._fetchQueue.reset(),this._tileStrategy.refresh((function(e){return t._updatingHandles.addPromise(t._enqueueTileFetch(e))}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"acquireTile",value:function(e){var t,i,n,a=this._bitmapView.createTile(e),u=a.bitmap;return t=this._tileInfoView.getTileCoords(U,a.key),i=(0,r.Z)(t,2),u.x=i[0],u.y=i[1],u.resolution=this._tileInfoView.getTileResolution(a.key),n=(0,r.Z)(this._tileInfoView.tileInfo.size,2),u.width=n[0],u.height=n[1],this._updatingHandles.addPromise(this._enqueueTileFetch(a)),this._bitmapView.addChild(a),this.requestUpdate(),a}},{key:"releaseTile",value:function(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(function(){return e.destroy()})),this.requestUpdate()}},{key:"fetchTile",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var i,r,u,s,l,o,h,c,f,p,d=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=d.length>1&&void 0!==d[1]?d[1]:{},r=this.tilemapCache,u=i.signal,s=i.resamplingLevel,l=void 0===s?0:s,r){e.next=22;break}return e.prev=3,e.next=6,this._fetchImage(t,u);case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),(0,g.D_)(e.t0)||this.resampling){e.next=13;break}return e.abrupt("return",(0,x.V)(this._tileInfoView.tileInfo.size));case 13:if(!(l<3)){e.next=21;break}if(!(o=this._tileInfoView.getTileParentId(t.id))){e.next=21;break}return h=new Z.Z(o),e.next=19,this.fetchTile(h,(0,n.Z)((0,n.Z)({},i),{},{resamplingLevel:l+1}));case 19:return c=e.sent,e.abrupt("return",(0,x.i)(this._tileInfoView,c,h,t));case 21:throw e.t0;case 22:return f=new Z.Z(0,0,0,0),e.prev=23,e.next=26,r.fetchAvailabilityUpsample(t.level,t.row,t.col,f,{signal:u});case 26:if(f.level===t.level||this.resampling){e.next=28;break}return e.abrupt("return",(0,x.V)(this._tileInfoView.tileInfo.size));case 28:return e.next=30,this._fetchImage(f,u);case 30:p=e.sent,e.next=40;break;case 33:if(e.prev=33,e.t1=e.catch(23),!(0,g.D_)(e.t1)){e.next=37;break}throw e.t1;case 37:return e.next=39,this._fetchImage(t,u);case 39:p=e.sent;case 40:return e.abrupt("return",this.resampling?(0,x.i)(this._tileInfoView,p,f,t):p);case 41:case"end":return e.stop()}}),e,this,[[3,9],[23,33]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_enqueueTileFetch",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){var i,n=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._fetchQueue.has(t.key.id)){e.next=12;break}return e.prev=1,e.next=4,this._fetchQueue.push(t.key);case 4:i=e.sent,t.bitmap.source=i,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",(function(){return n.requestUpdate()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,g.D_)(e.t0)||_.Z.getLogger(this).error(e.t0);case 11:this.requestUpdate();case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_fetchImage",value:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:i}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,i){return e.apply(this,arguments)}}()}]),i}((0,R.Z)((0,b.Y)((0,E.y)(V.Z))));(0,p._)([(0,v.Cb)()],P.prototype,"resampling",null),(0,p._)([(0,v.Cb)()],P.prototype,"tilemapCache",null);var B=P=(0,p._)([(0,y.j)("esri.views.2d.layers.TileLayerView2D")],P)},39444:function(e,t,i){i.d(t,{K:function(){return M}});var n=i(37762),r=i(15671),a=i(43144),u=i(88301),s=i(61120),l=i(60136),o=i(29388),h=i(92026),c=i(58880),f=i(80613),p=i(97890),d=i(93560),_=i(66759),g=0;function v(e,t){return new p.G((0,_.W)(g++),e,t)}var y={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null},m=function(){function e(){(0,r.Z)(this,e),this.instances={fill:v(d.k2.fill,{uniforms:y,optionalAttributes:{zoomRange:!0}}),marker:v(d.k2.marker,{uniforms:y,optionalAttributes:{zoomRange:!0}}),line:v(d.k2.line,{uniforms:y,optionalAttributes:{zoomRange:!0}}),text:v(d.k2.text,{uniforms:y,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:v(d.k2.complexFill,{uniforms:y,optionalAttributes:{zoomRange:!0}}),texturedLine:v(d.k2.texturedLine,{uniforms:y,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((function(e,t){return e.set(t.instanceId,t),e}),new Map)}return(0,a.Z)(e,[{key:"getInstance",value:function(e){return this._instancesById.get(e)}}]),e}(),w=i(29303),T=i(8768),b=i(30932),E=i(93311),k=i(91340),x=i(87422),I=i(84319),Z=i(44070),S=i(8548),A=i(45412),V=Math.PI/180,R=function(e){(0,l.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this))._program=null,n._vao=null,n._vertexBuffer=null,n._indexBuffer=null,n._dvsMat3=(0,T.Ue)(),n._localOrigin={x:0,y:0},n._getBounds=e,n}return(0,a.Z)(i,[{key:"destroy",value:function(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=(0,h.M2)(this._program)}},{key:"doRender",value:function(e){var t=e.context,i=this._getBounds();if(!(i.length<1)){this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,i),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(S.zi.ONE,S.zi.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);var n=this._program;t.bindVAO(this._vao),t.useProgram(n),n.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(S.MX.LINES,8*i.length,S.g.UNSIGNED_INT,0),t.bindVAO()}}},{key:"_createTransforms",value:function(){return{displayViewScreenMat3:(0,T.Ue)()}}},{key:"_createShaderProgram",value:function(e){if(!this._program){this._program=e.programCache.acquire("precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }","precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }",C().attributes)}}},{key:"_updateMatricesAndLocalOrigin",value:function(e){var t=e.state,i=t.displayMat3,n=t.size,r=t.resolution,a=t.pixelRatio,u=t.rotation,s=t.viewpoint,l=V*u,o=s.targetGeometry,h=o.x,c=o.y,f=(0,k.or)(h,t.spatialReference);this._localOrigin.x=f,this._localOrigin.y=c;var p=a*n[0],d=a*n[1],_=r*p,g=r*d,v=(0,w.yR)(this._dvsMat3);(0,w.Jp)(v,v,i),(0,w.Iu)(v,v,(0,b.al)(p/2,d/2)),(0,w.bA)(v,v,(0,E.al)(n[0]/_,-d/g,1)),(0,w.U1)(v,v,-l)}},{key:"_updateBufferData",value:function(e,t){var i,r=this._localOrigin,a=r.x,u=r.y,s=8*t.length,l=new Float32Array(s),o=new Uint32Array(8*t.length),h=0,c=0,f=(0,n.Z)(t);try{for(f.s();!(i=f.n()).done;){var p=i.value;p&&(l[2*h]=p[0]-a,l[2*h+1]=p[1]-u,l[2*h+2]=p[0]-a,l[2*h+3]=p[3]-u,l[2*h+4]=p[2]-a,l[2*h+5]=p[3]-u,l[2*h+6]=p[2]-a,l[2*h+7]=p[1]-u,o[c]=h+0,o[c+1]=h+3,o[c+2]=h+3,o[c+3]=h+2,o[c+4]=h+2,o[c+5]=h+1,o[c+6]=h+1,o[c+7]=h+0,h+=4,c+=8)}}catch(_){f.e(_)}finally{f.f()}if(this._vertexBuffer?this._vertexBuffer.setData(l.buffer):this._vertexBuffer=Z.f.createVertex(e,S.l1.DYNAMIC_DRAW,l.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=Z.f.createIndex(e,S.l1.DYNAMIC_DRAW,o),!this._vao){var d=C();this._vao=new A.U(e,d.attributes,d.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer)}}}]),i}(x.s),C=function(){return(0,I.cM)("bounds",{geometry:[{location:0,name:"a_position",count:2,type:S.g.FLOAT}]})},M=function(e){(0,l.Z)(i,e);var t=(0,o.Z)(i);function i(e){var n;return(0,r.Z)(this,i),(n=t.call(this,e))._instanceStore=new m,n.checkHighlight=function(){return!0},n}return(0,a.Z)(i,[{key:"destroy",value:function(){(0,u.Z)((0,s.Z)(i.prototype),"destroy",this).call(this),this._boundsRenderer=(0,h.SC)(this._boundsRenderer)}},{key:"instanceStore",get:function(){return this._instanceStore}},{key:"enableRenderingBounds",value:function(e){this._boundsRenderer=new R(e),this.requestRender()}},{key:"hasHighlight",get:function(){return this.checkHighlight()}},{key:"onTileData",value:function(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}},{key:"_renderChildren",value:function(e,t){e.selection=t;var i,r=(0,n.Z)(this.children);try{for(r.s();!(i=r.n()).done;){var a=i.value;if(a.visible){var u=a.getDisplayList(this._instanceStore,f.gl.STRICT_ORDER);null===u||void 0===u||u.render(e)}}}catch(s){r.e(s)}finally{r.f()}}}]),i}(c.b)},83978:function(e,t,i){i.d(t,{Z:function(){return _}});var n=i(15671),r=i(43144),a=i(88301),u=i(61120),s=i(60136),l=i(29388),o=i(27366),h=(i(32718),i(93169),i(84936),i(10064),i(69912)),c=i(80613),f=i(39444),p=i(39594),d=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"hasHighlight",get:function(){return this.children.some((function(e){return e.hasData}))}},{key:"renderChildren",value:function(e){var t=this;this.attributeView.update(),e.drawPhase===c.jx.HIGHLIGHT&&this.children.some((function(e){return e.hasData}))&&((0,a.Z)((0,u.Z)(i.prototype),"renderChildren",this).call(this,e),e.context.setColorMask(!0,!0,!0,!0),(0,p.P9)(e,!0,(function(e){t._renderChildren(e,c.Xq.All)})))}}]),i}(f.K),_=d=(0,o._)([(0,h.j)("esri.views.2d.layers.graphics.HighlightGraphicContainer")],d)},81152:function(e,t,i){i.d(t,{G:function(){return u}});var n=i(15671),r=i(43144),a=i(92026),u=function(){function e(){(0,n.Z)(this,e),this._result=!1}return(0,r.Z)(e,[{key:"dispose",value:function(){this._program=(0,a.M2)(this._program)}},{key:"result",get:function(){return null!=this._program&&(this._result=this._test(this._program),this.dispose()),this._result}}]),e}()},40235:function(e,t,i){i.d(t,{P9:function(){return u},mO:function(){return s}});var n=i(43144),r=i(15671),a=(0,n.Z)((function e(t,i,n,a,u,s,l,o,h){(0,r.Z)(this,e),this.createQuery=t,this.deleteQuery=i,this.resultAvailable=n,this.getResult=a,this.disjoint=u,this.beginTimeElapsed=s,this.endTimeElapsed=l,this.createTimestamp=o,this.timestampBits=h})),u=!1;function s(e,t){if(t.disjointTimerQuery)return null;var i=e.getExtension("EXT_disjoint_timer_query_webgl2");return i?new a((function(){return e.createQuery()}),(function(t){e.deleteQuery(t),u=!1}),(function(t){return e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)}),(function(t){return e.getQueryParameter(t,e.QUERY_RESULT)}),(function(){return e.getParameter(i.GPU_DISJOINT_EXT)}),(function(t){u||(u=!0,e.beginQuery(i.TIME_ELAPSED_EXT,t))}),(function(){e.endQuery(i.TIME_ELAPSED_EXT),u=!1}),(function(e){return i.queryCounterEXT(e,i.TIMESTAMP_EXT)}),(function(){return e.getQuery(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)})):(i=e.getExtension("EXT_disjoint_timer_query"))?new a((function(){return i.createQueryEXT()}),(function(e){i.deleteQueryEXT(e),u=!1}),(function(e){return i.getQueryObjectEXT(e,i.QUERY_RESULT_AVAILABLE_EXT)}),(function(e){return i.getQueryObjectEXT(e,i.QUERY_RESULT_EXT)}),(function(){return e.getParameter(i.GPU_DISJOINT_EXT)}),(function(e){u||(u=!0,i.beginQueryEXT(i.TIME_ELAPSED_EXT,e))}),(function(){i.endQueryEXT(i.TIME_ELAPSED_EXT),u=!1}),(function(e){return i.queryCounterEXT(e,i.TIMESTAMP_EXT)}),(function(){return i.getQueryEXT(i.TIMESTAMP_EXT,i.QUERY_COUNTER_BITS_EXT)})):null}},39416:function(e,t,i){i.d(t,{d:function(){return g}});var n=i(15671),r=i(43144),a=i(88301),u=i(61120),s=i(60136),l=i(29388),o=i(61441),h=i(44070),c=i(8548),f=i(53634),p=i(57808),d=i(52311),_=i(45412),g=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;(0,n.Z)(this,i),(r=t.call(this))._rctx=e;return r._program=e.programCache.acquire("\n    precision highp float;\n\n    attribute vec2 a_pos;\n    varying vec2 v_uv;\n\n    void main() {\n      v_uv = a_pos;\n      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n    }\n    ","\n    precision highp float;\n\n    varying vec2 v_uv;\n\n    uniform sampler2D u_texture;\n\n    void main() {\n      gl_FragColor = texture2D(u_texture, v_uv);\n    }\n    ",new Map([["a_pos",0]])),r}return(0,r.Z)(i,[{key:"dispose",value:function(){(0,a.Z)((0,u.Z)(i.prototype),"dispose",this).call(this)}},{key:"_test",value:function(e){var t=this._rctx;if(!t.gl)return e.dispose(),!0;var i=new d.X(1);i.wrapMode=c.e8.CLAMP_TO_EDGE,i.samplingMode=c.cw.NEAREST;var n=new f.X(t,i),r=h.f.createVertex(t,c.l1.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),a=new _.U(t,new Map([["a_pos",0]]),o.cD,{geometry:r}),u=new d.X;u.samplingMode=c.cw.LINEAR,u.wrapMode=c.e8.CLAMP_TO_EDGE;var s=new p.x(t,u,v);t.useProgram(e),t.bindTexture(s,0),e.setUniform1i("u_texture",0);var l=t.getBoundFramebufferObject(),g=t.getViewport(),y=g.x,m=g.y,w=g.width,T=g.height;t.bindFramebuffer(n),t.setViewport(0,0,1,1),t.setClearColor(0,0,0,0),t.setBlendingEnabled(!1),t.clear(c.lk.COLOR_BUFFER_BIT),t.bindVAO(a),t.drawArrays(c.MX.TRIANGLE_STRIP,0,4);var b=new Uint8Array(4);return n.readPixels(0,0,1,1,c.VI.RGBA,c.Br.UNSIGNED_BYTE,b),a.dispose(),n.dispose(),s.dispose(),t.setViewport(y,m,w,T),t.bindFramebuffer(l),255!==b[0]}}]),i}(i(81152).G),v=new Image;v.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",v.width=5,v.height=5,v.decode()}}]);
//# sourceMappingURL=70347.426d99d4.chunk.js.map