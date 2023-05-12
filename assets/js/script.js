/* var image = document.createElement("img");
var imageParent = document.getElementById("question-img");
searchPic = new Image();
searchPic.src = "assets/images/red.jpg";
image.src = searchPic.src;            // image.src = "IMAGE URL/PATH"
imageParent.appendChild(image);
//
let randomKey = keys[Math.floor(Math.random()*keys.length)];
undefined
console.log(obj[randomKey]); */

/* Start Game after DOM finished loading.. */

let welcome = document.getElementById("welcome");
let welcomeArea = document.getElementById("welcome-area");
let gameArea = document.getElementById("game-area");
let welcomePlayer = document.getElementById("welcome-player");
let change = document.getElementById("lp-div");
let userName = document.getElementById("name-id");
let submit = document.getElementById("submit");
let start = document.getElementById("next");
let buttons = document.getElementsByTagName('button');
let quiz;




document.addEventListener("DOMContentLoaded", function(){
    
    appendImage('assets/images/welcome.jpg');
    appendQuiz('Are you ready?', 'Yes' , 'No');

    
    start.addEventListener('click', runGame);    

}); 

change.addEventListener('click', function(){
    welcome.classList.add('hide');
    welcomeArea.classList.add('hide');
    welcomePlayer.classList.remove('hide');
    gameArea.classList.remove('hide');
});

submit.addEventListener('click', function(){
    welcomePlayer.innerText = `Welcome ${userName.value} !`;
});




function runGame(){

    document.querySelector('#option1').disabled = false;
    document.querySelector('#option2').disabled = false;
 
    start.innerText = 'Next';
    let quizDone =[''];
    let category = getCategory();   
    quiz = categoryQuestionSelector(category);
    appendImage(quiz[1]);
    appendQuiz(quiz[0],quiz[2],quiz[3]);
    quizDone.push(quiz[2]);
   


}
      
function getCategory(){
    let category = ['colors', 'fruits' , 'things','animals'];
    let randomCategory = Math.floor(Math.random()*category.length);
    return category[randomCategory] ;
}

function categoryQuestionSelector(category){
    
    let quiz;

    if (category === 'colors'){
        quiz = colorQuestions();
    } else if (category === 'fruits'){
        quiz = fruitQuestions();
    } else if (category === 'things'){
        quiz = thingQuestions();
    } else if (category === 'animals'){
        quiz = animalQuestions();
    }

    return quiz;

    }


function colorQuestions(){
    console.log("color Questions called!!!");
    let wrongAnswers = ['Red', 'Green', 'Blue', 'Pink', 'Black', 
                    'White', 'Orange', 'Purple', 'Yellow', 'Brown'];
    let questions = ['What color is this?', 'Do you know this color?', 'Can you guess this color?'];
    let colorImagePaths = { Red : 'assets/images/red.jpg' ,
                 Green : 'assets/images/green.jpg',
                 Blue : 'assets/images/blue.jpg',
                 Pink : 'assets/images/pink.jpg',
                 Black : 'assets/images/black.jpg',
                 White : 'assets/images/white.jpg',
                 Orange : 'assets/images/orange.jpg',
                 Purple : 'assets/images/purple.jpg',
                 Yellow : 'assets/images/yellow.jpg',
                 Brown : 'assets/images/brown.jpg'
    };

    let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
    let keys = Object.keys(colorImagePaths);
    let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
    let quizPath = colorImagePaths[rightAnswer];
    let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
    return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
}


function fruitQuestions(){
    console.log("Fruit Questions called!!!");
    let wrongAnswers = ['Apple', 'Banana', 'Grapes', 'Blueberry', 'DragonFruit', 
    'Raspberry', 'Orange', 'PineApple', 'Pear', 'Strawberry'];
    let questions = ['What delicious fruit is this?', 'Do you know this tasty fruit?', 'Can you guess this healthy fruit?'];
    let colorImagePaths = { Apple : 'assets/images/apple.jpg' ,
                        Banana : 'assets/images/banana.jpg',
                        Grapes : 'assets/images/grapes.jpg',
                        Blueberry : 'assets/images/blueberry.jpg',
                        DragonFruit : 'assets/images/dragon-fruit.jpg',
                        Raspberry : 'assets/images/raspberry.jpg',
                        Orange : 'assets/images/orange(2).jpg',
                        PineApple : 'assets/images/pine-apple.jpg',
                        Pear : 'assets/images/pear.jpg',
                        Strawberry : 'assets/images/strawberry.jpg'
};

let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
let keys = Object.keys(colorImagePaths);
let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
let quizPath = colorImagePaths[rightAnswer];
let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
}


