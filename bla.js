function fizzBuzz () {
  console.log('Fizzing...')
  for (var i = 1; i <= 100; i++) {
    console.log(
      !(i % (3 * 5)) ? 'fizzbuzz' :
      !(i % 3) ? 'fizz' :
      !(i % 5) ? 'buzz' : i
    )
  }
}

fizzBuzz()


// Elegant way of a + b + c
