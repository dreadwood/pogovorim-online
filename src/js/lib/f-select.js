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
