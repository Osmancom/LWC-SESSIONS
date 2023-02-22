import { LightningElement} from 'lwc'; //1- wire import edilmelidir //A2- wire'i sildik
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
//2- AccountController adinda bir class ve getAccounts() adinda bir method olusturmaliyiz

export default class WireOrnek extends LightningElement {
    filterWord = ''; //3- Kullanicinin girdigi arama kelimesi bunun icine yuklenecek
    accounts; 
    error;
            //A1- wire'i yoruma dusurdum
    //@wire(getAccounts, { filter: '$filterWord' }) accounts; //4- method, methodun icinde yapilacak filtreleme, sonucu icinde tutacak variable (accounts)
    //4-1- filter kelimesi Apex method'unun parametre adi olmalidir
    //4-2- filterWord'un basina, dinamik hale getirmek icin $ isareti konulur.
    //5- class'imizi olusturalim

    //9- inputa girilen yazilari yakalayip filterWord'e yukledik
    handleInput(event) {
        this.filterWord = event.target.value;
    }

    //B- Yeni bir fonksiyon olusturacagiz.Bu fonksiyonu da butonla cagiracagiz
    handleGetAccount() {
        getAccounts({ filter: this.filterWord }) //C- $ isareti olmayack cunku dinamik olmayacak.Butona basilinca gelecekler
            .then((result) => {
                this.accounts = result;
                this.error = undefined; //account'lar geldiyse hata bostur
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined; //hata varsa Account'lar bostur.
            });
        //D- HTML'de buton icinde handleGetAccount'u olusturalim
    }
}