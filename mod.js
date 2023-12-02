// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,n,o,a,l,s,f,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,f=0;f<r.length;f++)if(u(n=r[f]))l+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,O(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){return"string"==typeof r}function I(r){var e,t,n;if(!F(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=x(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return A.apply(null,t)}var V,C=Object.prototype,N=C.toString,$=C.__defineGetter__,R=C.__defineSetter__,B=C.__lookupGetter__,G=C.__lookupSetter__;V=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(B.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&R&&R.call(r,e,t.set),r};var L=V;function M(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Q=/./;function Z(r){return"boolean"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return U&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var Y=W()?function(r){var e,t,n;if(null==r)return J.call(r);t=r[D],e=q(r,D);try{r[D]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[D]=t:delete r[D],n}:function(r){return J.call(r)},H=Boolean,K=Boolean.prototype.toString;var rr=W();function er(r){return"object"==typeof r&&(r instanceof H||(rr?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function tr(r){return Z(r)||er(r)}function nr(){return new Function("return this;")()}M(tr,"isPrimitive",Z),M(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ar?ar:null,ur="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!Z(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(ir)return ir;if(or)return or;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,fr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;M(pr,"REGEXP",gr);var dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};function yr(r){return null!==r&&"object"==typeof r}function hr(r){var e,t,n,i;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=gr.exec(n.toString()))return e[1]}return yr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}M(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var br="function"==typeof Q||"object"==typeof fr||"function"==typeof sr?function(r){return hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e};function vr(r){return"function"===br(r)}var wr=Math.floor;function mr(r){return wr(r)===r}function jr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=9007199254740991}function _r(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}var Er=Number.POSITIVE_INFINITY;var Or,Sr=Object,Tr=Object.getPrototypeOf;Or=vr(Object.getPrototypeOf)?Tr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ar=Or;var Pr=Object.prototype;function kr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!dr(r)}(r)&&(e=function(r){return null==r?null:(r=Sr(r),Ar(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&vr(e.constructor)&&"[object Function]"===Y(e.constructor)&&q(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Pr||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function xr(r){return"number"==typeof r}var Fr=Number,Ir=Fr.prototype.toString;var Vr=W();function Cr(r){return"object"==typeof r&&(r instanceof Fr||(Vr?function(r){try{return Ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function Nr(r){return xr(r)||Cr(r)}M(Nr,"isPrimitive",xr),M(Nr,"isObject",Cr);var $r=Fr.NEGATIVE_INFINITY;function Rr(r){return r<Er&&r>$r&&mr(r)}function Br(r){return xr(r)&&Rr(r)}function Gr(r){return Cr(r)&&Rr(r.valueOf())}function Lr(r){return Br(r)||Gr(r)}function Mr(r){return Br(r)&&r>0}function Qr(r){return Gr(r)&&r.valueOf()>0}function Zr(r){return Mr(r)||Qr(r)}function Ur(r,e){return kr(e)?(q(e,"thisArg")&&(r.thisArg=e.thisArg),q(e,"series")&&(r.series=e.series,!Z(r.series))?new TypeError(_r("1Qr2o,GE","series",r.series)):q(e,"limit")&&(r.limit=e.limit,!Mr(r.limit))?new TypeError(_r("1Qr3P,Fv","limit",r.limit)):null):new TypeError(_r("1Qr2V,FD",e))}function Wr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var n=Function.bind.apply(e,t);return new n}return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}M(Lr,"isPrimitive",Br),M(Lr,"isObject",Gr),M(Zr,"isPrimitive",Mr),M(Zr,"isObject",Qr);var Jr=Wr(Object.freeze({__proto__:null,default:()=>()=>{}}))("any-by-async:limit");function Xr(r,e,t,n){var i,o,a,c,u,l,s;if(u=r.length,Jr("Collection length: %d",u),0===u)return Jr("Finished processing a collection."),n(null,!1);for(c=u<e.limit?u:e.limit,Jr("Concurrency limit: %d",c),Jr("Number of arguments: %d",t.length),i=u-1,o=0,l=-1,s=0;s<c;s++)l<i&&f();function f(){Jr("Collection element %d: %s.",l+=1,JSON.stringify(r[l])),2===t.length?t.call(e.thisArg,r[l],p):3===t.length?t.call(e.thisArg,r[l],l,p):t.call(e.thisArg,r[l],l,r,p)}function p(r,e){if(!a)return r?(a=!0,Jr("Encountered an error: %s",r.message),n(r)):(Jr("Processed %d of %d collection elements.",o+=1,u),Jr("Test result: %s",!!e),e&&!a?(a=!0,Jr("Finished processing a collection."),n(null,!0)):l<i?f():o===u?(Jr("Finished processing a collection."),n(null,!1)):void 0)}}function qr(r,e){var t,n,i;if(t={},arguments.length>1){if(n=Ur(t,r))throw n;i=e}else i=r;if(!vr(i))throw new TypeError(_r("1Qr3q,JV",i));return t.series?t.limit=1:t.limit||(t.limit=Er),o;function o(r,e){if(!jr(r))throw new TypeError(_r("1QrAh,O3",r));if(!vr(e))throw new TypeError(_r("1Qr3q,JV",e));return Xr(r,t,i,(function(r,t){if(r)return e(r,!1);e(null,t)}))}}function zr(r,e,t,n){if(arguments.length<4)return qr(e)(r,t);qr(e,t)(r,n)}M(zr,"factory",qr);export{zr as default,qr as factory};
//# sourceMappingURL=mod.js.map
