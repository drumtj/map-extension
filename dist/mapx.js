!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Mapx=e():t.Mapx=e().default}("undefined"!=typeof self?self:this,function(){return window.Mapx=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var n,o,u=r(2),i=r(3),a=0,f=0;t.exports=function(t,e,r){var l=e&&r||0,c=e||[],y=(t=t||{}).node||n,s=void 0!==t.clockseq?t.clockseq:o;if(null==y||null==s){var p=u();null==y&&(y=n=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==s&&(s=o=16383&(p[6]<<8|p[7]))}var v=void 0!==t.msecs?t.msecs:(new Date).getTime(),d=void 0!==t.nsecs?t.nsecs:f+1,h=v-a+(d-f)/1e4;if(h<0&&void 0===t.clockseq&&(s=s+1&16383),(h<0||v>a)&&void 0===t.nsecs&&(d=0),d>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=v,f=d,o=s;var b=(1e4*(268435455&(v+=122192928e5))+d)%4294967296;c[l++]=b>>>24&255,c[l++]=b>>>16&255,c[l++]=b>>>8&255,c[l++]=255&b;var m=v/4294967296*1e4&268435455;c[l++]=m>>>8&255,c[l++]=255&m,c[l++]=m>>>24&15|16,c[l++]=m>>>16&255,c[l++]=s>>>8|128,c[l++]=255&s;for(var w=0;w<6;++w)c[l+w]=y[w];return e||i(c)}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return p});var n=r(0),o=r.n(n);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return c(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),y(n,t)})(t)}function c(t,e,r){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&y(o,r.prototype),o}).apply(null,arguments)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=f(this,s(e).call(this)),Array.isArray(t)?t[0].length>1?r.setArray2D(t):r.setArray1D(t):"object"===i(t)&&r.setObject(t),r}var r,n,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,l(Map)),r=e,(n=[{key:"setArray1D",value:function(t){for(var e=0;e<t.length;e++)this.set(e,t[e]);return this}},{key:"setArray2D",value:function(t){for(var e=0;e<t.length;e++)this.set(t[e][0],t[e][1]);return this}},{key:"setObject",value:function(t){for(var e in t)this.set(e,t[e]);return this}},{key:"toArray",value:function(){var t=[],e=!0,r=!1,n=void 0;try{for(var o,i=this.entries()[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=u(o.value,2),f=a[0],l=a[1];t.push([f,l])}}catch(t){r=!0,n=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}return t}},{key:"toObject",value:function(){var t={},e=!0,r=!1,n=void 0;try{for(var o,i=this.entries()[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=u(o.value,2),f=a[0],l=a[1];"string"!=typeof f&&"number"!=typeof f||(t[f]=l)}}catch(t){r=!0,n=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw n}}return t}},{key:"mapToArray",value:function(t){return this.toArray().map(function(e,r,n){return t(e[1],e[0],n)})}},{key:"clone",value:function(){return new e(this.toArray())}},{key:"map",value:function(t){var e=this.clone(),r=!0,n=!1,o=void 0;try{for(var i,a=this.entries()[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var f=u(i.value,2),l=f[0],c=f[1];e.set(l,t(c,l,e))}}catch(t){n=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return e}},{key:"filterToArray",value:function(t){return this.toArray().filter(function(e,r,n){return t(e[1],e[0],n)})}},{key:"filter",value:function(t){var e=this.clone(),r=!0,n=!1,o=void 0;try{for(var i,a=this.entries()[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var f=u(i.value,2),l=f[0];t(f[1],l,e)||e.delete(l)}}catch(t){n=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return e}},{key:"reduce",value:function(t,e){return this.toArray().reduce(function(e,r,n,o){return t(e,r[1],r[0],o)},e)}},{key:"push",value:function(t){var e=o()();return this.set(e,t),e}},{key:"pop",value:function(){var t=0;if(this.size){var e=!0,r=!1,n=void 0;try{for(var o,u=this.entries()[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var i=o.value;if(++t>=this.size)return this.delete(i[0]),i[1]}}catch(t){r=!0,n=t}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}}}},{key:"toValues",value:function(){var t=[],e=!0,r=!1,n=void 0;try{for(var o,u=this.values()[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var i=o.value;t.push(i)}}catch(t){r=!0,n=t}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}return t}},{key:"toKeys",value:function(){var t=[],e=!0,r=!1,n=void 0;try{for(var o,u=this.keys()[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var i=o.value;t.push(i)}}catch(t){r=!0,n=t}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}return t}},{key:"length",get:function(){return this.size},set:function(t){var e=this,r=0;this.forEach(function(n,o){r++>=t&&e.delete(o)})}}])&&a(r.prototype,n),c&&a(r,c),e}()},function(t,e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);t.exports=function(){return r(n),n}}else{var o=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),o[e]=t>>>((3&e)<<3)&255;return o}}},function(t,e){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);t.exports=function(t,e){var n=e||0,o=r;return[o[t[n++]],o[t[n++]],o[t[n++]],o[t[n++]],"-",o[t[n++]],o[t[n++]],"-",o[t[n++]],o[t[n++]],"-",o[t[n++]],o[t[n++]],"-",o[t[n++]],o[t[n++]],o[t[n++]],o[t[n++]],o[t[n++]],o[t[n++]]].join("")}}])});
//# sourceMappingURL=mapx.js.map