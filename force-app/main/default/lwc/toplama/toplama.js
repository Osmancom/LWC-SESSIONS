import { LightningElement } from 'lwc';

export default class Toplama extends LightningElement {
    //1.yol: dinamik degil
    num1 = 5;
    num2 = 6;

    get toplam() {
        //return this.num1 + this.num2;
        //return `${this.num1} + ${this.num2}`; conca. yapti.
        return `${parseInt(this.num1) + parseInt(this.num2)}`;
    }
    //2.yol: dinamik
    handleNum1(event) {
        this.num1 = event.target.value;
    }
    handleNum2(event) {
        this.num2 = event.target.value;
    }
}