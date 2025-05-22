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
    this.#ellenorzes();
  }

  #kever() {
    this.#kartyaLista.sort(() => {
      return Math.random() - 0.5;
    });
  }

  #ellenorzes() {
    /* itt iratkozunk fel a fordit esemenyre
    ket kivalasztott kartya egyforma-e */
    window.addEventListener("fordit", (event) => {
      if (this.#kivalasztottKartyaLista.length < 2) {
        this.#kivalasztottKartyaLista.push(event.detail);
      }
      if (this.#kivalasztottKartyaLista.length === 2) {
        /* össze kell hasonítani a két elem fajl nevét, kiüríteni a listát, visszafordítani a kártyákat */
        let f1 = this.#kivalasztottKartyaLista[0];
        let f2 = this.#kivalasztottKartyaLista[1];
        if (f1.getFajlNev() === f2.getFajlNev()) {
          console.log("PÁR");
        } else {
          console.log("NEM");
          /* visszafordítjuk a kártyákat */
          setTimeout(()=> {
            f1.setAllapot();
            f2.setAllapot();
          }, 2000);
        }
        this.#kivalasztottKartyaLista.splice(0);
      }
      console.log(this.#kivalasztottKartyaLista);
    });
  }
}
