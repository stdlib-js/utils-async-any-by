// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=f.call(n,v,"$1e"),n=f.call(n,b,"e"),n=f.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=f.call(n,p,"e+0$1"),n=f.call(n,g,"e-0$1"),r.alternate&&(n=f.call(n,d,"$1."),n=f.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,u,l,s,f,p,g,d,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",l=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)u+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),u+=n.arg||"",l+=1}return u}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(A(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var x,I=Object.prototype,F=I.toString,V=I.__defineGetter__,C=I.__defineSetter__,N=I.__lookupGetter__,$=I.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var R=x;function B(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var G=/./;function L(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return M&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&U.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,q="function"==typeof X?X.toStringTag:"";var z=Q()?function(r){var e,t,n;if(null==r)return Z.call(r);t=r[q],e=W(r,q);try{r[q]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[q]=t:delete r[q],n}:function(r){return Z.call(r)},Y=Boolean,D=Boolean.prototype.toString;var J=Q();function H(r){return"object"==typeof r&&(r instanceof Y||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function K(r){return L(r)||H(r)}B(K,"isPrimitive",L),B(K,"isObject",H);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},nr="object"==typeof tr?tr:null,ir="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!L(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(rr)return rr;if(er)return er;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,cr=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var lr=/^\s*function\s*([^(]*)/i;B(ur,"REGEXP",lr);var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function pr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return fr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}B(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var gr="function"==typeof G||"object"==typeof cr||"function"==typeof ar?function(r){return pr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?pr(r).toLowerCase():e};function dr(r){return"function"===gr(r)}var yr=Math.floor;function hr(r){return yr(r)===r}var br=9007199254740991;function vr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var wr=Number.POSITIVE_INFINITY;var mr,jr=Object,_r=Object.getPrototypeOf;mr=dr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=mr;var Or=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!sr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),Er(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&dr(e.constructor)&&"[object Function]"===z(e.constructor)&&W(e,"isPrototypeOf")&&dr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function Tr(r){return"number"==typeof r}var Ar=Number,Pr=Ar.prototype.toString;var kr=Q();function xr(r){return"object"==typeof r&&(r instanceof Ar||(kr?function(r){try{return Pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function Ir(r){return Tr(r)||xr(r)}B(Ir,"isPrimitive",Tr),B(Ir,"isObject",xr);var Fr=Ar.NEGATIVE_INFINITY;function Vr(r){return r<wr&&r>Fr&&hr(r)}function Cr(r){return Tr(r)&&Vr(r)}function Nr(r){return xr(r)&&Vr(r.valueOf())}function $r(r){return Cr(r)||Nr(r)}function Rr(r){return Cr(r)&&r>0}function Br(r){return Nr(r)&&r.valueOf()>0}function Gr(r){return Rr(r)||Br(r)}function Lr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}B($r,"isPrimitive",Cr),B($r,"isObject",Nr),B(Gr,"isPrimitive",Rr),B(Gr,"isObject",Br);var Mr=Lr(Object.freeze({__proto__:null,default:()=>()=>{}}))("any-by-async:limit");function Qr(r,e){var t,n,i;if(t={},arguments.length>1){if(n=function(r,e){return Sr(e)?(W(e,"thisArg")&&(r.thisArg=e.thisArg),W(e,"series")&&(r.series=e.series,!L(r.series))?new TypeError(vr("1Qr2o","series",r.series)):W(e,"limit")&&(r.limit=e.limit,!Rr(r.limit))?new TypeError(vr("1Qr3P","limit",r.limit)):null):new TypeError(vr("1Qr2V",e))}(t,r),n)throw n;i=e}else i=r;if(!dr(i))throw new TypeError(vr("1Qr3q",i));return t.series?t.limit=1:t.limit||(t.limit=wr),function(r,e){if(n=r,!("object"==typeof n&&null!==n&&"number"==typeof n.length&&hr(n.length)&&n.length>=0&&n.length<=br))throw new TypeError(vr("1QrAh",r));var n;if(!dr(e))throw new TypeError(vr("1Qr3q",e));return function(r,e,t,n){var i,o,a,c,u,l,s;if(u=r.length,Mr("Collection length: %d",u),0===u)return Mr("Finished processing a collection."),n(null,!1);for(c=u<e.limit?u:e.limit,Mr("Concurrency limit: %d",c),Mr("Number of arguments: %d",t.length),i=u-1,o=0,l=-1,s=0;s<c;s++)l<i&&f();function f(){Mr("Collection element %d: %s.",l+=1,JSON.stringify(r[l])),2===t.length?t.call(e.thisArg,r[l],p):3===t.length?t.call(e.thisArg,r[l],l,p):t.call(e.thisArg,r[l],l,r,p)}function p(r,e){if(!a)return r?(a=!0,Mr("Encountered an error: %s",r.message),n(r)):(Mr("Processed %d of %d collection elements.",o+=1,u),Mr("Test result: %s",!!e),e&&!a?(a=!0,Mr("Finished processing a collection."),n(null,!0)):l<i?f():o===u?(Mr("Finished processing a collection."),n(null,!1)):void 0)}}(r,t,i,(function(r,t){if(r)return e(r,!1);e(null,t)}))}}function Zr(r,e,t,n){if(arguments.length<4)return Qr(e)(r,t);Qr(e,t)(r,n)}B(Zr,"factory",Qr);export{Zr as default,Qr as factory};
//# sourceMappingURL=mod.js.map
