document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'src/images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'src/images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'src/images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'src/images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'src/images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'src/images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'src/images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'src/images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'src/images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'src/images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'src/images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'src/images/hotdog.png'
    }
  ]
  cardArray.sort(() => 0.5 - Math.random())
//  math.random returns a random number between 0 and 1 
// if that random number gives you something less then 0.5 then you get a negative number 
// if it is over the you get a positive number ... sorting at random 


  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'src/images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }
// our function is going to create a card,
// give the card the attribute of the src and image path 
// give each card its oen data-id 
// then we will append the car inside the grid class


  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'src/images/blank.png')
      cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'src/images/white.png')
      cards[optionTwoId].setAttribute('src', 'src/images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'src/images/blank.png')
      cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }
//  getting the attribute of data- id 
// pushing in the name into the empty array of cardsId 
// we are storing the names in one and storing the ids in the other
// we also want to sow the image when we flip the card by setting that attribute 
// the if statement id to see if they do match if they dont flip them over 

  createBoard()
})
