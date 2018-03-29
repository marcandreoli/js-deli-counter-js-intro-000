var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  for (var i = 0; i < katzDeliLine.length; i++) {
    katzDeliLine +=1;
    katzDeli.push(name);
  }
  return katzDeliLine.length;
}
