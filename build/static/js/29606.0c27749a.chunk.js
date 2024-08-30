"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[29606,4035],{42137:function(e,t,n){n.d(t,{Z:function(){return b}});var i,r=n(1413),o=n(15671),a=n(43144),s=n(88301),l=n(61120),c=n(60136),u=n(29388),p=n(27366),d=n(68860),h=n(49861),v=(n(93169),n(32718),n(84936),n(69912)),f=n(83448),y=n(848),g=n(80885),m=n(78952),k=n(15559),_=n(81753),w=n(89093),x=i=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;(0,o.Z)(this,n);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).center=null,e.geodesic=!1,e.numberOfPoints=60,e.radius=1e3,e.radiusUnit="meters",e}return(0,a.Z)(n,[{key:"normalizeCtorArgs",value:function(e,t){var i;if(null!==e&&void 0!==e&&e.center)i=e;else{if(null!==e&&void 0!==e&&e.rings)return(0,s.Z)((0,l.Z)(n.prototype),"normalizeCtorArgs",this).call(this,e,t);i={center:e}}return(0,r.Z)((0,r.Z)((0,r.Z)({},(0,s.Z)((0,l.Z)(n.prototype),"normalizeCtorArgs",this).call(this)),i),t)}},{key:"initialize",value:function(){var e,t=this.center,n=this.numberOfPoints;if(this.hasZ=null!==(e=null===t||void 0===t?void 0:t.hasZ)&&void 0!==e&&e,0===this.rings.length&&t){var i,r=(0,d.En)(this.radius,this.radiusUnit,"meters"),o=t.spatialReference,a="geographic";if(o.isWebMercator?a="webMercator":(null!=(o.wkid&&w.Z[o.wkid])||(o.wkt2||o.wkt)&&(0,d.s_)(o.wkt2||o.wkt))&&(a="projected"),this.geodesic){var s;switch(a){case"webMercator":s=(0,_.Sx)(t);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":s=t}i=this._createGeodesicCircle(s,r,n),"webMercator"===a&&(i=(0,_.$)(i))}else{var l;"webMercator"===a||"projected"===a?l=r/(0,d.Z7)(t.spatialReference):"geographic"===a&&(l=(0,d.ty)(r,"meters",(0,f.Iu)(t.spatialReference).radius)),i=this._createPlanarCircle(t,l,n)}this.spatialReference=i.spatialReference,this.addRing(i.rings[0])}}},{key:"clone",value:function(){var e=this.center,t=this.numberOfPoints,n=this.radius,r=this.radiusUnit,o=this.geodesic;return new i({center:null===e||void 0===e?void 0:e.clone(),numberOfPoints:t,radius:n,radiusUnit:r,geodesic:o})}},{key:"_createGeodesicCircle",value:function(e,t,n){for(var i=0,r=[];i<360;){var o=[0,0],a=[e.x,e.y];(0,k.TB)(o,a,i,t,m.Z.WGS84),this.hasZ&&o.push(e.z),r.push(o),i+=360/n}return r.push(r[0]),new g.Z(r)}},{key:"_createPlanarCircle",value:function(e,t,n){for(var i=[],r=2*Math.PI/n,o=0;o<n;++o){var a=r*o,s=[e.x+Math.cos(-a)*t,e.y+Math.sin(-a)*t];this.hasZ&&s.push(e.z),i.push(s)}return i.push(i[0]),new g.Z({spatialReference:e.spatialReference,rings:[i]})}}]),n}(g.Z);(0,p._)([(0,h.Cb)({type:y.Z})],x.prototype,"center",void 0),(0,p._)([(0,h.Cb)()],x.prototype,"geodesic",void 0),(0,p._)([(0,h.Cb)()],x.prototype,"numberOfPoints",void 0),(0,p._)([(0,h.Cb)()],x.prototype,"radius",void 0),(0,p._)([(0,h.Cb)()],x.prototype,"radiusUnit",void 0);var b=x=i=(0,p._)([(0,v.j)("esri.geometry.Circle")],x)},84827:function(e,t,n){n.d(t,{T:function(){return Ue},I:function(){return Pe}});var i,r=n(1413),o=n(15671),a=n(43144),s=n(60136),l=n(29388),c=n(27366),u=n(52639),p=n(74165),d=n(15861),h=n(7138),v=n(80987),f=n(94172),y=n(49861),g=(n(93169),n(32718),n(84936),n(69912)),m=n(46634);!function(e){e[e.NeverApplied=0]="NeverApplied",e[e.Applied=1]="Applied",e[e.Undone=2]="Undone"}(i||(i={}));var k,_,w=n(28664),x=n(4942);!function(e){e.UndoRedoUpdating="UndoRedoUpdating",e.UndoInvalidError="UndoInvalidError",e.RedoInvalidError="RedoInvalidError",e.ApplyInvalidError="ApplyInvalidError"}(_||(_={}));var b,Z,C=(k={},(0,x.Z)(k,_.UndoRedoUpdating,"Cannot perform operation whilst undo redo is updating"),(0,x.Z)(k,_.UndoInvalidError,"There are no items to Undo"),(0,x.Z)(k,_.RedoInvalidError,"There are no items to Redo"),(0,x.Z)(k,_.ApplyInvalidError,"Cannot apply an item that is already applied"),k),O=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this,C[_.UndoRedoUpdating])).type="undo-redo-updating-error",e}return(0,a.Z)(n)}((0,w.Z)(Error)),M=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this,C[_.UndoInvalidError])).type="undo-redo-undo-error",e}return(0,a.Z)(n)}((0,w.Z)(Error)),R=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this,C[_.RedoInvalidError])).type="undo-redo-redo-error",e}return(0,a.Z)(n)}((0,w.Z)(Error)),U=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this,C[_.ApplyInvalidError])).type="undo-redo-apply-error",e}return(0,a.Z)(n)}((0,w.Z)(Error));(Z=b||(b={}))[Z.Apply=0]="Apply",Z[Z.Undo=1]="Undo",Z[Z.Redo=2]="Redo";var T=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments)).name="",e.tag=Symbol(),e.status=i.NeverApplied,e}return(0,a.Z)(n,[{key:"canUndo",get:function(){return this.status===i.Applied}},{key:"canRedo",get:function(){return this.status===i.Undone}},{key:"executeUndoRedoOperation",value:function(){var e=(0,d.Z)((0,p.Z)().mark((function e(t){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=e.t0===b.Apply?3:e.t0===b.Undo?8:e.t0===b.Redo?13:18;break;case 3:if(this.status===i.NeverApplied){e.next=5;break}throw new U;case 5:return e.next=7,this.apply();case 7:case 17:return e.abrupt("return",void(this.status=i.Applied));case 8:if(this.status===i.Applied){e.next=10;break}throw new M;case 10:return e.next=12,this.undo();case 12:return e.abrupt("return",void(this.status=i.Undone));case 13:if(this.status===i.Undone){e.next=15;break}throw new M;case 15:return e.next=17,this.redo();case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(h.default);(0,c._)([(0,y.Cb)()],T.prototype,"name",void 0),(0,c._)([(0,y.Cb)()],T.prototype,"tag",void 0),T=(0,c._)([(0,g.j)("esri.undoredo.UndoableOperation")],T);var I=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.apply(this,arguments))._stack=new v.Z,e._stackPosition=-1,e._updatingHandles=new m.R,e}return(0,a.Z)(n,[{key:"updating",get:function(){return this._updatingHandles.updating}},{key:"canUndo",get:function(){return this.hasUndo&&!this.updating}},{key:"hasUndo",get:function(){return this._stackPosition>=0}},{key:"canRedo",get:function(){return this.hasRedo&&!this.updating}},{key:"hasRedo",get:function(){return this._stackPosition<this._stack.length-1}},{key:"_truncateForwardStack",value:function(){this._stack.splice(this._stackPosition+1,this._stack.length-this._stackPosition).forEach((function(e){return e.destroy()}))}},{key:"_drainStack",value:function(){this._stack.drain((function(e){return e.destroy()})),this._stackPosition=-1}},{key:"undo",value:function(){var e=(0,d.Z)((0,p.Z)().mark((function e(){var t,n=this;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hasUndo){e.next=2;break}throw new M;case 2:if(!this.updating){e.next=4;break}throw new O;case 4:return t=this._stack.getItemAt(this._stackPosition),e.next=7,this._updatingHandles.addPromise((0,d.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.executeUndoRedoOperation(b.Undo);case 2:--n._stackPosition,t.canRedo||n._truncateForwardStack();case 4:case"end":return e.stop()}}),e)})))());case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"redo",value:function(){var e=(0,d.Z)((0,p.Z)().mark((function e(){var t,n=this;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hasRedo){e.next=2;break}throw new R;case 2:if(!this.updating){e.next=4;break}throw new O;case 4:return t=this._stack.getItemAt(this._stackPosition+1),e.next=7,this._updatingHandles.addPromise((0,d.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.executeUndoRedoOperation(b.Redo);case 2:++n._stackPosition;case 3:case"end":return e.stop()}}),e)})))());case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"peekUndo",value:function(){return this.canUndo?this._stack.getItemAt(this._stackPosition):null}},{key:"peekRedo",value:function(){return this.canRedo?this._stack.getItemAt(this._stackPosition+1):null}},{key:"inject",value:function(){var e=(0,d.Z)((0,p.Z)().mark((function e(t){var n=this;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.updating){e.next=2;break}throw new O;case 2:return e.next=4,this._updatingHandles.addPromise((0,d.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.status===i.NeverApplied,!e.t0){e.next=4;break}return e.next=4,t.executeUndoRedoOperation(b.Apply);case 4:t.canUndo?(n._stack.splice(n._stackPosition+1,0,t),n._stackPosition++):n._stackPosition>-1&&(n._stack.splice(0,n._stackPosition+1).forEach((function(e){return e.destroy()})),n._stackPosition=-1);case 5:case"end":return e.stop()}}),e)})))());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=(0,d.Z)((0,p.Z)().mark((function e(t){var n=this;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.updating){e.next=2;break}throw new O;case 2:return e.next=4,this._updatingHandles.addPromise((0,d.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.status===i.NeverApplied,!e.t0){e.next=4;break}return e.next=4,t.executeUndoRedoOperation(b.Apply);case 4:n._stackPosition>=-1&&n._truncateForwardStack(),t.canUndo?(n._stack.push(t),n._stackPosition=n._stack.length-1):n._drainStack();case 6:case"end":return e.stop()}}),e)})))());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"removeTagged",value:function(){var e=(0,d.Z)((0,p.Z)().mark((function e(t){var n,i,r,o,a=this,s=arguments;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]&&s[1],!this.updating||n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,f.whenOnce)((function(){return!a.updating}));case 5:for(i=new v.Z,r=0;r<this._stack.length;r++)(o=this._stack.getItemAt(r)).tag===t?(o.destroy(),r===this._stackPosition&&(this._stackPosition=i.length-1)):i.push(o);this._stack=i,this._stackPosition>i.length-1&&(this._stackPosition=i.length-1);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"clear",value:function(){var e=(0,d.Z)((0,p.Z)().mark((function e(){var t,n=this,i=arguments;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]&&i[0],!this.updating||t){e.next=3;break}throw new O;case 3:return e.next=5,(0,f.whenOnce)((function(){return!n.updating}));case 5:this._drainStack();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(h.default);(0,c._)([(0,y.Cb)()],I.prototype,"_stack",void 0),(0,c._)([(0,y.Cb)()],I.prototype,"_stackPosition",void 0),(0,c._)([(0,y.Cb)()],I.prototype,"updating",null),(0,c._)([(0,y.Cb)({readOnly:!0})],I.prototype,"canUndo",null),(0,c._)([(0,y.Cb)({readOnly:!0})],I.prototype,"hasUndo",null),(0,c._)([(0,y.Cb)({readOnly:!0})],I.prototype,"canRedo",null),(0,c._)([(0,y.Cb)({readOnly:!0})],I.prototype,"hasRedo",null),I=(0,c._)([(0,g.j)("esri.UndoRedo")],I);var P=n(14921),V=n(91505),A=n(42537),G=n(92026),S=n(87616),E=n(93655),z=n(70178),H=(0,a.Z)((function e(){(0,o.Z)(this,e),this.committedVertices=null,this.cursorVertex=null,this.full=null,this.outline=null,this.cursorEdge=null,this.circle=null,this.rectangle=null})),Q=n(58845),F=n(3826),L=n(29439),N=n(47898),D=n(68860),j=n(74509),q=n(86547),Y=n(79422),W=n(55915),B=n(87036),K=n(85809),J=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="draw-circle",i.radius=null,i.xSize=null,i.ySize=null,i.area=N.MQ,i}return(0,a.Z)(n,[{key:"allFields",get:function(){return[]}}]),n}(K.h);(0,c._)([(0,y.Cb)()],J.prototype,"type",void 0),(0,c._)([(0,y.Cb)()],J.prototype,"radius",void 0),(0,c._)([(0,y.Cb)()],J.prototype,"xSize",void 0),(0,c._)([(0,y.Cb)()],J.prototype,"ySize",void 0),(0,c._)([(0,y.Cb)()],J.prototype,"area",void 0),(0,c._)([(0,y.Cb)()],J.prototype,"allFields",null),J=(0,c._)([(0,g.j)("esri.views.interactive.tooltip.infos.DrawCircleTooltipInfo")],J);var X=n(73816),$=n(35647),ee=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="draw-mesh",i.orientation=(0,X.Zq)({lockable:!1}),i.scale=(0,X.Se)({lockable:!1}),i}return(0,a.Z)(n,[{key:"allFields",get:function(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.orientation,this.scale]}}]),n}((0,$.A)(K.h));(0,c._)([(0,y.Cb)()],ee.prototype,"helpMessage",void 0),(0,c._)([(0,y.Cb)()],ee.prototype,"allFields",null),ee=(0,c._)([(0,g.j)("esri.views.interactive.tooltip.infos.DrawMeshTooltipInfo")],ee);var te=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="draw-point",i}return(0,a.Z)(n,[{key:"allFields",get:function(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}}]),n}((0,$.A)(K.h));(0,c._)([(0,y.Cb)()],te.prototype,"helpMessage",void 0),(0,c._)([(0,y.Cb)()],te.prototype,"allFields",null),te=(0,c._)([(0,g.j)("esri.views.interactive.tooltip.infos.DrawPointTooltipInfo")],te);var ne=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="draw-polygon",i.direction=(0,X.Cn)(),i.distance=(0,X.wD)({title:function(e){return e.messages.sketch.distance}}),i.area=(0,X.UR)(),i.xyMode="direction-distance",i}return(0,a.Z)(n,[{key:"allFields",get:function(){return[this.direction,this.distance,this.longitude,this.latitude,this.x,this.y,this.elevation,this.area]}}]),n}((0,$.A)(K.h));(0,c._)([(0,y.Cb)()],ne.prototype,"xyMode",void 0),(0,c._)([(0,y.Cb)()],ne.prototype,"helpMessage",void 0),(0,c._)([(0,y.Cb)()],ne.prototype,"allFields",null),ne=(0,c._)([(0,g.j)("esri.views.interactive.tooltip.infos.DrawPolygonTooltipInfo")],ne);var ie=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="draw-polyline",i.direction=(0,X.Cn)(),i.distance=(0,X.wD)({title:function(e){return e.messages.sketch.distance}}),i.totalLength=(0,X.i4)(),i.xyMode="direction-distance",i}return(0,a.Z)(n,[{key:"allFields",get:function(){return[this.direction,this.distance,this.longitude,this.latitude,this.x,this.y,this.elevation,this.totalLength]}}]),n}((0,$.A)(K.h));(0,c._)([(0,y.Cb)()],ie.prototype,"helpMessage",void 0),(0,c._)([(0,y.Cb)()],ie.prototype,"xyMode",void 0),(0,c._)([(0,y.Cb)()],ie.prototype,"allFields",null),ie=(0,c._)([(0,g.j)("esri.views.interactive.tooltip.infos.DrawPolylineTooltipInfo")],ie);var re=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e)).type="draw-rectangle",i.xSize=N.yP,i.ySize=N.yP,i.area=N.MQ,i}return(0,a.Z)(n,[{key:"allFields",get:function(){return[]}}]),n}(K.h);(0,c._)([(0,y.Cb)()],re.prototype,"type",void 0),(0,c._)([(0,y.Cb)()],re.prototype,"xSize",void 0),(0,c._)([(0,y.Cb)()],re.prototype,"ySize",void 0),(0,c._)([(0,y.Cb)()],re.prototype,"area",void 0),(0,c._)([(0,y.Cb)()],re.prototype,"allFields",null),re=(0,c._)([(0,g.j)("esri.views.interactive.tooltip.infos.DrawRectangleTooltipInfo")],re);var oe=n(73840),ae=n(543),se=n(59418),le=n(4914);function ce(e){var t=e.directionOptions,n=e.geometryType,i=e.sketchOptions,r=e.tooltipInfos,o=function(t){var n=we(e).mode,i=r[t].elevation;"relative-to-ground"===n||"relative-to-scene"===n||"on-the-ground"===n?i.lock(be(e)):i.unlock()};switch(n){case"polygon":case"polyline":o(n),function(e){if(t){var n=r[e].direction;n.committed=t.angle,n.unlockOnVertexPlacement=!1,i.values.directionMode=t.mode}}(n);break;case"point":case"mesh":o(n)}}function ue(e,t){var n=t.drawOperation,i=t.view,r=de(t),o=we(t);if("2d"!==i.type&&e&&"absolute-height"===o.mode&&1===(null===n||void 0===n?void 0:n.numCommittedVertices)&&r&&("draw-polyline"===r.type||"draw-polygon"===r.type)&&!r.elevation.locked){var a=(0,L.Z)(e,3),s=function(e,t,n,i,r){var o,a,s=r.view,l=r.drawOperation;if("3d"!==s.type||!l)return;null!==(o=n)&&void 0!==o||(n=0);var c=xe(r),u=we(r),p=(0,j.O3)(s,e,t,n,c,u,i);return null!==(a=(0,le.KY)(p,c))&&void 0!==a?a:be(r)}(a[0],a[1],a[2],o,t);null!=s&&r.elevation.lock(s)}}function pe(e){var t;null===(t=de(e))||void 0===t||t.allFields.forEach((function(e){e.unlockOnVertexPlacement&&e.unlock()}))}function de(e){var t,n=e.geometryType,i=e.graphic,r=e.tooltipInfos;return"multipoint"===n||(null===i||void 0===i||null===(t=i.geometry)||void 0===t?void 0:t.type)!==he[n]?null:r[n]}var he={point:"point",mesh:"mesh",polyline:"polyline",polygon:"polygon",circle:"polygon",rectangle:"polygon"};function ve(e,t){switch(null===e||void 0===e?void 0:e.type){case"draw-point":!function(e,t){var n,i=null===(n=t.graphic)||void 0===n?void 0:n.geometry;"point"===(null===i||void 0===i?void 0:i.type)&&(fe(e,i,t),e.helpMessage=(0,q.A)("point",i))}(e,t);break;case"draw-polyline":!function(e,t){var n,i=t.createOperationGeometry,r=t.drawOperation,o=null!=i?i.full:null;"polyline"===(null===o||void 0===o?void 0:o.type)&&(ye(e,t),e.totalLength.actual=r.lastVertex?null!==(n=(0,se.C_)(o))&&void 0!==n?n:N.yP:null,e.helpMessage=(0,q.A)("polyline",o))}(e,t);break;case"draw-polygon":!function(e,t){var n,i=t.createOperationGeometry,r=t.drawOperation,o=null!=i?i.full:null;"polygon"===(null===o||void 0===o?void 0:o.type)&&(ye(e,t),e.area.actual=r.lastVertex?null!==(n=(0,ae.f)(o))&&void 0!==n?n:N.MQ:null,e.helpMessage=(0,q.A)("polygon",o))}(e,t);break;case"draw-rectangle":!function(e,t){e.sketchOptions=t.sketchOptions,e.xSize=ke(t),e.ySize=_e(t),e.area=me(t)}(e,t);break;case"draw-circle":!function(e,t){var n=t.forceUniformSize,i=t.sketchOptions;e.sketchOptions=i,e.radius=n?function(e){var t,n,i=e.createOperationGeometry;return null!==(t=null!=(null===i||void 0===i||null===(n=i.circle)||void 0===n?void 0:n.center)&&null!=i.circle.edge?(0,se.Qw)(i.circle.center,i.circle.edge):null)&&void 0!==t?t:N.yP}(t):null,e.xSize=n?null:ke(t),e.ySize=n?null:_e(t),e.area=me(t)}(e,t);break;case"draw-mesh":!function(e,t){var n=t.graphic,i=t.view,r=null===n||void 0===n?void 0:n.geometry;"3d"===i.type&&"mesh"===(null===r||void 0===r?void 0:r.type)&&(fe(e,r.origin,t),(0,B.kJ)(e,r),e.helpMessage=(0,Y.getDrawMeshHelpMessage)(n,i))}(e,t)}}function fe(e,t,n){var i=n.drawOperation,r=n.view,o=n.sketchOptions,a=i.cursorVertex;if(e.sketchOptions=o,e.viewType=r.type,e.setLocationFromPoint(t,xe(n)),ge(e.elevation,n),a){var s=a;i.constraints={context:Ze(s,n),x:e.x.committed,y:e.y.committed,longitude:e.longitude.committed,latitude:e.latitude.committed,elevation:e.elevation.committed,distance:null,direction:null}}else i.constraints=void 0}function ye(e,t){var n,i=t.drawOperation,r=t.sketchOptions,o=t.view,a=i.cursorVertex,s=i.lastVertex,l=i.secondToLastVertex,c=r.values.effectiveDirectionMode;e.sketchOptions=r,e.viewType=o.type;var u=s&&a?null!==(n=(0,se.Qw)(s,a))&&void 0!==n?n:N.yP:null;if(e.distance.actual=u,e.distance.readOnly=null==s,e.direction.actual=null,e.direction.readOnly=!0,s&&a&&("absolute"===c||l)){var p=(0,oe.zS)(l,s,a,c);e.direction.actual=null!==p&&void 0!==p?p:N.qF,e.direction.readOnly=!1}e.setLocationFromPoint(a,xe(t)),ge(e.elevation,t);var d=function(e,t){var n=t.sketchOptions.tooltips.xyMode;return"auto"===n?e?"direction-distance":"coordinates":n}(s,t);e.xyMode=d,e.direction.visible="direction-distance"===d,e.distance.visible="direction-distance"===d,e.effectiveX.visible="coordinates"===d,e.effectiveY.visible="coordinates"===d;var h=null!==a&&void 0!==a?a:s;i.constraints=h?{context:Ze(h,t),x:e.x.committed,y:e.y.committed,longitude:e.longitude.committed,latitude:e.latitude.committed,elevation:e.elevation.committed,distance:e.distance.committed,direction:e.direction.committed}:void 0}function ge(e,t){var n,i,r=t.drawOperation,o=null!==(n=null===r||void 0===r?void 0:r.cursorVertex)&&void 0!==n?n:null===r||void 0===r?void 0:r.lastVertex;e.actual=null!==(i=(0,le.un)(o))&&void 0!==i?i:be(t),e.visible=r.hasZ,e.readOnly=!1,e.showAsZ=!0}function me(e){var t,n,i=null===(t=e.createOperationGeometry)||void 0===t?void 0:t.full;return"polygon"!==(null===i||void 0===i?void 0:i.type)?N.MQ:null!==(n=(0,ae.f)(i))&&void 0!==n?n:N.MQ}function ke(e){var t,n,i,r=null===(t=e.createOperationGeometry)||void 0===t||null===(n=t.rectangle)||void 0===n?void 0:n.midpoints;return null!==(i=null!=r?(0,se.Qw)(r.left,r.right):null)&&void 0!==i?i:N.yP}function _e(e){var t,n,i,r=null===(t=e.createOperationGeometry)||void 0===t||null===(n=t.rectangle)||void 0===n?void 0:n.midpoints;return null!==(i=null!=r?(0,se.Qw)(r.top,r.bottom):null)&&void 0!==i?i:N.yP}function we(e){var t;return null!==(t=e.drawOperation.elevationInfo)&&void 0!==t?t:j.jG}function xe(e){return e.drawOperation.coordinateHelper.spatialReference}function be(e){var t=(0,D._R)(xe(e));return(0,N.yG)(e.defaultZ*t,"meters")}function Ze(e,t){return(0,W.ND)(e,t.view,xe(t),we(t),t.drawOperation.coordinateHelper.hasZ(),t.sketchOptions.values.effectiveDirectionMode)}var Ce=n(45900),Oe=n(59981),Me=n(26091),Re=n(27088),Ue=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(e){var i;return(0,o.Z)(this,n),(i=t.call(this,e))._graphic=null,i._coordinateFormatterLoadTask=null,i._createOperationGeometry=null,i.defaultZ=0,i.directionOptions=null,i.geometryType=null,i.hasZ=!0,i.geometryToPlace=null,i.snappingManager=null,i.snapToScene=!1,i.sketchOptions=new Oe.Z,i}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this,t=this.view;this.internalGraphicsLayer=new E.default({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer);var n=this.drawOperation=this.makeDrawOperation();this.tooltipInfos=function(e,t){return{point:new te({sketchOptions:t,viewType:e}),polyline:new ie({sketchOptions:t,viewType:e}),polygon:new ne({sketchOptions:t,viewType:e}),mesh:new ee({sketchOptions:t,viewType:e}),rectangle:new re({sketchOptions:t}),circle:new J({sketchOptions:t})}}(t.type,this.sketchOptions);var i=this.tooltip=new Me.u({view:t});ce(this._tooltipsContext),this._coordinateFormatterLoadTask=(0,P.vr)((function(){return(0,S.zD)()})),this.addHandles([n.on("vertex-add",(function(t){return e.onVertexAdd(t)})),n.on("vertex-remove",(function(t){return e.onVertexRemove(t)})),n.on("vertex-update",(function(t){return e.onVertexUpdate(t)})),n.on("cursor-update",(function(t){return e.onCursorUpdate(t)})),n.on("cursor-remove",(function(){return e._updateGraphic()})),n.on("complete",(function(t){return e.onComplete(t)})),this._coordinateFormatterLoadTask,i.on("paste",(function(t){return(0,B.N5)(t,e.activeTooltipInfo)})),(0,f.watch)((function(){return e.cursor}),(function(e){n.cursor=e}),f.syncAndInitial),(0,Re.EH)((function(){var t=e.activeTooltipInfo,n=e.sketchOptions;ve(t,e._tooltipsContext),i.info=n.tooltips.effectiveEnabled?t:null})),(0,Re.EH)((function(){n.constraintZ=function(e){var t=e.geometryType,n=e.tooltipInfos;switch(t){case"point":case"mesh":case"polyline":case"polygon":var i=n[t].elevation.committed;if(!i)return;return(0,N.mE)(i,"meters")/(0,D._R)(xe(e));default:return}}(e._tooltipsContext)}))]),this.finishToolCreation()}},{key:"destroy",value:function(){this.drawOperation=(0,G.SC)(this.drawOperation),this.tooltip=(0,G.SC)(this.tooltip),this._destroyAllVisualizations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=(0,G.SC)(this.internalGraphicsLayer),this._set("view",null)}},{key:"_drawSpatialReference",get:function(){return this.drawOperation.coordinateHelper.spatialReference}},{key:"_tooltipsContext",get:function(){return{createOperationGeometry:this._createOperationGeometry,defaultZ:this.defaultZ,directionOptions:this.directionOptions,drawOperation:this.drawOperation,forceUniformSize:this.forceUniformSize,geometryType:this.geometryType,graphic:this.graphic,sketchOptions:this.sketchOptions,tooltipInfos:this.tooltipInfos,view:this.view}}},{key:"canRedo",get:function(){return this.drawOperation.canRedo}},{key:"canUndo",get:function(){return this.drawOperation.canUndo}},{key:"centered",set:function(e){this._set("centered",e),this._updateGraphic()}},{key:"cursor",get:function(){return this._get("cursor")},set:function(e){this._set("cursor",e)}},{key:"enabled",set:function(e){this.drawOperation.interactive=e,this._set("enabled",e)}},{key:"forceUniformSize",set:function(e){this._set("forceUniformSize",e),this._updateGraphic()}},{key:"graphic",get:function(){return this._graphic}},{key:"graphicSymbol",set:function(e){this._set("graphicSymbol",e),null!=this._graphic&&(this._graphic.symbol=e)}},{key:"mode",set:function(e){var t=this.drawOperation;t&&(t.drawingMode=e),this._set("mode",e)}},{key:"updating",get:function(){var e,t;return null!==(e=null===(t=this.drawOperation)||void 0===t?void 0:t.updating)&&void 0!==e&&e}},{key:"undoRedo",get:function(){var e=this.view,t=e.type,n=e.map;return"2d"===t&&n&&"undoRedo"in n&&n.undoRedo instanceof I?n.undoRedo:null},set:function(e){this._override("undoRedo",e)}},{key:"completeCreateOperation",value:function(){this.drawOperation.complete()}},{key:"onInputEvent",value:function(e){this.destroyed||(0,B._i)(e,this.tooltip)||this.drawOperation.onInputEvent(e)}},{key:"redo",value:function(){this.drawOperation.redo()}},{key:"reset",value:function(){}},{key:"undo",value:function(){this.drawOperation.undo(),0===this.drawOperation.numCommittedVertices&&ce(this._tooltipsContext)}},{key:"_destroyAllVisualizations",value:function(){this.removeHandles(Ie.outline),this.removeHandles(Ie.regularVertices),this.removeHandles(Ie.activeVertex),this.removeHandles(Ie.activeEdge),this.removeHandles(Te)}},{key:"_createOrUpdateGraphic",value:function(e){var t=this;if(null!=this._graphic)return this.updateGraphicGeometry(e),this._graphic;var n=new u.Z((0,r.Z)((0,r.Z)({},this.graphicProperties),{},{symbol:this.graphicSymbol}));return this._graphic=n,this.updateGraphicGeometry(e),this.internalGraphicsLayer.add(n),this.addHandles(this.initializeGraphic(n)),this.notifyChange("graphic"),this.addHandles((0,A.kB)((function(){t.internalGraphicsLayer.remove(n),t._graphic===n&&(t._graphic=null)})),Te),n}},{key:"updateGraphicGeometry",value:function(e){this._graphic.geometry=e}},{key:"_getCreateOperationGeometry",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{operationComplete:!1};if(null!=this.drawOperation){var t=this.drawOperation,n=t.coordinateHelper,i=t.view,r=t.visualizationCursorVertex,o=t.lastVertex,a=t.committedVertices,s=t.geometryIncludingUncommittedVertices,l=t.numCommittedVertices;if(l>0||null!=r){var c=e.operationComplete?a:s,u=c.length,p=null!=r?n.pointToArray(r):null,d=this._drawSpatialReference,h="3d"===i.type&&"global"===i.viewingMode,v=new H;v.committedVertices=a,v.cursorVertex=p;var f=this.geometryType;switch(f){case"point":case"mesh":v.full=n.arrayToPoint(c[0]);break;case"multipoint":v.full=u>0?(0,Q.Nv)(c,d):null;break;case"polyline":case"polygon":u>0&&(v.full="polygon"===f?(0,Q.p)([c],d,h,!0):(0,Q.DF)([c],d,h),v.cursorEdge=null!=p&&o&&!(0,z.kg)(r,o)?(0,Q.DF)([[p,n.pointToArray(o)]],d,h):null,v.outline=u>1?v.full:null);break;case"circle":case"rectangle":var y,g;if(v.committedVertices=v.cursorVertex=null,!u)break;var m=(0,F.Gn)(i,c[0]),k=c[0],_=m.makeMapPoint(k[0]+Ve*i.resolution,k[1]);"circle"===f?1===u&&e.operationComplete?v.circle=(0,Q.y)([k,_],m,!0):2===u&&(this.forceUniformSize?v.circle=(0,Q.y)(c,m,this.centered):v.rectangle=(0,Q.n_)(c,m,this.centered)):1===u&&e.operationComplete?v.rectangle=(0,Q.yL)([k,_],m,!0):2===u&&(v.rectangle=this.forceUniformSize?(0,Q.yL)(c,m,this.centered):(0,Q.MC)(c,m,this.centered)),v.full=null!=v.circle?v.circle.geometry:null===(y=v.rectangle)||void 0===y?void 0:y.geometry,v.outline="polygon"===(null===(g=v.full)||void 0===g?void 0:g.type)?v.full:null;break;default:return null}return v}}}},{key:"initializeGraphic",value:function(e){return(0,A.kB)()}},{key:"onComplete",value:function(e){if(this.drawOperation){this._updateGraphic();var t=null;if(this.drawOperation.isCompleted){var n=this._getCreateOperationGeometry({operationComplete:!0});null!=n&&(t=this._createOrUpdateGraphic(n.full))}this._createOperationGeometry=null,this.emit("complete",(0,r.Z)({graphic:t},e))}}},{key:"onCursorUpdate",value:function(e){this._updateGraphic(),this.emit("cursor-update",e)}},{key:"onDeactivate",value:function(){var e=this.drawOperation;e&&(e.isCompleted||e.cancel())}},{key:"onOutlineChanged",value:function(e){return(0,A.kB)()}},{key:"onCursorEdgeChanged",value:function(e){return(0,A.kB)()}},{key:"onVertexAdd",value:function(e){var t;pe(this._tooltipsContext),this._updateGraphic(),ue(null===(t=e.vertices.at(0))||void 0===t?void 0:t.coordinates,this._tooltipsContext),this.emit("vertex-add",e)}},{key:"onVertexRemove",value:function(e){pe(this._tooltipsContext),this._updateGraphic(),this.emit("vertex-remove",e)}},{key:"onVertexUpdate",value:function(e){this._updateGraphic(),this.emit("vertex-update",e)}},{key:"_updateGraphic",value:function(){var e=this._getCreateOperationGeometry();this._createOperationGeometry=e,null!=e?(null!=e.cursorEdge?this.addHandles(this.onCursorEdgeChanged(e.cursorEdge),Ie.activeEdge):this.removeHandles(Ie.activeEdge),null!=e.outline?this.addHandles(this.onOutlineChanged(e.outline),Ie.outline):this.removeHandles(Ie.outline),null!=e.committedVertices?this.addHandles(this.onRegularVerticesChanged(e.committedVertices),Ie.regularVertices):this.removeHandles(Ie.regularVertices),null!=e.cursorVertex?this.addHandles(this.onActiveVertexChanged(e.cursorVertex),Ie.activeVertex):this.removeHandles(Ie.activeVertex),null!=e.full?this._createOrUpdateGraphic(e.full):this.removeHandles(Te)):this._destroyAllVisualizations()}},{key:"activeTooltipInfo",get:function(){var e;return null!==(e=this._coordinateFormatterLoadTask)&&void 0!==e&&e.finished?de(this._tooltipsContext):null}}]),n}(V.Z.EventedMixin(Ce.m));(0,c._)([(0,y.Cb)()],Ue.prototype,"_coordinateFormatterLoadTask",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"_createOperationGeometry",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"_tooltipsContext",null),(0,c._)([(0,y.Cb)({value:!0})],Ue.prototype,"centered",null),(0,c._)([(0,y.Cb)()],Ue.prototype,"cursor",null),(0,c._)([(0,y.Cb)({nonNullable:!0})],Ue.prototype,"defaultZ",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],Ue.prototype,"directionOptions",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"drawOperation",void 0),(0,c._)([(0,y.Cb)({value:!0})],Ue.prototype,"enabled",null),(0,c._)([(0,y.Cb)({value:!0})],Ue.prototype,"forceUniformSize",null),(0,c._)([(0,y.Cb)({constructOnly:!0})],Ue.prototype,"geometryType",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"graphic",null),(0,c._)([(0,y.Cb)({constructOnly:!0})],Ue.prototype,"graphicProperties",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"graphicSymbol",null),(0,c._)([(0,y.Cb)({constructOnly:!0})],Ue.prototype,"hasZ",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],Ue.prototype,"geometryToPlace",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"mode",null),(0,c._)([(0,y.Cb)()],Ue.prototype,"snappingManager",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"snapToScene",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"tooltip",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"tooltipInfos",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0,type:Oe.Z})],Ue.prototype,"sketchOptions",void 0),(0,c._)([(0,y.Cb)()],Ue.prototype,"updating",null),(0,c._)([(0,y.Cb)({constructOnly:!0,nonNullable:!0})],Ue.prototype,"view",void 0),(0,c._)([(0,y.Cb)({constructOnly:!0})],Ue.prototype,"undoRedo",null),(0,c._)([(0,y.Cb)()],Ue.prototype,"activeTooltipInfo",null),Ue=(0,c._)([(0,g.j)("esri.views.draw.DrawGraphicTool")],Ue);var Te=Symbol("create-operation-graphic"),Ie={outline:Symbol("outline-visual"),regularVertices:Symbol("regular-vertices-visual"),activeVertex:Symbol("active-vertex-visual"),activeEdge:Symbol("active-edge-visual")};function Pe(e){switch(e){case"point":case"polyline":case"polygon":case"multipoint":return e;case"circle":case"rectangle":return"segment";case"mesh":return"point"}}var Ve=48},58845:function(e,t,n){n.d(t,{DF:function(){return k},MC:function(){return x},Nv:function(){return m},n_:function(){return U},p:function(){return _},y:function(){return R},yL:function(){return w}});n(59486);var i=n(63780),r=n(84652),o=n(68860),a=n(32035),s=n(12400),l=n(42137),c=n(2170),u=n(69662),p=n(92975),d=n(3826),h=n(848),v=n(77577),f=n(29909),y=n(80885);function g(e,t){var n=new h.Z({x:e[0],y:e[1],spatialReference:t});return e.length>2&&(n.z=e[2]),n}function m(e,t){return new v.Z({points:e,spatialReference:t})}function k(e,t,n){var i=new f.Z({paths:e,spatialReference:t});return n&&(0,u.nc)(i),i}function _(e,t,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=(0,r.d9)(e);a.forEach((function(e){var t=e[0],n=e[e.length-1];(0,i.fS)(t,n)&&1!==e.length||e.push(e[0])}));var s=new y.Z({rings:a,spatialReference:t});return s.rings.forEach((function(e){(0,u.bu)(e)||e.reverse()})),n&&(0,u.nc)(s),o&&s.isSelfIntersecting&&(0,p.JY)(t)&&(s=(0,c.simplify)(s)),s}function w(e,t,n){var r=t.mapToLocalMultiple(e),o=[],a={x:r[0].x,y:r[0].y},s=r[1].x,l=r[1].y,c=Math.round(s-a.x),u=Math.round(l-a.y),p=Math.max(Math.abs(c),Math.abs(u));if(n){var h={x:a.x+p,y:a.y+p},v={x:a.x-p,y:a.y-p};o.push((0,d.Q8)(h.x,v.y),(0,d.Q8)(v.x,v.y),(0,d.Q8)(v.x,h.y),(0,d.Q8)(h.x,h.y))}else{var f={x:c>0?a.x+p:a.x-p,y:u>0?a.y+p:a.y-p};o.push((0,d.Q8)(a.x,a.y),(0,d.Q8)(f.x,a.y),(0,d.Q8)(f.x,f.y),(0,d.Q8)(a.x,f.y))}return b(_([o.map((function(e){return t.localToMap(e)})).filter(i.pC)],t.spatialReference,t.doUnnormalization,!0),o,t)}function x(e,t,n){var r=t.mapToLocalMultiple(e);if(1===r.length){var o=48,a=r[0];r=[(0,d.Q8)(a.x-o,a.y+o),(0,d.Q8)(a.x+o,a.y-o),(0,d.Q8)(a.x+o,a.y-o),(0,d.Q8)(a.x-o,a.y+o)]}var s=[],l={x:r[0].x,y:r[0].y},c={x:r[1].x,y:r[1].y};if(n){var u=Math.round(c.x-l.x),p=Math.round(c.y-l.y);s.push((0,d.Q8)(l.x-u,l.y-p),(0,d.Q8)(c.x,l.y-p),(0,d.Q8)(c.x,c.y),(0,d.Q8)(l.x-u,c.y))}else s.push((0,d.Q8)(l.x,l.y),(0,d.Q8)(c.x,l.y),(0,d.Q8)(c.x,c.y),(0,d.Q8)(l.x,c.y));return b(_([s.map((function(e){return t.localToMap(e)})).filter(i.pC)],t.spatialReference,t.doUnnormalization,!0),s,t)}function b(e,t,n){var i=Z(t[3],t[2],n),r=Z(t[1],t[2],n),o=Z(t[0],t[1],n),a=Z(t[0],t[3],n);return{geometry:e,midpoints:null!=i&&null!=r&&null!=o&&null!=a?{top:i,right:r,bottom:o,left:a}:null}}function Z(e,t,n){O[0]=e.x,O[1]=e.y,O[2]=0,M[0]=t.x,M[1]=t.y,M[2]=0,(0,a.o)(O,O,M,.5),C.x=O[0],C.y=M[1],C.z=M[2];var i=n.localToMap(C);return null!=i?g(i,n.spatialReference):null}var C=(0,d.Q8)(0,0,0),O=(0,s.Ue)(),M=(0,s.Ue)();function R(e,t,n,i){var r=t.mapToLocalMultiple(e),a=null,s=null;if(n)a=r[0],s=r[1];else{var h=r[0],v=r[1],f=Math.round(v.x-h.x),y=Math.round(v.y-h.y),m=Math.max(Math.abs(f),Math.abs(y));a=(0,d.Q8)(f>0?h.x+m/2:h.x-m/2,y>0?h.y+m/2:h.y-m/2),s=(0,d.Q8)(Math.abs(f)>Math.abs(y)?a.x-m/2:a.x,Math.abs(f)>Math.abs(y)?a.y:a.y-m/2)}var k=t.localToMap(a),w=t.localToMap(s);if(null==k||null==w)return null;t.doUnnormalization&&(0,u.Sq)([[k,w]],t.spatialReference);var x=g(k,t.spatialReference),b=g(w,t.spatialReference),Z=(0,o.c9)(t.spatialReference),C=0;if((0,p.JY)(t.spatialReference))C=Z*(0,c.distance)(x,b,null);else{var O=a.x-s.x,M=a.y-s.y;C=Z*Math.sqrt(O*O+M*M)*(i||1)}var R=new l.Z({center:x,radius:C,radiusUnit:"meters",spatialReference:t.spatialReference});return{geometry:_(R.rings,R.spatialReference,!1),center:x,edge:b}}function U(e,t,n){var r=t.mapToLocalMultiple(e),o=r[0],a=r[1],s=Math.round(a.x-o.x),l=Math.round(a.y-o.y),c=(0,d.Q8)(n?o.x:o.x+s/2,n?o.y:o.y+l/2),u=n?s:s/2,p=n?l:l/2,h=[],v=2*Math.PI/60;function f(e){var t=Math.cos(e),n=Math.sin(e);return(0,d.Q8)(u*t+c.x,p*n+c.y)}for(var y=0;y<60;y++)h.push(f(y*v));h.push(h[0]);var m=t.spatialReference,k=t.doUnnormalization,w=_([h.map((function(e){return t.localToMap(e)})).filter(i.pC)],m,k,!1),x=t.localToMap(f(Math.PI/2)),b=t.localToMap(f(0)),Z=t.localToMap(f(-Math.PI/2)),C=t.localToMap(f(Math.PI));return{geometry:w,midpoints:null!=x&&null!=b&&null!=Z&&null!=C?{top:g(x,m),right:g(b,m),bottom:g(Z,m),left:g(C,m)}:null}}},86547:function(e,t,n){function i(e,t){switch(e){case"point":case"multipoint":return"point";case"polyline":return function(e){return(null!=e&&"polyline"===e.type&&e.paths.length?e.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex"}(t);case"polygon":return function(e){var t=null!=e&&"polygon"===e.type&&e.rings.length?e.rings[0].length:0;return t<3?"polylineZeroVertices":t<4?"polygonOneVertex":"polygonTwoVertices"}(t);default:return}}n.d(t,{A:function(){return i}})},79422:function(e,t,n){n.r(t),n.d(t,{getDrawMeshHelpMessage:function(){return s}});var i=n(68860),r=n(32035),o=n(12400),a=n(74509);function s(e,t){var n,o,s,d,h=null===e||void 0===e?void 0:e.geometry;if(e&&"mesh"===(null===h||void 0===h?void 0:h.type)&&t){var v=t.renderCoordsHelper,f=t.elevationProvider,y=t.state.camera,g=h.extent,m=g.center,k=g.spatialReference,_=(0,i.c9)(k),w=(0,i._R)(k),x=(0,i.c9)(v.spatialReference),b=g.width*_,Z=g.height*w,C=(null!==(n=g.zmax)&&void 0!==n?n:0)*w,O=C-(null!==(o=g.zmin)&&void 0!==o?o:0)*w,M=Math.max(b,Z,O)/x,R=m.x,U=m.y,T=null!==(s=m.z)&&void 0!==s?s:0;(0,r.s)(p,R,U,T),v.toRenderCoords(p,k,p);var I=M/y.computeScreenPixelSizeAt(p);if(I>y.width*c)return"meshTooClose";if(I<l)return"meshTooFar";var P=(0,a.RL)(e);return(0,a.tq)(R,U,C,k,t,P).absoluteZ<(null!==(d=f.getElevation(R,U,T,k,"ground"))&&void 0!==d?d:0)*w+O*u?"meshUnderground":"mesh"}}var l=20,c=1,u=.1,p=(0,o.Ue)()},92583:function(e,t,n){n.d(t,{lv:function(){return f},nn:function(){return d},ui:function(){return h}});var i=n(13611),r=n(32035),o=n(12400),a=n(82218),s=n(51378),l=n(254),c=n(12225),u=n(29014),p=n(34778);function d(e,t){return v(e,t,!1)}function h(e,t){return v(e,t,!0)}function v(e,t,n){if(e instanceof p.y){if(e.operation instanceof l.z)return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-1:1,i=(0,o.al)(n*e.dx,n*e.dy,n*e.dz);(0,r.g)(t.origin,t.origin,i),(0,a.u)(t)}(e.operation,t,n),!0;if(e.operation instanceof c.S)return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2]?-e.angle:e.angle;(0,r.K)(t.basis1,t.basis1,o.AG,n),(0,r.K)(t.basis2,t.basis2,o.AG,n),(0,a.u)(t)}(e.operation,t,n),!0;if(e.operation instanceof u.q)return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=n?1/e.factor1:e.factor1,s=n?1/e.factor2:e.factor2;(0,r.j)(t.basis1,t.basis1,o),(0,r.j)(t.basis2,t.basis2,s),(0,i.LG)(t.origin,t.origin,e.origin,e.axis1,o),(0,i.LG)(t.origin,t.origin,e.origin,e.axis2,s),(0,a.u)(t)}(e.operation,t,n),!0}return!1}function f(e,t,n,r){r||(r=(0,a.a)());var o=(0,i.t8)(s.qW.get(),e[1],-e[0]),l=(0,i.t8)(s.qW.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),c=(0,i.t8)(s.qW.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),u=s.qW.get();t.components.forEach((function(t){return t.vertices.forEach((function(t){var n=t.pos;(0,i.t8)(u,(0,i.AK)(e,n),(0,i.AK)(o,n)),(0,i.VV)(l,l,u),(0,i.Fp)(c,c,u)}))}));var p=1e-6,d=(0,i.t8)(s.qW.get(),c[0]-l[0]<p?n/2:0,c[1]-l[1]<p?n/2:0);return(0,i.$X)(l,l,d),(0,i.IH)(c,c,d),(0,i.bA)(r.basis1,e,(c[0]-l[0])/2),(0,i.bA)(r.basis2,o,(c[1]-l[1])/2),(0,i.t8)(r.origin,l[0]*e[0]+l[1]*o[0],l[0]*e[1]+l[1]*o[1]),(0,i.IH)(r.origin,r.origin,r.basis1),(0,i.IH)(r.origin,r.origin,r.basis2),(0,a.u)(r),r}}}]);
//# sourceMappingURL=29606.0c27749a.chunk.js.map