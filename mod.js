// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var O=String.fromCharCode,E=isNaN,S=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,t,n,o,a,l,s,f,p;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if(u(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(x(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function V(e){var r,t,n;if(!F(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var I,N=Object.prototype,C=N.toString,$=N.__defineGetter__,L=N.__defineSetter__,B=N.__lookupGetter__,R=N.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(e,r)||R.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(e,r,t.get),a&&L&&L.call(e,r,t.set),e};var G=I;function M(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=/./;function W(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&Y.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var H=X()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[q],r=D(e,q);try{e[q]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[q]=t:delete e[q],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=X();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return W(e)||re(e)}function ne(){return new Function("return this;")()}M(te,"isPrimitive",W),M(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ce="object"==typeof ae?ae:null,ue="object"==typeof globalThis?globalThis:null;var le=function(e){if(arguments.length){if(!W(e))throw new TypeError(V("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ue)return ue;if(ie)return ie;if(oe)return oe;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),se=le.document&&le.document.childNodes,fe=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;M(pe,"REGEXP",ge);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function ye(e){return null!==e&&"object"==typeof e}function be(e){var r,t,n,i;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return ye(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(ye,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(V("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ye));var he="function"==typeof Z||"object"==typeof fe||"function"==typeof se?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?be(e).toLowerCase():r};function ve(e){return"function"===he(e)}var me=Math.floor;function we(e){return me(e)===e}function je(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&we(e.length)&&e.length>=0&&e.length<=9007199254740991}var _e=Number.POSITIVE_INFINITY;var Oe,Ee=Object,Se=Object.getPrototypeOf;Oe=ve(Object.getPrototypeOf)?Se:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Te=Oe;var Ae=Object.prototype;function ke(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!de(e)}(e)&&(r=function(e){return null==e?null:(e=Ee(e),Te(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&ve(r.constructor)&&"[object Function]"===H(r.constructor)&&D(r,"isPrototypeOf")&&ve(r.isPrototypeOf)&&(r===Ae||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function xe(e){return"number"==typeof e}var Pe=Number,Fe=Pe.prototype.toString;var Ve=X();function Ie(e){return"object"==typeof e&&(e instanceof Pe||(Ve?function(e){try{return Fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Ne(e){return xe(e)||Ie(e)}M(Ne,"isPrimitive",xe),M(Ne,"isObject",Ie);var Ce=Pe.NEGATIVE_INFINITY;function $e(e){return e<_e&&e>Ce&&we(e)}function Le(e){return xe(e)&&$e(e)}function Be(e){return Ie(e)&&$e(e.valueOf())}function Re(e){return Le(e)||Be(e)}function Ge(e){return Le(e)&&e>0}function Me(e){return Be(e)&&e.valueOf()>0}function Ze(e){return Ge(e)||Me(e)}function We(e,r){return ke(r)?(D(r,"thisArg")&&(e.thisArg=r.thisArg),D(r,"series")&&(e.series=r.series,!W(e.series))?new TypeError(V("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):D(r,"limit")&&(e.limit=r.limit,!Ge(e.limit))?new TypeError(V("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(V("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Ue(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(r,t);return new n}return r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}M(Re,"isPrimitive",Le),M(Re,"isObject",Be),M(Ze,"isPrimitive",Ge),M(Ze,"isObject",Me);var Xe=Ue(Object.freeze({__proto__:null,default:()=>()=>{}}))("any-by-async:limit");function ze(e,r,t,n){var i,o,a,c,u,l,s;if(u=e.length,Xe("Collection length: %d",u),0===u)return Xe("Finished processing a collection."),n(null,!1);for(c=u<r.limit?u:r.limit,Xe("Concurrency limit: %d",c),Xe("Number of arguments: %d",t.length),i=u-1,o=0,l=-1,s=0;s<c;s++)l<i&&f();function f(){Xe("Collection element %d: %s.",l+=1,JSON.stringify(e[l])),2===t.length?t.call(r.thisArg,e[l],p):3===t.length?t.call(r.thisArg,e[l],l,p):t.call(r.thisArg,e[l],l,e,p)}function p(e,r){if(!a)return e?(a=!0,Xe("Encountered an error: %s",e.message),n(e)):(Xe("Processed %d of %d collection elements.",o+=1,u),Xe("Test result: %s",!!r),r&&!a?(a=!0,Xe("Finished processing a collection."),n(null,!0)):l<i?f():o===u?(Xe("Finished processing a collection."),n(null,!1)):void 0)}}function Ye(e,r){var t,n,i;if(t={},arguments.length>1){if(n=We(t,e))throw n;i=r}else i=e;if(!ve(i))throw new TypeError(V("invalid argument. Last argument must be a function. Value: `%s`.",i));return t.series?t.limit=1:t.limit||(t.limit=_e),o;function o(e,r){if(!je(e))throw new TypeError(V("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!ve(r))throw new TypeError(V("invalid argument. Last argument must be a function. Value: `%s`.",r));return ze(e,t,i,(function(e,t){if(e)return r(e,!1);r(null,t)}))}}function De(e,r,t,n){if(arguments.length<4)return Ye(r)(e,t);Ye(r,t)(e,n)}M(De,"factory",Ye);export{De as default,Ye as factory};
//# sourceMappingURL=mod.js.map
