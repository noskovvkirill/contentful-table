parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"craX":[function(require,module,exports) {
var define;
var e;parcelRequire=function(t,n,r,o){var i,a="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function s(e,r){if(!n[e]){if(!t[e]){var o="function"==typeof parcelRequire&&parcelRequire;if(!r&&o)return o(e,!0);if(a)return a(e,!0);if(u&&"string"==typeof e)return u(e);var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}l.resolve=function(n){return t[e][1][n]||n},l.cache={};var c=n[e]=new s.Module(e);t[e][0].call(c.exports,l,c,c.exports,this)}return n[e].exports;function l(e){return s(l.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=t,s.cache=n,s.parent=a,s.register=function(e,n){t[e]=[function(e,t){t.exports=n},{}]};for(var c=0;c<r.length;c++)try{s(r[c])}catch(t){i||(i=t)}if(r.length){var l=s(r[r.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof e&&e.amd?e(function(){return l}):this[o]=l}if(parcelRequire=s,i)throw i;return s}({pBGv:[function(e,t,n){var r,o,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(i){try{return r.call(null,e,0)}catch(i){return r.call(this,e,0)}}}function c(e){if(o===clearTimeout)return clearTimeout(e);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{return o(e)}catch(i){try{return o.call(null,e)}catch(i){return o.call(this,e)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(i){r=a}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(i){o=u}}();var l,f=[],p=!1,d=-1;function h(){p&&l&&(p=!1,l.length?f=l.concat(f):d=-1,f.length&&y())}function y(){if(!p){var e=s(h);p=!0;for(var t=f.length;t;){for(l=f,f=[];++d<t;)l&&l[d].run();d=-1,t=f.length}l=null,p=!1,c(e)}}function v(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new v(e,t)),1!==f.length||p||s(y)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],Zt7E:[function(e,t,n){arguments[3],e("process");var r=arguments[3],o=e("process");!function(e,r){"object"==typeof n&&void 0!==t?t.exports=r():e.ES6Promise=r()}(this,function(){"use strict";function t(e){return"function"==typeof e}var n=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,a=void 0,u=void 0,s=function(e,t){y[i]=e,y[i+1]=t,2===(i+=2)&&(u?u(v):w())},c="undefined"!=typeof window?window:void 0,l=c||{},f=l.MutationObserver||l.WebKitMutationObserver,p="undefined"==typeof self&&void 0!==o&&"[object process]"==={}.toString.call(o),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var e=setTimeout;return function(){return e(v,1)}}var y=new Array(1e3);function v(){for(var e=0;e<i;e+=2)(0,y[e])(y[e+1]),y[e]=void 0,y[e+1]=void 0;i=0}var g,b,m,_,w=void 0;function O(e,t){var n=this,r=new this.constructor(T);void 0===r[A]&&q(r);var o=n._state;if(o){var i=arguments[o-1];s(function(){return H(o,r,i,n._result)})}else M(n,r,e,t);return r}function E(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(T);return D(t,e),t}p?w=function(){return o.nextTick(v)}:f?(b=0,m=new f(v),_=document.createTextNode(""),m.observe(_,{characterData:!0}),w=function(){_.data=b=++b%2}):d?((g=new MessageChannel).port1.onmessage=v,w=function(){return g.port2.postMessage(0)}):w=void 0===c&&"function"==typeof e?function(){try{var e=Function("return this")().require("vertx");return void 0!==(a=e.runOnLoop||e.runOnContext)?function(){a(v)}:h()}catch(r){return h()}}():h();var A=Math.random().toString(36).substring(2);function T(){}var C=void 0,P=1,j=2,S={error:null};function I(e){try{return e.then}catch(r){return S.error=r,S}}function L(e,n,r){n.constructor===e.constructor&&r===O&&n.constructor.resolve===E?function(e,t){t._state===P?k(e,t._result):t._state===j?N(e,t._result):M(t,void 0,function(t){return D(e,t)},function(t){return N(e,t)})}(e,n):r===S?(N(e,S.error),S.error=null):void 0===r?k(e,n):t(r)?function(e,t,n){s(function(e){var r=!1,o=function(e,t,n,r){try{e.call(t,n,r)}catch(o){return o}}(n,t,function(n){r||(r=!0,t!==n?D(e,n):k(e,n))},function(t){r||(r=!0,N(e,t))},e._label);!r&&o&&(r=!0,N(e,o))},e)}(e,n,r):k(e,n)}function D(e,t){var n,r;e===t?N(e,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?k(e,t):L(e,t,I(t)))}function x(e){e._onerror&&e._onerror(e._result),R(e)}function k(e,t){e._state===C&&(e._result=t,e._state=P,0!==e._subscribers.length&&s(R,e))}function N(e,t){e._state===C&&(e._state=j,e._result=t,s(x,e))}function M(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+P]=n,o[i+j]=r,0===i&&e._state&&s(R,e)}function R(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)r=t[a],o=t[a+n],r?H(n,r,o,i):o(i);e._subscribers.length=0}}function H(e,n,r,o){var i=t(r),a=void 0,u=void 0,s=void 0,c=void 0;if(i){if((a=function(e,t){try{return e(t)}catch(n){return S.error=n,S}}(r,o))===S?(c=!0,u=a.error,a.error=null):s=!0,n===a)return void N(n,new TypeError("A promises callback cannot return that same promise."))}else a=o,s=!0;n._state!==C||(i&&s?D(n,a):c?N(n,u):e===P?k(n,a):e===j&&N(n,a))}var F=0;function q(e){e[A]=F++,e._state=void 0,e._result=void 0,e._subscribers=[]}var V=function(){function e(e,t){this._instanceConstructor=e,this.promise=new e(T),this.promise[A]||q(this.promise),n(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&k(this.promise,this._result))):N(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===C&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===E){var o=I(e);if(o===O&&e._state!==C)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===G){var i=new n(T);L(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===C&&(this._remaining--,e===j?N(r,n):this._result[t]=n),0===this._remaining&&k(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this;M(e,void 0,function(e){return n._settledAt(P,t,e)},function(e){return n._settledAt(j,t,e)})},e}(),G=function(){function e(t){this[A]=F++,this._result=this._state=void 0,this._subscribers=[],T!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){try{t(function(t){D(e,t)},function(t){N(e,t)})}catch(o){N(e,o)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(e){return this.then(null,e)},e.prototype.finally=function(e){var n=this.constructor;return t(e)?this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){throw t})}):this.then(e,e)},e}();return G.prototype.then=O,G.all=function(e){return new V(this,e).promise},G.race=function(e){var t=this;return n(e)?new t(function(n,r){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(n,r)}):new t(function(e,t){return t(new TypeError("You must pass an array to race."))})},G.resolve=E,G.reject=function(e){var t=new this(T);return N(t,e),t},G._setScheduler=function(e){u=e},G._setAsap=function(e){s=e},G._asap=s,G.polyfill=function(){var e=void 0;if(void 0!==r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(i){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(i){}if("[object Promise]"===n&&!t.cast)return}e.Promise=G},G.Promise=G,G})},{process:"pBGv"}],HrMX:[function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&function(e,t){(Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(e,t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var p=function(){function e(){c(this,e),this._id=0,this._listeners={}}return f(e,[{key:"dispatch",value:function(){for(var e in this._listeners){var t;(t=this._listeners)[e].apply(t,arguments)}}},{key:"attach",value:function(e){var t=this;if("function"!=typeof e)throw new Error("listener function expected");var n=this._id++;return this._listeners[n]=e,function(){return delete t._listeners[n]}}}]),e}(),d="__private__memoized__arguments__",h=function(e){function t(){var e;c(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];if(!r.length)throw new Error("Initial value to be memoized expected");return(e=i(this,u(t).call(this)))[d]=r,e}return s(t,p),f(t,[{key:"dispatch",value:function(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];this[d]=r,(e=a(u(t.prototype),"dispatch",this)).call.apply(e,[this].concat(r))}},{key:"attach",value:function(e){var n=a(u(t.prototype),"attach",this).call(this,e);return e.apply(void 0,o(this[d])),n}}]),t}();t.exports={Signal:p,MemoizedSignal:h}},{}],sCMk:[function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=e("es6-promise").Promise,u=e("./signal").Signal;t.exports=function(e,t){!function(e,t){e.addEventListener("message",function n(r){var o=r.data;"connect"===o.method&&(e.removeEventListener("message",n),t.apply(void 0,i(o.params)))})}(e,function(n,r){var o=new s(n.id,e);t(o,n,r)})};var s=function(){function e(t,n){var r=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._messageHandlers={},this._responseHandlers={},this._send=function(e,t){var n=0;return function(r,o){var i=n++;return t.postMessage({source:e,id:i,method:r,params:o},"*"),i}}(t,n.parent),n.addEventListener("message",function(e){r._handleMessage(e.data)})}return o(e,[{key:"call",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=this._send(e,r);return new a(function(e,n){t._responseHandlers[i]={resolve:e,reject:n}})}},{key:"send",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this._send(e,n)}},{key:"addHandler",value:function(e,t){return e in this._messageHandlers||(this._messageHandlers[e]=new u),this._messageHandlers[e].attach(t)}},{key:"_handleMessage",value:function(e){if(e.method){var t=e.method,n=e.params,r=this._messageHandlers[t];r&&r.dispatch.apply(r,i(n))}else{var o=e.id,a=this._responseHandlers[o];if(!a)return;"result"in e?a.resolve(e.result):"error"in e&&a.reject(e.error),delete this._responseHandlers[o]}}}]),e}()},{"es6-promise":"Zt7E","./signal":"HrMX"}],Mq5l:[function(e,t,n){var r=e("es6-promise").Promise,o=e("./channel");function i(){var e={};return e.promise=new r(function(t){e.resolve=t}),e}t.exports=function(e,t){var n=i(),r=i();return r.promise.then(function(t){var n=e.document;n.addEventListener("focus",function(){return t.send("setActive",!0)},!0),n.addEventListener("blur",function(){return t.send("setActive",!1)},!0)}),o(e,function(o,i,a){r.resolve(o);var u=t(o,i,e);a.forEach(function(e){o._handleMessage(e)}),n.resolve(u)}),function(e){n.promise.then(e)}}},{"es6-promise":"Zt7E","./channel":"sCMk"}],GnXy:[function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var i=e("./signal").MemoizedSignal,a=["id","locale","type","required","validations","items"];t.exports=function(){function e(t,n){var r=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),a.forEach(function(e){void 0!==n[e]&&(r[e]=n[e])}),this._value=n.value,this._valueSignal=new i(this._value),this._isDisabledSignal=new i(void 0),this._schemaErrorsChangedSignal=new i(void 0),this._channel=t,t.addHandler("valueChanged",function(e,t,n){e!==r.id||t&&t!==r.locale||(r._value=n,r._valueSignal.dispatch(n))}),t.addHandler("isDisabledChanged",function(e){r._isDisabledSignal.dispatch(e)}),t.addHandler("schemaErrorsChanged",function(e){r._schemaErrorsChangedSignal.dispatch(e)})}return o(e,[{key:"getValue",value:function(){return this._value}},{key:"setValue",value:function(e){return this._value=e,this._valueSignal.dispatch(e),this._channel.call("setValue",this.id,this.locale,e)}},{key:"removeValue",value:function(){return this._value=void 0,this._channel.call("removeValue",this.id,this.locale)}},{key:"setInvalid",value:function(e){return this._channel.call("setInvalid",e,this.locale)}},{key:"onValueChanged",value:function(e){return this._valueSignal.attach(e)}},{key:"onIsDisabledChanged",value:function(e){return this._isDisabledSignal.attach(e)}},{key:"onSchemaErrorsChanged",value:function(e){return this._schemaErrorsChangedSignal.attach(e)}}]),e}()},{"./signal":"HrMX"}],daBI:[function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=e("./field-locale"),s=["id","locales","type","required","validations","items"];function c(e,t){if(!e._fieldLocales[t])throw new Error('Unknown locale "'.concat(t,'" for field "').concat(e.id,'"'))}t.exports=function(){function e(t,n,r){var a=this;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),s.forEach(function(e){void 0!==n[e]&&(a[e]=n[e])}),this._defaultLocale=r,this._fieldLocales=n.locales.reduce(function(e,r){return o({},e,i({},r,new u(t,{id:n.id,locale:r,value:n.values[r]})))},{}),c(this,r)}return function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(e,[{key:"getValue",value:function(e){return this._getFieldLocale(e).getValue()}},{key:"setValue",value:function(e,t){return this._getFieldLocale(t).setValue(e)}},{key:"removeValue",value:function(e){return this.setValue(void 0,e)}},{key:"onValueChanged",value:function(e,t){return t||(t=e,e=void 0),this._getFieldLocale(e).onValueChanged(t)}},{key:"onIsDisabledChanged",value:function(e,t){return t||(t=e,e=void 0),this._getFieldLocale(e).onIsDisabledChanged(t)}},{key:"_getFieldLocale",value:function(e){return c(this,e=e||this._defaultLocale),this._fieldLocales[e]}}]),e}()},{"./field-locale":"GnXy"}],XV20:[function(e,t,n){t.exports=function(e,t){var n=e.document,r=e.MutationObserver,o=function(){s.updateHeight()},i=new r(o),a=null,u=!1,s={startAutoResizer:function(){s.updateHeight(),u||(u=!0,i.observe(n.body,{attributes:!0,childList:!0,subtree:!0,characterData:!0}),e.addEventListener("resize",o))},stopAutoResizer:function(){u&&(u=!1,i.disconnect(),e.removeEventListener("resize",o))},updateHeight:function(e){null==e&&(e=Math.ceil(n.documentElement.getBoundingClientRect().height)),e!==a&&(t.send("setHeight",e),a=e)}};return s}},{}],BZ3n:[function(e,t,n){var r=e("./signal").MemoizedSignal;t.exports=function(e,t,n,o){var i=t.sys,a=new r(i);return e.addHandler("sysChanged",function(e){i=e,a.dispatch(i)}),{getSys:function(){return i},onSysChanged:function(e){return a.attach(e)},fields:n.reduce(function(e,t){return e[t.id]=o(t),e},{})}}},{"./signal":"HrMX"}],iabO:[function(e,t,n){var r=["getContentType","getEntry","getEntrySnapshots","getAsset","getEditorInterface","getPublishedEntries","getPublishedAssets","getContentTypes","getEntries","getEditorInterfaces","getAssets","createContentType","createEntry","createAsset","updateContentType","updateEntry","updateAsset","deleteContentType","deleteEntry","deleteAsset","publishEntry","publishAsset","unpublishEntry","unpublishAsset","archiveEntry","archiveAsset","unarchiveEntry","unarchiveAsset","createUpload","processAsset","waitUntilAssetProcessed","getUsers"];t.exports=function(e){var t={};return r.forEach(function(n){t[n]=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.call("callSpaceMethod",n,r)}}),t}},{}],GEtI:[function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){return"object"===r(e)&&null!==e&&!Array.isArray(e)},i=function(e){return o(e)?e:{}};t.exports=function(e,t){return{openAlert:n.bind(null,"alert"),openConfirm:n.bind(null,"confirm"),openPrompt:n.bind(null,"prompt"),openExtension:function(n){if((n=i(n)).id=n.id||t.extension,n.id)return e.call("openDialog","extension",n);throw new Error("Extension ID not provided.")},openCurrentApp:function(n){if((n=i(n)).id=t.app,n.id)return e.call("openDialog","app",n);throw new Error("Not in the app context.")},selectSingleEntry:r.bind(null,"Entry",!1),selectSingleAsset:r.bind(null,"Asset",!1),selectMultipleEntries:r.bind(null,"Entry",!0),selectMultipleAssets:r.bind(null,"Asset",!0)};function n(t,n){return e.call("openDialog",t,i(n))}function r(t,n,r){return(r=i(r)).entityType=t,r.multiple=n,e.call("openDialog","entitySelector",r)}}},{}],fqJo:[function(e,t,n){var r=e("./signal").MemoizedSignal;t.exports=function(e,t){var n=new r(void 0),o=new r(void 0);return e.addHandler("localeSettingsChanged",function(e){n.dispatch(e)}),e.addHandler("showDisabledFieldsChanged",function(e){o.dispatch(e)}),{editorInterface:t,onLocaleSettingsChanged:function(e){return n.attach(e)},onShowDisabledFieldsChanged:function(e){return o.attach(e)}}}},{"./signal":"HrMX"}],Y2Q9:[function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.exports=function(e,t){return{openEntry:function(t,n){return e.call("navigateToContentEntity",o({},n,{entityType:"Entry",id:t}))},openNewEntry:function(t,n){return e.call("navigateToContentEntity",o({},n,{entityType:"Entry",id:null,contentTypeId:t}))},openAsset:function(t,n){return e.call("navigateToContentEntity",o({},n,{entityType:"Asset",id:t}))},openNewAsset:function(t){return e.call("navigateToContentEntity",o({},t,{entityType:"Asset",id:null}))},openPageExtension:function(n){return e.call("navigateToPageExtension",o({id:t},n))}}}},{}],A2T1:[function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i="preInstall",a="postInstall",u=function(e){return"object"===o(e)&&null!==e&&!Array.isArray(e)},s=function(e){return"function"==typeof e},c=function(e,t,n){if(!s(e))return Promise.resolve(t);var r;try{r=void 0===n?e():e(n)}catch(i){return Promise.resolve(!1)}var o=r;return function(e){return u(e)&&s(e.then)}(o)||(o=Promise.resolve(o)),o.then(function(e){return!(e instanceof Error||!1===e)&&(u(e)?e:t)},function(){return!1}).catch(function(){return!1})};t.exports=function(e){var t,n=(r(t={},i,null),r(t,a,null),t),o=function(e,t){if(n[e])throw new Error("Cannot register a handler twice.");if(!s(t))throw new Error("Handler must be a function.");n[e]=t};return e.addHandler("appHook",function(t){var r=t.stage,o=t.installationRequestId,u=t.err;return r===i?c(n[r],{}).then(function(t){return e.send("appHookResult",{stage:r,installationRequestId:o,result:t})}):r===a?c(n[r],void 0,u||null).then(function(){return e.send("appHookResult",{stage:r,installationRequestId:o})}):Promise.resolve()}),{setReady:function(){return e.call("callAppMethod","setReady")},isInstalled:function(){return e.call("callAppMethod","isInstalled")},getParameters:function(){return e.call("callAppMethod","getParameters")},getCurrentState:function(){return e.call("callAppMethod","getCurrentState")},onConfigure:function(e){o(i,e)},onConfigurationCompleted:function(e){o(a,e)}}}},{}],CHnp:[function(e,t,n){t.exports={LOCATION_ENTRY_FIELD:"entry-field",LOCATION_ENTRY_FIELD_SIDEBAR:"entry-field-sidebar",LOCATION_ENTRY_SIDEBAR:"entry-sidebar",LOCATION_DIALOG:"dialog",LOCATION_ENTRY_EDITOR:"entry-editor",LOCATION_PAGE:"page",LOCATION_APP:"app",LOCATION_APP_CONFIG:"app-config"}},{}],LVu9:[function(e,t,n){var r;function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=e("./field"),s=e("./field-locale"),c=e("./window"),l=e("./entry"),f=e("./space"),p=e("./dialogs"),d=e("./editor"),h=e("./navigator"),y=e("./app"),v=e("./locations"),g=[m,O,function(e,t){var n=t.field;return{field:new s(e,n)}},w,_],b=(a(r={},v.LOCATION_ENTRY_FIELD,g),a(r,v.LOCATION_ENTRY_FIELD_SIDEBAR,g),a(r,v.LOCATION_ENTRY_SIDEBAR,[m,O,w,_]),a(r,v.LOCATION_ENTRY_EDITOR,[m,O,w]),a(r,v.LOCATION_DIALOG,[m,function(e){return{close:function(t){return e.send("closeDialog",t)}}},_]),a(r,v.LOCATION_PAGE,[m]),a(r,v.LOCATION_APP,[m,E]),a(r,v.LOCATION_APP_CONFIG,[m,E]),r);function m(e,t){var n=t.user,r=t.parameters,o=t.locales,i=t.ids;return{location:{is:function(e){var n=t.location||v.LOCATION_ENTRY_FIELD;return n===v.LOCATION_APP&&(n=v.LOCATION_APP_CONFIG),e===v.LOCATION_APP&&(e=v.LOCATION_APP_CONFIG),n===e}},user:n,parameters:r,locales:{available:o.available,default:o.default,names:o.names,fallbacks:o.fallbacks,optional:o.optional,direction:o.direction},space:f(e),dialogs:p(e,i),navigator:h(e,i.extension),notifier:{success:function(t){return e.send("notify",{type:"success",message:t})},error:function(t){return e.send("notify",{type:"error",message:t})}},ids:i}}function _(e,t,n){return{window:c(n,e)}}function w(e,t){var n=t.editorInterface;return{editor:d(e,n)}}function O(e,t){var n=t.locales,r=t.contentType,o=t.entry,i=t.fieldInfo;return{contentType:r,entry:l(e,o,i,function(t){return new u(e,t,n.default)})}}function E(e){var t=y(e);return{app:t,platformAlpha:{app:t}}}t.exports=function(e,t,n){return(b[t.location]||g).reduce(function(r,o){return i({},r,{},o(e,t,n))},{})}},{"./field":"daBI","./field-locale":"GnXy","./window":"XV20","./entry":"BZ3n","./space":"iabO","./dialogs":"GEtI","./editor":"fqJo","./navigator":"Y2Q9","./app":"A2T1","./locations":"CHnp"}],Focm:[function(e,t,n){var r=e("./initialize"),o=e("./api"),i=e("./locations");t.exports={init:r(window,o),locations:i}},{"./initialize":"Mq5l","./api":"LVu9","./locations":"CHnp"}]},{},["Focm"],"contentfulExtension");
},{}],"BhWS":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function t(a){var r=this,l=a.table,n=a.state,o=a.db;e(this,t),this.save=function(){r.db.setValue(r.state)},this.valueChangeHandler=function(e){r.state=Object.assign({},r.state,e)},this.setUseHeader=function(e){r.state.useHeader=e,r.save(),r.handleHeaderStyle()},this.handleHeaderStyle=function(){var e=Array.from(r.table.rows[0].cells);r.state.useHeader?e.forEach(function(e){r.changeTag(e,"th",!0)}):e.forEach(function(e){r.changeTag(e,"td",!0)})},this.changeTag=function(e,t,a){for(var r=document.createElement(t);e.firstChild;)r.appendChild(e.firstChild);if(a)for(var l=e.attributes.length-1;l>=0;--l)r.attributes.setNamedItem(e.attributes[l].cloneNode());e.parentNode.replaceChild(r,e)},this.autoGrow=function(e){e.style.height="auto";var t=e.scrollHeight;e.style.height=t+"px";var a=e.dataset.row,r=document.querySelectorAll('[data-row="'.concat(a,'"]')),l=t;r.forEach(function(e){var t=e.style.height;e.style.height="auto";var a=e.scrollHeight;a>l&&(l=a),e.style.height=t}),r.forEach(function(e){e.style.height=l+"px"})},this.addCell=function(e,t,a){var l=e.insertCell(),n=document.createElement("textarea");n.oninput=function(){r.autoGrow(n),r.state.tableData[t][a]=n.value||void 0,r.save()},n.dataset.row=t.toString(),n.dataset.column=a.toString();var o=r.state.tableData,s=o&&o[t]&&o[t][a]||void 0;n.value=s||"",l.appendChild(n),r.autoGrow(n)},this.addRow=function(){var e,t=r.table.rows[r.table.rows.length-1];if(t){var a=t.querySelector("textarea");e=parseInt(a.dataset.row,10)+1}else e=0;for(var l=r.table.insertRow(),n=r.table.rows[0].cells.length||r.state.tableData[0].length,o=[],s=0;s<n;s++){o.push(void 0);var i=s;r.addCell(l,e,i)}r.state.tableData[e]||(r.state.tableData.push(o),r.save())},this.removeRow=function(){if(!(r.table.rows.length<=2)){for(var e=r.table.rows.length-1,t=!1,a="",l=r.table.rows[e].cells,n=0;n<l.length;n++){var o=l[n].querySelector("textarea");o.value&&(t=!0,a+="\n\n".concat(o.value))}var s=!t||window.confirm("Are you sure you want to delete row ".concat(e+1,"?").concat(a));return s&&(r.table.deleteRow(e),r.state.tableData.splice(e,1),r.save()),s}},this.addColumn=function(){var e=r.table.rows[0].cells[r.table.rows[0].cells.length-1].querySelector("textarea"),t=parseInt(e.dataset.column,10)+1;Array.from(r.table.rows).forEach(function(e,a){var l=e.cells[0].querySelector("textarea"),n=parseInt(l.dataset.row,10);r.addCell(e,n,t),r.state.tableData[a].push(void 0),r.save()}),r.handleHeaderStyle()},this.removeColumn=function(){if(!(r.table.rows[0].cells.length<=2)){for(var e=r.table.rows[0].cells[r.table.rows[0].cells.length-1].querySelector("textarea"),t=parseInt(e.dataset.column,10)+1,a=!1,l="",n=0;n<r.table.rows.length;n++){var o=r.table.rows[n],s=o.cells[o.cells.length-1].querySelector("textarea");s.value&&(a=!0,l+="\n\n".concat(s.value))}var i=!a||window.confirm("Are you sure you want to delete column ".concat(t,"?").concat(l));return i&&Array.from(r.table.rows).forEach(function(e,t){var a=e.cells.length-1;e.deleteCell(a),r.state.tableData[t].splice(a,1),r.save()}),i}},this.table=l,this.state=n,this.db=o;for(var s=0;s<this.state.tableData.length;s++)this.addRow();this.handleHeaderStyle(),this.detachValueChangeHandler=this.db.onValueChanged(this.valueChangeHandler)}return a(t,[{key:"currentState",get:function(){return this.state}},{key:"columns",get:function(){return this.state.tableData[0].length}},{key:"rows",get:function(){return this.state.tableData.length}},{key:"useHeader",get:function(){return this.state.useHeader}}]),t}();exports.default=r;
},{}],"zQTw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.minColumns=2,exports.minRows=2;var e=10,o=30,n=document.getElementById("columns-count"),t=document.getElementById("rows-count"),r=document.getElementById("use-header"),u=document.getElementById("add-column"),m=document.getElementById("remove-column"),a=document.getElementById("add-row"),i=document.getElementById("remove-row");n.min=exports.minColumns.toString(),n.max=e.toString(),t.min=exports.minRows.toString(),t.max=o.toString();var c=function(e,o,n){return Math.min(Math.max(e,o),n)},s=function(s){n.value=s.columns.toString(),t.value=s.rows.toString(),r.checked=s.useHeader,r.onchange=function(e){s.setUseHeader(e.currentTarget.checked)},n.onchange=function(o){var t=s.columns,r=c(parseInt(o.currentTarget.value,10),exports.minColumns,e),u=!0;if(t<r)for(var m=r-t,a=0;a<m;a++)s.addColumn();else if(t>r){var i=t-r;for(a=0;a<i;a++)u=s.removeColumn()}n.value=u?r.toString():t.toString()},t.onchange=function(e){var n=s.rows,r=c(parseInt(e.target.value,10),exports.minRows,o),u=!0;if(n<r)for(var m=r-n,a=0;a<m;a++)s.addRow();else if(n>r){var i=n-r;for(a=0;a<i;a++)u=s.removeRow()}t.value=u?r.toString():n.toString()},u.onclick=function(o){var t=s.columns,r=c(t+1,exports.minColumns,e);s.addColumn(),n.value=r.toString()},m.onclick=function(o){var t=s.columns,r=c(t-1,exports.minColumns,e);s.removeColumn()&&(n.value=r.toString())},a.onclick=function(e){var n=s.rows,r=c(n+1,exports.minRows,o);s.addRow(),t.value=r.toString()},i.onclick=function(e){var n=s.rows,r=c(n-1,exports.minRows,o);s.removeRow()&&(t.value=r.toString())}};exports.default=s;
},{}],"UnXq":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){try{return window.self!==window.top}catch(e){return!0}};exports.useContentfulApi=function(){return r()},exports.getInitialTableData=function(e){for(var t=e.rows,n=e.columns,r=[],a=1;a<=t;a++){for(var o=[],i=1;i<=n;i++)o.push(void 0);r.push(o)}return r};var a=function(){function t(){e(this,t),this.storageKeyName="mockContentfulData"}return n(t,[{key:"serialize",value:function(e){return JSON.stringify(e)}},{key:"deserialize",value:function(e){return JSON.parse(e)}},{key:"setValue",value:function(e){localStorage.setItem(this.storageKeyName,this.serialize(e)),this.onValueChanged()}},{key:"getValue",value:function(){return this.deserialize(localStorage.getItem(this.storageKeyName))}},{key:"onValueChanged",value:function(){return this.getValue()}}]),t}();exports.createMockExtension=function(){return{field:new a}};
},{}],"QCba":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},t=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("contentful-ui-extensions-sdk"),n=e(require("./tableController")),a=t(require("./eventHandlers")),i=require("./utils"),l=document.getElementById("table-extension-content"),o=l.querySelector("table"),u=function(e){var t=e.field.getValue();t&&t.tableData&&!Array.isArray(t.tableData)&&!Array.isArray(t.tableData[0])&&(t=void 0),t||(t={useHeader:!0,tableData:i.getInitialTableData({columns:a.minColumns,rows:a.minRows})});var r=new n.default({table:o,state:t,db:e.field});a.default(r),e.window.updateHeight(),e.window.startAutoResizer()};if(i.useContentfulApi())try{r.init(u),i.updateHeight(),i.startAutoResizer()}catch(d){console.error(d),l.innerHTML="\n      <div>\n        <h1>\n          Error\n        </h1>\n        <p>\n          We encountered an error with the Table Contentful UI Extension.\n        </p>\n      </div>\n    "}else{var s=i.createMockExtension();u(s)}
},{"contentful-ui-extensions-sdk":"craX","./tableController":"BhWS","./eventHandlers":"zQTw","./utils":"UnXq"}]},{},["QCba"], null)
//# sourceMappingURL=src.ea750987.js.map