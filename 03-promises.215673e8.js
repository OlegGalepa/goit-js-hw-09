!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form");function u(e,n){var o=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)}))}function a(e,n){i.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))}function c(e,n){i.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}r.addEventListener("submit",(function(e){e.preventDefault();var n=r.elements,o=n.delay,t=n.step,i=n.amount,l=1,f=Number(o.value),d=Number(i.value);for(;l<=d;)u(l,f).then((function(e){a(e.position,e.delay)})).catch((function(e){c(e.position,e.delay)})),f+=Number(t.value),l+=1}))}();
//# sourceMappingURL=03-promises.215673e8.js.map
