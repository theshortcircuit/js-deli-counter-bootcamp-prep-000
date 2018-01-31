var katzDeli = [];

function takeANumber(katzDeliLine,customer) {
  
}

function nowServing(){
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine[0]
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
    }
  } else {
    return "There is nobody waiting to be served!"
  }
}