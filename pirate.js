var readlineSync = require('readline-sync');
//  MAX = 60, MIN = 0, value = 15, key;
//console.log('\n\n' + (new Array(20)).join(' ') +
//  '[Z] <- -> [X]  FIX: [SPACE]\n');
//while (true) {
//  console.log('\x1B[1A\x1B[K|' +
//    (new Array(value + 1)).join('-') + 'O' +
//    (new Array(MAX - value + 1)).join('-') + '| ' + value);
//  key = readlineSync.keyIn('',
//    {hideEchoBack: true, mask: '', limit: 'zx '});
//  if (key === 'z') { if (value > MIN) { value--; } }
//  else if (key === 'x') { if (value < MAX) { value++; } }
//  else { break; }
//}
//console.log('\nA value the user requested: ' + value);

var Question = function(flavor, text){
    this.flavor = flavor;
    this.text = text;
}

var Ingredient = function(flavour, name, amount){
    this.flavour = flavour;
    this.name = name;
    this.amount = amount;
}

var Pantry = function(){
    this.ingredients = [];    
}

Pantry.prototype.add = function(ingredient){
    this.ingredients.push(ingredient);
}

Pantry.prototype.getIngredient = function(name, amount){
    //code to remove amount of name ingredient    
}

/**
 * In the client code
 */
var questionArray = [];
var q1 = new Question("Sweet", "Do you like sweet?");
questionArray.push(q1);
console.log(questionArray[0].flavor);
var ing = new Ingredient("Strong", "Rum", 20);