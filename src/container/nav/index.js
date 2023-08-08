// nav.js
class Nav {
  // строка по умолчанию
  static #HOME_PAGE = 'https://google.com'
  //  приват метод з'єднати з кнопкою back, назад
  static #back = () => {
    return history.back()
  }
  //  приват метод з'єднати з кнопкою forward, вперед
  static #forward = () => {
    return history.forward()
  }
  //  приват метод з'єднати з кнопкою reload, оновити
  static #reload = () => {
    return location.reload()
  }

  //  приват метод- функція; приймає аргумент href с переходом на обрану сторінку
  static #changePage = (href) => {
    return location.assign(href)
  }
  //  приват метод з'єднати з кнопкою go, переходом на сторінку з інпута
  static #go = () => {
    try {
      const url = new URL(window.input.value) // для перевірки коректності введенного URL  тут конструктор URL, в який передали значення, що ввели в інпут
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну URL адресу')
      console.log(e)
    }
  }
  //  приват метод з'єднати з кнопкою home, перехід к https://google.com
  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  // для инициализации кода
  static init = () => {
    // звернення до window ваш ід та атрибут onclick → bind(this), щоб прив'язати this.
    // window.back.onclick = this.#back.bind(this)
    // window.forward.onclick = this.#forward.bind(this)
    // window.home.onclick = this.#home.bind(this)
    // window.reload.onclick = this.#reload.bind(this)
    // window.go.onclick = this.#go.bind(this)

    // window.InputDeviceInfo.value = location.href
    //якщо є стрілкова ф-ція то прив'язати this не треба.
    window.back.onclick = this.#back
    window.forward.onclick = this.#forward
    window.home.onclick = this.#home
    window.reload.onclick = this.#reload
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()
