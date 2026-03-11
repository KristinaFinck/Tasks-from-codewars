/*
Calculating with Functions

Write functions that allow the following:

seven(times(five())) // 35
four(plus(nine()))   // 13
eight(minus(three())) // 5
six(dividedBy(two())) // 3
*/
function zero(operation) {
  if (!operation) {
    return 0
  }
  return operation(0)
}

function one(operation) {
  if (!operation) {
    return 1
  }
  return operation(1)
}

function two(operation) {
  if (!operation) {
    return 2
  }
  return operation(2)
}

function three(operation) {
  if (!operation) {
    return 3
  }
  return operation(3)
}

function four(operation) {
  if (!operation) {
    return 4
  }
  return operation(4)
}

function five(operation) {
  if (!operation) {
    return 5
  }
  return operation(5)
}

function six(operation) {
  if (!operation) {
    return 6
  }
  return operation(6)
}

function seven(operation) {
  if (!operation) {
    return 7
  }
  return operation(7)
}

function eight(operation) {
  if (!operation) {
    return 8
  }
  return operation(8)
}

function nine(operation) {
  if (!operation) {
    return 9
  }
  return operation(9)
}

function plus(addend) {
  return function (number) {
    return number + addend
  }
}

function minus(subtrahend) {
  return function (number) {
    return number - subtrahend
  }
}

function times(factor) {
  return function (number) {
    return number * factor
  }
}

function dividedBy(divisor) {
  return function (number) {
    return Math.floor(number / divisor)
  }
}