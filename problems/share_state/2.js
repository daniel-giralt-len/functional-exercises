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
