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
    this.#kever();
    this.#kartyaLista.forEach((elem, index) => {
      //elem == this.#kartyaLista[index]
      const kartya = new Kartya(index, elem, this.#szuloElem);
    });
  }

  #kever() {
    this.#kartyaLista.sort(() => {
      return Math.random() - 0.5;
    });
  }

  #ellenorzes(){
    /* itt iratkozunk fel a fordit esemenyre
    ket kivalasztott kartya egyforma-e */
    
  }
}
