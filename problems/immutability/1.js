//we want the story of the cards played
const shuffleArray = require('shuffle-array')

class PokerDeck {
  constructor() {
    this.deck = PokerDeck.getOrderedDeck()
  }
  static getOrderedDeck() {
    const suite = ['clubs', 'spades', 'diamond', 'hearts']
    const numbers = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    return suite.reduce((acc, suite) => {
      return acc.concat(numbers.map(number => ({ suite, number })))
    }, [])
  }

  shuffle() {
    this.deck = shuffleArray(this.deck)
    return this
  }

  draw() {
    const index = Math.floor(Math.random() * this.deck.length)
    return this.deck.slice(index, index + 1)
  }
}

const d = new PokerDeck().shuffle()
const numberOfDraws = new Array(20).fill(1)
numberOfDraws.forEach(() => console.log(d.draw()))
//now I want to know the 12th drawn card.

console.log('------------------------------------------------------------------------------')

class StateStory {
  constructor(state) {
    this.story = []
    this.set(state)
  }
  set(newState) {
    this.story.push(newState)
    return this
  }
  get(stepsBack = 0) {
    return this.story[this.story.length - 1 - stepsBack]
  }
}

class PokerDeck2 {
  constructor() {
    this.state = new StateStory({
      deck: PokerDeck2.getOrderedDeck(),
    })
  }
  static getOrderedDeck() {
    const suite = ['clubs', 'spades', 'diamond', 'hearts']
    const numbers = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    return suite.reduce((acc, suite) => {
      return acc.concat(numbers.map(number => ({ suite, number })))
    }, [])
  }

  shuffle() {
    this.state.set({
      deck: shuffleArray(this.state.get().deck),
    })
    return this
  }

  draw() {
    const { deck } = this.state.get()
    const index = Math.floor(Math.random() * deck.length)
    const lastDrawn = deck.slice(index, index + 1)[0]
    this.state.set({
      deck,
      lastDrawn
    })
    return lastDrawn
  }
}

const d2 = new PokerDeck2().shuffle()
const numberOfDraws2 = new Array(20).fill(1)
numberOfDraws2.forEach(() => console.log(d2.draw()))
console.log(`12th to last card drawn was ${JSON.stringify(d2.state.get(12).lastDrawn)}`)

//now I want to know the 12th drawn card.

console.log('------------------------------------------------------------------------------')

class StateStory2 {
  constructor(state, label) {
    this.story = []
    this.set(state, label)
  }
  set(state, label = '') {
    this.story.push({ state, label })
    return this
  }
  get(stepData = { relativeSteps: 0 }) {
    const { label, relativeSteps } = stepData
    if (label) {
      const lastLabel = this.story
        .filter(state => state.label === label)
        .pop()
      return this.story[this.story.findIndex(lastLabel) - 1 + relativeSteps].state
    }
    return this.story[this.story.length - 1 + relativeSteps].state
  }
}

class PokerDeck3 {
  constructor() {
    this.state = new StateStory2({
      deck: PokerDeck3.getOrderedDeck(),
    }, 'CREATION')
  }
  static getOrderedDeck() {
    const suite = ['clubs', 'spades', 'diamond', 'hearts']
    const numbers = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    return suite.reduce((acc, suite) => {
      return acc.concat(numbers.map(number => ({ suite, number })))
    }, [])
  }

  shuffle() {
    this.state.set({
      deck: shuffleArray(this.state.get().deck),
    }, 'SHUFFLE')
    return this
  }

  draw() {
    const { deck } = this.state.get()
    const index = Math.floor(Math.random() * deck.length)
    const lastDrawn = deck.slice(index, index + 1)[0]
    this.state.set({
      deck,
      lastDrawn
    }, 'DRAW')
    return lastDrawn
  }
}

const d3 = new PokerDeck3().shuffle()
const numberOfDraws3 = new Array(20).fill(1)
numberOfDraws3.forEach(() => console.log(d3.draw()))
console.log(`I want the 2nd drawn card after the deck was shuffled: it was ${JSON.stringify(d3.state.get({ label: 'SHUFFLE', relativeSteps: 2 }).lastDrawn)}`)