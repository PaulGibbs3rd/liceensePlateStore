/*! For license information please see 56379.c8a0bdda.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[56379],{56379:function(e,n,t){t.r(n),t.d(n,{CalciteAccordion:function(){return m},defineCustomElement:function(){return f}});var i=t(4942),c=t(15671),o=t(43144),r=t(97326),a=t(60136),l=t(29388),s=t(70524),d=t(72021),u="accordion",h="accordion--transparent",p=(0,s.GH)(function(e){(0,a.Z)(t,e);var n=(0,l.Z)(t);function t(){var e;return(0,c.Z)(this,t),(e=n.call(this)).__registerHost(),e.__attachShadow(),e.calciteInternalAccordionChange=(0,s.yM)((0,r.Z)(e),"calciteInternalAccordionChange",6),e.mutationObserver=(0,d.c)("mutation",(function(){return e.updateAccordionItems()})),e.appearance="solid",e.iconPosition="end",e.iconType="chevron",e.scale="m",e.selectionMode="multiple",e}return(0,o.Z)(t,[{key:"handlePropsChange",value:function(){this.updateAccordionItems()}},{key:"connectedCallback",value:function(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.updateAccordionItems()}},{key:"disconnectedCallback",value:function(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}},{key:"render",value:function(){var e,n="transparent"===this.appearance;return(0,s.h)("div",{key:"1399ab312fad432bde78fdedd0435848b53109ef",class:(e={},(0,i.Z)(e,h,n),(0,i.Z)(e,u,!n),e)},(0,s.h)("slot",{key:"3ab7863d23eabb6c5ce499de42dab74df885ccdd"}))}},{key:"updateActiveItemOnChange",value:function(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem}),e.stopPropagation()}},{key:"updateAccordionItems",value:function(){var e=this;this.el.querySelectorAll("calcite-accordion-item").forEach((function(n){n.iconPosition=e.iconPosition,n.iconType=e.iconType,n.scale=e.scale})),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}},{key:"style",get:function(){return":host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-accordion-border-color, var(--calcite-color-border-2));background-color:var(--calcite-accordion-background-color, var(--calcite-color-foreground-1))}.accordion--transparent{--calcite-accordion-border-color:transparent;border-color:var(--calcite-color-transparent);background-color:var(--calcite-color-transparent)}:host([scale=s]){--calcite-internal-accordion-item-spacing-unit:0.25rem;--calcite-internal-accordion-icon-margin:0.5rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-accordion-item-spacing-unit:0.5rem;--calcite-internal-accordion-icon-margin:0.75rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-accordion-item-spacing-unit:0.75rem;--calcite-internal-accordion-icon-margin:1rem;--calcite-internal-accordion-item-padding:var(--calcite-internal-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([hidden]){display:none}[hidden]{display:none}"}}]),t}(s.mv),[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalAccordionItemSelect","updateActiveItemOnChange"]],{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}]);function v(){if("undefined"!==typeof customElements){["calcite-accordion"].forEach((function(e){if("calcite-accordion"===e)customElements.get(e)||customElements.define(e,p)}))}}v();var m=p,f=v},72021:function(e,n,t){t.d(n,{c:function(){return d}});var i=t(15671),c=t(43144),o=t(88301),r=t(61120),a=t(60136),l=t(29388),s=t(42482);function d(e,n,t){if((0,s.i)()){var d=function(e){var n=function(e){(0,a.Z)(t,e);var n=(0,l.Z)(t);function t(e){var c;return(0,i.Z)(this,t),(c=n.call(this,e)).observedEntry=[],c.callback=e,c}return(0,c.Z)(t,[{key:"observe",value:function(e,n){return this.observedEntry.push({target:e,options:n}),(0,o.Z)((0,r.Z)(t.prototype),"observe",this).call(this,e,n)}},{key:"unobserve",value:function(e){var n=this,i=this.observedEntry.filter((function(n){return n.target!==e}));this.observedEntry=[],this.callback((0,o.Z)((0,r.Z)(t.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(e){return n.observe(e.target,e.options)}))}}]),t}(window.MutationObserver);return"intersection"===e?window.IntersectionObserver:"mutation"===e?n:window.ResizeObserver}(e);return new d(n,t)}}}}]);
//# sourceMappingURL=56379.c8a0bdda.chunk.js.map