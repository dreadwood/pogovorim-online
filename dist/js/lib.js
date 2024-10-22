'use strict'

/**
 * utils.js
 */
window.utils = {
  /**
   * @param {JSON} data
   * @param {string} url
   * @return {Promise<Response>}
   */
  async sendData(data, url) {
    return await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'no-cors'
    })
  }
}

/**
 * b-progress.js
 */
;(() => {
  document.addEventListener('DOMContentLoaded', () => {
    /** @type HTMLElement[] */
    const sliders = document.querySelectorAll('.js-progress-slider')

    if (!window.Swiper) {
      console.error("Swiper lib isn't exist")
      return
    }

    sliders.forEach((slider) => {
      const prevEl = slider.querySelector('.swiper-button-prev')
      const nextEl = slider.querySelector('.swiper-button-next')

      const initialSlide =
        slider.dataset.initialSlide && +slider.dataset.initialSlide

      /**
       * vendor/swiper-bundle.min.js
       */
      new Swiper(slider, {
        mousewheel: {
          forceToAxis: true
        },
        initialSlide,
        spaceBetween: 16,
        grabCursor: true,
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
          sticky: true
        },
        centeredSlides: true,
        navigation: {
          prevEl: prevEl,
          nextEl: nextEl
        },
        breakpoints: {
          540: {
            spaceBetween: 30
          }
        }
      })
    })
  })
})()