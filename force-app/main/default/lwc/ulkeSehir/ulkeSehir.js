import { LightningElement } from 'lwc';

export default class UlkeSehir extends LightningElement {
    //2- uc variable olustur ve fonksiyonlari da olustur.
    ulke;
    sehir;
    unlu;

    handleUlke(event) {
        this.ulke = event.target.value;
    }
    handleSehir(event) {
        this.sehir = event.target.value;
    }
    neyiUnlu(event) {
        this.unlu = event.target.value;
    }
    //3- Verilerin goruntulenmesi icin child html'e git
}