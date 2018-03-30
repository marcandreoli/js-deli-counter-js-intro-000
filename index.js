var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
  };

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return `There is nobody waiting to be served!`;
  } else {
    katzDeliLine.shift();
    return `Currently serving ${katzDeliLine.shift()}.`;
    return katzDeliLine;
  }
};

function currentLine() {
  if (katzDeli.length==0) {
    return "The line is currently empty";
  } else {
    return `The line is currently: ${katzDeliLine}. ${katzDeli}`;
  }
}
