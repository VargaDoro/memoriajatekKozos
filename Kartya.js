export default class Kartya {
  #fajlNev = "";
  #id;
  #allapot = false; //false-nincs felfodítva / true-fel van fordítva
  #blokkolt = false; //ha true nem lehet rányomni / false rá lehet nyomni
  #divElem;
  #imgElem;
  constructor(id, fajlNev, szuloElem) {
    this.#id = id;
    this.#fajlNev = fajlNev;
    this.#divElem = szuloElem;
    this.#megjelenit();
    this.#kattintasTrigger();
    window.addEventListener("gameBlocked", () => {
      this.#blokkolt = true;
    });
    window.addEventListener("gameUnBlocked", () => {
        this.#blokkolt = false;
      });
  }
  #megjelenit() {
    /* egy kártya megjelenítése */
    let html = `<div class = "kartya">
                    <img src="kepek/hatter.jpg" alt="kép">
                </div>`;
    this.#divElem.insertAdjacentHTML("beforeend", html);
  }

  setAllapot() {
    this.#allapot = !this.#allapot;
    this.setLap();
  }

  setLap() {
    /* modositja a kep src attributumat */
    if (this.#allapot) {
      this.#imgElem.src = this.#fajlNev;
    } else {
      this.#imgElem.src = "kepek/hatter.jpg";
    }
  }

  #kattintasTrigger() {
    this.#imgElem = document.querySelector(".kartya:last-child img");
    this.#imgElem.addEventListener("click", () => {
      if (!this.#blokkolt) {
        const e = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(e);
        this.setAllapot();
      }
    });
  }

  getFajlNev() {
    return this.#fajlNev;
  }
}
