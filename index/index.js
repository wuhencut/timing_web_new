new Vue({
  el: '#page',
  data() {
    return {};
  },
  mounted() {
    this.initSwiper1();
  },
  methods: {
    initSwiper1() {
      new Swiper('.swiper1', {
        slidesPerView: 3,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        speed: 1500,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  },
});
