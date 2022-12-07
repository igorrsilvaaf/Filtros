const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function filterCards(){
    if(filterElement.value != ''){
        for (let card of cards){
            let texts = card.querySelector('p')
            texts = texts.textContent.toLocaleLowerCase()
            let filterText = filterElement.value.toLocaleLowerCase()
            if(!texts.includes(filterText)){
                card.style.display = "none"
            }else{
                card.style.display = "block"
            }
        }
    }else{
        for (let card of cards){
            card.style.display = "block"
        }
    }
}