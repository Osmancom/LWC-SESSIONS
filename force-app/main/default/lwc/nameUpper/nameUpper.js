import { LightningElement } from 'lwc';

export default class NameUpper extends LightningElement {
    fName = "Ali";
    lName = "Can";

    get fullUpper() { //get methodu
        //return this.fName.toUpperCase() + ' ' + this.lName.toUpperCase();
        return `isim Soyisim : ${this.fName.toUpperCase()} ${this.lName.toUpperCase()}`;
    }
}