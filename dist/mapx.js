!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Mapx=e():t.Mapx=e().default}("undefined"!=typeof self?self:this,function(){return window.Mapx=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,u=void 0;try{for(var i,f=t[Symbol.iterator]();!(n=(i=f.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==f.return||f.return()}finally{if(o)throw u}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return a(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),c(n,t)})(t)}function a(t,e,r){return(a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&c(o,r.prototype),o}).apply(null,arguments)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.r(e),r.d(e,"default",function(){return y});var y=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=i(this,l(e).call(this)),Array.isArray(t)?t[0].length>1?r.setArray2D(t):r.setArray1D(t):"object"===o(t)&&r.setObject(t),r}var r,a,y;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(e,f(Map)),r=e,(a=[{key:"setArray1D",value:function(t){for(var e=0;e<t.length;e++)this.set(e,t[e]);return this}},{key:"setArray2D",value:function(t){for(var e=0;e<t.length;e++)this.set(t[e][0],t[e][1]);return this}},{key:"setObject",value:function(t){for(var e in t)this.set(e,t[e]);return this}},{key:"toArray",value:function(){var t=[],e=!0,r=!1,o=void 0;try{for(var u,i=this.entries()[Symbol.iterator]();!(e=(u=i.next()).done);e=!0){var f=n(u.value,2),a=f[0],c=f[1];t.push([a,c])}}catch(t){r=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw o}}return t}},{key:"toObject",value:function(){var t={},e=!0,r=!1,o=void 0;try{for(var u,i=this.entries()[Symbol.iterator]();!(e=(u=i.next()).done);e=!0){var f=n(u.value,2),a=f[0],c=f[1];"string"!=typeof a&&"number"!=typeof a||(t[a]=c)}}catch(t){r=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw o}}return t}},{key:"mapToArray",value:function(t){return this.toArray().map(function(e,r,n){return t(e[1],e[0],n)})}},{key:"clone",value:function(){return new e(this.toArray())}},{key:"map",value:function(t){var e=this.clone(),r=!0,o=!1,u=void 0;try{for(var i,f=this.entries()[Symbol.iterator]();!(r=(i=f.next()).done);r=!0){var a=n(i.value,2),c=a[0],l=a[1];e.set(c,t(l,c,e))}}catch(t){o=!0,u=t}finally{try{r||null==f.return||f.return()}finally{if(o)throw u}}return e}},{key:"filterToArray",value:function(t){return this.toArray().filter(function(e,r,n){return t(e[1],e[0],n)})}},{key:"filter",value:function(t){var e=this.clone(),r=!0,o=!1,u=void 0;try{for(var i,f=this.entries()[Symbol.iterator]();!(r=(i=f.next()).done);r=!0){var a=n(i.value,2),c=a[0];t(a[1],c,e)||e.delete(c)}}catch(t){o=!0,u=t}finally{try{r||null==f.return||f.return()}finally{if(o)throw u}}return e}},{key:"reduce",value:function(t,e){return this.toArray().reduce(function(e,r,n,o){return t(e,r[1],r[0],o)},e)}},{key:"length",get:function(){return this.size},set:function(t){var e=this,r=0;this.forEach(function(n,o){r++>=t&&e.delete(o)})}}])&&u(r.prototype,a),y&&u(r,y),e}()}])});
//# sourceMappingURL=mapx.js.map