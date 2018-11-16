class Booty {
  constructor(worth) {
    this.worth = worth
  }
  getShare() {
    this.worth -= 1
    return { worth: this.worth }
  }
}

class Pirate {
  constructor(plundered = false) {
    this.treasure = []
    this.plundered = plundered
  }
  plunder(booty) {
    this.treasure.push(booty)
  }
}

const booty = new Booty(6)
const pirates = [new Pirate(true), new Pirate(true), new Pirate(false), new Pirate(false), new Pirate(true)]

for (pirate of pirates) {
  if (pirate.plundered) {
    const treasure = booty.getShare()
    pirate.plunder(treasure)
  }
}

console.log(booty)
console.log(pirates)

console.log('------------------------------------------------------------------------------')

const booty2 = new Booty(6)
const pirates2 = [new Pirate(true), new Pirate(true), new Pirate(false), new Pirate(false), new Pirate(true)]

pirates2
  .filter(pirate => pirate.plundered)
  .forEach(pirate => pirate.plunder(booty2.getShare))

console.log(booty)
console.log(pirates)  