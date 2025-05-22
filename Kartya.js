export default class Kartya {
  #fajlNev = "";
  #id;
  #allapot = false; //false-nincs felfodítva / true-fel van fordítva
  #blokkolt;
  #divElem;
  #imgElem;
  constructor(id, fajlNev, szuloElem) {
    this.#id = id;
    this.#fajlNev = fajlNev;
    this.#divElem = szuloElem;
    this.#megjelenit();
    this.#kattintasTrigger();
  }
  #megjelenit() {
    /* egy kártya megjelenítése */
    let html = `<div class = "kartya">
                    <img src="kepek/hatter.jpg" alt="kép">
                </div>`;
    this.#divElem.insertAdjacentHTML("beforeend", html);
  }

  setAllapot() {
    this.#allapot = true;
    this.setLap();
  }

  setLap() {
    /* modositja a kep src attributumat */
    this.#imgElem.src = this.#fajlNev;
  }

  #kattintasTrigger() {
    this.#imgElem = document.querySelector(".kartya:last-child img");
    this.#imgElem.addEventListener("click", () => {
      const e = new CustomEvent("fordit", { detail: this });
      window.dispatchEvent(e);
      this.setAllapot();
    });
  }
}
