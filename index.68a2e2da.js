let e;function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},a=o.parcelRequirea837;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},o.parcelRequirea837=a),a.register("kyEFX",function(e,n){"use strict";t(e.exports,"register",function(){return o},function(e){return o=e}),t(e.exports,"resolve",function(){return i},function(e){return i=e});var o,i,r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},i=function(e){var t=r[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"kROXL":"index.68a2e2da.js","lp5u4":"sprite.706b91f7.svg","3d7qD":"index.f6d33a9d.js","1HyLC":"index.5c2819ad.css","hZ4qx":"index.91df488e.js"}')),a("dWN8B");var l=(a("2sKPt"),a("2sKPt"));function s(e){let{list_name:t,books:n}=e,o=n.map(({title:e,author:t,book_image:n,_id:o})=>`
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
  `}const c=document.querySelector(".cont-section"),d=document.querySelector(".loader-inner"),u=new l.FetchBook;async function f(e){try{d.style.display="flex",c.innerHTML="";let t=await u.fetchElement("/top-books");!function(e,t){let n=function(e,t){let n=`<div class="container grid-wrapper">
      <h2 class="bestsellers-title dark-theme">
        Best Sellers <span class="bestsellers-title-accent">Books</span>
      </h2>`,o=e.map(({list_name:e,books:n})=>({list_name:e,books:n.slice(0,t)}));return`${n}${o.map(s).join("")}`}(e,t);c.insertAdjacentHTML("beforeend",n)}(t,e)}catch(e){console.log(e)}finally{d.style.display="none"}}function m(){let t=window.innerWidth;c.addEventListener("click",function(e){let t=e.target.dataset.listname;y(t)}),e&&clearTimeout(e),e=setTimeout(()=>{window.removeEventListener("resize",m),t>=1440?f(5):t>=768?f(3):f(1),window.addEventListener("resize",m)},300)}m(),window.addEventListener("resize",m);const v=document.querySelector(".aside-list"),p=document.querySelector(".cont-section"),h=document.querySelector(".categories-list-name"),g=document.querySelector(".loader-inner"),b=new l.FetchBook;function y(e){!function(e){let t=document.querySelectorAll(".aside-link");h.classList.remove("activ-name"),t.forEach(t=>{t.classList.remove("activ-name"),t.textContent===e&&t.classList.add("activ-name")})}(e),g.style.display="flex",b.fetchElement(`/category?category=${e}`).then(t=>{let n=t.map(e=>(function(e){let{book_image:t,title:n,author:o,_id:i}=e;return`
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
  </div>`})(n,e)}).catch(e=>{console.warn(e)}).finally(()=>{g.style.display="none"})}function k(e){let t=document.querySelector("#"+e.target.dataset.scroll),n=t.offsetTop;window.scrollTo({top:n,behavior:"smooth"})}v.addEventListener("click",function(e){e.preventDefault();let{target:t}=e;if(!t.classList.contains("aside-link"))return;k(e),h.classList.remove("activ-name");let n=document.querySelectorAll(".aside-link");n.forEach(e=>{e.classList.remove("activ-name")}),t.classList.add("activ-name");let o=t.textContent;y(o)}),h.addEventListener("click",e=>{let t=document.querySelectorAll(".aside-link");t.forEach(e=>{e.classList.remove("activ-name")}),e.target.classList.add("activ-name"),m(),k(e)}),b.fetchElement("/category-list").then(e=>{let t=e.map(e=>(function({list_name:e}){return`
      <li class="aside-item">
        <a class="aside-link" href="#" data-scroll="section-title">${e}</a>
      </li>`})(e)).join("");v.insertAdjacentHTML("beforeend",t)}).catch(e=>{console.warn(e)}),a("gQXit"),a("ecGnp");const w=document.querySelector("[data-order-close]"),L=document.querySelector("[data-order-backdrop]"),E=document.querySelector(".modal-close-icon");let S=0;function $(e){let t=e.target!==L,n=e.target!==w,o="Escape"!==e.code,i=e.target!==E,r=e.target.parentNode!==E;document.body.style.overflow="auto",t&&n&&o&&i&&r||(L.classList.add("is-hidden"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",T),w.removeEventListener("click",$),L.removeEventListener("click",$),E.removeEventListener("click",$),document.body.classList.contains("modal-open")||window.scrollTo({top:S,behavior:"instant"}))}function T(e){"Escape"===e.code&&$(e)}window.addEventListener("scroll",function(e){document.body.classList.contains("modal-open")||(S=window.pageYOffset)});var l=a("2sKPt"),j=a("dWN8B"),_={};_=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();const q=new l.FetchBook,x=document.querySelector(".modal-wrapper"),O=document.querySelector(".cont-section");async function H(e){if(e.preventDefault(),!e.target.dataset.id)return;L.classList.remove("is-hidden"),document.body.classList.add("modal-open"),window.addEventListener("keydown",T),w.addEventListener("click",$),L.addEventListener("click",$),E.addEventListener("click",$),document.body.style.overflow="hidden",document.body.classList.contains("modal-open")||(S=window.pageYOffset);let t=await q.fetchElement(`/${e.target.dataset.id}`),{book_image:o,title:i,author:r,description:a}=t,{url:l}=t.buy_links[0],{url:s}=t.buy_links[1],{url:c}=t.buy_links[4],d=`<img
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
              <use href="${n(_)}#icon-amazon"  width="62" height="19"></use>
            </svg></a>
          </li>
          <li class="modal-center-icons">
             <a href="${s}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="33" height="32">
              <use href="${n(_)}#icon-apple-books-logo" width="33" height="32"></use>
            </svg></a>
          </li>
          <li class="modal-center-icons">
             <a href="${c}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="38" height="36">
              <use href="${n(_)}#icon-book-shops-logo" width="38" height="36"></use>
            </svg></a>
          </li>
            </div>
      </ul>`;x.innerHTML=d,function e(t){let n=JSON.parse(localStorage.getItem("bookList")),o=document.querySelector(".btn-container");if(Array.isArray(n)&&n||(n=[]),n.includes(t)){o.innerHTML=`<button class="modal-active-btn js-removeBtn" data-id="${t}">
      remove from the shopping list
    </button>
    <p class="modal-congratulations-text">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>`;let i=document.querySelector(".js-removeBtn");i.addEventListener("click",function o(i){localStorage.setItem("bookList",JSON.stringify(n.filter(e=>e!==t))),e(t),i.currentTarget.removeEventListener("click",o),(0,j.addToFierbase)()})}else{o.innerHTML=`<button class="modal-active-btn-add js-addBtn" data-id="${t}">
      add to shopping list
    </button>`;let i=document.querySelector(".js-addBtn");i.addEventListener("click",function o(i){n.push(t),localStorage.setItem("bookList",JSON.stringify(n)),e(t),i.currentTarget.removeEventListener("click",o),(0,j.addToFierbase)()})}}(e.target.dataset.id)}document.querySelector(".backdrop"),O.addEventListener("click",H);const F=document.querySelectorAll(".menu-link");F.forEach(e=>e.classList.remove("activ-page")),F[0].classList.add("activ-page");const A=document.querySelectorAll(".mob-menu-link");A.forEach(e=>e.classList.remove("activ-page")),A[0].classList.add("activ-page"),a("iiT47");var M={},B={},N={};N=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var R={},z={},C={};C="object"==typeof o&&o&&o.Object===Object&&o;var D="object"==typeof self&&self&&self.Object===Object&&self;z=C||D||Function("return this")(),R=function(){return z.Date.now()};var W={},X={},P={},I=/\s/;P=function(e){for(var t=e.length;t--&&I.test(e.charAt(t)););return t};var J=/^\s+/;X=function(e){return e?e.slice(0,P(e)+1).replace(J,""):e};var U={},Y={},K={};K=z.Symbol;var G={},Q=Object.prototype,Z=Q.hasOwnProperty,V=Q.toString,ee=K?K.toStringTag:void 0;G=function(e){var t=Z.call(e,ee),n=e[ee];try{e[ee]=void 0;var o=!0}catch(e){}var i=V.call(e);return o&&(t?e[ee]=n:delete e[ee]),i};var et={},en=Object.prototype.toString;et=function(e){return en.call(e)};var eo=K?K.toStringTag:void 0;Y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":eo&&eo in Object(e)?G(e):et(e)};var ei={};ei=function(e){return null!=e&&"object"==typeof e},U=function(e){return"symbol"==typeof e||ei(e)&&"[object Symbol]"==Y(e)};var er=0/0,ea=/^[-+]0x[0-9a-f]+$/i,el=/^0b[01]+$/i,es=/^0o[0-7]+$/i,ec=parseInt;W=function(e){if("number"==typeof e)return e;if(U(e))return er;if(N(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=N(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=X(e);var n=el.test(e);return n||es.test(e)?ec(e.slice(2),n?2:8):ea.test(e)?er:+e};var ed=Math.max,eu=Math.min;B=function(e,t,n){var o,i,r,a,l,s,c=0,d=!1,u=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function m(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function v(e){var n=e-s,o=e-c;return void 0===s||n>=t||n<0||u&&o>=r}function p(){var e,n,o,i=R();if(v(i))return h(i);l=setTimeout(p,(e=i-s,n=i-c,o=t-e,u?eu(o,r-n):o))}function h(e){return(l=void 0,f&&o)?m(e):(o=i=void 0,a)}function g(){var e,n=R(),r=v(n);if(o=arguments,i=this,s=n,r){if(void 0===l)return c=e=s,l=setTimeout(p,t),d?m(e):a;if(u)return clearTimeout(l),l=setTimeout(p,t),m(s)}return void 0===l&&(l=setTimeout(p,t)),a}return t=W(t)||0,N(n)&&(d=!!n.leading,r=(u="maxWait"in n)?ed(W(n.maxWait)||0,t):r,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=s=i=l=void 0},g.flush=function(){return void 0===l?a:h(R())},g},M=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw TypeError("Expected a function");return N(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),B(e,t,{leading:o,maxWait:t,trailing:i})};const ef=document.querySelector(".scroll-to-top"),em=n(M)(function(){let e=window.scrollY,t=document.documentElement.clientHeight;function n(){window.scrollTo({top:0,behavior:"smooth"})}e>=t?(ef.addEventListener("click",n),ef.classList.remove("unvisually")):(ef.classList.add("unvisually"),ef.addEventListener("click",n))},500);window.addEventListener("scroll",em),a("lohXh");
//# sourceMappingURL=index.68a2e2da.js.map
