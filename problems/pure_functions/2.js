//turn this clock object into a function-based program

class Clock {
  constructor() {
    this.update()
  }
  update() {
    this.currentTime = `Epoch: ${Date.now()}`
  }
  log() {
    console.log(this.currentTime)
  }
}

const clock1 = new Clock()
clock1.log()
//clock1.currentTime = 'oh noes'
clock1.update()
clock1.log()

