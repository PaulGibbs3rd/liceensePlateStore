/*! For license information please see 96683.55078798.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[96683],{31370:function(t,n,e){e.d(n,{e:function(){return a},i:function(){return c}});var r=new Set(["Europe","Asia","America","America/Argentina","Africa","Australia","Pacific","Atlantic","Antarctica","Arctic","Indian"]);function a(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.includes("Istanbul"))return"Europe";var e=n?"indexOf":"lastIndexOf",r=t[e]("/");return-1===r?t:t.slice(0,r)}function c(t){return r.has(t)}},96683:function(t,n,e){e.r(n),e.d(n,{groupByOffset:function(){return T}});var r=e(74165),a=e(37762),c=e(15861),i=e(93433),u=e(1413),o=e(64133),s=e(31370),f={groupDateRange:365,startDate:(new Date).toISOString()},l=function(t,n,e,r){var a=new Map,c=function(t,n,e){for(var r=[],a=e.create(t),c=0;c<=n;c++)a=e.increase(a),r.push(e.formatToIsoDateString(a));return r}(n,e,r);return t.map((function(t){var n=t.label,e=(0,s.e)(n),i=c.map((function(t){var e="".concat(t,"-").concat(n),c=a.get(e);return c||(c=r.isoToTimeZone(t,n),a.set(e,c),c)}));return(0,u.Z)((0,u.Z)({},t),{},{continent:e,isRegularContinent:(0,s.i)(e),dates:i})}))},p=function(t,n,e){return t.length===n.length&&t.every((function(t,r){return e.same(t,n[r])}))},E=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,e=t.filter((function(t){var n=t.label;return(0,s.i)((0,s.e)(n))}));if(0===e.length)return[0];var r=e.map((function(n){return t.indexOf(n)}));return v(r,n)};function v(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,e=t.length;if(e<=n)return t;var r=Math.min(e-2,n-2),a=(e-1)/(r+1);return[t[0]].concat((0,i.Z)(Array.from({length:r},(function(n,e){return t[Math.round((e+1)*a)]}))),[t[e-1]])}function T(t){return M.apply(this,arguments)}function M(){return M=(0,c.Z)((0,r.Z)().mark((function t(n){var e,c,i,s,v,T,M,d,h,G,g,b,m,Z,x,k,w,z,A,I,y,D;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(0,u.Z)((0,u.Z)({},f),n),c=e.groupDateRange,i=e.startDate,s=e.dateEngine,v=[],s){t.next=4;break}throw new Error("dateEngine is required");case 4:T=o.t.map((function(t){return{label:t}})),M=l(T,i,c,s),d=(0,a.Z)(M),t.prev=7,d.s();case 9:if((h=d.n()).done){t.next=21;break}if(G=h.value,g=G.label,b=G.continent,m=G.dates,!G.visited){t.next=14;break}return t.abrupt("continue",19);case 14:G.visited=!0,Z={labelIdx:[],tzs:[{label:g}]},x=(0,a.Z)(M.filter((function(t){return!t.visited})));try{for(x.s();!(k=x.n()).done;)w=k.value,z=w.label,A=w.continent,I=w.isRegularContinent,y=w.dates,b!==A&&I||!p(m,y,s)||(D={label:z},Z.tzs.push(D),w.visited=!0)}catch(r){x.e(r)}finally{x.f()}v.push(Z);case 19:t.next=9;break;case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(7),d.e(t.t0);case 26:return t.prev=26,d.f(),t.finish(26);case 29:return t.abrupt("return",v.map((function(t){return t.tzs=t.tzs.sort((function(t,n){return t.label.localeCompare(n.label)})),{labelTzIdx:E(t.tzs,7),tzs:t.tzs.map((function(t){return t.label}))}})).sort((function(t,n){return n.tzs.length-t.tzs.length})));case 30:case"end":return t.stop()}}),t,null,[[7,23,26,29]])}))),M.apply(this,arguments)}},64133:function(t,n,e){e.d(n,{t:function(){return a}});var r=e(93433),a=function(){var t=Intl.supportedValuesOf("timeZone");return(0,r.Z)(new Set([].concat((0,r.Z)(t),["Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9"])))}()}}]);
//# sourceMappingURL=96683.55078798.chunk.js.map