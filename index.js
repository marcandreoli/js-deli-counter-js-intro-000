var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  };

function nowServing() {
  if(katzDeli === undefined || katzDeli.length == 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${katzDeli}.`;
    katzDeli.shift();
    return katzDeli;
  }
}
