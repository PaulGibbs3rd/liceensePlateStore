"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[67472],{45956:function(t,e,i){i.d(e,{JZ:function(){return w},RL:function(){return b},eY:function(){return R}});var n=i(29439),r=i(74165),s=i(15861),a=i(15671),u=i(43144),o=i(97326),l=i(88301),h=i(61120),c=i(60136),d=i(29388),p=i(66978),f=i(29303),v=i(8768),x=i(30932),_=i(87422),g=i(10978),m=i(8548),y=i(57808),k=i(52311);function w(t){return t&&"render"in t}function b(t){var e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}function Z(t){var e;return w(t)?t instanceof g.Z?null===(e=t.getRenderedRasterPixels())||void 0===e?void 0:e.renderedRasterPixels:b(t):t}var R=function(t){(0,c.Z)(i,t);var e=(0,d.Z)(i);function i(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,a.Z)(this,i),(t=e.call(this)).blendFunction="standard",t._sourceWidth=0,t._sourceHeight=0,t._textureInvalidated=!1,t._texture=null,t.stencilRef=0,t.coordScale=[1,1],t._height=void 0,t.pixelRatio=1,t.resolution=0,t.rotation=0,t._source=null,t._width=void 0,t.x=0,t.y=0,t.immutable=r,t.source=n,t.requestRender=t.requestRender.bind((0,o.Z)(t)),t}return(0,u.Z)(i,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}},{key:"isSourceScaled",get:function(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this._sourceHeight},set:function(t){this._height=t}},{key:"source",get:function(){return this._source},set:function(t){null==t&&null==this._source||(this._source=t,this.invalidateTexture(),this.requestRender())}},{key:"width",get:function(){return void 0!==this._width?this._width:this._sourceWidth},set:function(t){this._width=t}},{key:"beforeRender",value:function(t){(0,l.Z)((0,h.Z)(i.prototype),"beforeRender",this).call(this,t),this.updateTexture(t)}},{key:"setSourceAsync",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,i){var n,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return null!=this._uploadStatus&&this._uploadStatus.controller.abort(),n=new AbortController,s=(0,p.hh)(),t.abrupt("return",((0,p.$F)(i,(function(){return n.abort()})),(0,p.$F)(n,(function(t){return s.reject(t)})),this._uploadStatus={controller:n,resolver:s},this.source=e,s.promise));case 3:case"end":return t.stop()}}),t,this)})));return function(e,i){return t.apply(this,arguments)}}()},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}},{key:"updateTransitionProperties",value:function(t,e){t>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),(0,l.Z)((0,h.Z)(i.prototype),"updateTransitionProperties",this).call(this,t,e)}},{key:"setTransform",value:function(t){var e=(0,f.yR)(this.transforms.displayViewScreenMat3),i=t.toScreenNoRotation([0,0],[this.x,this.y]),r=(0,n.Z)(i,2),s=r[0],a=r[1],u=this.resolution/this.pixelRatio/t.resolution,o=u*this.width,l=u*this.height,h=Math.PI*this.rotation/180;(0,f.Iu)(e,e,(0,x.al)(s,a)),(0,f.Iu)(e,e,(0,x.al)(o/2,l/2)),(0,f.U1)(e,e,-h),(0,f.Iu)(e,e,(0,x.al)(-o/2,-l/2)),(0,f.ex)(e,e,(0,x.al)(o,l)),(0,f.Jp)(this.transforms.displayViewScreenMat3,t.displayViewMat3,e)}},{key:"setSamplingProfile",value:function(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}},{key:"bind",value:function(t,e){this._texture&&t.bindTexture(this._texture,e)}},{key:"updateTexture",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e){var i,n,s,a,u,o,l,h,c,d,f;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.context,n=e.painter,this._textureInvalidated){t.next=3;break}return t.abrupt("return");case 3:if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(i)),this.source){t.next=5;break}return t.abrupt("return",void this._texture.setData(null));case 5:if(this._texture.resize(this._sourceWidth,this._sourceHeight),s=Z(this.source),t.prev=7,null==this._uploadStatus){t.next=16;break}return a=this._uploadStatus,u=a.controller,o=a.resolver,l={signal:u.signal},h=this.width,c=this.height,d=this._texture,f=n.textureUploadManager,t.next=12,f.enqueueTextureUpdate({data:s,texture:d,width:h,height:c},l);case 12:o.resolve(),this._uploadStatus=null,t.next=17;break;case 16:this._texture.setData(s);case 17:this.ready(),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(7),(0,p.H9)(t.t0);case 23:case"end":return t.stop()}}),t,this,[[7,20]])})));return function(e){return t.apply(this,arguments)}}()},{key:"onDetach",value:function(){this.destroy()}},{key:"_createTransforms",value:function(){return{displayViewScreenMat3:(0,v.Ue)()}}},{key:"_createTexture",value:function(t){var e=this.immutable,i=new k.X;return i.internalFormat=e?m.lP.RGBA8:m.VI.RGBA,i.wrapMode=m.e8.CLAMP_TO_EDGE,i.isImmutable=e,i.width=this._sourceWidth,i.height=this._sourceHeight,new y.x(t,i)}}]),i}(_.s)},10978:function(t,e,i){i.d(e,{Z:function(){return s}});var n=i(15671),r=i(43144),s=function(){function t(e,i,r){(0,n.Z)(this,t),this.pixelBlock=e,this.extent=i,this.originalPixelBlock=r}return(0,r.Z)(t,[{key:"width",get:function(){return null!=this.pixelBlock?this.pixelBlock.width:0}},{key:"height",get:function(){return null!=this.pixelBlock?this.pixelBlock.height:0}},{key:"render",value:function(t){var e,i=this.pixelBlock;if(null!=i){var n=this.filter({extent:this.extent,pixelBlock:null!==(e=this.originalPixelBlock)&&void 0!==e?e:i});if(null!=n.pixelBlock){n.pixelBlock.maskIsAlpha&&(n.pixelBlock.premultiplyAlpha=!0);var r=n.pixelBlock.getAsRGBA(),s=t.createImageData(n.pixelBlock.width,n.pixelBlock.height);s.data.set(r),t.putImageData(s,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var t=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==t.pixelBlock?null:(t.pixelBlock.maskIsAlpha&&(t.pixelBlock.premultiplyAlpha=!0),{width:t.pixelBlock.width,height:t.pixelBlock.height,renderedRasterPixels:new Uint8Array(t.pixelBlock.getAsRGBA().buffer)})}}]),t}()},2814:function(t,e,i){i.d(e,{Y:function(){return y}});var n=i(15671),r=i(43144),s=i(60136),a=i(29388),u=i(27366),o=(i(32718),i(93169),i(84936),i(10064),i(69912)),l=i(93433),h=i(29439),c=i(88301),d=i(61120),p=i(65156),f=i(8768),v=i(45956),x=function(t){(0,s.Z)(i,t);var e=(0,a.Z)(i);function i(t,r,s,a,u,o){var l,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return(0,n.Z)(this,i),(l=e.call(this,t,r,s,a,u,o)).bitmap=new v.eY(h),l.bitmap.coordScale=[u,o],l.bitmap.once("isReady",(function(){return l.ready()})),l}return(0,r.Z)(i,[{key:"destroy",value:function(){(0,c.Z)((0,d.Z)(i.prototype),"destroy",this).call(this),this.bitmap.destroy()}},{key:"beforeRender",value:function(t){this.bitmap.beforeRender(t),(0,c.Z)((0,d.Z)(i.prototype),"beforeRender",this).call(this,t)}},{key:"afterRender",value:function(t){this.bitmap.afterRender(t),(0,c.Z)((0,d.Z)(i.prototype),"afterRender",this).call(this,t)}},{key:"stencilRef",get:function(){return this.bitmap.stencilRef},set:function(t){this.bitmap.stencilRef=t}},{key:"_createTransforms",value:function(){return{displayViewScreenMat3:(0,f.Ue)(),tileMat3:(0,f.Ue)()}}},{key:"setTransform",value:function(t){(0,c.Z)((0,d.Z)(i.prototype),"setTransform",this).call(this,t),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}},{key:"onAttach",value:function(){this.bitmap.stage=this.stage}},{key:"onDetach",value:function(){this.bitmap&&(this.bitmap.stage=null)}}]),i}(i(72900).I),_=i(34702),g=i(80613),m=function(t){(0,s.Z)(i,t);var e=(0,a.Z)(i);function i(){return(0,n.Z)(this,i),e.apply(this,arguments)}return(0,r.Z)(i,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(t){return"additive"===t.bitmap.blendFunction}))}},{key:"createTile",value:function(t){var e=this._tileInfoView.getTileBounds((0,p.Ue)(),t),i=this._tileInfoView.getTileResolution(t.level),n=(0,h.Z)(this._tileInfoView.tileInfo.size,2),r=n[0],s=n[1];return new x(t,i,e[0],e[3],r,s)}},{key:"prepareRenderPasses",value:function(t){var e=this,n=t.registerRenderPass({name:"bitmap (tile)",brushes:[_.U.bitmap],target:function(){return e.children.map((function(t){return t.bitmap}))},drawPhase:g.jx.MAP});return[].concat((0,l.Z)((0,c.Z)((0,d.Z)(i.prototype),"prepareRenderPasses",this).call(this,t)),[n])}},{key:"doRender",value:function(t){this.visible&&t.drawPhase===g.jx.MAP&&(0,c.Z)((0,d.Z)(i.prototype),"doRender",this).call(this,t)}}]),i}(i(55067).Z),y=function(t){var e=function(t){(0,s.Z)(i,t);var e=(0,a.Z)(i);function i(){return(0,n.Z)(this,i),e.apply(this,arguments)}return(0,r.Z)(i,[{key:"attach",value:function(){this.view.timeline.record("".concat(this.layer.title," (BitmapTileLayer) Attach")),this._bitmapView=new m(this._tileInfoView),this.container.addChild(this._bitmapView)}},{key:"detach",value:function(){var t;this.container.removeChild(this._bitmapView),null!==(t=this._bitmapView)&&void 0!==t&&t.removeAllChildren(),this._bitmapView=null}}]),i}(t);return e=(0,u._)([(0,o.j)("esri.views.2d.layers.BitmapTileLayerView2D")],e)}},34622:function(t,e,i){i.d(e,{V:function(){return s},i:function(){return r}});var n=i(29439);function r(t,e,i,n){if(i.level===n.level)return e;var r=t.tileInfo.size,a=t.getTileResolution(i.level),u=t.getTileResolution(n.level),o=t.getLODInfoAt(n.level),l=o.getXForColumn(n.col),h=o.getYForRow(n.row),c=(o=t.getLODInfoAt(i.level)).getXForColumn(i.col),d=o.getYForRow(i.row),p=function(t){return t instanceof HTMLImageElement?t.naturalWidth:t.width}(e)/r[0],f=function(t){return t instanceof HTMLImageElement?t.naturalHeight:t.height}(e)/r[1],v=Math.round(p*((l-c)/a)),x=Math.round(f*(-(h-d)/a)),_=Math.round(p*r[0]*(u/a)),g=Math.round(f*r[1]*(u/a)),m=s(r);return m.getContext("2d").drawImage(e,v,x,_,g,0,0,r[0],r[1]),m}function s(t){var e,i=document.createElement("canvas");return e=(0,n.Z)(t,2),i.width=e[0],i.height=e[1],i}}}]);
//# sourceMappingURL=67472.ad94f236.chunk.js.map