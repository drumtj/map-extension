!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e().default:"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Mapx=e().default:t.Mapx=e().default}("undefined"!=typeof self?self:this,function(){return window.Mapx=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,u=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function l(t){var e="function"==typeof Map?new Map:void 0;return(l=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return c(t,arguments,y(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,t)})(t)}function c(t,e,r){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&s(o,r.prototype),o}).apply(null,arguments)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}r.r(e),r.d(e,"default",function(){return p});var p=function(t){function e(t){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=a(this,y(e).call(this))).index=0,Array.isArray(t)?Array.isArray(t[0])?r.setArray2D(t):r.setArray1D(t):"object"===u(t)&&r.setObject(t),r}var r,c,p;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,l(Map)),r=e,(c=[{key:"setArray1D",value:function(t){for(var e=[],r=0;r<t.length;r++){var n=this.getIndex();this.set(n,t[r]),e.push(n)}return e}},{key:"setArray2D",value:function(t){for(var e,r=[],n=0;n<t.length;n++)Array.isArray(t[n])?(r.push(t[n][0]),this.set(t[n][0],t[n][1])):(e=this.getIndex(),r.push(e),this.set(e,t[n]));return r}},{key:"setObject",value:function(t){var e=[];for(var r in t)e.push(r),this.set(r,t[r]);return e}},{key:"toArray",value:function(){return o(this)}},{key:"toObject",value:function(){var t={},e=!0,r=!1,o=void 0;try{for(var u,i=this.entries()[Symbol.iterator]();!(e=(u=i.next()).done);e=!0){var a=n(u.value,2),f=a[0],l=a[1];"string"!=typeof f&&"number"!=typeof f||(t[f]=l)}}catch(t){r=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw o}}return t}},{key:"mapToArray",value:function(t){return this.toArray().map(function(e,r,n){return t(e[1],e[0],n)})}},{key:"clone",value:function(){return new e(this.toArray())}},{key:"map",value:function(t){var e=this.clone(),r=!0,o=!1,u=void 0;try{for(var i,a=this.entries()[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var f=n(i.value,2),l=f[0],c=f[1];e.set(l,t(c,l,e))}}catch(t){o=!0,u=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}},{key:"filterToArray",value:function(t){return this.toArray().filter(function(e,r,n){return t(e[1],e[0],n)})}},{key:"filter",value:function(t){var e=this.clone(),r=!0,o=!1,u=void 0;try{for(var i,a=this.entries()[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var f=n(i.value,2),l=f[0];t(f[1],l,e)||e.delete(l)}}catch(t){o=!0,u=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}},{key:"reduce",value:function(t,e){return this.toArray().reduce(function(e,r,n,o){return t(e,r[1],r[0],o)},e)}},{key:"getIndex",value:function(){for(var t;t="__"+this.index.toString(32),this.has(t);)this.index+=10;return t}},{key:"updateIndex",value:function(){this.index++}},{key:"set",value:function(t,r){return f(y(e.prototype),"set",this).call(this,t,r),this.updateIndex(),this}},{key:"getFirstItem",value:function(){return this.entries().next().value}},{key:"getLastItem",value:function(){var t=0;if(!this.size)return[];var e=!0,r=!1,n=void 0;try{for(var o,u=this.entries()[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var i=o.value;if(++t>=this.size)return i}}catch(t){r=!0,n=t}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}}},{key:"push",value:function(t){var e=this.getIndex();return this.set(e,t),e}},{key:"pop",value:function(){var t=this.getLastItem();return t?(this.delete(t[0]),t[1]):null}},{key:"shift",value:function(){var t=this.getFirstItem();return t?(this.delete(t[0]),t[1]):null}},{key:"toValues",value:function(){return o(this.values())}},{key:"toKeys",value:function(){return o(this.keys())}},{key:"indexOf",value:function(t){var e=!0,r=!1,n=void 0;try{for(var o,u=this.entries()[Symbol.iterator]();!(e=(o=u.next()).done);e=!0){var i=o.value;if(i[1]===t)return i[0]}}catch(t){r=!0,n=t}finally{try{e||null==u.return||u.return()}finally{if(r)throw n}}return null}},{key:"length",get:function(){return this.size},set:function(t){var e=this,r=0;this.forEach(function(n,o){r++>=t&&e.delete(o)})}}])&&i(r.prototype,c),p&&i(r,p),e}()}])});
//# sourceMappingURL=mapx.js.map