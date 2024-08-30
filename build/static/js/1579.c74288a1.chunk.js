"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[1579],{1579:function(e,i,t){t.d(i,{C:function(){return O},d:function(){return P}});var c=t(4942),n=t(74165),a=t(15861),l=t(15671),s=t(43144),o=t(97326),r=t(60136),d=t(29388),p=t(70524),h=t(92358),g=t(47242),v=t(52655),u=t(13160),m=t(46895),f=t(19579),b=t(64044),x=t(42482),k=t(57601),y="title",C="close",w="image-container",z="chip-icon",M="text--slotted",S="container",I="image--slotted",Z="closable",E="multiple",D="single",H="selectable",L="select-icon",T="select-icon--active",B="non-interactive",K="is-circle",R="selected",_="image",j="x",F="circle-f",A="square",G="check-square-f",O=(0,p.GH)(function(e){(0,r.Z)(t,e);var i=(0,d.Z)(t);function t(){var e;return(0,l.Z)(this,t),(e=i.call(this)).__registerHost(),e.__attachShadow(),e.calciteChipClose=(0,p.yM)((0,o.Z)(e),"calciteChipClose",6),e.calciteChipSelect=(0,p.yM)((0,o.Z)(e),"calciteChipSelect",6),e.calciteInternalChipKeyEvent=(0,p.yM)((0,o.Z)(e),"calciteInternalChipKeyEvent",6),e.calciteInternalChipSelect=(0,p.yM)((0,o.Z)(e),"calciteInternalChipSelect",6),e.calciteInternalSyncSelectedChips=(0,p.yM)((0,o.Z)(e),"calciteInternalSyncSelectedChips",6),e.handleDefaultSlotChange=function(){e.updateHasText()},e.close=function(){e.calciteChipClose.emit(),e.selected=!1,e.closed=!0},e.closeButtonKeyDownHandler=function(i){(0,f.i)(i.key)&&(i.preventDefault(),e.close())},e.handleSlotImageChange=function(i){e.hasImage=(0,h.d)(i)},e.handleEmittingEvent=function(){e.interactive&&e.calciteChipSelect.emit()},e.disabled=!1,e.appearance="solid",e.kind="neutral",e.closable=!1,e.icon=void 0,e.iconFlipRtl=!1,e.scale="m",e.label=void 0,e.value=void 0,e.closed=!1,e.selectionMode="none",e.selected=!1,e.messageOverrides=void 0,e.messages=void 0,e.interactive=!1,e.parentChipGroup=void 0,e.defaultMessages=void 0,e.effectiveLocale=void 0,e.hasText=!1,e.hasImage=!1,e}return(0,s.Z)(t,[{key:"watchSelected",value:function(e){"none"!==this.selectionMode&&this.handleSelectionPropertyChange(e)}},{key:"onMessagesChange",value:function(){}},{key:"effectiveLocaleChange",value:function(){(0,v.u)(this,this.effectiveLocale)}},{key:"connectedCallback",value:function(){(0,u.c)(this),(0,m.c)(this),(0,v.c)(this)}},{key:"componentDidLoad",value:function(){(0,g.a)(this),"none"!==this.selectionMode&&this.interactive&&this.selected&&this.handleSelectionPropertyChange(this.selected)}},{key:"componentDidRender",value:function(){(0,u.u)(this)}},{key:"disconnectedCallback",value:function(){(0,u.d)(this),(0,m.d)(this),(0,v.d)(this)}},{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,g.s)(this),!(0,x.i)()){e.next=5;break}return e.next=4,(0,v.s)(this);case 4:this.updateHasText();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"keyDownHandler",value:function(e){if(e.target===this.el)switch(e.key){case" ":case"Enter":this.handleEmittingEvent(),e.preventDefault();break;case"ArrowRight":case"ArrowLeft":case"Home":case"End":this.calciteInternalChipKeyEvent.emit(e),e.preventDefault()}}},{key:"clickHandler",value:function(){!this.interactive&&this.closable&&this.closeButtonEl.focus()}},{key:"setFocus",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var i,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.c)(this);case 2:!this.disabled&&this.interactive?null===(i=this.containerEl)||void 0===i||i.focus():!this.disabled&&this.closable&&(null===(t=this.closeButtonEl)||void 0===t||t.focus());case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateHasText",value:function(){this.hasText=this.el.textContent.trim().length>0}},{key:"handleSelectionPropertyChange",value:function(e){"single"===this.selectionMode&&this.calciteInternalSyncSelectedChips.emit(),!this.parentChipGroup.selectedItems.includes(this.el)&&e&&"multiple"!==this.selectionMode&&this.calciteInternalChipSelect.emit(),"single"!==this.selectionMode&&this.calciteInternalSyncSelectedChips.emit()}},{key:"renderChipImage",value:function(){return(0,p.h)("div",{class:w},(0,p.h)("slot",{name:_,onSlotchange:this.handleSlotImageChange}))}},{key:"renderSelectionIcon",value:function(){var e,i="multiple"===this.selectionMode?this.selected?G:A:this.selected?F:void 0;return(0,p.h)("div",{class:(e={},(0,c.Z)(e,L,!0),(0,c.Z)(e,T,"multiple"===this.selectionMode||this.selected),e)},i?(0,p.h)("calcite-icon",{icon:i,scale:(0,b.g)(this.scale)}):null)}},{key:"renderCloseButton",value:function(){var e=this;return(0,p.h)("button",{"aria-label":this.messages.dismissLabel,class:C,onClick:this.close,onKeyDown:this.closeButtonKeyDownHandler,ref:function(i){return e.closeButtonEl=i},tabIndex:this.disabled?-1:0},(0,p.h)("calcite-icon",{icon:j,scale:(0,b.g)(this.scale)}))}},{key:"renderIcon",value:function(){return(0,p.h)("calcite-icon",{class:z,flipRtl:this.iconFlipRtl,icon:this.icon,scale:(0,b.g)(this.scale)})}},{key:"render",value:function(){var e,i=this,t=this.disabled,n=t||!t&&!this.interactive,a="multiple"===this.selectionMode&&this.interactive?"checkbox":"none"!==this.selectionMode&&this.interactive?"radio":this.interactive?"button":void 0;return(0,p.h)(p.AA,{key:"6d76da5a2ae7a51ceffa4d1ca67d2f610b900a1c"},(0,p.h)(u.I,{key:"fd0190d60cffb6d0f564a91f55b0e4f69663fb5b",disabled:t},(0,p.h)("div",{key:"825b342318201ee13735f9b6e830f26b0fb4e137","aria-checked":"none"!==this.selectionMode&&this.interactive?(0,h.t)(this.selected):void 0,"aria-disabled":n?(0,h.t)(t):void 0,"aria-label":this.label,class:(e={},(0,c.Z)(e,S,!0),(0,c.Z)(e,M,this.hasText),(0,c.Z)(e,I,this.hasImage),(0,c.Z)(e,H,"none"!==this.selectionMode),(0,c.Z)(e,E,"multiple"===this.selectionMode),(0,c.Z)(e,D,"single"===this.selectionMode||"single-persist"===this.selectionMode),(0,c.Z)(e,R,this.selected),(0,c.Z)(e,Z,this.closable),(0,c.Z)(e,B,!this.interactive),(0,c.Z)(e,K,!this.closable&&!this.hasText&&(!this.icon||!this.hasImage)&&("none"===this.selectionMode||!!this.selectionMode&&"multiple"!==this.selectionMode&&!this.selected)),e),onClick:this.handleEmittingEvent,ref:function(e){return i.containerEl=e},role:a,tabIndex:n?-1:0},"none"!==this.selectionMode&&this.renderSelectionIcon(),this.renderChipImage(),this.icon&&this.renderIcon(),(0,p.h)("span",{key:"0b3d668d66e359ecc3690ad87033e7e49a9250ef",class:y},(0,p.h)("slot",{key:"ff1af06039b94df6108f5e371e23ad9debfd388e",onSlotchange:this.handleDefaultSlotChange})),this.closable&&this.renderCloseButton())))}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{selected:["watchSelected"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}.container,.select-icon,.title{padding-inline-start:var(--calcite-internal-chip-padding-start);padding-inline-end:var(--calcite-internal-chip-padding-end)}.select-icon:not(.select-icon--active){padding-inline:0}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle,:host([scale=s]) .container.is-circle.image--slotted{block-size:1.5rem;inline-size:1.5rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-px)}:host([scale=s]) .multiple .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .multiple.image--slotted .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=s]) .multiple.image--slotted.text--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container.image--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container.image--slotted.closable{--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=s]) .container:not(.is-circle):not(.multiple):not(.image-slotted) .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-xs)}:host([scale=s]) .container:not(.is-circle):not(.multiple).image--slotted .select-icon.select-icon--active{padding-inline-start:var(--calcite-spacing-base);padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s][closable]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=m]) .container.is-circle,:host([scale=m]) .container.is-circle.image--slotted{block-size:2rem;inline-size:2rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-px);--calcite-internal-chip-padding-end:var(--calcite-spacing-px)}:host([scale=m]) .multiple .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-base);--calcite-internal-chip-padding-end:var(--calcite-spacing-base)}:host([scale=m]) .multiple.image--slotted .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=m]) .multiple.image--slotted.text--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=m]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=m]) .container.image--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=m]) .container.image--slotted.closable{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=m]) .container:not(.is-circle):not(.multiple):not(.image-slotted) .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-px)}:host([scale=m]) .container:not(.is-circle):not(.multiple).image--slotted .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-sm)}:host([scale=m][closable]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]) .container.is-circle,:host([scale=l]) .container.is-circle.image--slotted{block-size:2.75rem;inline-size:2.75rem;--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]) .multiple .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}:host([scale=l]) .multiple.image--slotted .select-icon{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-md)}:host([scale=l]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-sm);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=l]) .container.image--slotted{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-sm)}:host([scale=l]) .container.image--slotted.closable{--calcite-internal-chip-padding-start:var(--calcite-spacing-xs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host([scale=l]) .container:not(.is-circle):not(.multiple):not(.image-slotted) .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=l]) .container:not(.is-circle):not(.multiple).image--slotted .select-icon.select-icon--active{padding-inline-start:0;padding-inline-end:var(--calcite-spacing-md)}:host([scale=l][closable]) .container{--calcite-internal-chip-padding-start:var(--calcite-spacing-sm);--calcite-internal-chip-padding-end:var(--calcite-spacing-xs)}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .container.selectable.single.image--slotted{--calcite-internal-chip-padding-end:calc(0.125rem / 2)}:host([scale=s]) .container:not(.selected):not(.multiple).image--slotted{--calcite-internal-chip-padding-start:calc(0.125rem / 2)}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;--calcite-internal-chip-padding-start:var(--calcite-chip-spacing-s-internal);--calcite-internal-chip-padding-end:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-1);outline-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-color-transparent-hover);--calcite-chip-transparent-press:var(--calcite-color-transparent-press);--calcite-internal-chip-padding-start:var(--calcite-spacing-xxs);--calcite-internal-chip-padding-end:var(--calcite-spacing-xxs)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}.multiple .select-icon{display:flex;align-items:center;justify-content:center}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-color-text-3)}:host([kind=inverse]){background-color:var(--calcite-color-inverse);color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-color-text-inverse)}:host([kind=brand]){background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-color-text-inverse)}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-color-text-3)}:host([appearance=outline-fill]){background-color:var(--calcite-color-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-color-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-color-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-color-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}}]),t}(p.mv),[1,"calcite-chip",{disabled:[516],appearance:[513],kind:[513],closable:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],label:[1],value:[8],closed:[1540],selectionMode:[1,"selection-mode"],selected:[1540],messageOverrides:[1040],messages:[1040],interactive:[4],parentChipGroup:[16],defaultMessages:[32],effectiveLocale:[32],hasText:[32],hasImage:[32],setFocus:[64]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]],{selected:["watchSelected"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function P(){if("undefined"!==typeof customElements){["calcite-chip","calcite-icon"].forEach((function(e){switch(e){case"calcite-chip":customElements.get(e)||customElements.define(e,O);break;case"calcite-icon":customElements.get(e)||(0,k.d)()}}))}}P()}}]);
//# sourceMappingURL=1579.c74288a1.chunk.js.map