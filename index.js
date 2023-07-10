const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    650 : {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
})

const slider = document.querySelector('.swiper')

const indexModalImg = document.getElementById('indexModalImg')

slider.onclick = e => {
  if (e.target.tagName === 'IMG') {
    indexModalImg.style.display = 'flex'
    indexModalImg.children[0].src = e.target.src
  }
}

indexModalImg.onclick = e => {
  if (e.target.tagName !== 'IMG') {
    indexModalImg.style.display = 'none'
  }
}


document.querySelectorAll('.accordion__header').forEach(e => {
  e.addEventListener('click', () => {
    let accordionBody = e.nextElementSibling
    let accordionPlus = e.children[1]
    if (accordionBody.style.maxHeight) {
      document.querySelectorAll('.accordion__body').forEach(e => e.style.maxHeight = null)
      document.querySelectorAll('.accordion__header').forEach(e => e.style.padding = null)
      document.querySelectorAll('.accordion__header__plus').forEach(e => e.style.rotate = null)
    } else {
      document.querySelectorAll('.accordion__header').forEach(e => e.style.padding = null)
      document.querySelectorAll('.accordion__body').forEach(e => e.style.maxHeight = null)
      document.querySelectorAll('.accordion__header__plus').forEach(e => e.style.rotate = null)
      e.style.padding = '0 0 1rem 0'
      accordionPlus.style.rotate = '45deg'
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
    }
  })
})

