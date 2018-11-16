class InternetWatch {
  updateHour() {
    this.hour = new Date()
  }
  tellHour() {
    console.log(this.hour)
  }
}

class AppleWatch extends InternetWatch { }
class AndroidWatch extends InternetWatch {
  updateHour() {
    this.hour = 'midnight'
  }
}
class ForgeryWatch extends InternetWatch { }

const watches = [new ForgeryWatch(), new ForgeryWatch(), new InternetWatch(), new AndroidWatch(), new AppleWatch()]

setInterval(() => {
  watches.forEach(watch => {
    watch.updateHour()
    watch.tellHour()
  })
  console.log('--------------------------')
}, 1000)
