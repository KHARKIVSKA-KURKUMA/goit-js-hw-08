function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return l.Date.now()};function p(e,t,n){var o,i,r,a,u,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,u=setTimeout(h,t),l?y(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function h(){var e=m();if(O(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,r-(e-c)):n}(e))}function w(e){return u=void 0,p&&o?y(e):(o=i=void 0,a)}function T(){var e=m(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?a:w(m())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),{email:j,message:O}=y;y.addEventListener("input",e(t)((function(){const e={email:j.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),1e3)),document.addEventListener("DOMContentLoaded",(function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e?(j.value=e.email,O.value=e.message):(j.value="",O.value="")})),y.addEventListener("submit",(function(e){e.preventDefault();const t={email:j.value,message:O.value};console.log(t),localStorage.removeItem("feedback-form-state"),y.reset()}));
//# sourceMappingURL=03-feedback.541dacdc.js.map
