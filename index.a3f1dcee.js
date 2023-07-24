!function(){let e;function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},a=o.parcelRequirea837;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},o.parcelRequirea837=a),a.register("iE7OH",function(e,n){"use strict";t(e.exports,"register",function(){return o},function(e){return o=e}),t(e.exports,"resolve",function(){return i},function(e){return i=e});var o,i,r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return o},function(e){return o=e});"use strict";var o,i={};o=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),a("iE7OH").register(JSON.parse('{"9ndqt":"index.a3f1dcee.js","ee16w":"sprite.706b91f7.svg","c22jt":"index.efa4abc7.js","1HyLC":"index.5c2819ad.css","2EjRb":"index.24ff3ec0.js"}')),a("2hxkH");var l=(a("2pRc6"),a("2pRc6"));function s(e){let{list_name:t,books:n}=e,o=n.map(({title:e,author:t,book_image:n,_id:o})=>`
        <li class="card-item">
          <button type="button" data-id=${o} class="card-wrapper-btn">
            <div loading="lazy" data-id=${o} class="book-image" style="background-image: url(${n})"></div>
            <p class="hover-text">quick view</p>
          </button>
          <h4 class="book-subtitle" data-id=${o}>${e}</h4>
          <p class="book-autor">${t}</p>
        </li>
      `).join("");return`
      <ul class="best-book-list">
        <li class="book-item">
          <h3 class="book-title">${t}</h3> 
          <ul class="book-info">${o}</ul>
          <button type="button" class="more-btn" data-listname="${t}">see more</button>
        </li>
      </ul>
  `}let c=document.querySelector(".cont-section"),d=document.querySelector(".loader-inner"),u=new l.FetchBook;async function f(e){try{d.style.display="flex",c.innerHTML="";let t=await u.fetchElement("/top-books");!function(e,t){let n=function(e,t){let n=`<div class="container grid-wrapper">
      <h2 class="bestsellers-title dark-theme">
        Best Sellers <span class="bestsellers-title-accent">Books</span>
      </h2>`,o=e.map(({list_name:e,books:n})=>({list_name:e,books:n.slice(0,t)}));return`${n}${o.map(s).join("")}`}(e,t);c.insertAdjacentHTML("beforeend",n)}(t,e)}catch(e){console.log(e)}finally{d.style.display="none"}}function m(){let t=window.innerWidth;c.addEventListener("click",function(e){let t=e.target.dataset.listname;y(t)}),e&&clearTimeout(e),e=setTimeout(()=>{window.removeEventListener("resize",m),t>=1440?f(5):t>=768?f(3):f(1),window.addEventListener("resize",m)},300)}m(),window.addEventListener("resize",m);let v=document.querySelector(".aside-list"),p=document.querySelector(".cont-section"),h=document.querySelector(".categories-list-name"),b=document.querySelector(".loader-inner"),g=new l.FetchBook;function y(e){!function(e){let t=document.querySelectorAll(".aside-link");h.classList.remove("activ-name"),t.forEach(t=>{t.classList.remove("activ-name"),t.textContent===e&&t.classList.add("activ-name")})}(e),b.style.display="flex",g.fetchElement(`/category?category=${e}`).then(t=>{let n=t.map(e=>(function(e){let{book_image:t,title:n,author:o,_id:i}=e;return`
    <li class="cards-item">
      <a class="cards-link" href="#" data-id="${i}">
        <div class="cards-header card-wrapper" data-id="${i}">
          <img class="cards-img" src="${t}" alt="${n}" loading="lazy" data-id="${i}" />
          <p class="hover-text-card">quick view</p>
        </div>
        <div class="cards-content">
          <h2 class="cards-title" data-id="${i}">${n}</h2>
          <p class="cards-author">${o}</p>    
        </div>
         
      </a>
    </li>`})(e)).join("");(function(e,t){let n=t.split(" "),o=n[n.length-1],i=document.createElement("span");i.textContent=o,i.style.color="#4F2EE8";let r=t.replace(o,i.outerHTML);p.innerHTML=`<div class="container grid-wrapper">
  <h1 class="books-section-title" id="section-title"">${r}</h1>
  <ul class="card-list">${e}</ul>
  </div>`})(n,e)}).catch(e=>{console.warn(e)}).finally(()=>{b.style.display="none"})}function w(e){let t=document.querySelector("#"+e.target.dataset.scroll),n=t.offsetTop;window.scrollTo({top:n,behavior:"smooth"})}v.addEventListener("click",function(e){e.preventDefault();let{target:t}=e;if(!t.classList.contains("aside-link"))return;w(e),h.classList.remove("activ-name");let n=document.querySelectorAll(".aside-link");n.forEach(e=>{e.classList.remove("activ-name")}),t.classList.add("activ-name");let o=t.textContent;y(o)}),h.addEventListener("click",e=>{let t=document.querySelectorAll(".aside-link");t.forEach(e=>{e.classList.remove("activ-name")}),e.target.classList.add("activ-name"),m(),w(e)}),g.fetchElement("/category-list").then(e=>{let t=e.map(e=>(function({list_name:e}){return`
      <li class="aside-item">
        <a class="aside-link" href="#" data-scroll="section-title">${e}</a>
      </li>`})(e)).join("");v.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.warn(e)}),a("e541Q"),a("kVJsI");let k=document.querySelector("[data-order-close]"),L=document.querySelector("[data-order-backdrop]"),E=document.querySelector(".modal-close-icon"),S=0;function $(e){let t=e.target!==L,n=e.target!==k,o="Escape"!==e.code,i=e.target!==E,r=e.target.parentNode!==E;document.body.style.overflow="auto",t&&n&&o&&i&&r||(L.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",x),k.removeEventListener("click",$),L.removeEventListener("click",$),E.removeEventListener("click",$),document.body.classList.contains("modal-open")||window.scrollTo({top:S,behavior:"instant"}))}function x(e){"Escape"===e.code&&$(e)}window.addEventListener("scroll",function(e){document.body.classList.contains("modal-open")||(S=window.pageYOffset)});var l=a("2pRc6"),T=a("2hxkH"),j={};j=a("aNJCr").getBundleURL("9ndqt")+a("iE7OH").resolve("ee16w");let _=new l.FetchBook,q=document.querySelector(".modal-wrapper"),H=document.querySelector(".cont-section");async function O(e){if(e.preventDefault(),!e.target.dataset.id)return;L.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",x),k.addEventListener("click",$),L.addEventListener("click",$),E.addEventListener("click",$),document.body.style.overflow="hidden",document.body.classList.contains("modal-open")||(S=window.pageYOffset);let t=await _.fetchElement(`/${e.target.dataset.id}`),{book_image:o,title:i,author:r,description:a}=t,{url:l}=t.buy_links[0],{url:s}=t.buy_links[1],{url:c}=t.buy_links[4],d=`<img
          class="modal-image"
          src="${o}"
          alt=""
      />
      <ul class="modal-list">
        <li><h2 class="modal-list-title">${i}</h2></li>
        <li><h3 class="modal-list-autor">${r}</h3></li>
        <li>
          <p class="modal-description">
            ${a}
          </p>
        </li>
        <div class="modal-shop-icons">
          <li class="modal-center-icons">
          <a href="${l}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="62" height="19">
              <use href="${n(j)}#icon-amazon"  width="62" height="19"></use>
            </svg></a>
          </li>
          <li class="modal-center-icons">
             <a href="${s}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="33" height="32">
              <use href="${n(j)}#icon-apple-books-logo" width="33" height="32"></use>
            </svg></a>
          </li>
          <li class="modal-center-icons">
             <a href="${c}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="38" height="36">
              <use href="${n(j)}#icon-book-shops-logo" width="38" height="36"></use>
            </svg></a>
          </li>
            </div>
      </ul>`;q.innerHTML=d,function e(t){let n=JSON.parse(localStorage.getItem("bookList")),o=document.querySelector(".btn-container");if(Array.isArray(n)&&n||(n=[]),n.includes(t)){o.innerHTML=`<button class="modal-active-btn js-removeBtn" data-id="${t}">
      remove from the shopping list
    </button>
    <p class="modal-congratulations-text">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>`;let i=document.querySelector(".js-removeBtn");i.addEventListener("click",function o(i){localStorage.setItem("bookList",JSON.stringify(n.filter(e=>e!==t))),e(t),i.currentTarget.removeEventListener("click",o),(0,T.addToFierbase)()})}else{o.innerHTML=`<button class="modal-active-btn-add js-addBtn" data-id="${t}">
      add to shopping list
    </button>`;let i=document.querySelector(".js-addBtn");i.addEventListener("click",function o(i){n.push(t),localStorage.setItem("bookList",JSON.stringify(n)),e(t),i.currentTarget.removeEventListener("click",o),(0,T.addToFierbase)()})}}(e.target.dataset.id)}document.querySelector(".backdrop"),H.addEventListener("click",O);let A=document.querySelectorAll(".menu-link");A.forEach(e=>e.classList.remove("activ-page")),A[0].classList.add("activ-page");let R=document.querySelectorAll(".mob-menu-link");R.forEach(e=>e.classList.remove("activ-page")),R[0].classList.add("activ-page"),a("h6lxJ");var F={},M={},B={};B=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var N={},z={},C={};C="object"==typeof o&&o&&o.Object===Object&&o;var J="object"==typeof self&&self&&self.Object===Object&&self;z=C||J||Function("return this")(),N=function(){return z.Date.now()};var D={},I={},U={},W=/\s/;U=function(e){for(var t=e.length;t--&&W.test(e.charAt(t)););return t};var Y=/^\s+/;I=function(e){return e?e.slice(0,U(e)+1).replace(Y,""):e};var P={},Q={},V={};V=z.Symbol;var G={},K=Object.prototype,X=K.hasOwnProperty,Z=K.toString,ee=V?V.toStringTag:void 0;G=function(e){var t=X.call(e,ee),n=e[ee];try{e[ee]=void 0;var o=!0}catch(e){}var i=Z.call(e);return o&&(t?e[ee]=n:delete e[ee]),i};var et={},en=Object.prototype.toString;et=function(e){return en.call(e)};var eo=V?V.toStringTag:void 0;Q=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":eo&&eo in Object(e)?G(e):et(e)};var ei={};ei=function(e){return null!=e&&"object"==typeof e},P=function(e){return"symbol"==typeof e||ei(e)&&"[object Symbol]"==Q(e)};var er=0/0,ea=/^[-+]0x[0-9a-f]+$/i,el=/^0b[01]+$/i,es=/^0o[0-7]+$/i,ec=parseInt;D=function(e){if("number"==typeof e)return e;if(P(e))return er;if(B(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=B(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=I(e);var n=el.test(e);return n||es.test(e)?ec(e.slice(2),n?2:8):ea.test(e)?er:+e};var ed=Math.max,eu=Math.min;M=function(e,t,n){var o,i,r,a,l,s,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function m(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function v(e){var n=e-s,o=e-c;return void 0===s||n>=t||n<0||u&&o>=r}function p(){var e,n,o,i=N();if(v(i))return h(i);l=setTimeout(p,(e=i-s,n=i-c,o=t-e,u?eu(o,r-n):o))}function h(e){return(l=void 0,f&&o)?m(e):(o=i=void 0,a)}function b(){var e,n=N(),r=v(n);if(o=arguments,i=this,s=n,r){if(void 0===l)return c=e=s,l=setTimeout(p,t),d?m(e):a;if(u)return clearTimeout(l),l=setTimeout(p,t),m(s)}return void 0===l&&(l=setTimeout(p,t)),a}return t=D(t)||0,B(n)&&(d=!!n.leading,r=(u="maxWait"in n)?ed(D(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),b.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=s=i=l=void 0},b.flush=function(){return void 0===l?a:h(N())},b},F=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw TypeError("Expected a function");return B(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),M(e,t,{leading:o,maxWait:t,trailing:i})};let ef=document.querySelector(".scroll-to-top"),em=n(F)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function n(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(ef.addEventListener("click",n),ef.classList.remove("unvisually")):(ef.classList.add("unvisually"),ef.addEventListener("click",n))},500);window.addEventListener("scroll",em),a("7Dbsl")}();
//# sourceMappingURL=index.a3f1dcee.js.map
