var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  //katzDeliLine += 1;
  //console.log("Welcome, ${name}. You are number ${katzDeliLine} in line")
  for (let i = 0; i < katzDeliLine.length; i++) {
    katzDeli.push(name);
  }
  console.log(`Welcome, ${name}. you are number ${katzDeliLine.length} in line`)

    //katzDeliLine = katzDeliLine +1;
    //katzDeli.push(name);
  //}
  //return katzDeliLine.length;
}
