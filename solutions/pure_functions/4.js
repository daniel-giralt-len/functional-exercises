//make sure the pure function doesn't depend on a global state (breakerOn)
let breakerOn = false

class Light {
  constructor() {
    this.switchOn = true
  }

  isOn() {
    return breakerOn && this.switchOn
  }

}

const light = new Light()
console.log(light.isOn())
breakerOn = true
console.log(light.isOn())


























//pure
breakerOn = false
class PureLight {
  constructor() {
    this.switchOn = true
  }

  isOn(currentBreakerOn) {
    return this.switchOn && currentBreakerOn
  }
}
const pureLight = new PureLight()
console.log(pureLight.isOn(breakerOn))
console.log(pureLight.isOn(false))
breakerOn = true
console.log(pureLight.isOn(breakerOn))
console.log(pureLight.isOn(true))