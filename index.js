// Code your solutions in this file
function writeCards(names, event){
  const messageArr = [];
  for (let i = 0; i < names.length; i++){
    messageArr[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift.`;
  }
  return messageArr;
}
  
function countdown(number){
  while(number >=0)
  {
    console.log(number);
    number--;
  }
} 