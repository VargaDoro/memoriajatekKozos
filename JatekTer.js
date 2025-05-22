import Kartya from "./Kartya.js";

export default class JatekTer {
  #szuloElem = document.querySelector(".jatekter");
  #kartyaLista = [];
  #kivalasztottKartyaLista = [];
  constructor(kartyaLista) {
    this.#kartyaLista = kartyaLista;
    this.#init();
  }
  #init() {
    this.#kartyaLista.forEach((elem, index) => {
      //elem == this.#kartyaLista[index]
      const kartya = new Kartya(index, elem, this.#szuloElem);
    });
  }
}
