/*! For license information please see 83001.65999d4c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[83001],{83001:function(e,t,i){i.r(t),i.d(t,{arcgis_utility_network_trace:function(){return d}});var s=i(74165),r=i(15861),a=i(15671),n=i(43144),l=i(62042),c=i(62153),o=i(14285),h=i(25771),d=function(){function e(t){(0,a.Z)(this,e),(0,l.r)(this,t),this.arcgisReady=(0,l.c)(this,"arcgisReady",7),this.arcgisAddFlag=(0,l.c)(this,"arcgisAddFlag",7),this.arcgisAddFlagComplete=(0,l.c)(this,"arcgisAddFlagComplete",7),this.arcgisAddFlagError=(0,l.c)(this,"arcgisAddFlagError",7),this.arcgisAddResultArea=(0,l.c)(this,"arcgisAddResultArea",7),this.arcgisRemoveResultArea=(0,l.c)(this,"arcgisRemoveResultArea",7),this._watchHandles=[],this.referenceElement=void 0,this.enableResultArea=!1,this.defaultGraphicColor={color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#FFFF00"},this.disabled=!1,this.flags=[],this.gdbVersion="sde.DEFAULT",this.inputSettings=[],this.resultAreaProperties=void 0,this.selectedTraces=[],this.selectOnCompleteDisabled=!1,this.showGraphicsOnCompleteDisabled=!1,this.showSelectionAttributesDisabled=!1,this.position="bottom-left",this.view=void 0,this.widget=void 0}return(0,n.Z)(e,[{key:"referenceElementWatcher",value:function(e){(0,o.r)(this,e)}},{key:"enableResultAreaWatcher",value:function(e){this.widget&&(this.widget.enableResultArea=e)}},{key:"defaultGraphicColorWatcher",value:function(e){this.widget&&(this.widget.defaultGraphicColor=e)}},{key:"disabledWatcher",value:function(e,t){this.widget&&e!==t&&(this.widget.disabled=e)}},{key:"flagsWatcher",value:function(e){this.widget&&(this.widget.flags=e)}},{key:"gdbVersionWatcher",value:function(e){this.widget&&(this.widget.gdbVersion=e)}},{key:"inputSettingsWatcher",value:function(e){this.widget&&(this.widget.inputSettings=e)}},{key:"resultAreaPropertiesWatcher",value:function(e){this.widget&&(this.widget.resultAreaProperties=e)}},{key:"selectedTracesWatcher",value:function(e){this.widget&&(this.widget.selectedTraces=e)}},{key:"selectOnCompleteDisabledWatcher",value:function(e){void 0!==e&&this.widget&&(this.widget.selectOnComplete=!e)}},{key:"showGraphicsOnCompleteDisabledWatcher",value:function(e){void 0!==e&&this.widget&&(this.widget.showGraphicsOnComplete=!e)}},{key:"showSelectionAttributesDisabledWatcher",value:function(e){void 0!==e&&this.widget&&(this.widget.showSelectionAttributes=!e)}},{key:"positionWatcher",value:function(e){void 0!==e&&this.widget&&this.el.childElem&&this.view.ui.move(this.el.childElem,e)}},{key:"viewWatcher",value:function(e){void 0!==e&&this.widget&&(this.widget.view=e)}},{key:"checkCanTrace",value:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=this.widget)||void 0===t?void 0:t.checkCanTrace();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"confirmReset",value:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.widget)||void 0===t||t.confirmReset();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._createParams(),e.next=3,(0,c.ad)(t);case 3:return i=e.sent,this.widget=i,e.next=7,this._addWatchers();case 7:this._proxyEvents(),this._addContainer(),(0,o.d)(this),(0,o.a)(this);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnectedCallback",value:function(){(0,h.o)(this)}},{key:"render",value:function(){var e=this;return(0,l.h)("div",{key:"1799b3fcd3f0799989be0662f828451fe1cb006e",ref:function(t){return e.el.childElem=t}})}},{key:"_addContainer",value:function(){this.widget.container=this.el.childElem}},{key:"_addWatchers",value:function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var t,i,r=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.i)();case 2:t=e.sent,i=t.watch,(0,o.f)(this,i((function(){return r.widget.disabled}),(function(e){return r.disabled=e})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_createParams",value:function(){var e={};return this.defaultGraphicColor&&(e.defaultGraphicColor=this.defaultGraphicColor),void 0!==this.enableResultArea&&(e.enableResultArea=this.enableResultArea),this.flags&&(e.flags=this.flags),this.gdbVersion&&(e.gdbVersion=this.gdbVersion),this.inputSettings&&(e.inputSettings=this.inputSettings),this.resultAreaProperties&&(e.resultAreaProperties=this.resultAreaProperties),this.selectedTraces&&(e.selectedTraces=this.selectedTraces),void 0!==this.selectOnCompleteDisabled&&(e.selectOnComplete=!this.selectOnCompleteDisabled),void 0!==this.showGraphicsOnCompleteDisabled&&(e.showGraphicsOnComplete=!this.showGraphicsOnCompleteDisabled),void 0!==this.showSelectionAttributesDisabled&&(e.showSelectionAttributes=!this.showSelectionAttributesDisabled),this.view&&(e.view=this.view),e}},{key:"_proxyEvents",value:function(){var e=this;this.widget.on("add-flag",(function(t){return e.arcgisAddFlag.emit(t)})),this.widget.on("add-flag-complete",(function(t){return e.arcgisAddFlagComplete.emit(t)})),this.widget.on("add-flag-error",(function(t){return e.arcgisAddFlagError.emit(t)})),this.widget.on("add-result-area",(function(t){return e.arcgisAddResultArea.emit(t)})),this.widget.on("remove-result-area",(function(t){return e.arcgisRemoveResultArea.emit(t)}))}},{key:"el",get:function(){return(0,l.g)(this)}}],[{key:"watchers",get:function(){return{referenceElement:["referenceElementWatcher"],enableResultArea:["enableResultAreaWatcher"],defaultGraphicColor:["defaultGraphicColorWatcher"],disabled:["disabledWatcher"],flags:["flagsWatcher"],gdbVersion:["gdbVersionWatcher"],inputSettings:["inputSettingsWatcher"],resultAreaProperties:["resultAreaPropertiesWatcher"],selectedTraces:["selectedTracesWatcher"],selectOnCompleteDisabled:["selectOnCompleteDisabledWatcher"],showGraphicsOnCompleteDisabled:["showGraphicsOnCompleteDisabledWatcher"],showSelectionAttributesDisabled:["showSelectionAttributesDisabledWatcher"],position:["positionWatcher"],view:["viewWatcher"]}}}]),e}();d.style=""},25771:function(e,t,i){i.d(t,{o:function(){return r}});var s=i(62153);function r(e){var t,i,r;e.el.childElem?e.el.isConnected||(null!==(t=e.view)&&void 0!==t&&t.ui?e.view.ui.remove(e.el.childElem):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.el.childElem),e._watchHandles&&e._watchHandles.forEach((function(e){e.remove()})),e._watchHandles=[],null===(r=e.widget)||void 0===r||r.destroy()):(0,s.f)((function(){var t,i,s;e.el.isConnected||(null!==(t=e.view)&&void 0!==t&&t.ui?e.view.ui.remove(e.el):null!==(i=e.widget)&&void 0!==i&&i.view&&e.widget.view.ui.remove(e.el),e._watchHandles&&e._watchHandles.forEach((function(e){e.remove()})),e._watchHandles=[],null===(s=e.widget)||void 0===s||s.destroy())}),1e3)}}}]);
//# sourceMappingURL=83001.65999d4c.chunk.js.map