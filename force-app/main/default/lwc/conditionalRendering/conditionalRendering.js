import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    flag = false; //1- bunu elle degilde, checkbox ile de yapabiliriz.
    display = false;

    handleOnchange(event) {
        this.display = event.target.checked;
    }
}