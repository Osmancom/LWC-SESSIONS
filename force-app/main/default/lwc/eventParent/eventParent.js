import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {
    //2-
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
    //D- 
    handleClick1(event) {
        alert("Child butona tiklandi");
    }
    //iv ve Deploy
    handleClick2(event) {
        alert("Handle 2 fonksiyonu calisti");
    }

    //iii) renderedCallback fonksiyonu kullanilmalidir. Bu fonksiyon child'daki
    //event'leri parent'a baglamakta kullanilir.
    renderedCallback() {
        this.template.querySelector("c-event-child1").addEventListener("click", this.handleClick2);
    }
}