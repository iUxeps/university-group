(()=>{document.addEventListener("DOMContentLoaded",(function(e){var t=".footer-contact",n=".filial-item",o=".students-item",c=".content-wrap",r=".modal-btn-open",a=".modal-close-btn",i=".modal-form",l=".adap-menu",s=".btn-close-menu",d=".btn-open-menu",u=document.querySelector(l),v=document.querySelector(s),m=document.querySelector(d);m&&v&&u&&(m.addEventListener("click",(function(){u.classList.add("flex")})),v.addEventListener("click",(function(){u.classList.remove("flex")})),console.log(m));var f=document.querySelector(".lang");f&&f.addEventListener("click",(function(){f.classList.toggle("active")}));var p=document.querySelectorAll(o),y=document.querySelectorAll(c);p&&y&&p.forEach((function(e){e.addEventListener("click",(function(){var t=e,n=t.getAttribute("data-student"),o=document.querySelector(n);p.forEach((function(e){e.classList.remove("active")})),y.forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),o.classList.add("active")}))}));var L=document.querySelectorAll(r),w=document.querySelector(a),E=document.querySelector(i);L&&w&&E&&(L.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),E.classList.add("active"),document.body.style.overflow="hidden",console.log(L)}))})),w.addEventListener("click",(function(e){e.preventDefault(),E.classList.remove("active"),document.body.style.overflow="",console.log(w)})));var S=document.querySelectorAll(t),h=document.querySelectorAll(n),g=document.querySelector(".phone-numbers"),q=document.querySelector(".footer-address"),b=function(e,t){g.innerHTML="",q.innerHTML="",q.textContent=t;var n=JSON.parse(e.replaceAll("'",'"'));n.length&&n.forEach((function(e){var t=document.createElement("a");t.href="tel:".concat(e.replaceAll(" ","")),t.textContent=e,t.classList.add("inline-block"),g.appendChild(t)}))};if(S&&h){var k=h[0].dataset,A=k.address,x=k.contacts;b(x,A),h.forEach((function(e){e.addEventListener("click",(function(){var t=e,n=t.dataset,o=n.contacts,c=n.address;b(o,c),h.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}))}ymaps.ready((function(){var e=h[0].dataset,t=e.longitude,n=e.latitude,o=new ymaps.Map("footer-map",{center:[t,n],zoom:9}),c=new ymaps.GeoObject({geometry:{type:"Point",coordinates:[t,n]}});o.geoObjects.add(c),h.forEach((function(e){e.addEventListener("click",(function(){var t=e.dataset,n=t.longitude,r=t.latitude,a=[n,r];(n||r)&&(c.geometry.setCoordinates(a),o.setCenter(a))}))}))}));var C=document.querySelector(".accordion"),M=C.querySelectorAll(".accordion__item");function O(){var e=this.parentNode;M.forEach((function(t){e!=t?t.classList.remove("active"):e.classList.toggle("active")}))}C.querySelectorAll(".accordion__title").forEach((function(e){return e.addEventListener("click",O)}))}));new Swiper("#univer-swiper",{direction:"horizontal",loop:!0,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper("#recomm-swiper",{direction:"horizontal",slidesPerView:3,spaceBetween:36,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper("#student-swiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar"},mousewheel:!0})})();