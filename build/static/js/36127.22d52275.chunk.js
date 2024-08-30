/*! For license information please see 36127.22d52275.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[36127],{14955:function(e,t,n){n.d(t,{V:function(){return r}});var i=n(70524),a="validation-container",r=function(e){var t=e.scale,n=e.status,r=e.id,o=e.icon,s=e.message;return(0,i.h)("div",{class:a},(0,i.h)("calcite-input-message",{"aria-live":"polite",icon:o,id:r,scale:t,status:n},s))}},36127:function(e,t,n){n.r(t),n.d(t,{CalciteTextArea:function(){return q},defineCustomElement:function(){return G}});var i=n(74165),a=n(15861),r=n(4942),o=n(15671),s=n(43144),c=n(97326),l=n(60136),u=n(29388),d=n(70524),h=n(85955),f=n(61773),p=n(92358),v=n(46895),g=n(72021),m=n(47242),b=n(52655),x=n(13160),y=n(14387),k=n(14955),w=n(38906),z=n(57601),E=n(18077),Z=n(541),L="assistive-text",C="character-limit",A="content",H="container",O="footer",S="character--over-limit",I="readonly",j="text-area--invalid",M="footer--slotted",T="border--color",D="hide",_="block-size--full",W="footer--end-only",F="textAreaValidationMessage",N="footer-start",R="footer-end",P=(0,d.GH)(function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calciteTextAreaInput=(0,d.yM)((0,c.Z)(e),"calciteTextAreaInput",7),e.calciteTextAreaChange=(0,d.yM)((0,c.Z)(e),"calciteTextAreaChange",7),e.guid=(0,y.g)(),e.handleInput=function(t){e.value=t.target.value,e.calciteTextAreaInput.emit()},e.handleChange=function(){e.calciteTextAreaChange.emit()},e.contentSlotChangeHandler=function(){e.value||e.el.childNodes.forEach((function(t){"#text"===t.nodeName&&(e.value=t.nodeValue.trim())}))},e.renderCharacterLimit=function(){return e.maxLength?(e.localizedCharacterLengthObj=e.getLocalizedCharacterLength(),(0,d.h)("span",{class:C},(0,d.h)("span",{class:(0,r.Z)({},S,e.isCharacterLimitExceeded())},e.localizedCharacterLengthObj.currentLength),"/",e.localizedCharacterLengthObj.maxLength)):null},e.resizeObserver=(0,g.c)("resize",(0,a.Z)((0,i.Z)().mark((function t(){var n,a,r,o,s,l,u;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,m.b)((0,c.Z)(e));case 2:n=e.getHeightAndWidthOfElements(),a=n.textAreaHeight,r=n.textAreaWidth,o=n.elHeight,s=n.elWidth,l=n.footerHeight,(u=n.footerWidth)>0&&u!==r&&(e.footerEl.style.width="".concat(r,"px")),s===r&&o===a+(l||0)||e.setHeightAndWidthToAuto();case 5:case"end":return t.stop()}}),t)})))),e.setTextAreaEl=function(t){e.textAreaEl=t,e.resizeObserver.observe(t)},e.setHeightAndWidthToAuto=(0,Z.t)((function(){"vertical"!==e.resize&&"both"!==e.resize||(e.el.style.height="auto"),"horizontal"!==e.resize&&"both"!==e.resize||(e.el.style.width="auto")}),100,{leading:!1}),e.columns=void 0,e.disabled=!1,e.form=void 0,e.groupSeparator=!1,e.label=void 0,e.minLength=void 0,e.maxLength=void 0,e.messages=void 0,e.validationMessage=void 0,e.validationIcon=void 0,e.validity={valid:!1,badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1},e.name=void 0,e.numberingSystem=void 0,e.placeholder=void 0,e.readOnly=!1,e.required=!1,e.resize="both",e.rows=void 0,e.scale="m",e.status="idle",e.value="",e.wrap="soft",e.messageOverrides=void 0,e.defaultMessages=void 0,e.endSlotHasElements=void 0,e.startSlotHasElements=void 0,e.effectiveLocale="",e}return(0,s.Z)(n,[{key:"handleGlobalAttributesChanged",value:function(){(0,d.xE)(this)}},{key:"onMessagesChange",value:function(){}},{key:"connectedCallback",value:function(){(0,x.c)(this),(0,f.c)(this),(0,h.c)(this),(0,v.c)(this),(0,b.c)(this)}},{key:"componentWillLoad",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,m.s)(this),e.next=3,(0,b.s)(this);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){(0,m.a)(this)}},{key:"componentDidRender",value:function(){(0,x.u)(this),this.setTextAreaHeight()}},{key:"disconnectedCallback",value:function(){var e;(0,x.d)(this),(0,f.d)(this),(0,h.d)(this),(0,v.d)(this),(0,b.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}},{key:"render",value:function(){var e,t,n,i=this,a=this.startSlotHasElements||this.endSlotHasElements||!!this.maxLength;return(0,d.h)(d.AA,{key:"4bcfac668585f0f53f839dd7040c10c86466f7ea"},(0,d.h)(x.I,{key:"2731deb4f42e1ef61d5d53fbbba5fd267ba6ecc0",disabled:this.disabled},(0,d.h)("textarea",{key:"8746db6bd65da8641c449e1a3ab90371dd6a3aab","aria-describedby":this.guid,"aria-errormessage":F,"aria-invalid":(0,p.t)("invalid"===this.status||this.isCharacterLimitExceeded()),"aria-label":(0,f.g)(this),autofocus:this.el.autofocus,class:(e={},(0,r.Z)(e,I,this.readOnly),(0,r.Z)(e,j,this.isCharacterLimitExceeded()),(0,r.Z)(e,M,this.endSlotHasElements&&this.startSlotHasElements),(0,r.Z)(e,_,!a),(0,r.Z)(e,T,!a),e),cols:this.columns,disabled:this.disabled,name:this.name,onChange:this.handleChange,onInput:this.handleInput,placeholder:this.placeholder,readOnly:this.readOnly,ref:this.setTextAreaEl,required:this.required,rows:this.rows,value:this.value,wrap:this.wrap}),(0,d.h)("span",{key:"18f5b2cc042e0072bf14585f097c59e033e90565",class:(0,r.Z)({},A,!0)},(0,d.h)("slot",{key:"5ad6ecb6e80821617067f206a2a96d1921ccd5f1",onSlotchange:this.contentSlotChangeHandler})),(0,d.h)("footer",{key:"bf75a8624f1d73bebfaf5a4dc9d49c4ffb9bdca0",class:(t={},(0,r.Z)(t,O,!0),(0,r.Z)(t,I,this.readOnly),(0,r.Z)(t,D,!a),t),ref:function(e){return i.footerEl=e}},(0,d.h)("div",{key:"d16b1caa152ce0aeada636c9758b0424461c9123",class:(n={},(0,r.Z)(n,H,!0),(0,r.Z)(n,W,!this.startSlotHasElements&&this.endSlotHasElements),n)},(0,d.h)("slot",{key:"c488efe95fe4c0e7e83bb74644729f5ca864312b",name:N,onSlotchange:function(e){return i.startSlotHasElements=(0,p.d)(e)}}),(0,d.h)("slot",{key:"c0228767e3af06d68a9a887b9d26e08c95fa8d05",name:R,onSlotchange:function(e){return i.endSlotHasElements=(0,p.d)(e)}})),this.renderCharacterLimit()),(0,d.h)(h.H,{key:"4d1b9b4a7c7fb7f0ac12045d85798340a9e127ce",component:this}),this.isCharacterLimitExceeded()&&(0,d.h)("span",{key:"a89f7f1c087d7c6f6ae4e3a4f33869d169323d1b","aria-hidden":!0,"aria-live":"polite",class:L,id:this.guid},this.replacePlaceHoldersInMessages()),this.validationMessage&&"invalid"===this.status?(0,d.h)(k.V,{icon:this.validationIcon,id:F,message:this.validationMessage,scale:this.scale,status:this.status}):null))}},{key:"setFocus",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.c)(this);case 2:this.textAreaEl.focus();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selectText",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.b)(this);case 2:this.textAreaEl.select();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"effectiveLocaleChange",value:function(){(0,b.u)(this,this.effectiveLocale)}},{key:"onLabelClick",value:function(){this.setFocus()}},{key:"getLocalizedCharacterLength",value:function(){var e=this.value?this.value.length.toString():"0",t=this.maxLength.toString();return"latn"===this.numberingSystem?{currentLength:e,maxLength:t}:(v.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"never",useGrouping:this.groupSeparator},{currentLength:v.n.localize(e),maxLength:v.n.localize(t)})}},{key:"syncHiddenFormInput",value:function(e){e.setCustomValidity(""),this.isCharacterLimitExceeded()&&e.setCustomValidity(this.replacePlaceHoldersInMessages()),(0,w.s)("textarea",this,e)}},{key:"setTextAreaHeight",value:function(){var e=this.getHeightAndWidthOfElements(),t=e.textAreaHeight,n=e.elHeight,i=e.footerHeight;i>0&&t+i!=n&&(this.textAreaEl.style.height="".concat(n-i,"px"))}},{key:"getHeightAndWidthOfElements",value:function(){var e=this.textAreaEl.getBoundingClientRect(),t=e.height,n=e.width,i=this.el.getBoundingClientRect(),a=i.height,r=i.width,o=this.footerEl.getBoundingClientRect();return{textAreaHeight:t,textAreaWidth:n,elHeight:a,elWidth:r,footerHeight:o.height,footerWidth:o.width}}},{key:"replacePlaceHoldersInMessages",value:function(){return this.messages.tooLong.replace("{maxLength}",this.localizedCharacterLengthObj.maxLength).replace("{currentLength}",this.localizedCharacterLengthObj.currentLength)}},{key:"isCharacterLimitExceeded",value:function(){var e;return(null===(e=this.value)||void 0===e?void 0:e.length)>this.maxLength}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{autofocus:["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;block-size:100%;inline-size:100%}textarea{position:relative;margin:0px;box-sizing:border-box;display:block;inline-size:100%;border-width:1px;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);font-family:var(--calcite-font-family);color:var(--calcite-color-text-1);min-inline-size:12rem;border-block-end:1px solid var(--calcite-color-border-3)}@media screen and (max-width: 480px){textarea{resize:none}}textarea:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}textarea.text-area--invalid{border-width:1px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-status-danger)}textarea.text-area--invalid:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}textarea.footer--slotted{min-inline-size:18rem}.footer{box-sizing:border-box;display:flex;align-items:center;border-width:1px;border-block-start-width:0px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1)}.character-limit{display:flex;align-items:center;justify-content:flex-end;white-space:nowrap;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.character--over-limit{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-status-danger)}:host([resize=none]) textarea{resize:none}:host([resize=horizontal]) textarea{resize:horizontal}:host([resize=vertical]) textarea{resize:vertical}:host([scale=s]){font-size:var(--calcite-font-size--2)}:host([scale=s]) .footer{padding-block:0.25rem;padding-inline:0.5rem;min-block-size:1.75rem}:host([scale=s]) textarea{padding-block:0.25rem;padding-inline:0.5rem}:host([scale=s]) textarea,:host([scale=s]) .footer,:host([scale=s]) .character-limit{padding-inline-start:0.5rem;font-size:var(--calcite-font-size--2)}:host([scale=m]) textarea{padding-block:0.5rem;padding-inline:0.75rem}:host([scale=m]) .footer{padding-block:0.5rem;padding-inline:0.75rem;min-block-size:2.25rem}:host([scale=m]) textarea,:host([scale=m]) .footer,:host([scale=m]) .character-limit{padding-inline-start:0.75rem;font-size:var(--calcite-font-size--1)}:host([scale=l]){font-size:var(--calcite-font-size-0)}:host([scale=l]) textarea{padding-block:0.75rem;padding-inline:1rem}:host([scale=l]) .footer{padding-block:0.75rem;padding-inline:1rem;min-block-size:2.75rem}:host([scale=l]) textarea,:host([scale=l]) .footer,:host([scale=l]) .character-limit{padding-inline-start:1rem;font-size:var(--calcite-font-size-0)}:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.readonly{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}.border--color{border-block-end-width:1px;border-color:var(--calcite-color-border-input)}.border--color:focus{border-block-end-width:2px}textarea.block-size--full{block-size:100%}.content,.hide{display:none}.container{display:flex;inline-size:100%;justify-content:space-between}.footer--end-only{justify-content:flex-end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(d.mv),[1,"calcite-text-area",{columns:[514],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],label:[1],minLength:[514,"min-length"],maxLength:[514,"max-length"],messages:[1040],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],validity:[1040],name:[513],numberingSystem:[1,"numbering-system"],placeholder:[1],readOnly:[516,"read-only"],required:[516],resize:[513],rows:[514],scale:[513],status:[513],value:[1025],wrap:[513],messageOverrides:[1040],defaultMessages:[32],endSlotHasElements:[32],startSlotHasElements:[32],effectiveLocale:[32],setFocus:[64],selectText:[64]},void 0,{autofocus:["handleGlobalAttributesChanged"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function V(){if("undefined"!==typeof customElements){["calcite-text-area","calcite-icon","calcite-input-message"].forEach((function(e){switch(e){case"calcite-text-area":customElements.get(e)||customElements.define(e,P);break;case"calcite-icon":customElements.get(e)||(0,z.d)();break;case"calcite-input-message":customElements.get(e)||(0,E.d)()}}))}}V();var q=P,G=V},76652:function(e,t,n){n.d(t,{S:function(){return o},a:function(){return v},b:function(){return f},c:function(){return p},d:function(){return A},f:function(){return i},i:function(){return x},r:function(){return r}});var i="object"==typeof global&&global&&global.Object===Object&&global,a="object"==typeof self&&self&&self.Object===Object&&self,r=i||a||Function("return this")(),o=r.Symbol,s=Object.prototype,c=s.hasOwnProperty,l=s.toString,u=o?o.toStringTag:void 0;var d=Object.prototype.toString;var h=o?o.toStringTag:void 0;function f(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":h&&h in Object(e)?function(e){var t=c.call(e,u),n=e[u];try{e[u]=void 0;var i=!0}catch(r){}var a=l.call(e);return i&&(t?e[u]=n:delete e[u]),a}(e):function(e){return d.call(e)}(e)}function p(e){return null!=e&&"object"==typeof e}function v(e){return"symbol"==typeof e||p(e)&&"[object Symbol]"==f(e)}var g=/\s/;var m=/^\s+/;function b(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&g.test(e.charAt(t)););return t}(e)+1).replace(m,""):e}function x(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var y=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,w=/^0o[0-7]+$/i,z=parseInt;function E(e){if("number"==typeof e)return e;if(v(e))return NaN;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=b(e);var n=k.test(e);return n||w.test(e)?z(e.slice(2),n?2:8):y.test(e)?NaN:+e}var Z=function(){return r.Date.now()},L=Math.max,C=Math.min;function A(e,t,n){var i,a,r,o,s,c,l=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,r=a;return i=a=void 0,l=t,o=e.apply(r,n)}function p(e){return l=e,s=setTimeout(g,t),u?f(e):o}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=r}function g(){var e=Z();if(v(e))return m(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?C(n,r-(e-l)):n}(e))}function m(e){return s=void 0,h&&i?f(e):(i=a=void 0,o)}function b(){var e=Z(),n=v(e);if(i=arguments,a=this,c=e,n){if(void 0===s)return p(c);if(d)return clearTimeout(s),s=setTimeout(g,t),f(c)}return void 0===s&&(s=setTimeout(g,t)),o}return t=E(t)||0,x(n)&&(u=!!n.leading,r=(d="maxWait"in n)?L(E(n.maxWait)||0,t):r,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=a=s=void 0},b.flush=function(){return void 0===s?o:m(Z())},b}},57601:function(e,t,n){n.d(t,{I:function(){return w},d:function(){return z}});var i=n(74165),a=n(4942),r=n(15671),o=n(43144),s=n(60136),c=n(29388),l=n(15861),u=n(70524),d=n(92358),h=n(72021),f=n(42482),p="flip-rtl",v={},g={},m={s:16,m:24,l:32};function b(e){var t=e.icon,n=e.scale,i=m[n],a=function(e){var t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){var i=/[a-z]/i;e=n.map((function(e,t){return e.replace(i,(function(e,n){return 0===t&&0===n?e:e.toUpperCase()}))})).join("")}return t?"i".concat(e):e}(t),r="F"===a.charAt(a.length-1),o=r?a.substring(0,a.length-1):a;return"".concat(o).concat(i).concat(r?"F":"")}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,l.Z)((0,i.Z)().mark((function e(t){var n,a,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=b(t),!(a=k(n))){e.next=4;break}return e.abrupt("return",a);case 4:return g[n]||(g[n]=fetch((0,u.K3)("./assets/icon/".concat(n,".json"))).then((function(e){return e.json()})).catch((function(){return console.error('"'.concat(n,'" is not a valid calcite-ui-icon name')),""}))),e.next=7,g[n];case 7:return r=e.sent,v[n]=r,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return v[e]}var w=(0,u.GH)(function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;return(0,r.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.icon=null,e.flipRtl=!1,e.scale="m",e.textLabel=void 0,e.pathData=void 0,e.visible=!1,e}return(0,o.Z)(n,[{key:"connectedCallback",value:function(){var e=this;this.visible||this.waitUntilVisible((function(){e.visible=!0,e.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}},{key:"render",value:function(){var e,t=this.el,n=this.flipRtl,i=this.pathData,r=this.scale,o=this.textLabel,s=(0,d.a)(t),c=m[r],l=!!o,h=[].concat(i||"");return(0,u.h)(u.AA,{key:"41c9d3006a5887061fdb2144102447b2f490eb72","aria-hidden":(0,d.t)(!l),"aria-label":l?o:null,role:l?"img":null},(0,u.h)("svg",{key:"9fc84ba4eac40fc822babbfe276b2add5ee1c952","aria-hidden":"true",class:(e={},(0,a.Z)(e,p,"rtl"===s&&n),(0,a.Z)(e,"svg",!0),e),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(c," ").concat(c),width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map((function(e){return"string"===typeof e?(0,u.h)("path",{d:e}):(0,u.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){var t,n,a,r,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.icon,n=this.scale,a=this.visible,(0,f.i)()&&t&&a){e.next=3;break}return e.abrupt("return");case 3:if(r={icon:t,scale:n},e.t0=k(b(r)),e.t0){e.next=9;break}return e.next=8,x(r);case 8:e.t0=e.sent;case 9:if(o=e.t0,t===this.icon){e.next=12;break}return e.abrupt("return");case 12:this.pathData=o;case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(e){var t=this;this.intersectionObserver=(0,h.c)("intersection",(function(n){n.forEach((function(n){n.isIntersecting&&(t.intersectionObserver.disconnect(),t.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return":host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(u.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function z(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(e){if("calcite-icon"===e)customElements.get(e)||customElements.define(e,w)}))}}z()},18077:function(e,t,n){n.d(t,{I:function(){return d},d:function(){return h}});var i=n(15671),a=n(43144),r=n(60136),o=n(29388),s=n(70524),c=n(92358),l=n(57601),u={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"},d=(0,s.GH)(function(e){(0,r.Z)(n,e);var t=(0,o.Z)(n);function n(){var e;return(0,i.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.icon=void 0,e.iconFlipRtl=!1,e.scale="m",e.status="idle",e}return(0,a.Z)(n,[{key:"handleIconEl",value:function(){this.requestedIcon=(0,c.o)(u,this.icon,this.status)}},{key:"connectedCallback",value:function(){this.requestedIcon=(0,c.o)(u,this.icon,this.status)}},{key:"render",value:function(){var e=this.el.hidden;return(0,s.h)(s.AA,{key:"4abc6b1bd6e85531a00bd92de1c18c6b9c27375b","calcite-hydrated-hidden":e},this.renderIcon(this.requestedIcon),(0,s.h)("slot",{key:"f357f91ba9e220ea524c4aa14bf2b0c09b1c7064"}))}},{key:"renderIcon",value:function(e){if(e)return(0,s.h)("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:e,scale:"s"})}},{key:"el",get:function(){return this}}],[{key:"watchers",get:function(){return{status:["handleIconEl"],icon:["handleIconEl"]}}},{key:"style",get:function(){return":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}"}}]),n}(s.mv),[1,"calcite-input-message",{icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],status:[513]},void 0,{status:["handleIconEl"],icon:["handleIconEl"]}]);function h(){if("undefined"!==typeof customElements){["calcite-input-message","calcite-icon"].forEach((function(e){switch(e){case"calcite-input-message":customElements.get(e)||customElements.define(e,d);break;case"calcite-icon":customElements.get(e)||(0,l.d)()}}))}}h()},38906:function(e,t,n){n.d(t,{s:function(){return s}});var i=["date","datetime-local","month","number","range","time","week"],a=["email","password","search","tel","text","url"],r=["email","password","search","tel","text","textarea","url"];function o(e,t,n,i){var a=n.toLowerCase(),r=e[n];i&&null!=r?t.setAttribute(a,"".concat(r)):t.removeAttribute(a)}function s(e,t,n){n.type="textarea"===e?"text":e;var s=i.includes(e),c=t;o(c,n,"min",s),o(c,n,"max",s),o(c,n,"step",s);var l=r.includes(e),u=t;o(u,n,"minLength",l),o(u,n,"maxLength",l),o(u,n,"pattern",a.includes(e))}},52655:function(e,t,n){n.d(t,{c:function(){return k},d:function(){return w},s:function(){return v},u:function(){return x}});var i=n(74165),a=n(1413),r=n(15861),o=n(70524),s=n(46895),c=n(42482),l={};function u(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((0,i.Z)().mark((function e(t,n){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="".concat(n,"_").concat(t),!l[a]){e.next=3;break}return e.abrupt("return",l[a]);case 3:return l[a]=fetch((0,o.K3)("./assets/".concat(n,"/t9n/messages_").concat(t,".json"))).then((function(e){return e.ok||h(),e.json()})).catch((function(){return h()})),e.abrupt("return",l[a]);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){throw new Error("could not fetch component message bundle")}function f(e){e.messages=(0,a.Z)((0,a.Z)({},e.defaultMessages),e.messageOverrides)}function p(){}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)((0,i.Z)().mark((function e(t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,t.effectiveLocale);case 2:t.defaultMessages=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)((0,i.Z)().mark((function e(t,n){var a,r,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,c.i)()){e.next=2;break}return e.abrupt("return",{});case 2:return a=t.el,r=a.tagName.toLowerCase(),o=r.replace("calcite-",""),e.abrupt("return",u((0,s.g)(n,"t9n"),o));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)((0,i.Z)().mark((function e(t,n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t,n);case 2:t.defaultMessages=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){e.onMessagesChange=z}function w(e){e.onMessagesChange=p}function z(){f(this)}},541:function(e,t,n){n.d(t,{t:function(){return a}});var i=n(76652);function a(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return(0,i.i)(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),(0,i.d)(e,t,{leading:a,maxWait:t,trailing:r})}}}]);
//# sourceMappingURL=36127.22d52275.chunk.js.map