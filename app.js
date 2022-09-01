const cardArray = [
    {
        name: 'Lu',
        img: 'images/Lu.png'
    },
    {
        name: 'Amstrup',
        img: 'images/Amstrup.png'
    },
    {
        name: 'Christian',
        img: 'images/Christian.png'
    },
    {
        name: 'Elkjær',
        img: 'images/Elkjær.png'
    },
    {
        name: 'Niclas',
        img: 'images/Niclas.png'
    },
    {
        name: 'Poopwatch',
        img: 'images/Poopwatch.png'
    },
    {
        name: 'Nicho',
        img: 'images/Nicho.png'
    },
    {
        name: 'Emma',
        img: 'images/Emma.png'
    },
    {
        name: 'Viggo',
        img: 'images/Viggo.png'
    },
    {
        name: 'Kevin',
        img: 'images/Kevin.png'
    },  
    {
        name: 'Lu',
        img: 'images/Lu.png'
    },
    {
        name: 'Amstrup',
        img: 'images/Amstrup.png'
    },
    {
        name: 'Christian',
        img: 'images/Christian.png'
    },
    {
        name: 'Elkjær',
        img: 'images/Elkjær.png'
    },
    {
        name: 'Niclas',
        img: 'images/Niclas.png'
    },
    {
        name: 'Poopwatch',
        img: 'images/Poopwatch.png'
    },
    {
        name: 'Nicho',
        img: 'images/Nicho.png'
    },
    {
        name: 'Emma',
        img: 'images/Emma.png'
    },
    {
        name: 'Viggo',
        img: 'images/Viggo.png'
    },
    {
        name: 'Kevin',
        img: 'images/Kevin.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid') //# means ID of grid
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


function createBoard (){
    for(let i = 0; i<cardArray.length; i++){ // Index starter på 0
       const card = document.createElement('img')
       card.setAttribute('src', 'images/Blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard) //use function 'flipcard' when clicking
       gridDisplay.appendChild(card)
    }
}
createBoard()
function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

   // console.log(cards)
    //console.log('check for match!')

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/Blank.png')
        cards[optionTwoId].setAttribute('src', 'images/Blank.png')
        //alert('You have clicked the same image!')
    }

    else if (cardsChosen[0] == cardsChosen[1]){
       // alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }else {
        cards[optionOneId].setAttribute('src', 'images/Blank.png')
        cards[optionTwoId].setAttribute('src', 'images/Blank.png')
        //alert('Try again')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length === (cardArray.length/2)){
        resultDisplay.textContent = 'gg'
    }
} 

function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
   console.log (cardArray[cardId].name)
   cardsChosen.push(cardArray[cardId].name) //Push an item into the array
   cardsChosenIds.push(cardId)
   console.log(cardsChosen)
   console.log(cardsChosenIds)

   this.setAttribute('src', cardArray[cardId].img) //adds the image to the cardID
   if(cardsChosen.length === 2){
setTimeout(checkMatch, 500)
   }
}