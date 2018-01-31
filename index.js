var katzDeli = [];

function takeANumber(katzDeliLine,customer) {
  katzDeliLine.push(customer)
  return `Welcome, ${customer}. You are number ` + (katzDeliLine.length) + ` in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.shift();
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    for (let i=0;i<katzDeliLine.length;i++) {
      var line = `${i+1}. ` + katzDeliLine[i]
      if (i+1 != katzDeliLine.length) {
        line = line + ', '
      }
    var list = ''
    list = list + line
    }
    return "The line is currently: " + list
  } else {
    return "The line is currently empty."
  }
}