var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  };

function nowServing() {
  if(katzDeliLine.length = 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving ${katzDeliLine}"
  }
}
