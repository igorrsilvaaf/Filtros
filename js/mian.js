//vai filtrar pelo meu input
const filterElement = document.querySelector('header input')

//Vais pesquisar dentro da minha class cards tudo que estiver dentro da minha lista
const cards = document.querySelectorAll('.cards li')

//FilterCards é o nome da minha funçao
//adicionado também um evendo de input para a const filterElement
filterElement.addEventListener('input', filterCards)

function filterCards(){
	if(filterElement.value != ''){
		for(let card of cards){ //estou criando uma variavel para cada card que eu tenho
			let title = card.querySelector('h2')
			title = title.textContent.toLocaleLowerCase()
			let filterText = filterElement.value.toLocaleLowerCase()
			if(!title.includes(filterText)){
			  card.style.display = "none"
      }else{
        card.style.display = "block"
      }
		}
	}else{
		for(let card of cards){
			card.style.display = "block"
		}
	}

}