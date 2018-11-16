//make pure functions out of these functions

const iterate = () => {
  next = () => iterator++
  previous = () => iterator--
  log = () => console.log(iterator)

  let iterator = 4
  log()
  next()
  next()
  //iterator = 0
  log()
  previous()
  log()
}

iterate()

