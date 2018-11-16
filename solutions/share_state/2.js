const getWorthInCopper = coinType => {
  const coinWorths = {
    copper: 1,
    silver: 10,
    gold: 100,
    platinum: 1000
  }
  return coinWorths[coinType]
}

class Coin {
  constructor(type) {
    this.type = type
    this.worth = getWorthInCopper(this.type)
  }
}

class Bank {
  constructor() {
    this.coins = {}
  }
  store(coin) {
    if (!this.coins[coin.type]) {
      this.coins[coin.type] = []
    }
    this.coins[coin.type].push(coin)
    return this
  }
  examine() {
    console.log(this.coins)
    return this
  }
}

const b = new Bank()
  .store(new Coin('copper'))
  .store(new Coin('copper'))
  .store(new Coin('copper'))
  .store(new Coin('copper'))
  .store(new Coin('copper'))
  .store(new Coin('gold'))
  .store(new Coin('silver'))
  .store(new Coin('silver'))
//b.coins.copper[0].type = 'platinum'
b.examine()

console.log('------------------------------------------------------------------------------')

class Coin2 {
  constructor(type) {
    this.worth = Coin2.getWorthInCopper(type)
  }
  static getWorthInCopper(coinType) {
    const coinWorths = {
      copper: 1,
      silver: 10,
      gold: 100,
      platinum: 1000
    }
    return coinWorths[coinType]
  }
}

class Bank2 {
  constructor() {
    this.coins = {}
  }
  store(coin) {
    if (!this.coins[coin.type]) {
      this.coins[coin.type] = []
    }
    this.coins[coin.type].push(coin)
    return this
  }
  examine() {
    console.log(this.coins)
    return this
  }
}

const b2 = new Bank2()
  .store(new Coin2('copper'))
  .store(new Coin2('copper'))
  .store(new Coin2('copper'))
  .store(new Coin2('copper'))
  .store(new Coin2('copper'))
  .store(new Coin2('gold'))
  .store(new Coin2('silver'))
  .store(new Coin2('silver'))
//b.coins.copper[0].worth = '1000'
b2.examine()

console.log('------------------------------------------------------------------------------')
class Bank3 {
  constructor() {
    this.coins = {}
  }
  store(type) {
    if (!this.coins[type]) {
      this.coins[type] = {
        amount: 0,
        worth: Bank3.getWorthInCopper(type)
      }
    }
    this.coins[type].amount += 1
    return this
  }
  examine() {
    console.log(this.coins)
    return this
  }
  static getWorthInCopper(coinType) {
    const coinWorths = {
      copper: 1,
      silver: 10,
      gold: 100,
      platinum: 1000
    }
    return coinWorths[coinType]
  }
}

const b3 = new Bank3()
  .store('copper')
  .store('copper')
  .store('copper')
  .store('copper')
  .store('copper')
  .store('gold')
  .store('silver')
  .store('silver')
//b.coins.copper[0].worth = '1000'
b3.examine()