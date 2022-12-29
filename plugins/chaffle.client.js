import Chaffle from 'chaffle'

export default defineNuxtPlugin(() => {
  const elements = document.querySelectorAll('[data-chaffle]')
  const scrolled = []

  document.querySelectorAll('[data-chaffle]').forEach((el, i) => {
    const chaffle = new Chaffle(el, {
      speed: 50,
      delay: 100,
    })
    chaffle.init()

    el.addEventListener('mouseover', function () {
      chaffle.init()
    })

    window.addEventListener('scroll', throttle(() => {
      if (window.scrollY + window.innerHeight / 2 >= el.offsetTop && !scrolled.includes(i)) {
        window.scrollY + window.innerHeight / 2 >= el.offsetTop && chaffle.init()

        scrolled.push(i)
      }
    }))
  })
})
