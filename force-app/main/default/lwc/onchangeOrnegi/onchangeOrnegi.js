import { LightningElement } from 'lwc';

export default class OnchangeOrnegi extends LightningElement {
    isimSoyisim; /* 1- variable olustur */
    /* 4- handlerOnchange methodunu olustur */
    handlerOnchange(event) {
        this.isimSoyisim = event.target.value;
    }
}