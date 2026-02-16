import{a as n,S as c,i as u}from"./assets/vendor-CC7y-xQd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const f=e=>n.get("https://pixabay.com/api/",{params:{key:"54665781-1b012506ba8c9acb61074d03f",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data);let a=null;function m(e){const o=document.querySelector("ul.gallery"),i=e.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"/>
          </a>
        
            <ul class="info-list">
              <li class="info-item">
                <span class="info-item-label">Likes ${r.likes}</span>
              </li>
              <li class="info-item">
                <span class="info-item-label">Views ${r.views}</span>
              </li>
              <li class="info-item">
                <span class="info-item-label">Comments  ${r.comments}</span>
              </li>
              <li class="info-item">
                <span class="info-item-label">Downloads ${r.downloads}</span>
              </li>
                
     
        </ul>
      </li>`).join("");o.innerHTML=i,a||(a=new c(".gallery a")),a.refresh()}function d(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function p(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function y(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}const g=document.querySelector(".form");g.addEventListener("submit",e=>{e.preventDefault();const o=e.target.elements["search-text"].value.trim();o&&(d(),p(),setTimeout(()=>{f(o).then(i=>{i.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(i.hits)}).catch(i=>{console.log(i)}).finally(()=>{y(),e.target.reset()})},2e3))});
//# sourceMappingURL=index.js.map
