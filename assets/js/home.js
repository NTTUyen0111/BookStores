let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  });
  
/*----------------------------------------------------------------*/
const carousel = document.querySelector(".featured__box");
const firstCardWidth = carousel.querySelector(".featured__book__card").offsetWidth;
const arrowBtns = document.querySelectorAll(".featured__container i");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
/*________________________________________________________*/
function scrollToContent(id) {
    var element = document.getElementById(id);
            var offset = 100; // Độ lệch phía trên mong muốn (đơn vị pixel)
            var elementPosition = element.offsetTop - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
}