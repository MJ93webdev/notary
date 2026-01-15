// ************============ NAVBAR ===============*****************

const navToggle = document.querySelector("#navPrimaryToggle");
const nav = document.querySelector(".nav__list");
console.log("att" , nav.getAttribute("data-visible"))
navToggle.addEventListener("click", ()=>{
  if(nav.getAttribute("data-visible") === "false"){
    nav.setAttribute("data-visible", "true");
  }else{
    nav.setAttribute("data-visible","closing")
    nav.addEventListener("animationend",()=>{
        nav.setAttribute("data-visible","false")
    } , {once:true})
  }
});

// ================= scroller ==============

const scroller = document.querySelector(".scroller");

if(!window.matchMedia("(perfers-reduced-motion: reduce)").matches){
    addAnimation();
}

function addAnimation(){
    scroller.setAttribute("data-animated", true)

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
    })
}

// ACCORDION

const accordionItemHeaders = document.querySelectorAll(".accordion__item-header");

accordionItemHeaders.forEach(accordionItemHeader=> {
    accordionItemHeader.addEventListener("click",()=>{

        const currentlyActiveItemHeader = document.querySelector(".accordion__item-header.active");
        if(currentlyActiveItemHeader && currentlyActiveItemHeader !== accordionItemHeader){
            currentlyActiveItemHeader.classList.toggle("active");
            currentlyActiveItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }else{
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

// CAROUSEL

new Swiper('.testimonials__card-wrapper', {
  // Optional parameters
//   loop: true,
  spaceBetween: 30,

//   centeredSlides: true,
  // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     dynamicBullets: true,
//     enabled: true,
//   },

  // Navigation arrows
  navigation: {
    addIcons: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});