function thingQuestions(){
    console.log("Things Questions called!!!");
    let wrongAnswers = ['Eggs', 'Flower', 'GarbageTruck', 'Glasses', 'Pencil', 
    'Plate', 'Rock', 'Scissors', 'Shovel', 'Snow'];
    let questions = ['What thing is this?', 'Do you know this thing?', 'Can you guess this thing?'];
    let colorImagePaths = { Eggs : 'assets/images/Eggs.jpg' ,
                        Flower : 'assets/images/flower.jpg',
                        GarbageTruck : 'assets/images/garbage-truck.jpg',
                        Glasses : 'assets/images/glasses.jpg',
                        Pencil : 'assets/images/pencil.jpg',
                        Plate : 'assets/images/plate.jpg',
                        Rock : 'assets/images/rock.jpg',
                        Scissors : 'assets/images/scissors.jpg',
                        Shovel : 'assets/images/shovel.jpg',
                        Snow : 'assets/images/snow.jpg'
};

let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
console.log(quizQuestion);
let keys = Object.keys(colorImagePaths);
let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
console.log(rightAnswer);
let quizPath = colorImagePaths[rightAnswer]; 
console.log(quizPath);
let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
console.log(wrongAnswer);
return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
}



function animalQuestions(){
    console.log("Animal Questions called!!!");
    let wrongAnswers = ['Cat', 'Dog', 'Lion', 'Elephant', 'Giraffe', 
    'Cow', 'Chicken', 'Turtle', 'Tortoise', 'Fish'];
    let questions = ['What animal is this?', 'Do you know this animal?', 'Can you guess this beautiful animal?'];
    let colorImagePaths = { Cat : 'assets/images/cat.jpg' ,
                        Dog : 'assets/images/dog.jpg',
                        Lion : 'assets/images/lion.jpg',
                        Elephant : 'assets/images/elephant.jpg',
                        Giraffe : 'assets/images/giraffe.jpg',
                        Turtle : 'assets/images/turtle.jpg',
                        Tortoise : 'assets/images/tortoise.jpg',
                        Fish : 'assets/images/fish.jpg',
                        Chicken : 'assets/images/chicken.jpg',
                        Cow : 'assets/images/cow.jpg'
};

let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
let keys = Object.keys(colorImagePaths);
let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
let quizPath = colorImagePaths[rightAnswer]; 
let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
}



function selectWrongAnswer(wrongAnswers,rightAnswer){

    for (let i in wrongAnswers){
        if(wrongAnswers[i] === rightAnswer) {
            wrongAnswers.splice(i, 1);
            break;
        }
    }
    return wrongAnswers[Math.floor(Math.random()*wrongAnswers.length)];
}


function appendImage(pathSrc){
    let imageParent = document.getElementsByTagName("img");
    imageParent[0].src = pathSrc;            // image.src = "IMAGE URL/PATH"
    
}

function appendQuiz(question, rightAnswer, wrongAnswer){

    let que = document.getElementById("question");
    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    que.innerText = question;
    let options = [rightAnswer, wrongAnswer];
    let num = Math.floor(Math.random()*options.length);
    option1.innerText = options[num];
    options.splice(num, 1);
    option2.innerText = options[0];
}


function checkResult(element){
    if (element.innerText === quiz[2].toUpperCase() ){
        console.log("You are right!!!");
        incrementScore();
       
    } else  {
        console.log("Your answer is wrong!");
        decrementScore();
    }
    document.querySelector('#option1').disabled = true;
    document.querySelector('#option2').disabled = true;
    let qCount = parseInt(document.getElementById("qCount").innerText);
    document.getElementById("qCount").innerText = ++qCount;
}


function incrementScore() {

    console.log('increment score called!');
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore ;
    console.log(oldScore);
}

function decrementScore() {

    console.log('deccrement score called!');
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = --oldScore ;
    console.log(oldScore);
 

}


