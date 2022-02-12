// Slick slider
// $(document).ready(function () {
//   $(".quote-list").slick({
//     prevArrow:
//       "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
//     nextArrow:
//       "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   });
// });
const menutoggle=document.querySelector(".header-toggle");
const headermenu=document.querySelector(".header-menu");
const isexplanClass="is-explan";
menutoggle.addEventListener("click",function() {
    headermenu.classList.add(isexplanClass);
})
window.addEventListener("click",function(e) {
    if(!headermenu.contains(e.target) && !e.target.matches(".header-toggle")) {
        headermenu.classList.remove(isexplanClass);
    }
})
const wedoitem=document.querySelector(".wedo-item");
const isActive="is-active";
wedoitem.addEventListener("click",function() {
    wedoitem.classList.add(isActive);
})
window.addEventListener("click",function(e) {
    if(!wedoitem.contains(e.target) && !e.target.matches(".wedo-item")) {
        wedoitem.classList.remove(isActive);
    }
})
$(document).ready(function(){
    $('.quote-container').slick({
        autoplay:true,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    arrows:false
                  }
                }
     
              ]
    });
  });