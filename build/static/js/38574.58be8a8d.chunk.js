"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[38574],{38574:function(r,e,t){t.r(e),t.d(e,{default:function(){return j}});var n,i=t(1413),o=t(74165),a=t(15861),s=t(15671),u=t(43144),l=(t(59486),t(42306)),c=t(99278),f=t(45502),p=t(17314),m=t(43346),v=t(80394),d=t(21449),y=t(64145),h=t(3089),Z=t(60136),k=t(29388),S=t(27366),x=(t(32718),t(93169),t(84936),t(10064),t(27135)),O=t(69912),w=t(32935),J=n=function(r){(0,Z.Z)(t,r);var e=(0,k.Z)(t);function t(){var r;return(0,s.Z)(this,t),(r=e.apply(this,arguments)).type="identity",r}return(0,u.Z)(t,[{key:"clone",value:function(){return new n}}]),t}(w.Z);(0,S._)([(0,x.J)({IdentityXform:"identity"})],J.prototype,"type",void 0);var N=J=n=(0,S._)([(0,O.j)("esri.layers.support.rasterTransforms.IdentityTransform")],J),b=t(69405),B={GCSShiftXform:h.Z,IdentityXform:N,PolynomialXform:b.Z};Object.keys(B);function P(r){if(!(null===r||void 0===r?void 0:r.type))return null;var e=B[null===r||void 0===r?void 0:r.type];if(e){var t=new e;return t.read(r),t}return null}var g=t(43238),z=t(55185),D=t(53866),T=t(848),j=function(){function r(){(0,s.Z)(this,r)}return(0,u.Z)(r,[{key:"convertVectorFieldData",value:function(r){var e=c.Z.fromJSON(r.pixelBlock),t=(0,y.KC)(e,r.type);return Promise.resolve(null!=t?t.toJSON():null)}},{key:"computeStatisticsHistograms",value:function(r){var e=c.Z.fromJSON(r.pixelBlock),t=(0,d.js)(e);return Promise.resolve(t)}},{key:"decode",value:function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,f.J)(e.data,e.options);case 2:return t=r.sent,r.abrupt("return",t&&t.toJSON());case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},{key:"symbolize",value:function(r){r.pixelBlock=c.Z.fromJSON(r.pixelBlock),r.extent=r.extent?D.Z.fromJSON(r.extent):null;var e=this.symbolizer.symbolize(r);return Promise.resolve(null!=e?e.toJSON():null)}},{key:"updateSymbolizer",value:function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:this.symbolizer=g.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null===(t=this.symbolizer)||void 0===t?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms);case 1:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()},{key:"updateRasterFunction",value:function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:this.rasterFunction=(0,m.Ue)(e.rasterFunctionJSON);case 1:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()},{key:"process",value:function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t,n;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=this.rasterFunction.process({extent:D.Z.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((function(r){return null!=r?c.Z.fromJSON(r):null})),primaryPixelSizes:null===(t=e.primaryPixelSizes)||void 0===t?void 0:t.map((function(r){return null!=r?T.Z.fromJSON(r):null})),primaryRasterIds:e.primaryRasterIds}),r.abrupt("return",null!=n?n.toJSON():null);case 2:case"end":return r.stop()}}),r,this)})));return function(e){return r.apply(this,arguments)}}()},{key:"stretch",value:function(r){var e=this.symbolizer.simpleStretch(c.Z.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(null===e||void 0===e?void 0:e.toJSON())}},{key:"estimateStatisticsHistograms",value:function(r){var e=(0,d.Hv)(c.Z.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}},{key:"split",value:function(r){var e,t=(0,p.Vl)(c.Z.fromJSON(r.srcPixelBlock),r.tileSize,null!==(e=r.maximumPyramidLevel)&&void 0!==e?e:0,!1===r.useBilinear);return t&&t.forEach((function(r,e){t.set(e,null===r||void 0===r?void 0:r.toJSON())})),Promise.resolve(t)}},{key:"clipTile",value:function(r){var e=c.Z.fromJSON(r.pixelBlock),t=(0,p.Uu)((0,i.Z)((0,i.Z)({},r),{},{pixelBlock:e}));return Promise.resolve(null===t||void 0===t?void 0:t.toJSON())}},{key:"mosaicAndTransform",value:function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t,n,i,a,s;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.srcPixelBlocks.map((function(r){return r?new c.Z(r):null})),i=(0,p.us)(n,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize}),s=i,r.abrupt("return",(e.coefs&&(s=(0,p.Uk)(i,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(a=(0,p.Qh)(e.destDimension,e.gcsGrid),s=(0,y.xQ)(s,e.isUV?"vector-uv":"vector-magdir",a)),{pixelBlock:null===(t=s)||void 0===t?void 0:t.toJSON(),localNorthDirections:a}));case 3:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},{key:"createFlowMesh",value:function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e,t){var n,i,a,s;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},r.next=3,(0,z.GE)(e.meshType,e.simulationSettings,n,t.signal);case 3:return i=r.sent,a=i.vertexData,s=i.indexData,r.abrupt("return",{result:{vertexBuffer:a.buffer,indexBuffer:s.buffer},transferList:[a.buffer,s.buffer]});case 7:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},{key:"getProjectionOffsetGrid",value:function(){var r=(0,a.Z)((0,o.Z)().mark((function r(e){var t,n,a,s;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=D.Z.fromJSON(e.projectedExtent),n=D.Z.fromJSON(e.srcBufferExtent),a=null,e.datumTransformationSteps&&(a=new l.Z({steps:e.datumTransformationSteps})),r.t0=e.includeGCSGrid||(0,v.Mk)(t.spatialReference,n.spatialReference,a),!r.t0){r.next=7;break}return r.next=7,(0,v.zD)();case 7:return s=e.rasterTransform?P(e.rasterTransform):null,r.abrupt("return",(0,v.Qp)((0,i.Z)((0,i.Z)({},e),{},{projectedExtent:t,srcBufferExtent:n,datumTransformation:a,rasterTransform:s})));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}]),r}()}}]);
//# sourceMappingURL=38574.58be8a8d.chunk.js.map