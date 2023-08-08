// scroll.js
// через ф-цію інтервал, нар 500мск перевіряєм чи прокрутив користувач сторінку
//1. клик на кнопку повертае сторінку в 00 положення
window.buttonScroll.onclick = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
//1. встановимо інтервал. Змінна let isDisplay відповідв  за показ кнопки
let isDisplay = false

setInterval(() => {
  //а) умова коли треба показати кнопку прокрутки:"Сторинка зміщена по scrollY
  // більше висоти внутрішне поле браузера? і кнопка прихована w.innerHeight &&
  if (
    window.scrollY > window.innerHeight &&
    isDisplay === false
  ) {
    //в) покажи кнопку, якщо попередня умова виконалась. Якщо ні - код не виконується.

    isDisplay = true
    window.buttonScroll.style.display = 'flex'
    // с) Обовїязково повернути - return null, або просто return , щоб операція виконалась один раз
    return
  }
  // d) вимикаєм кнопку якщо мі повернулися на початок сторінки
  //а кнопка мала значення true
  if (
    window.scrollY <= window.innerHeight &&
    isDisplay === true
  ) {
    //в) вимкни кнопку, якщо попередня умова виконалась. Якщо ні - код не виконується.

    isDisplay = false
    window.buttonScroll.style.display = 'none'
    // с) Обовїязково повернути - return null, або просто return , щоб операція виконалась один раз
    return
  }
}, 500)
