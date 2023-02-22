import { api, LightningElement } from 'lwc';

export default class SetterChild extends LightningElement {
    //11- customer degiskenini olusturalim ve bunu parent'ta kullanabilmek icin @api ekleyelim
    @api
    customer;
}