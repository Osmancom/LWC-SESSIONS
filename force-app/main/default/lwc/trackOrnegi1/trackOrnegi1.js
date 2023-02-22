import { LightningElement, track } from 'lwc';

export default class TrackOrnegi1 extends LightningElement {
   @track customer = {
        adi: "John",
        soyadi: "Conner",
        yasi: 35
    }
    trackOrnek(event) {
        this.customer.adi = event.target.value;
    }
}