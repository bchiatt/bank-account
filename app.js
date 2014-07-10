//Resources

var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var startBal = 1000;
var add = [];
var minus = [];

//User Prompt

var response = prompt('Would you like to (d)eposit funds, (w)ithdraw funds, or (q)uit?');
while (response != 'q'){
  if (response === 'd') {
    amount = prompt("How much would you like to deposit? $");
    amount = parseInt(amount);
    add.push(amount);
  }else if (response === 'w'){
    amount = prompt("How much would you like to withdraw? $");
    amount = parseInt(amount);
    minus.push(amount);
  }else{
    console.log("please enter only 'd', 'w' or 'q'.");
  }
  response = prompt('Would you like to (d)eposit funds, (w)ithdraw funds, or (q)uit?');
}

//Calculations

var sumAdd = 0;
var sumMinus = 0;

for (var i=0; i<add.length; i++){
  sumAdd += add[i];
}

for (var i=0; i<minus.length; i++){
  sumMinus += minus[i];
}

var endBal = startBal + sumAdd - sumMinus;
if(endBal <0){
  console.log('');
  console.log('');
  console.log('You have overdrawn and have received a $50 penalty');
  endBal -= 50;
}

//Output

console.log('');
console.log('');
console.log('You made the following deposits today.');
for (var i = 0;i<add.length; i++){
  console.log(chalk.green('$'+ add[i]));
}
console.log('You made the following withdrawals today.');
for (var i = 0;i<minus.length; i++){
  console.log(chalk.red('$'+ minus[i]));
}
console.log('You started with $' + startBal, 'and finished with $' + endBal + '.');
console.log('Thank you for your business!');
