var katzDeli = [];

function takeANumber(katzDeliLine,customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ` + (katzDeliLine.length) + ` in line.`
}

function nowServing(){
  if (katzDeli.length > 0) {
    return "Currently serving " + katzDeli[0]
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    for (let i=0;i<katzDeliLine.length;i++) {
      var line = `${i}.` + katzDeliLine[i]
      if (i != katzDeliLine.length) {
        line = line + ', '
      }
    var list = list + line
    }
    return "The line is currently: " + list
  } else {
    return "There is nobody waiting to be served!"
  }
}