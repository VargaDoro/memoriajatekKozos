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
    this.megjelenit();
  }
  megjelenit() {
    /* egy kártya megjelenítése */
    let html = `<div class = "kartya">
                    <img src="${this.#fajlNev}" alt="kép">
                </div>`;
    this.#divElem.insertAdjacentHTML("beforeend", html);
  }
}
