import { LightningElement } from 'lwc';

export default class OninputOrnegi extends LightningElement {
    isim = "Veli"; /* 1- isim variable'i olusturduk */
    /* 5- handleInput methodunu olustur  */
    handleInput(event) {
        //console.log("Degisiklik var"); 6- konsolda degisiklikleri gorduk
        this.isim = event.target.value; /* 7- Js'deki isim degiskenini inputtan girilen value'ya esitledik */
    }
}