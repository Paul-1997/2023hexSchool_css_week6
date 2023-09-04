const marquee = new Swiper('.album__marquee__forward',{
  allowTouchMove:false,
  slidesPerView: 'auto',
  loop:true,
  autoplay:{
    delay:0,
  },
  speed:10000
})
const marquee2 = new Swiper('.album__marquee__backward',{
  allowTouchMove:false,
  slidesPerView: 'auto',
  loop:true,
  autoplay:{
    delay:0,
    reverseDirection : true
  },
  speed:10000
})
