/*! For license information please see 46895.9ccf6b42.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_training=self.webpackChunkreact_training||[]).push([[46895],{19579:function(t,n,e){function r(t){return"Enter"===t||" "===t}e.d(n,{i:function(){return r},n:function(){return i}});var i=["0","1","2","3","4","5","6","7","8","9"]},46895:function(t,n,e){e.d(n,{B:function(){return g},a:function(){return I},b:function(){return j},c:function(){return Z},d:function(){return z},e:function(){return B},f:function(){return D},g:function(){return A},i:function(){return m},n:function(){return x},p:function(){return h},s:function(){return _}});var r=e(93433),i=e(29439),a=e(15671),u=e(43144),c=e(92358),o=e(19579),s=e(72021),l=new RegExp("\\".concat(".","(0+)?$")),f=new RegExp("0+$"),g=function(){function t(n){if((0,a.Z)(this,t),n instanceof t)return n;var e=function(t){var n=t.split(/[eE]/);if(1===n.length)return t;var e=+t;if(Number.isSafeInteger(e))return"".concat(e);var r="-"===t.charAt(0),i=+n[1],a=n[0].split("."),u=(r?a[0].substring(1):a[0])||"",c=a[1]||"",o=function(t,n){var e=Math.abs(n)-t.length,r=e>0?"".concat("0".repeat(e)).concat(t):t;return"".concat(r.slice(0,n),".").concat(r.slice(n))},s=function(t,n){var e=n>t.length?"".concat(t).concat("0".repeat(n-t.length)):t;return"".concat(e.slice(0,n),".").concat(e.slice(n))},f=i>0?"".concat(u).concat(s(c,i)):"".concat(o(u,i)).concat(c);return"".concat(r?"-":"").concat("."===f.charAt(0)?"0":"").concat(f.replace(l,"").replace(v,""))}(n).split(".").concat(""),r=(0,i.Z)(e,2),u=r[0],c=r[1];this.value=BigInt(u+c.padEnd(t.DECIMALS,"0").slice(0,t.DECIMALS))+BigInt(t.ROUNDED&&c[t.DECIMALS]>="5"),this.isNegative="-"===n.charAt(0)}return(0,u.Z)(t,[{key:"getIntegersAndDecimals",value:function(){var n=this.value.toString().replace("-","").padStart(t.DECIMALS+1,"0");return{integers:n.slice(0,-t.DECIMALS),decimals:n.slice(-t.DECIMALS).replace(f,"")}}},{key:"toString",value:function(){var t=this.getIntegersAndDecimals(),n=t.integers,e=t.decimals;return"".concat(this.isNegative?"-":"").concat(n).concat(e.length?"."+e:"")}},{key:"formatToParts",value:function(t){var n=this.getIntegersAndDecimals(),e=n.integers,r=n.decimals,i=t.numberFormatter.formatToParts(BigInt(e));return this.isNegative&&i.unshift({type:"minusSign",value:t.minusSign}),r.length&&(i.push({type:"decimal",value:t.decimal}),r.split("").forEach((function(t){return i.push({type:"fraction",value:t})}))),i}},{key:"format",value:function(t){var n=this.getIntegersAndDecimals(),e=n.integers,r=n.decimals,i="".concat(this.isNegative?t.minusSign:"").concat(t.numberFormatter.format(BigInt(e))),a=r.length?"".concat(t.decimal).concat(r.split("").map((function(n){return t.numberFormatter.format(Number(n))})).join("")):"";return"".concat(i).concat(a)}},{key:"add",value:function(n){return t.fromBigInt(this.value+new t(n).value)}},{key:"subtract",value:function(n){return t.fromBigInt(this.value-new t(n).value)}},{key:"multiply",value:function(n){return t._divRound(this.value*new t(n).value,t.SHIFT)}},{key:"divide",value:function(n){return t._divRound(this.value*t.SHIFT,new t(n).value)}}]),t}();function m(t){return!(!t||isNaN(Number(t)))}function h(t){return t&&(n=t,o.n.some((function(t){return n.includes(t)})))?w(t,(function(t){var n=!1,e=t.split("").filter((function(t,e){return t.match(/\./g)&&!n?(n=!0,!0):!(!t.match(/-/g)||0!==e)||o.n.includes(t)})).join("");return m(e)?new g(e).toString():""})):"";var n}g.DECIMALS=100,g.ROUNDED=!0,g.SHIFT=BigInt("1"+"0".repeat(g.DECIMALS)),g._divRound=function(t,n){return g.fromBigInt(t/n+(g.ROUNDED?t*BigInt(2)/n%BigInt(2):BigInt(0)))},g.fromBigInt=function(t){return Object.assign(Object.create(g.prototype),{value:t,isNegative:t<BigInt(0)})};var v=/^([-0])0+(?=\d)/,p=/(?!^\.)\.$/,d=/(?!^-)-/g,b=/^-\b0\b\.?0*$/,y=/0*$/,_=function(t){return w(t,(function(t){var n=t.replace(d,"").replace(p,"").replace(v,"$1");return m(n)?b.test(n)?n:function(t){var n=t.split(".")[1],e=new g(t).toString(),r=e.split("."),a=(0,i.Z)(r,2),u=a[0],c=a[1];return n&&c!==n?"".concat(u,".").concat(n):e}(n):t}))};function w(t,n){if(!t)return t;var e=t.toLowerCase().indexOf("e")+1;return e?t.replace(/[eE]*$/g,"").substring(0,e).concat(t.slice(e).replace(/[eE]/g,"")).split(/[eE]/).map((function(t,e){return n(1===e?t.replace(/\./g,""):t)})).join("e").replace(/^e/,"1e"):n(t)}function I(t,n,e){var r=n.split(".")[1];if(r){var i=r.match(y)[0];if(i&&e.delocalize(t).length!==n.length&&-1===r.indexOf("e")){var a=e.decimal;return(t=t.includes(a)?t:"".concat(t).concat(a)).padEnd(t.length+i.length,e.localize("0"))}}return t}var E="en",S=["ar","bg","bs","ca","cs","da","de","el",E,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],k=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",E,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],F=["arab","arabext","latn"],O=function(t){return F.includes(t)},C=(new Intl.NumberFormat).resolvedOptions().numberingSystem,N="arab"!==C&&O(C)?C:"latn",D=function(t){return O(t)?t:N};function A(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cldr",e="cldr"===n?k:S;return t?e.includes(t)?t:"nb"===(t=t.toLowerCase())?"no":"t9n"===n&&"pt"===t?"pt-BR":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,(function(t,n,e){return"".concat(n,"-").concat(e.toUpperCase())})),e.includes(t)||(t=t.split("-")[0])),"zh"===t?"zh-CN":e.includes(t)?t:(console.warn('Translations for the "'.concat(t,'" locale are not available and will fall back to the default, English (en).')),E)):E}function B(t){switch(t){case"it-CH":return"de-CH";case"bs":return"bs-Cyrl";default:return t}}var R=new Set;function Z(t){!function(t){t.effectiveLocale=function(t){var n;return t.el.lang||(null===(n=(0,c.c)(t.el,"[lang]"))||void 0===n?void 0:n.lang)||document.documentElement.lang||E}(t)}(t),0===R.size&&(null===L||void 0===L||L.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0})),R.add(t)}function z(t){R.delete(t),0===R.size&&L.disconnect()}var L=(0,s.c)("mutation",(function(t){t.forEach((function(t){var n=t.target;R.forEach((function(t){if(!!(0,c.b)(n,t.el)){var e=(0,c.c)(t.el,"[lang]");if(e){var r=e.lang;t.effectiveLocale=e.hasAttribute("lang")&&""===r?E:r}else t.effectiveLocale=E}}))}))}));var M,T,x=new(function(){function t(){var n=this;(0,a.Z)(this,t),this.delocalize=function(t){return n._numberFormatOptions?w(t,(function(t){return t.replace(new RegExp("[".concat(n._minusSign,"]"),"g"),"-").replace(new RegExp("[".concat(n._group,"]"),"g"),"").replace(new RegExp("[".concat(n._decimal,"]"),"g"),".").replace(new RegExp("[".concat(n._digits.join(""),"]"),"g"),n._getDigitIndex)})):t},this.localize=function(t){return n._numberFormatOptions?w(t,(function(t){return m(t.trim())?new g(t.trim()).format(n).replace(new RegExp("[".concat(n._actualGroup,"]"),"g"),n._group):t})):t}}return(0,u.Z)(t,[{key:"group",get:function(){return this._group}},{key:"decimal",get:function(){return this._decimal}},{key:"minusSign",get:function(){return this._minusSign}},{key:"digits",get:function(){return this._digits}},{key:"numberFormatter",get:function(){return this._numberFormatter}},{key:"numberFormatOptions",get:function(){return this._numberFormatOptions},set:function(t){if(t.locale=A(null===t||void 0===t?void 0:t.locale),t.numberingSystem=D(null===t||void 0===t?void 0:t.numberingSystem),(this._numberFormatOptions||t.locale!==E||t.numberingSystem!==N||2!==Object.keys(t).length)&&JSON.stringify(this._numberFormatOptions)!==JSON.stringify(t)){this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=(0,r.Z)(new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)).reverse();var n=new Map(this._digits.map((function(t,n){return[t,n]}))),e=new Intl.NumberFormat(this._numberFormatOptions.locale,{numberingSystem:this._numberFormatOptions.numberingSystem}).formatToParts(-12345678.9);this._actualGroup=e.find((function(t){return"group"===t.type})).value,this._group=0===this._actualGroup.trim().length||" "==this._actualGroup?"\xa0":this._actualGroup,this._decimal=e.find((function(t){return"decimal"===t.type})).value,this._minusSign=e.find((function(t){return"minusSign"===t.type})).value,this._getDigitIndex=function(t){return n.get(t)}}}}]),t}());function j(t,n){t=A(t),M||(M=new Map),T!==t&&(M.clear(),T=t);var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(t).sort((function(t,n){var e=(0,i.Z)(t,1)[0],r=(0,i.Z)(n,1)[0];return e.localeCompare(r)})).map((function(t){return"".concat(t[0],"-").concat(t[1])})).flat().join(":")}(n),r=M.get(e);if(r)return r;var a=new Intl.DateTimeFormat(t,n);return M.set(e,a),a}},72021:function(t,n,e){e.d(n,{c:function(){return l}});var r=e(15671),i=e(43144),a=e(88301),u=e(61120),c=e(60136),o=e(29388),s=e(42482);function l(t,n,e){if((0,s.i)()){var l=function(t){var n=function(t){(0,c.Z)(e,t);var n=(0,o.Z)(e);function e(t){var i;return(0,r.Z)(this,e),(i=n.call(this,t)).observedEntry=[],i.callback=t,i}return(0,i.Z)(e,[{key:"observe",value:function(t,n){return this.observedEntry.push({target:t,options:n}),(0,a.Z)((0,u.Z)(e.prototype),"observe",this).call(this,t,n)}},{key:"unobserve",value:function(t){var n=this,r=this.observedEntry.filter((function(n){return n.target!==t}));this.observedEntry=[],this.callback((0,a.Z)((0,u.Z)(e.prototype),"takeRecords",this).call(this),this),this.disconnect(),r.forEach((function(t){return n.observe(t.target,t.options)}))}}]),e}(window.MutationObserver);return"intersection"===t?window.IntersectionObserver:"mutation"===t?n:window.ResizeObserver}(t);return new l(n,e)}}}}]);
//# sourceMappingURL=46895.9ccf6b42.chunk.js.map