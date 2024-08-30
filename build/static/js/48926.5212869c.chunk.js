"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[48926],{48926:function(e,t,a){a.r(t),a.d(t,{CalciteFlowItem:function(){return G},defineCustomElement:function(){return W}});var o=a(74165),c=a(15861),n=a(15671),l=a(43144),i=a(97326),s=a(60136),r=a(29388),d=a(70524),f=a(92358),u=a(13160),h=a(47242),b=a(46895),m=a(52655),p=a(89524),g=a(65138),k=a(49865),v=a(57601),y=a(91438),w=a(2654),C=a(69874),B="back-button",E="chevron-left",S="chevron-right",I="action-bar",x="alerts",F="content-top",Z="content-bottom",P="header-actions-start",L="header-actions-end",M="header-menu-actions",T="header-content",O="fab",D="footer",A="footer-actions",_="footer-end",z="footer-start",R=(0,d.GH)(function(e){(0,s.Z)(a,e);var t=(0,r.Z)(a);function a(){var e;return(0,n.Z)(this,a),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calciteFlowItemBack=(0,d.yM)((0,i.Z)(e),"calciteFlowItemBack",7),e.calciteFlowItemScroll=(0,d.yM)((0,i.Z)(e),"calciteFlowItemScroll",6),e.calciteFlowItemClose=(0,d.yM)((0,i.Z)(e),"calciteFlowItemClose",6),e.calciteFlowItemToggle=(0,d.yM)((0,i.Z)(e),"calciteFlowItemToggle",6),e.handleInternalPanelScroll=function(t){t.target===e.containerEl&&(t.stopPropagation(),e.calciteFlowItemScroll.emit())},e.handleInternalPanelClose=function(t){t.target===e.containerEl&&(t.stopPropagation(),e.closed=!0,e.calciteFlowItemClose.emit())},e.handleInternalPanelToggle=function(t){t.target===e.containerEl&&(t.stopPropagation(),e.collapsed=t.target.collapsed,e.calciteFlowItemToggle.emit())},e.backButtonClick=function(){e.calciteFlowItemBack.emit()},e.setBackRef=function(t){e.backButtonEl=t},e.setContainerRef=function(t){e.containerEl=t},e.closable=!1,e.closed=!1,e.collapsed=!1,e.collapseDirection="down",e.collapsible=!1,e.beforeBack=void 0,e.beforeClose=void 0,e.description=void 0,e.disabled=!1,e.heading=void 0,e.headingLevel=void 0,e.loading=!1,e.menuOpen=!1,e.messageOverrides=void 0,e.messages=void 0,e.overlayPositioning="absolute",e.scale="m",e.showBackButton=!1,e.defaultMessages=void 0,e.effectiveLocale="",e}return(0,l.Z)(a,[{key:"onMessagesChange",value:function(){}},{key:"connectedCallback",value:function(){(0,u.c)(this),(0,b.c)(this),(0,m.c)(this)}},{key:"componentWillLoad",value:function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.s)(this);case 2:(0,h.s)(this);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidRender",value:function(){(0,u.u)(this)}},{key:"disconnectedCallback",value:function(){(0,u.d)(this),(0,b.d)(this),(0,m.d)(this)}},{key:"componentDidLoad",value:function(){(0,h.a)(this)}},{key:"effectiveLocaleChange",value:function(){(0,m.u)(this,this.effectiveLocale)}},{key:"setFocus",value:function(){var e=(0,c.Z)((0,o.Z)().mark((function e(){var t,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.c)(this);case 2:if(t=this.backButtonEl,a=this.containerEl,!t){e.next=7;break}return e.abrupt("return",t.setFocus());case 7:if(!a){e.next=9;break}return e.abrupt("return",a.setFocus());case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollContentTo",value:function(){var e=(0,c.Z)((0,o.Z)().mark((function e(t){var a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(a=this.containerEl)||void 0===a?void 0:a.scrollContentTo(t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderBackButton",value:function(){var e=this.el,t="rtl"===(0,f.a)(e),a=this.showBackButton,o=this.backButtonClick,c=this.messages.back,n=t?S:E;return a?(0,d.h)("calcite-action",{"aria-label":c,class:B,icon:n,key:"flow-back-button",onClick:o,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:c,title:c}):null}},{key:"render",value:function(){var e=this.collapsed,t=this.collapseDirection,a=this.collapsible,o=this.closable,c=this.closed,n=this.description,l=this.disabled,i=this.heading,s=this.headingLevel,r=this.loading,f=this.menuOpen,h=this.messages,b=this.overlayPositioning,m=this.beforeClose;return(0,d.h)(d.AA,{key:"166a2f53829cecc09019a7fa3fe670b5e4e42146"},(0,d.h)(u.I,{key:"53f00fb0e5ec53b8a19efde1592e1bff176302d1",disabled:l},(0,d.h)("calcite-panel",{key:"a24ff76af240b1403ebfa5810bc8fe0443901040",beforeClose:m,closable:o,closed:c,collapseDirection:t,collapsed:e,collapsible:a,description:n,disabled:l,heading:i,headingLevel:s,loading:r,menuOpen:f,messageOverrides:h,onCalcitePanelClose:this.handleInternalPanelClose,onCalcitePanelScroll:this.handleInternalPanelScroll,onCalcitePanelToggle:this.handleInternalPanelToggle,overlayPositioning:b,ref:this.setContainerRef,scale:this.scale},this.renderBackButton(),(0,d.h)("slot",{key:"9051287e5b89eaca28b440816cbcddc03cefed73",name:I,slot:p.S.actionBar}),(0,d.h)("slot",{key:"566fb396078d3eac17fbff69e0cd43fb5b8ca13e",name:x,slot:p.S.alerts}),(0,d.h)("slot",{key:"88ced257238e369cd99250c9d5a93fa03746fbd5",name:P,slot:p.S.headerActionsStart}),(0,d.h)("slot",{key:"beab9f93af9deed383adc8250ec943b883e058b8",name:L,slot:p.S.headerActionsEnd}),(0,d.h)("slot",{key:"1f1c7579d1ac1085004b08d2f57ec8b9e0641e35",name:T,slot:p.S.headerContent}),(0,d.h)("slot",{key:"3696e4a7e80db48581f438336007a1b63a201040",name:M,slot:p.S.headerMenuActions}),(0,d.h)("slot",{key:"370e0817cbc13d7cf4c8adaccff8fe9d7c91c859",name:O,slot:p.S.fab}),(0,d.h)("slot",{key:"d55cc859cb1c9c6cc80a63521aad955f6e23d31c",name:F,slot:p.S.contentTop}),(0,d.h)("slot",{key:"7cea1750cd59d1fdda66516c9b4c78884127dde5",name:Z,slot:p.S.contentBottom}),(0,d.h)("slot",{key:"d07ed2f97623023312cdb0a5a01b909286f34373",name:z,slot:p.S.footerStart}),(0,d.h)("slot",{key:"fdc209c1e77fd62cadaaad0ee576e71a1f0419d8",name:D,slot:p.S.footer}),(0,d.h)("slot",{key:"5348d32cc42b7fa3b07e4b5ef711863f6ce812bc",name:_,slot:p.S.footerEnd}),(0,d.h)("slot",{key:"bad7644787a3ad19ef40931fb38cfe9c18962b27",name:A,slot:p.S.footerActions}),(0,d.h)("slot",{key:"97675398537cc86f41a219126e17bcf24cf4682b"}))))}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}}]),a}(d.mv),[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],beforeClose:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function H(){if("undefined"!==typeof customElements){["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((function(e){switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,R);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,k.d)();break;case"calcite-icon":customElements.get(e)||(0,v.d)();break;case"calcite-loader":customElements.get(e)||(0,y.d)();break;case"calcite-panel":customElements.get(e)||(0,p.d)();break;case"calcite-popover":customElements.get(e)||(0,w.d)();break;case"calcite-scrim":customElements.get(e)||(0,C.d)()}}))}}H();var G=R,W=H}}]);
//# sourceMappingURL=48926.5212869c.chunk.js.map