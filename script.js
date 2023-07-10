AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 50,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom',
})
window.onload = () => {
  document.querySelectorAll('a').forEach(e => e.style.transition = '0.2s')
}

const burgerMenuBtn = document.getElementById('burgerMenuBtn')
const burgerMenuWrapper = document.getElementById('burgerMenuWrapper')

burgerMenuBtn.onclick = () => {
  burgerMenuWrapper.style.display = 'block'
}

burgerMenuWrapper.onclick = e => {
  if (e.target.id === 'burgerMenuWrapper' || e.target.id === 'burgerCloseBtn') {
    burgerMenuWrapper.style.display = 'none'
  }
}

const anchor = document.getElementById('anchor')
const contactsBtn = document.getElementById('contacts-btn')
const contactsWrapper = document.getElementById('contacts-wrapper')
const contactsHolder = document.getElementById('contacts-holder')

anchor.onclick = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
contactsBtn.onclick = () => {
  if(contactsHolder.classList.length) {
    contactsHolder.classList = ''
    contactsBtn.innerHTML = '<i class="fa-regular fa-message"></i>'
  } else {
    contactsHolder.classList = 'active'
    contactsBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  }
}


if (window.scrollY >= 300 && !anchor.classList.length) {
  anchor.classList = 'visible'
  contactsWrapper.classList = 'visible'
}

document.addEventListener('scroll', () => {
  if (window.scrollY >= 300 && !anchor.classList.length) {
    anchor.classList = 'visible'
    contactsWrapper.classList = 'visible'
  } else if (window.scrollY < 300 && anchor.classList.length) {
    anchor.classList = ''
    contactsWrapper.classList = ''
  }
})