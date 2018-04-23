var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}
function nowServing() {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else {
    var served = katzDeliLine.slice(0, 1);
    delete katzDeliLine[0];
    return `Currently serving ${served}.`;
  }
}