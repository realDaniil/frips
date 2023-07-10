const pastilaNamesArr = ['Слива',
  'Шоколадний банан',
  'Банан-ківі',
  'Банан',
  'Вишня-банан',
  'Чорна смородина-банан-вишня',
  'Полуниця-вишня-банан',
  'Полуниця-банан-червона смородина',
  'Полуниця-банан-лохина',
  'Полуниця-банан',
  'Банан-апельсин',
  'Груша-банан',
  'Полуниця-банан-малина',
  'Вишня',
  'Полуниця-вишня',
  'Груша',
  'Ананас-банан',
  'Ананас-манго-банан',
  'Манго-банан',
  'Полуниця-лохина-виноград',
  'Ананас',
  'Манго',]

const pastilaPricesArr = [85,
  95,
  120,
  120,
  120,
  120,
  120,
  120,
  130,
  130,
  130,
  130,
  140,
  140,
  160,
  160,
  160,
  160,
  160,
  160,
  230,
  230,]

for (let i = 0; i < pastilaNamesArr.length; i++) {
  let result = `
  <div ${i % 2 === 0 && 'style="border-top: #71BE00 2px solid; border-bottom: #71BE00 2px solid"'} class="prices__product-section__item">
    <div class="prices__product-section__item__name">${pastilaNamesArr[i]}</div>
    <div class="prices__product-section__item__price">${pastilaPricesArr[i]}</div>
  </div>
  `
  document.querySelector('#prices__pastila-section .prices__product-section__table').innerHTML += result
}

const fripsNamesArr = ['Бананові',
  'Кавун',
  'Полуниця',
  'Диня',
  'Сливові',
  'Яблуко',
  'Груша',
  'Хурма шарон',
  'Ківі',
  'Кокос',
  'Ананас',
  'Мандарин (очищений)',
  'Апельсин (очищений)',
  'Апельсин (лимон, апельсин)',
  'Лимон',
  'Цитрусовий міх',
  'Фріпси міх осені (яблуко, слива, груша)',
  'Фріпси міх бахча (диня, кавун )',
  'Фріпси міх екзотик (хурма Шарон, ківі, ананас)',
  'Орандж mix (очищений мандарин & апельсин)',]

const fripsPrices100Arr = [110,
  150,
  200,
  130,
  100,
  90,
  180,
  120,
  140,
  90,
  200,
  180,
  180,
  145,
  145,
  145,
  125,
  140,
  150,
  180,]

const fripsPrices50Arr = [60,
  75,
  105,
  70,
  55,
  50,
  95,
  65,
  75,
  50,
  105,
  90,
  90,
  75,
  75,
  75,
  65,
  70,
  75,
  90,]

const fripsPrices30Arr = [35,
  50,
  65,
  44,
  33,
  30,
  60,
  40,
  45,
  30,
  65,
  60,
  60,
  45,
  45,
  45,
  45,
  45,
  50,
  60,]

for (let i = 0; i < fripsNamesArr.length; i++) {
  let result = `
    <div ${i % 2 === 0 && 'style="border-top: #71BE00 2px solid; border-bottom: #71BE00 2px solid"'} class="prices__product-section__item">
      <div class="prices__product-section__item__name">${fripsNamesArr[i]}</div>
      <div class="prices__product-section__item__price">${fripsPrices100Arr[i]}</div>
      <div class="prices__product-section__item__price">${fripsPrices50Arr[i]}</div>
      <div class="prices__product-section__item__price">${fripsPrices30Arr[i]}</div>
    </div>
    `
  document.querySelector('#prices__frips-section .prices__product-section__table').innerHTML += result
}

const jerkyNamesArr = ['Джеркі курині соус теріякі & французька гірчиця',
  'Джеркі курині міх перців',
  'Джеркі курині з прованскими травами',
  'Джеркі курині з зеленою цибулею, петрушкою та кріпом',
  'Джеркі пряна індичка',
  'Джерки з яловичини міх перців',
  'Джеркі з яловичини coyc теріякі & французька гірчиця',
  'Джеркі з індички в томатному соусі',
  'Джеркі хлопська свинка',
  'Джеркі курині тіх',
  'Джеркі міх 4-8 смаків',
  'Подарункові бокси',]

const jerkyPrices100Arr = [140,
  140,
  140,
  140,
  150,
  155,
  155,
  160,
  160,
  140,
  150,
  'від 250 грн',]

const jerkyPrices50Arr = [70,
  70,
  70,
  70,
  75,
  80,
  80,
  80,
  80,
  70,
  75,
  '',]

for (let i = 0; i < jerkyNamesArr.length; i++) {
  let result = `
      <div ${i % 2 === 0 && 'style="border-top: #71BE00 2px solid; border-bottom: #71BE00 2px solid"'} class="prices__product-section__item">
        <div class="prices__product-section__item__name">${jerkyNamesArr[i]}</div>
        <div class="prices__product-section__item__price">${jerkyPrices100Arr[i]}</div>
        <div class="prices__product-section__item__price">${jerkyPrices50Arr[i]}</div>
      </div>
      `
  document.querySelector('#prices__jerky-section .prices__product-section__table').innerHTML += result
}

document.querySelector('.prices-select-container').addEventListener('click', e => {
  if (e.target.tagName === 'P') {
    const index = e.target.dataset.pricesSelectItem
    document.querySelectorAll('.prices-select-container-item').forEach(e => e.classList = 'prices-select-container-item')
    document.querySelectorAll('.prices-select-container-item')[index].classList = 'prices-select-container-item active'
    document.querySelectorAll('.prices__product-section').forEach(e => e.classList = 'prices__product-section')
    document.querySelectorAll('.prices__product-section')[index].classList = 'prices__product-section active'
  }
})