var readlineSync = require('readline-sync');

//********************START PREFERENCE
var Preference = function(catagory){
    this.catagory = catagory;
}
//********************END PREFERENCE

//********************START BARTENDER
var Bartender = function(pantry){
    var myName = readlineSync.question('May I have your name: Bartender? ');
    this.name = myName;
    this.pantry = pantry;
    //console.log("My Pantry " + JSON.stringify(this.pantry.ingredients));
    //console.dir(this.pantry.ingredients);
}
Bartender.prototype.createDrink = function(customer){
    //console.dir(customer);
    
    customer.preferenceList.forEach(function(pref){
        
        console.log(pref.catagory);

        
    });
}
//********************END BARTENDER

//********************START CUSTOMER
var Customer = function(name){
    this.name = name;
    this.preferenceList = [];
}
Customer.prototype.getPreferences = function(qList){
    var custName = this.name;
    var pList = this.preferenceList;
    var mytempprefIng;
    qList.forEach(function(quest){
        if (readlineSync.keyInYN(quest.text)) {    
            console.log("Ok, " + quest.catagory + " goes in your preferences.");
            mytempprefIng = new Preference(quest.catagory);  
            pList.push(mytempprefIng);
        } else {
          console.log("Understood!! No " + quest.catagory + " drinks for " + custName); 
        }
    });
}
//********************END CUSTOMER
var Question = function(catagory, text){
    this.catagory = catagory;
    this.text = text;
}
var Ingredient = function(catagory, name, quantity){
    this.catagory = catagory;
    this.name = name;
    this.quantity = quantity;
}
var Pantry = function(itemList){
    this.ingredients = itemList;
}
//MAIN FUNCTIONALITY START
//MAIN FUNCTIONALITY START
//MAIN FUNCTIONALITY START
//MAIN FUNCTIONALITY START

//Question Objects


//Ingredient Objects


var questionList = [];
var ingredientList = [];

//Push the question objects into an array
questionList = pushQuestions();
ingredientList = pushIngredients();

var pantryList = new Pantry(ingredientList);

var customerObject = createCustomer();
customerObject.getPreferences(questionList);

var bartender = new Bartender(pantryList);

bartender.createDrink(customerObject);

//MAIN FUNCTIONALITY END
//MAIN FUNCTIONALITY END
//MAIN FUNCTIONALITY END
//MAIN FUNCTIONALITY END


//*************************FUNCTIONS
//*************************FUNCTIONS
//*************************FUNCTIONS
//*************************FUNCTIONS

function pushQuestions(){
    
    var q0 = new Question("Strong", "Do you like strong?");
    var q1 = new Question("Salty", "Do you like salty?");
    var q2 = new Question("Bitter", "Do you like bitter?");
    var q3 = new Question("Sweet", "Do you like sweet?");
    var q4 = new Question("Fruity", "Do you like fruity?");
    
    var tempArray = [];
    var evalString = "";
    
    for(var i = 0; i <= 4; i++){
        evalString = "q" + i;
        tempArray.push(eval(evalString));
    }
    
    return tempArray;

}

function pushIngredients(){
    
    var ing0 = new Ingredient("Strong", "Rum", 20);
    var ing1 = new Ingredient("Strong", "Whisky", 20);
    var ing2 = new Ingredient("Strong", "Gin", 20);

    var ing3 = new Ingredient("Salty", "Olive", 20);
    var ing4 = new Ingredient("Salty", "Salt", 20);
    var ing5 = new Ingredient("Salty", "Bacon", 20);

    var ing6 = new Ingredient("Bitter", "Bitters", 20);
    var ing7 = new Ingredient("Bitter", "Tonic", 20);
    var ing8 = new Ingredient("Bitter", "Lemon", 20);

    var ing9 = new Ingredient("Sweet", "Sugar", 20);
    var ing10 = new Ingredient("Sweet", "Honey", 20);
    var ing11 = new Ingredient("Sweet", "Cola", 20);

    var ing12 = new Ingredient("Fruity", "Orange", 20);
    var ing13 = new Ingredient("Fruity", "Cassis", 20);
    var ing14 = new Ingredient("Fruity", "Cherry", 20);

    var tempArray = [];
    var evalString = "";
    
    for(var i = 0; i <= 14; i++){
        evalString = "ing" + i;
        tempArray.push(eval(evalString));
    }
    
    return tempArray;

}

function createCustomer(){
    var myName = readlineSync.question('May I have your name? ');
    
    console.log('Hi ' + myName + '!');
    
    var tempCust = new Customer(myName);
    
    return tempCust;
    
}

function getAnswers(){
    
    
}