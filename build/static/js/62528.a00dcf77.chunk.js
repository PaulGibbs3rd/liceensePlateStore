(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[62528,69315,7476,50375,42066,69085,8002,50131,40949,69779,8320,54301,68059,92435,17587,52737,66727,93328,17470,52069,66619,50069,54938,44308,71599,2813],{69315:function(e){function t(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=function(){return[]},t.resolve=t,t.id=69315,e.exports=t},10598:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return L}});var n=i(29439),a=i(15671),r=i(43144),o=i(60136),s=i(29388),l=i(27366),u=(i(59166),i(49861)),d=(i(93169),i(32718),i(84936),i(69912)),c=i(33565),h=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e){var n;return(0,a.Z)(this,i),(n=t.call(this,e)).average=null,n.bins=null,n.max=null,n.min=null,n}return(0,r.Z)(i,[{key:"binRange",get:function(){var e=this.bins;return e&&e.length>1?e[e.length-1].maxValue-e[0].minValue:0}},{key:"labelFormatFunction",set:function(e){this._set("labelFormatFunction",e)}},{key:"range",get:function(){var e=this.max,t=this.min;return null!=e&&null!=t?e-t:0}},{key:"state",get:function(){var e=this.bins;return this.range>0&&null!==e&&void 0!==e&&e.length?"ready":"disabled"}}]),i}(i(7138).default);(0,l._)([(0,u.Cb)()],h.prototype,"average",void 0),(0,l._)([(0,u.Cb)()],h.prototype,"bins",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],h.prototype,"binRange",null),(0,l._)([(0,u.Cb)()],h.prototype,"labelFormatFunction",null),(0,l._)([(0,u.Cb)()],h.prototype,"max",void 0),(0,l._)([(0,u.Cb)()],h.prototype,"min",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],h.prototype,"range",null),(0,l._)([(0,u.Cb)({readOnly:!0})],h.prototype,"state",null);var _,v=h=(0,l._)([(0,d.j)("esri.widgets.Histogram.HistogramViewModel")],h),g=i(7021),b=i(80975),m=i(80532),p=i(67005),y=i(8704),f="esri-histogram",w={base:f,horizontalLayout:"".concat(f,"--horizontal"),verticalLayout:"".concat(f,"--vertical"),content:"".concat(f,"__content"),svg:"".concat(f,"__svg"),bar:"".concat(f,"__bar"),bars:"".concat(f,"__bars"),label:"".concat(f,"__label"),dataLines:"".concat(f,"__data-lines"),dataLinesSubgroup:"".concat(f,"__data-lines-subgroup"),dataLine:"".concat(f,"__data-line"),averageLabel:"".concat(f,"__average-label"),averageDataLine:"".concat(f,"__average-data-line"),averageSymbol:"".concat(f,"__average-symbol")},C=_=function(e){(0,o.Z)(i,e);var t=(0,s.Z)(i);function i(e,n){var r;return(0,a.Z)(this,i),(r=t.call(this,e,n))._bgFillId="".concat(r.id,"-bg-fill"),r._containerNode=null,r._containerDimensions={width:0,height:0},r._defaultBarColor="#d8d8d8",r.barCreatedFunction=null,r.dataLines=null,r.dataLineCreatedFunction=null,r.dataLineUpdatedFunction=null,r.messages=null,r.viewModel=new v,r}return(0,r.Z)(i,[{key:"average",get:function(){return this.viewModel.average},set:function(e){this.viewModel.average=e}},{key:"bins",get:function(){return this.viewModel.bins},set:function(e){this.viewModel.bins=e}},{key:"icon",get:function(){return"graph-histogram"},set:function(e){this._overrideIfSome("icon",e)}},{key:"label",get:function(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""},set:function(e){this._overrideIfSome("label",e)}},{key:"labelFormatFunction",get:function(){return this.viewModel.labelFormatFunction},set:function(e){this.viewModel.labelFormatFunction=e}},{key:"layout",set:function(e){"vertical"!==e&&(e="horizontal"),this._set("layout",e)}},{key:"max",get:function(){return this.viewModel.max},set:function(e){this.viewModel.max=e}},{key:"min",get:function(){return this.viewModel.min},set:function(e){this.viewModel.min=e}},{key:"state",get:function(){return this.viewModel.state}},{key:"render",value:function(){var e=this.label,t=this.layout,i=this.state,n=this.classes(w.base,g.z.widget,"horizontal"===t?w.horizontalLayout:w.verticalLayout,"disabled"===i?g.z.disabled:null);return(0,p.u)("div",{afterCreate:this._afterContainerNodeCreate,"aria-label":e,bind:this,class:n},"ready"===i?this._renderContent():null)}},{key:"_renderContent",value:function(){if(this._containerNode){var e=this._bgFillId,t="clip-path: url(#".concat(e,")");return(0,p.u)("div",{class:w.content},(0,p.u)("svg",{class:w.svg,xmlns:"http://www.w3.org/2000/svg"},(0,p.u)("defs",null,this._renderFillDefinition(e)),(0,p.u)("g",{style:t},this._renderBarsGroup()),this._renderLinesGroup()))}}},{key:"_renderBarsGroup",value:function(){return(0,p.u)("g",{class:this.classes(w.bars)},this._renderBars())}},{key:"_renderBars",value:function(){var e=this,t=this.layout,i=this.viewModel,a=i.binRange,r=i.range;if(a&&r){var o=a/r,s=this._containerDimensions,l=s.width,u=s.height;if(0!==u||0!==l){if(0!==u||0===l){var d="vertical"===t?[u*o,l]:[u,l*o],c=(0,n.Z)(d,2),h=c[0],_=c[1];return this._getBarDimensions(h,_).map((function(t,i){var a=(0,n.Z)(t,2),r=a[0],o=a[1];return e._renderBar(i,r,o)}))}this.scheduleRender()}}}},{key:"_renderBar",value:function(e,t,i){var a=this.bins,r=this.layout,o=this.max,s=this.messages,l=this.viewModel.range;if(a&&null!=o){var u=this._containerDimensions,d=u.width,c=u.height,h=a.slice()[e],_=h.count,v=h.maxValue,g=h.minValue,b=o-v,m="vertical"===r?[0,b*(c/l)]:[d-i-b*(d/l),c-t],f=(0,n.Z)(m,2),C=f[0],L=f[1],k=(0,y.n)(s.barLabel,{count:_,maxValue:v,minValue:g});return(0,p.u)("rect",{afterCreate:this._afterBarCreate,"aria-label":k,bind:this,class:w.bar,"data-index":e,fill:this._defaultBarColor,height:t,role:"img","shape-rendering":"crispEdges","stroke-width":"0",width:i,x:C,y:L})}}},{key:"_renderLinesGroup",value:function(){return(0,p.u)("g",{class:this.classes(w.dataLines)},this._renderAverageLine(),this._renderCustomLines())}},{key:"_renderAverageLine",value:function(){var e=this.average;if(null!=e){var t=[(0,p.u)("tspan",{class:this.classes(w.averageSymbol)},"x\u0304 "),(0,p.u)("tspan",{class:this.classes(w.averageLabel)},this.labelFormatFunction?this.labelFormatFunction(e,"average"):e)];return(0,p.u)("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(w.dataLinesSubgroup)},(0,p.u)("title",{key:"title"},e),this._renderLine(e,this.classes(w.averageDataLine)),this._renderLabel({label:t,value:e}))}}},{key:"_renderCustomLines",value:function(){var e,t=this;if(null!==(e=this.dataLines)&&void 0!==e&&e.length)return this.dataLines.map((function(e,i){return t._renderLineSubgroup(e,i)}))}},{key:"_renderLineSubgroup",value:function(e,t){var i=e.value;return(0,p.u)("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(w.dataLinesSubgroup),"data-index":t},(0,p.u)("title",{key:"title"},i),this._renderLine(i),this._renderLabel(e))}},{key:"_renderLine",value:function(e,t){var i=this._getLinePosition(e),a=(0,n.Z)(i,4),r=a[0],o=a[1],s=a[2],l=a[3];return(0,p.u)("line",{class:this.classes(w.dataLine,t),"shape-rendering":"crispEdges",x1:r,x2:o,y1:s,y2:l})}},{key:"_renderLabel",value:function(e,t){var i=e.label,a=e.value,r=this._getLabelPosition(a),o=(0,n.Z)(r,2),s=o[0],l=o[1];return(0,p.u)("text",{class:this.classes(w.label,t),"text-anchor":"end",transform:"horizontal"===this.layout?"rotate(270)":null,x:s,y:l-2},null!==i&&void 0!==i?i:"")}},{key:"_renderFillDefinition",value:function(e){var t=this._containerDimensions,i=t.width,n=t.height;return(0,p.u)("clipPath",{id:e},(0,p.u)("rect",{height:n,width:i,x:"0",y:"0"}))}},{key:"_afterContainerNodeCreate",value:function(e){var t=this;this._containerNode=e,this.addHandles((0,b.ib)(e,(function(e){var i=e.contentRect,n=i.width,a=i.height;t._containerDimensions={width:n,height:a}})))}},{key:"_getIndexFromElement",value:function(e){var t,i=null===(t=e.dataset)||void 0===t?void 0:t.index,n=e.getAttribute("data-index");return null!=i?parseInt(i,10):null!=n?parseInt(n,10):null}},{key:"_afterBarCreate",value:function(e){if(this.barCreatedFunction){var t,i=null!==(t=this._getIndexFromElement(e))&&void 0!==t?t:-1;this.barCreatedFunction(i,e)}}},{key:"_afterLinesSubgroupCreate",value:function(e){if(this.dataLineCreatedFunction){var t=this._getIndexFromElement(e),i=e.childNodes[1],n=e.childNodes[2]?e.childNodes[2]:null;this.dataLineCreatedFunction(i,n,t)}}},{key:"_afterLinesSubgroupUpdate",value:function(e){if(this.dataLineUpdatedFunction){var t=this._getIndexFromElement(e),i=e.childNodes[1],n=e.childNodes[2]?e.childNodes[2]:null;this.dataLineUpdatedFunction(i,n,t)}}},{key:"_getBarDimensions",value:function(e,t){var i=this.bins,n=this.layout,a=i?i.map((function(e){return e.count})):[],r=Math.max.apply(Math,a);return a.map((function(i){return"vertical"===n?[e/a.length,0!==r?i/r*t:0]:[0!==r?i/r*e:0,t/a.length]}))}},{key:"_getLinePosition",value:function(e){var t=this.layout,i=this.min,n=this.viewModel.range;if(null==i)return[0,0,0,0];var a=Math.round((e-i)/n*100)/100,r=this._containerDimensions,o=r.width,s=r.height,l=a*o||1,u=s-a*s||1;return"vertical"===t?[0,"100%",u,u]:[l,l,"100%",0]}},{key:"_getLabelPosition",value:function(e){var t=this.layout,i=this.min,n=this.viewModel.range;if(null==i)return[0,0];var a=Math.round((e-i)/n*100)/100,r=this._containerDimensions,o=r.width,s=r.height;return"vertical"===t?[o,s-a*s]:[0,a*o]}}],[{key:"fromHistogramResult",value:function(e){var t=e.bins,i=e.maxValue,n=e.minValue;return new _({bins:t,max:i,min:n})}}]),i}(c.Z);(0,l._)([(0,u.Cb)()],C.prototype,"_bgFillId",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"_containerNode",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"_containerDimensions",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"_defaultBarColor",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"average",null),(0,l._)([(0,u.Cb)()],C.prototype,"barCreatedFunction",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"dataLines",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"dataLineCreatedFunction",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"dataLineUpdatedFunction",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"icon",null),(0,l._)([(0,u.Cb)()],C.prototype,"label",null),(0,l._)([(0,u.Cb)()],C.prototype,"labelFormatFunction",null),(0,l._)([(0,u.Cb)({value:"horizontal"})],C.prototype,"layout",null),(0,l._)([(0,u.Cb)()],C.prototype,"max",null),(0,l._)([(0,u.Cb)(),(0,m.H)("esri/widgets/Histogram/t9n/Histogram")],C.prototype,"messages",void 0),(0,l._)([(0,u.Cb)()],C.prototype,"min",null),(0,l._)([(0,u.Cb)({readOnly:!0})],C.prototype,"state",null),(0,l._)([(0,u.Cb)()],C.prototype,"viewModel",void 0);var L=C=_=(0,l._)([(0,d.j)("esri.widgets.Histogram")],C)},7021:function(e,t,i){"use strict";i.d(t,{z:function(){return n}});var n={anchor:"esri-widget__anchor",anchorDisabled:"esri-widget__anchor--disabled",button:"esri-button",buttonDisabled:"esri-button--disabled",buttonHalf:"esri-button--half",buttonSecondary:"esri-button--secondary",buttonSmall:"esri-button--small",buttonTertiary:"esri-button--tertiary",buttonThird:"esri-button--third",disabled:"esri-disabled",empty:"esri-widget__content--empty",emptyIllustration:"esri-widget__content-illustration--empty",heading:"esri-widget__heading",hidden:"esri-hidden",input:"esri-input",interactive:"esri-interactive",loader:"esri-widget__loader",loaderAnimation:"esri-widget__loader-animation",loaderText:"esri-widget__loader-text",menu:"esri-menu",menuHeader:"esri-menu__header",menuItem:"esri-menu__list-item",menuItemActive:"esri-menu__list-item--active",menuItemFocus:"esri-menu__list-item--focus",menuList:"esri-menu__list",panel:"esri-widget--panel",panelHeightOnly:"esri-widget--panel-height-only",primaryTick:"primary-tick",primaryTickAmPm:"primary-tick__ampm",primaryTickLabel:"primary-tick__label",rotating:"esri-rotating",secondaryTick:"secondary-tick",select:"esri-select",table:"esri-widget__table",widget:"esri-widget",widgetButton:"esri-widget--button",widgetButtonActive:"esri-widget--button-active",widgetDisabled:"esri-widget--disabled"}}}]);
//# sourceMappingURL=62528.a00dcf77.chunk.js.map