/*! For license information please see 15862.c68b7615.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[15862],{15862:function(e,t,n){n.r(t),n.d(t,{CalciteComboboxItem:function(){return c},defineCustomElement:function(){return o}});var i=n(53546),c=i.C,o=i.d},53546:function(e,t,n){n.d(t,{C:function(){return R},d:function(){return T}});var i=n(4942),c=n(15671),o=n(43144),r=n(97326),a=n(60136),l=n(29388),s=n(70524),u=n(19432),d=n(92358),f=n(14387),h=n(13160),b=n(96681),v=n(64044),m=n(57601),p="label--active",g="center-content",x="container",y="icon--custom",k="description",w="icon--dot",C="filter-match",Z="icon",I="icon--active",z="label",E=function(e){return"scale--".concat(e)},O="label--selected",D="short-text",M="label--single",P="title",L="content-end",R=(0,s.GH)(function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calciteComboboxItemChange=(0,s.yM)((0,r.Z)(e),"calciteComboboxItemChange",6),e.calciteInternalComboboxItemChange=(0,s.yM)((0,r.Z)(e),"calciteInternalComboboxItemChange",6),e.itemClickHandler=function(){e.toggleSelected()},e.active=!1,e.ancestors=void 0,e.description=void 0,e.disabled=!1,e.filterDisabled=void 0,e.filterTextMatchPattern=void 0,e.guid=(0,f.g)(),e.icon=void 0,e.iconFlipRtl=!1,e.metadata=void 0,e.scale="m",e.selected=!1,e.selectionMode="multiple",e.shortHeading=void 0,e.heading=void 0,e.textLabel=void 0,e.value=void 0,e.label=void 0,e}return(0,o.Z)(n,[{key:"handleComboboxItemPropsChange",value:function(){this.calciteInternalComboboxItemChange.emit()}},{key:"selectedWatchHandler",value:function(){this.calciteComboboxItemChange.emit()}},{key:"connectedCallback",value:function(){this.ancestors=(0,b.f)(this.el),(0,u.c)(this),(0,h.c)(this)}},{key:"disconnectedCallback",value:function(){(0,u.d)(this),(0,h.d)(this)}},{key:"componentDidRender",value:function(){(0,h.u)(this)}},{key:"toggleSelected",value:function(){var e="single-persist"===this.selectionMode;this.disabled||e&&this.selected||(this.selected=!this.selected)}},{key:"renderIcon",value:function(e){var t;return this.icon?(0,s.h)("calcite-icon",{class:(t={},(0,i.Z)(t,y,!!this.icon),(0,i.Z)(t,I,this.icon&&this.selected),t),flipRtl:this.iconFlipRtl,icon:this.icon||e,key:"icon",scale:(0,v.g)(this.scale)}):null}},{key:"renderSelectIndicator",value:function(e,t){var n,c;return e?(0,s.h)("span",{class:(n={},(0,i.Z)(n,Z,!0),(0,i.Z)(n,w,!0),n)}):(0,s.h)("calcite-icon",{class:(c={},(0,i.Z)(c,Z,!0),(0,i.Z)(c,I,this.selected),c),flipRtl:this.iconFlipRtl,icon:t,key:"indicator",scale:(0,v.g)(this.scale)})}},{key:"renderChildren",value:function(){return(0,d.g)(this.el)?(0,s.h)("ul",{key:"default-slot-container"},(0,s.h)("slot",null)):null}},{key:"render",value:function(){var e,t,n=this.disabled,c=this.heading,o=this.label,r=this.textLabel,a=this.value,l=(0,b.i)(this.selectionMode),u=c||r,d=n?void 0:l?void 0:"check",f=o||a,v=l&&!n,m=(e={},(0,i.Z)(e,z,!0),(0,i.Z)(e,O,this.selected),(0,i.Z)(e,p,this.active),(0,i.Z)(e,M,l),e),y=(0,b.j)(this.el)+1;return(0,s.h)(s.AA,{key:"893a354b69619332b4f45458224aa8b41f90111e","aria-hidden":"true","aria-label":f},(0,s.h)(h.I,{key:"d476f526f4d55a6b7b2cf498f97eb2a8db67222b",disabled:n},(0,s.h)("div",{key:"327153394df9ebd4e6cd5dbd409d7fdd473beb3e",class:(t={},(0,i.Z)(t,x,!0),(0,i.Z)(t,E(this.scale),!0),t),style:{"--calcite-combobox-item-spacing-indent-multiplier":"".concat(y)}},(0,s.h)("li",{key:"f9a623aafce0135cb4e7e9e30579f98e18bf38e6",class:m,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(v,d),this.renderIcon(d),(0,s.h)("div",{key:"8d90ab670e01f935a4217e24e175cc9e6cebfecf",class:g},(0,s.h)("div",{key:"176cc0659c8778c2f77be2f3912963b121e99ee7",class:P},this.renderTextContent(u)),this.description?(0,s.h)("div",{class:k},this.renderTextContent(this.description)):null),this.shortHeading?(0,s.h)("div",{class:D},this.renderTextContent(this.shortHeading)):null,(0,s.h)("slot",{key:"8646cb9cde757ea2e34ec0c3f8cdc6ac806e1142",name:L})),this.renderChildren())))}},{key:"renderTextContent",value:function(e){var t=this.filterTextMatchPattern;if(!t||!e)return e;var n=e.split(t);return n.length>1&&(n[1]=(0,s.h)("mark",{class:C},n[1])),n}},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{disabled:["handleComboboxItemPropsChange"],textLabel:["handleComboboxItemPropsChange"],selected:["selectedWatchHandler"]}}},{key:"style",get:function(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem;--calcite-internal-combobox-item-description-font-size:var(--calcite-font-size-xs)}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.375rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem;--calcite-internal-combobox-item-description-font-size:var(--calcite-font-size-sm)}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem;--calcite-internal-combobox-item-description-font-size:var(--calcite-font-size)}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;justify-content:space-around;gap:var(--calcite-combobox-item-spacing-unit-l);padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l);padding-inline-start:var(--calcite-combobox-item-indent-value)}:host([disabled]) .label{cursor:default}.label--selected{color:var(--calcite-color-text-1)}.label--selected .title{font-weight:var(--calcite-font-weight-medium)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-color-border-1)}.icon--custom{margin-block-start:-1px;color:var(--calcite-color-text-3)}.icon--active{color:var(--calcite-color-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot::before{text-align:start;content:"\u2022"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-color-brand)}:host(:hover[disabled]) .icon{opacity:1}.filter-match{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-current)}.center-content{display:flex;flex-direction:column;flex-grow:1;padding-block:0}.description{font-size:var(--calcite-internal-combobox-item-description-font-size)}:host([selected]) .description,:host(:hover) .description{color:var(--calcite-color-text-2)}.short-text{color:var(--calcite-color-text-3);white-space:nowrap}.title{color:var(--calcite-color-text-1)}.title,.description,.short-text{line-height:var(--calcite-font-line-height-relative-snug)}'}}]),n}(s.mv),[1,"calcite-combobox-item",{active:[516],ancestors:[1040],description:[1],disabled:[516],filterDisabled:[516,"filter-disabled"],filterTextMatchPattern:[16],guid:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],metadata:[16],scale:[1],selected:[1540],selectionMode:[513,"selection-mode"],shortHeading:[1,"short-heading"],heading:[1],textLabel:[513,"text-label"],value:[8],label:[8]},void 0,{disabled:["handleComboboxItemPropsChange"],textLabel:["handleComboboxItemPropsChange"],selected:["selectedWatchHandler"]}]);function T(){if("undefined"!==typeof customElements){["calcite-combobox-item","calcite-icon"].forEach((function(e){switch(e){case"calcite-combobox-item":customElements.get(e)||customElements.define(e,R);break;case"calcite-icon":customElements.get(e)||(0,m.d)()}}))}}T()},64044:function(e,t,n){n.d(t,{c:function(){return r},g:function(){return o}});var i=n(74165),c=n(15861);function o(e){return"l"===e?"m":"s"}function r(e){return a.apply(this,arguments)}function a(){return(a=(0,c.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t)?t.componentOnReady():new Promise((function(e){return requestAnimationFrame((function(){return e()}))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return"function"===typeof e.componentOnReady}},19432:function(e,t,n){n.d(t,{c:function(){return a},d:function(){return l}});var i,c=n(70524),o=n(72021),r={childList:!0};function a(e){i||(i=(0,o.c)("mutation",s)),i.observe(e.el,r)}function l(e){i.unobserve(e.el)}function s(e){e.forEach((function(e){var t=e.target;(0,c.xE)(t)}))}},57601:function(e,t,n){n.d(t,{I:function(){return w},d:function(){return C}});var i=n(74165),c=n(4942),o=n(15671),r=n(43144),a=n(60136),l=n(29388),s=n(15861),u=n(70524),d=n(92358),f=n(72021),h=n(42482),b="flip-rtl",v={},m={},p={s:16,m:24,l:32};function g(e){var t=e.icon,n=e.scale,i=p[n],c=function(e){var t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){var i=/[a-z]/i;e=n.map((function(e,t){return e.replace(i,(function(e,n){return 0===t&&0===n?e:e.toUpperCase()}))})).join("")}return t?"i".concat(e):e}(t),o="F"===c.charAt(c.length-1),r=o?c.substring(0,c.length-1):c;return"".concat(r).concat(i).concat(o?"F":"")}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,s.Z)((0,i.Z)().mark((function e(t){var n,c,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=g(t),!(c=k(n))){e.next=4;break}return e.abrupt("return",c);case 4:return m[n]||(m[n]=fetch((0,u.K3)("./assets/icon/".concat(n,".json"))).then((function(e){return e.json()})).catch((function(){return console.error('"'.concat(n,'" is not a valid calcite-ui-icon name')),""}))),e.next=7,m[n];case 7:return o=e.sent,v[n]=o,e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return v[e]}var w=(0,u.GH)(function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.icon=null,e.flipRtl=!1,e.scale="m",e.textLabel=void 0,e.pathData=void 0,e.visible=!1,e}return(0,r.Z)(n,[{key:"connectedCallback",value:function(){var e=this;this.visible||this.waitUntilVisible((function(){e.visible=!0,e.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}},{key:"render",value:function(){var e,t=this.el,n=this.flipRtl,i=this.pathData,o=this.scale,r=this.textLabel,a=(0,d.a)(t),l=p[o],s=!!r,f=[].concat(i||"");return(0,u.h)(u.AA,{key:"41c9d3006a5887061fdb2144102447b2f490eb72","aria-hidden":(0,d.t)(!s),"aria-label":s?r:null,role:s?"img":null},(0,u.h)("svg",{key:"9fc84ba4eac40fc822babbfe276b2add5ee1c952","aria-hidden":"true",class:(e={},(0,c.Z)(e,b,"rtl"===a&&n),(0,c.Z)(e,"svg",!0),e),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(l," ").concat(l),width:"100%",xmlns:"http://www.w3.org/2000/svg"},f.map((function(e){return"string"===typeof e?(0,u.h)("path",{d:e}):(0,u.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n,c,o,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.icon,n=this.scale,c=this.visible,(0,h.i)()&&t&&c){e.next=3;break}return e.abrupt("return");case 3:if(o={icon:t,scale:n},e.t0=k(g(o)),e.t0){e.next=9;break}return e.next=8,x(o);case 8:e.t0=e.sent;case 9:if(r=e.t0,t===this.icon){e.next=12;break}return e.abrupt("return");case 12:this.pathData=r;case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(e){var t=this;this.intersectionObserver=(0,f.c)("intersection",(function(n){n.forEach((function(n){n.isIntersecting&&(t.intersectionObserver.disconnect(),t.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(u.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function C(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(e){if("calcite-icon"===e)customElements.get(e)||customElements.define(e,w)}))}}C()},13160:function(e,t,n){n.d(t,{I:function(){return w},c:function(){return x},d:function(){return y},u:function(){return b}});var i=n(93433),c=n(37762),o=n(70524),r=n(42482),a=/firefox/i.test((0,r.g)()),l=a?new WeakMap:null;function s(){this.disabled||HTMLElement.prototype.click.call(this)}function u(e){var t=e.target;a&&!l.get(t)||t.disabled&&e.preventDefault()}var d=["mousedown","mouseup","click"];function f(e){var t=e.target;a&&!l.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}var h={capture:!0};function b(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void v(e);p(e),e.el.removeAttribute("aria-disabled")}function v(e){if(e.el.click=s,a){var t=function(e){return e.el.parentElement||e.el}(e),n=l.get(e.el);return n!==t&&(g(n),l.set(e.el,t)),void m(l.get(e.el))}m(e.el)}function m(e){e&&(e.addEventListener("pointerdown",u,h),d.forEach((function(t){return e.addEventListener(t,f,h)})))}function p(e){if(delete e.el.click,a){var t=l.get(e.el),n=!1;if(null!==t&&void 0!==t&&t.children){var i,o=(0,c.Z)(t.children);try{for(o.s();!(i=o.n()).done;){var r=i.value;if("disabled"in r&&r.disabled&&r!==e.el){n=!0;break}}}catch(s){o.e(s)}finally{o.f()}}return n||g(t),void l.delete(e.el)}g(e.el)}function g(e){e&&(e.removeEventListener("pointerdown",u,h),d.forEach((function(t){return e.removeEventListener(t,f,h)})))}function x(e){e.disabled&&a&&v(e)}function y(e){a&&p(e)}var k={container:"interaction-container"},w=function(e,t){var n=e.disabled;return o.h.apply(void 0,["div",{class:k.container,inert:n}].concat((0,i.Z)(t)))}},72021:function(e,t,n){n.d(t,{c:function(){return u}});var i=n(15671),c=n(43144),o=n(88301),r=n(61120),a=n(60136),l=n(29388),s=n(42482);function u(e,t,n){if((0,s.i)()){var u=function(e){var t=function(e){(0,a.Z)(n,e);var t=(0,l.Z)(n);function n(e){var c;return(0,i.Z)(this,n),(c=t.call(this,e)).observedEntry=[],c.callback=e,c}return(0,c.Z)(n,[{key:"observe",value:function(e,t){return this.observedEntry.push({target:e,options:t}),(0,o.Z)((0,r.Z)(n.prototype),"observe",this).call(this,e,t)}},{key:"unobserve",value:function(e){var t=this,i=this.observedEntry.filter((function(t){return t.target!==e}));this.observedEntry=[],this.callback((0,o.Z)((0,r.Z)(n.prototype),"takeRecords",this).call(this),this),this.disconnect(),i.forEach((function(e){return t.observe(e.target,e.options)}))}}]),n}(window.MutationObserver);return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new u(t,n)}}},96681:function(e,t,n){n.d(t,{C:function(){return l},I:function(){return s},a:function(){return a},b:function(){return d},c:function(){return f},d:function(){return o},e:function(){return r},f:function(){return u},g:function(){return m},h:function(){return h},i:function(){return v},j:function(){return b}});var i=n(92358),c=n(42482),o="CALCITE-COMBOBOX-ITEM",r="CALCITE-COMBOBOX-ITEM-GROUP",a="".concat(o,", ").concat(r),l={input:"input",chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container",icon:"icon",placeholderIcon:"placeholder-icon",selectedIcon:"selected-icon"},s={validationMessage:"comboboxValidationMessage"};function u(e){var t,n,i=null===(t=e.parentElement)||void 0===t?void 0:t.closest(a);return[i,null===i||void 0===i||null===(n=i.parentElement)||void 0===n?void 0:n.closest(a)].filter((function(e){return e}))}function d(e){var t;return(null===(t=e.ancestors)||void 0===t?void 0:t.filter((function(e){return"CALCITE-COMBOBOX-ITEM"===e.nodeName})))||[]}function f(e){return(0,i.z)(e.querySelectorAll("calcite-combobox-item"))}function h(e){return(0,i.z)(e.querySelectorAll("calcite-combobox-item")).filter((function(e){return e.selected})).length>0}function b(e){return(0,c.i)()?document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength:0}function v(e){return e.includes("single")}function m(e){return e.shortHeading||e.textLabel}}}]);
//# sourceMappingURL=15862.c68b7615.chunk.js.map