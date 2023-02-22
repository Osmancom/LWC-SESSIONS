import { LightningElement } from 'lwc';

export default class Car extends LightningElement {
    /* B- Bir degisken ve method olusturalim  */
    motorModeliDegeri;
    motor(event) {
        this.motorModeliDegeri = event.target.value;
    }
    /* C-maksadimiz carEngine'deki motor modelini owner'dan degistirmek */
}