function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,u=setTimeout(h,t),c?y(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function h(){var e=m();if(T(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function w(e){return u=void 0,g&&i?y(e):(i=o=void 0,a)}function O(){var e=m(),n=T(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),y(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},O.flush=function(){return void 0===u?a:w(m())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form"),{email:j,message:T}=y;var h;let w=null!==(h=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==h?h:{};var O,S;w&&(y.email.value=null!==(O=w.email)&&void 0!==O?O:"",y.message.value=null!==(S=w.message)&&void 0!==S?S:"",console.log(y.email.value),console.log(y.message.value));y.addEventListener("input",e(t)((function(e){w={email:j.value,message:T.value},localStorage.setItem("feedback-form-state",JSON.stringify(w))}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),y.email.value&&y.message.value?(console.log(localStorage.getItem("feedback-form-state")),e.currentTarget.reset(),w={}):alert("введіть всі дані")}));
//# sourceMappingURL=03-feedback.3e5bea6f.js.map
