var readlineSync = require('readline-sync');

var Customer = function(name, preferences){
    this.name = name;
    this.preferences = preferences;
}

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

/*
 * In the client code
 */

var questionArray = [];
var customerArray = [];

var q0 = new Question("Sweet", "Do you like sweet?");
var q1 = new Question("Strength", "Do you like strong?");
var q2 = new Question("Bitter", "Do you like bitter?");
var q3 = new Question("Fruity", "Do you like fruity?");
var q4 = new Question("Salty", "Do you like salty?");



//Push the question objects into an array
questionArray = pushQuestions();
console.log(questionArray);

//Determine User Info
getAnswers(questionArray)



var ing = new Ingredient("Strong", "Rum", 20);

function pushQuestions(){
    
    var tempArray = [];
    var dynamicString = "";
    
    for(var i = 0; i <= 4; i++){
        dynamicString = "q" + i;
        tempArray.push(eval(dynamicString));
    }
    
    return tempArray;

}