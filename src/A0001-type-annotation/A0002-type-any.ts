// Utilizar any apenas em ultimo caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage('gasf'));
console.log(showMessage(1));
console.log(showMessage('dasf'));
