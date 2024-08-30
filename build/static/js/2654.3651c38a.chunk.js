/*! For license information please see 2654.3651c38a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[2654],{1843:function(e,t,n){n.d(t,{F:function(){return c}});var i=n(70524),o="calcite-floating-ui-arrow",a="calcite-floating-ui-arrow__stroke",r=12,s=6,l=1,c=function(e){var t=e.floatingLayout,n=e.key,c=e.ref,d=r,f=s,u=l,h=d/2,p="vertical"===t,v="M0,0"+" H".concat(d)+" L".concat(d-h,",").concat(f)+" Q".concat(h,",").concat(f," ").concat(h,",").concat(f)+" Z";return(0,i.h)("svg",{"aria-hidden":"true",class:o,height:d,key:n,ref:c,viewBox:"0 0 ".concat(d," ").concat(d+(p?0:u)),width:d+(p?u:0)},u>0&&(0,i.h)("path",{class:a,d:v,fill:"none","stroke-width":u+1}),(0,i.h)("path",{d:v,stroke:"none"}))}},8703:function(e,t,n){n.d(t,{H:function(){return a}});var i=n(1413),o=n(70524);var a=function(e,t){var n=e.level?"h".concat(e.level):"div";return delete e.level,(0,o.h)(n,(0,i.Z)({},e),t)}},2654:function(e,t,n){n.d(t,{P:function(){return S},d:function(){return _}});var i=n(4942),o=n(74165),a=n(15861),r=n(97326),s=n(60136),l=n(29388),c=n(15671),d=n(43144),f=n(70524),u=n(65394),h=n(16435),p=n(92358),v=n(14387),m=n(27871),g=n(8703),k=n(46895),b=n(52655),y=n(47242),E=n(72021),w=n(1843),x=n(64044),P=n(19579),H=n(65138),Z=n(57601),D=n(91438),C="container",L="close-button-container",R="close-button",A="content",z="has-header",F="header",O="heading",B="aria-controls",T="aria-expanded",M=new(function(){function e(){var t=this;(0,c.Z)(this,e),this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=function(e){var n=t.registeredElements,i=e.find((function(e){return n.has(e)}));return n.get(i)},this.togglePopovers=function(e){var n=e.composedPath(),i=t.queryPopover(n);i&&!i.triggerDisabled&&(i.open=!i.open),Array.from(t.registeredElements.values()).filter((function(e){return e!==i&&e.autoClose&&e.open&&!n.includes(e)})).forEach((function(e){return e.open=!1}))},this.keyDownHandler=function(e){e.defaultPrevented||("Escape"===e.key?t.closeAllPopovers():(0,P.i)(e.key)&&t.togglePopovers(e))},this.clickHandler=function(e){(0,p.i)(e)||t.togglePopovers(e)}}return(0,d.Z)(e,[{key:"registerElement",value:function(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}},{key:"unregisterElement",value:function(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}},{key:"closeAllPopovers",value:function(){Array.from(this.registeredElements.values()).forEach((function(e){return e.open=!1}))}},{key:"addListeners",value:function(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}},{key:"removeListeners",value:function(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}]),e}()),S=(0,f.GH)(function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calcitePopoverBeforeClose=(0,f.yM)((0,r.Z)(e),"calcitePopoverBeforeClose",6),e.calcitePopoverClose=(0,f.yM)((0,r.Z)(e),"calcitePopoverClose",6),e.calcitePopoverBeforeOpen=(0,f.yM)((0,r.Z)(e),"calcitePopoverBeforeOpen",6),e.calcitePopoverOpen=(0,f.yM)((0,r.Z)(e),"calcitePopoverOpen",6),e.mutationObserver=(0,E.c)("mutation",(function(){return e.updateFocusTrapElements()})),e.guid="calcite-popover-".concat((0,v.g)()),e.openTransitionProp="opacity",e.hasLoaded=!1,e.setTransitionEl=function(t){e.transitionEl=t},e.setFilteredPlacements=function(){var t=(0,r.Z)(e),n=t.el,i=t.flipPlacements;e.filteredFlipPlacements=i?(0,u.f)(i,n):null},e.setUpReferenceElement=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.removeReferences(),e.effectiveReferenceElement=e.getReferenceElement(),(0,u.c)((0,r.Z)(e),e.effectiveReferenceElement,e.el);var n=(0,r.Z)(e),i=n.el,o=n.referenceElement,a=n.effectiveReferenceElement;t&&o&&!a&&console.warn("".concat(i.tagName,': reference-element id "').concat(o,'" was not found.'),{el:i}),e.addReferences()},e.getId=function(){return e.el.id||e.guid},e.setExpandedAttr=function(){var t=(0,r.Z)(e),n=t.effectiveReferenceElement,i=t.open;n&&"setAttribute"in n&&n.setAttribute(T,(0,p.t)(i))},e.addReferences=function(){var t=(0,r.Z)(e).effectiveReferenceElement;if(t){var n=e.getId();"setAttribute"in t&&t.setAttribute(B,n),M.registerElement(t,e.el),e.setExpandedAttr()}},e.removeReferences=function(){var t=(0,r.Z)(e).effectiveReferenceElement;t&&("removeAttribute"in t&&(t.removeAttribute(B),t.removeAttribute(T)),M.unregisterElement(t))},e.hide=function(){e.open=!1},e.storeArrowEl=function(t){e.arrowEl=t,e.reposition(!0)},e.autoClose=!1,e.closable=!1,e.flipDisabled=!1,e.focusTrapDisabled=!1,e.pointerDisabled=!1,e.flipPlacements=void 0,e.heading=void 0,e.headingLevel=void 0,e.label=void 0,e.messageOverrides=void 0,e.messages=void 0,e.offsetDistance=u.d,e.offsetSkidding=0,e.open=!1,e.overlayPositioning="absolute",e.placement="auto",e.referenceElement=void 0,e.scale="m",e.triggerDisabled=!1,e.effectiveLocale="",e.floatingLayout="vertical",e.effectiveReferenceElement=void 0,e.defaultMessages=void 0,e}return(0,d.Z)(n,[{key:"handleFocusTrapDisabled",value:function(e){this.open&&(e?(0,h.d)(this):(0,h.a)(this))}},{key:"flipPlacementsHandler",value:function(){this.setFilteredPlacements(),this.reposition(!0)}},{key:"onMessagesChange",value:function(){}},{key:"offsetDistanceOffsetHandler",value:function(){this.reposition(!0)}},{key:"offsetSkiddingHandler",value:function(){this.reposition(!0)}},{key:"openHandler",value:function(){(0,m.o)(this),this.reposition(!0),this.setExpandedAttr()}},{key:"overlayPositioningHandler",value:function(){this.reposition(!0)}},{key:"placementHandler",value:function(){this.reposition(!0)}},{key:"referenceElementHandler",value:function(){this.setUpReferenceElement(),this.reposition(!0)}},{key:"effectiveLocaleChange",value:function(){(0,b.u)(this,this.effectiveLocale)}},{key:"connectedCallback",value:function(){var e=this;this.setFilteredPlacements(),(0,k.c)(this),(0,b.c)(this),(0,h.c)(this),requestAnimationFrame((function(){return e.setUpReferenceElement(e.hasLoaded)}))}},{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.s)(this);case 2:(0,y.s)(this);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){(0,y.a)(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&(0,m.o)(this),this.hasLoaded=!0}},{key:"disconnectedCallback",value:function(){this.removeReferences(),(0,k.d)(this),(0,b.d)(this),(0,u.a)(this,this.effectiveReferenceElement,this.el),(0,h.d)(this)}},{key:"reposition",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){var t,n,i,a,r,s,l,c,d,f,h=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.length>0&&void 0!==h[0]&&h[0],n=this.el,i=this.effectiveReferenceElement,a=this.placement,r=this.overlayPositioning,s=this.flipDisabled,l=this.filteredFlipPlacements,c=this.offsetDistance,d=this.offsetSkidding,f=this.arrowEl,e.abrupt("return",(0,u.r)(this,{floatingEl:n,referenceEl:i,overlayPositioning:r,placement:a,flipDisabled:s,flipPlacements:l,offsetDistance:c,offsetSkidding:d,arrowEl:f,type:"popover"},t));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setFocus",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.c)(this);case 2:(0,f.xE)(this.el),(0,p.f)(this.el);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateFocusTrapElements",value:function(){var e=(0,a.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,h.u)(this);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getReferenceElement",value:function(){var e=this.referenceElement,t=this.el;return("string"===typeof e?(0,p.q)(t,{id:e}):e)||null}},{key:"onBeforeOpen",value:function(){this.calcitePopoverBeforeOpen.emit()}},{key:"onOpen",value:function(){this.calcitePopoverOpen.emit(),(0,h.a)(this)}},{key:"onBeforeClose",value:function(){this.calcitePopoverBeforeClose.emit()}},{key:"onClose",value:function(){this.calcitePopoverClose.emit(),(0,h.d)(this)}},{key:"renderCloseButton",value:function(){var e=this,t=this.messages;return this.closable?(0,f.h)("div",{class:L,key:L},(0,f.h)("calcite-action",{appearance:"transparent",class:R,onClick:this.hide,ref:function(t){return e.closeButtonEl=t},scale:this.scale,text:t.close},(0,f.h)("calcite-icon",{icon:"x",scale:(0,x.g)(this.scale)}))):null}},{key:"renderHeader",value:function(){var e=this.heading,t=this.headingLevel,n=e?(0,f.h)(g.H,{class:O,level:t},e):null;return n?(0,f.h)("div",{class:F,key:F},n,this.renderCloseButton()):null}},{key:"render",value:function(){var e,t,n=this.effectiveReferenceElement,o=this.heading,a=this.label,r=this.open,s=this.pointerDisabled,l=this.floatingLayout,c=n&&r,d=!c,h=s?null:(0,f.h)(w.F,{floatingLayout:l,key:"floating-arrow",ref:this.storeArrowEl});return(0,f.h)(f.AA,{key:"6308b6043eae5d988238c1f4ab3427b903aba9b2","aria-hidden":(0,p.t)(d),"aria-label":a,"aria-live":"polite","calcite-hydrated-hidden":d,id:this.getId(),role:"dialog"},(0,f.h)("div",{key:"241c19ccc94188c7819080dad91534e0f329d470",class:(e={},(0,i.Z)(e,u.F.animation,!0),(0,i.Z)(e,u.F.animationActive,c),e),ref:this.setTransitionEl},h,(0,f.h)("div",{key:"0ca3856260eea02f75aceaa490519b596b8f1c29",class:(t={},(0,i.Z)(t,z,!!o),(0,i.Z)(t,C,!0),t)},this.renderHeader(),(0,f.h)("div",{key:"cc3e385ce8ffda4d8dc8fa12866b80c28f621594",class:A},(0,f.h)("slot",{key:"b99e560f5ad3a74ae4f3421e1f3d6035de67fad0"})),o?null:this.renderCloseButton())))}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-color-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}.has-header .close-button-container{border-end-end-radius:none}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(f.mv),[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function _(){if("undefined"!==typeof customElements){["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach((function(e){switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||(0,H.d)();break;case"calcite-icon":customElements.get(e)||(0,Z.d)();break;case"calcite-loader":customElements.get(e)||(0,D.d)()}}))}}_()}}]);
//# sourceMappingURL=2654.3651c38a.chunk.js.map