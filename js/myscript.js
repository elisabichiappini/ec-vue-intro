/*                          javascript                      */
const h1Element = document.querySelector('h1');
const inputElement = document.querySelector('input');

inputElement.addEventListener('input', function(event) {
    console.log('sto ascoltando questo evento');
    // console.log(event.target.value);
    console.log(this.value);
    //  qui dico all'elementoh1 di sovrascriversi il valore che inserisco nell'input
    h1Element.innerHTML = this.value;
})
