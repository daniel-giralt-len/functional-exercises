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


console.log('------------------------------------------------------------------------------')

const iterate2 = () => {
  next = iterator => iterator += 1
  previous = iterator => iterator -= 1
  log = iterator => console.log(iterator)

  let iterator = 4
  log(iterator)
  iterator = next(iterator)
  iterator = next(iterator)
  log(iterator)
  iterator = previous(iterator)
  log(iterator)
}

iterate2()