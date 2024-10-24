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
        spaceBetween: 12,
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
          768: {
            spaceBetween: 30
          }
        }
      })
    })
  })
})()

/**
 * f-select.js
 */
;(() => {
  /** @type HTMLDivElement[]*/
  const selects = document.querySelectorAll('.js-select')

  selects.forEach((select) => {
    /** @type HTMLInputElement | null */
    const field = select.querySelector('.js-select-input')

    /** @type HTMLButtonElement | null */
    const btn = select.querySelector('.js-select-btn')

    /** @type HTMLSpanElement | null */
    const btnText = select.querySelector('.js-select-value')

    /** @type HTMLDivElement | null */
    const drop = select.querySelector('.js-select-drop')

    /** @type HTMLButtonElement[] */
    const items = select.querySelectorAll('.js-select-item')

    if (!field || !btn || !btnText || !drop || items.length === 0) {
      return
    }
    console.log('test1')

    btn.addEventListener('click', () => {
      select.classList.toggle('show')
    })

    drop.addEventListener('click', (evt) => {
      if (!evt.target) {
        return
      }

      if (evt.target.tagName !== 'BUTTON') {
        return
      }

      items.forEach((item) => item.classList.remove('actv'))
      evt.target.classList.add('actv')
      select.classList.remove('show')

      const value = evt.target.dataset.inputValue

      if (value) {
        field.value = value
        btnText.textContent = evt.target.textContent
        select.classList.remove('empty')
      } else {
        field.removeAttribute('value')
        select.classList.add('empty')
      }
    })
  })
})()
