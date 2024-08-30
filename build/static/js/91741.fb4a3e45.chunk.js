/*! For license information please see 91741.fb4a3e45.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[91741],{6814:function(n,e,t){t.r(e),t.d(e,{CalciteAction:function(){return u},defineCustomElement:function(){return i}});var r=t(65138),u=r.A,i=r.d},64044:function(n,e,t){t.d(e,{c:function(){return c},g:function(){return i}});var r=t(74165),u=t(15861);function i(n){return"l"===n?"m":"s"}function c(n){return a.apply(this,arguments)}function a(){return(a=(0,u.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o(e)?e.componentOnReady():new Promise((function(n){return requestAnimationFrame((function(){return n()}))}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function o(n){return"function"===typeof n.componentOnReady}},13160:function(n,e,t){t.d(e,{I:function(){return y},c:function(){return w},d:function(){return k},u:function(){return v}});var r=t(93433),u=t(37762),i=t(70524),c=t(42482),a=/firefox/i.test((0,c.g)()),o=a?new WeakMap:null;function s(){this.disabled||HTMLElement.prototype.click.call(this)}function f(n){var e=n.target;a&&!o.get(e)||e.disabled&&n.preventDefault()}var l=["mousedown","mouseup","click"];function p(n){var e=n.target;a&&!o.get(e)||e.disabled&&(n.stopImmediatePropagation(),n.preventDefault())}var d={capture:!0};function v(n){if(n.disabled)return n.el.setAttribute("aria-disabled","true"),n.el.contains(document.activeElement)&&document.activeElement.blur(),void h(n);b(n),n.el.removeAttribute("aria-disabled")}function h(n){if(n.el.click=s,a){var e=function(n){return n.el.parentElement||n.el}(n),t=o.get(n.el);return t!==e&&(g(t),o.set(n.el,e)),void m(o.get(n.el))}m(n.el)}function m(n){n&&(n.addEventListener("pointerdown",f,d),l.forEach((function(e){return n.addEventListener(e,p,d)})))}function b(n){if(delete n.el.click,a){var e=o.get(n.el),t=!1;if(null!==e&&void 0!==e&&e.children){var r,i=(0,u.Z)(e.children);try{for(i.s();!(r=i.n()).done;){var c=r.value;if("disabled"in c&&c.disabled&&c!==n.el){t=!0;break}}}catch(s){i.e(s)}finally{i.f()}}return t||g(e),void o.delete(n.el)}g(n.el)}function g(n){n&&(n.removeEventListener("pointerdown",f,d),l.forEach((function(e){return n.removeEventListener(e,p,d)})))}function w(n){n.disabled&&a&&h(n)}function k(n){a&&b(n)}var Z={container:"interaction-container"},y=function(n,e){var t=n.disabled;return i.h.apply(void 0,["div",{class:Z.container,inert:t}].concat((0,r.Z)(e)))}},47242:function(n,e,t){t.d(e,{a:function(){return f},b:function(){return l},c:function(){return p},s:function(){return s}});var r=t(74165),u=t(15861),i=t(70524),c=t(42482),a=new WeakMap,o=new WeakMap;function s(n){o.set(n,new Promise((function(e){return a.set(n,e)})))}function f(n){a.get(n)()}function l(n){return o.get(n)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,u.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(e);case 2:if((0,c.i)()){n.next=4;break}return n.abrupt("return");case 4:return(0,i.xE)(e),n.abrupt("return",new Promise((function(n){return requestAnimationFrame((function(){return n()}))})));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},52655:function(n,e,t){t.d(e,{c:function(){return Z},d:function(){return y},s:function(){return h},u:function(){return w}});var r=t(74165),u=t(1413),i=t(15861),c=t(70524),a=t(46895),o=t(42482),s={};function f(n,e){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)((0,r.Z)().mark((function n(e,t){var u;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(u="".concat(t,"_").concat(e),!s[u]){n.next=3;break}return n.abrupt("return",s[u]);case 3:return s[u]=fetch((0,c.K3)("./assets/".concat(t,"/t9n/messages_").concat(e,".json"))).then((function(n){return n.ok||p(),n.json()})).catch((function(){return p()})),n.abrupt("return",s[u]);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){throw new Error("could not fetch component message bundle")}function d(n){n.messages=(0,u.Z)((0,u.Z)({},n.defaultMessages),n.messageOverrides)}function v(){}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,r.Z)().mark((function n(e){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(e,e.effectiveLocale);case 2:e.defaultMessages=n.sent,d(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n,e){return g.apply(this,arguments)}function g(){return(g=(0,i.Z)((0,r.Z)().mark((function n(e,t){var u,i,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((0,o.i)()){n.next=2;break}return n.abrupt("return",{});case 2:return u=e.el,i=u.tagName.toLowerCase(),c=i.replace("calcite-",""),n.abrupt("return",f((0,a.g)(t,"t9n"),c));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,e){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,r.Z)().mark((function n(e,t){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(e,t);case 2:e.defaultMessages=n.sent,d(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){n.onMessagesChange=x}function y(n){n.onMessagesChange=v}function x(){d(this)}}}]);
//# sourceMappingURL=91741.fb4a3e45.chunk.js.map