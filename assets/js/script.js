// Extracting elements using IDs from HTML

let welcome = document.getElementById("welcome");
let welcomeArea = document.getElementById("welcome-area");
let gameArea = document.getElementById("game-area");
let welcomePlayer = document.getElementById("welcome-player");
let change = document.getElementById("lp-div");
let userName = document.getElementById("name-id");
let submit = document.getElementById("submit");
let start = document.getElementById("yes");
let next = document.getElementById("next");
let qCount = document.getElementById("qCount");
let congrats = document.getElementById("congrats");
let winLose = document.getElementById("win-lose");
let finalScore = document.getElementById("final-score");
let scorePage = document.getElementById("score-page");
let score = document.getElementById("score");
let que = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let question = document.getElementById("question#");
let lastQue = document.getElementById("lastque");

// Declaring variables 

let quiz;
let colorImagePaths;
let fruitImagePaths;
let animalImagePaths;
let colorArray =[''], fruitArray=[''], thingArray=[''], animalArray=[''];
let quizDone =[''];
let count = parseInt(qCount.innerText);
let flag = 0; 

// Adding event listeners for events

document.addEventListener("DOMContentLoaded", function(){
    
    appendImage('assets/images/welcome.jpg');
    appendQuiz('Are you ready?', '---' , '---');
    userName.focus();
    start.addEventListener('click', runGame);  
}); 

userName.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        welcomePlayer.innerText = `Welcome ${userName.value} !`;
        submit.innerText = "Thank you!";
        console.log(userName.value);
    }
});
submit.addEventListener('click', function(){
    if (userName.value === ''){
        Swal.fire('Enter Username:')
    }else{
    welcomePlayer.innerText = `Welcome ${userName.value} !`;
    submit.innerText = "Thank you!";
    console.log(userName.value);}
});

change.addEventListener('click', function(){
    if (userName.value === ''){
        Swal.fire('Enter Username to proceed')
    }else{
    welcome.classList.add('hide');
    welcomeArea.classList.add('hide');
    welcomePlayer.classList.remove('hide');
    gameArea.classList.remove('hide');
    }
});


next.addEventListener('click',function(){
    if(flag === 1){
        runGame();
    } else { 
        Swal.fire(
            'You forgot to answer the question!!!.',
        )
    }
});
 
showAlert.click(function(){
    Swal.fire(
        'This is a customized alert box.',
    )
});

//Adding necessary functions

function runGame(){
    flag = 0;
    document.querySelector('#option1').disabled = false;
    document.querySelector('#option2').disabled = false;
    document.getElementById("option1").style.backgroundColor = null;
    document.getElementById("option2").style.backgroundColor = null;
    document.getElementById("option1").style.color = null;
    document.getElementById("option2").style.color = null;
   
    next.classList.remove('hide');
    start.classList.add('hide');

    let category = getCategory();   
    quiz = categoryQuestionSelector(category);
    appendImage(quiz[1]);
    appendQuiz(quiz[0],quiz[2],quiz[3]);
    quizDone.push(quiz[2]);
    incrementQuestion();
}
      
function getCategory(){
    let category = ['colors', 'fruits' , 'things','animals'];
    let randomCategory = Math.floor(Math.random()*category.length);
    return category[randomCategory] ;
}

function categoryQuestionSelector(category){
    

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

    let wrongAnswers = ['Red', 'Green', 'Blue', 'Pink', 'Black', 
                    'White', 'Orange', 'Purple', 'Yellow', 'Brown'];
    let questions = ['What color is this?', 'Do you know this color?', 'Can you guess this color?'];
    colorImagePaths = { Red : 'assets/images/red.jpg' ,
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
    for(let arr of colorArray){
        if (colorImagePaths.hasOwnProperty(arr)){
            delete colorImagePaths[arr];
        }
    }

    let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
    let keys = Object.keys(colorImagePaths);
    let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
    let quizPath = colorImagePaths[rightAnswer];
    let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
    colorArray.push(rightAnswer);
    return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
}


function fruitQuestions(){

    let wrongAnswers = ['Apple', 'Banana', 'Grapes', 'Blueberry', 'DragonFruit', 
    'Raspberry', 'Orange', 'PineApple', 'Pear', 'Strawberry'];
    let questions = ['What delicious fruit is this?', 'Do you know this tasty fruit?', 'Can you guess this healthy fruit?'];
    fruitImagePaths = { Apple : 'assets/images/apple.jpg' ,
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
    for(let arr of fruitArray){
        if (fruitImagePaths.hasOwnProperty(arr)){
         delete fruitImagePaths[arr];
     }
    }
    let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
    let keys = Object.keys(fruitImagePaths);
    let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
    let quizPath = fruitImagePaths[rightAnswer];
    let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
    fruitArray.push(rightAnswer);
    return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
    }


function thingQuestions(){

    let wrongAnswers = ['Eggs', 'Flower', 'GarbageTruck', 'Glasses', 'Pencil', 
    'Plate', 'Rock', 'Scissors', 'Shovel', 'Snow'];
    let questions = ['What thing is this?', 'Do you know this thing?', 'Can you guess this thing?'];
    let thingImagePaths = { Eggs : 'assets/images/Eggs.jpg' ,
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
    for(let arr of thingArray){
        if (thingImagePaths.hasOwnProperty(arr)){
            delete thingImagePaths[arr];
        }
    }
    let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
    let keys = Object.keys(thingImagePaths);
    let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
    let quizPath = thingImagePaths[rightAnswer]; 
    let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
    thingArray.push(rightAnswer);
    return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
    }



function animalQuestions(){

    let wrongAnswers = ['Cat', 'Dog', 'Lion', 'Elephant', 'Giraffe', 
    'Cow', 'Chicken', 'Turtle', 'Tortoise', 'Fish'];
    let questions = ['What animal is this?', 'Do you know this animal?', 'Can you guess this beautiful animal?'];
    animalImagePaths = { Cat : 'assets/images/cat.jpg' ,
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
    for(let arr of animalArray){
        if (animalImagePaths.hasOwnProperty(arr)){
            delete animalImagePaths[arr];
        }
    }  
    let quizQuestion = questions[Math.floor(Math.random()*questions.length)];
    let keys = Object.keys(animalImagePaths);
    let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
    let quizPath = animalImagePaths[rightAnswer]; 
    let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
    animalArray.push(rightAnswer);
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
    imageParent[0].src = pathSrc;            
}

function appendQuiz(question, rightAnswer, wrongAnswer){

    que.innerText = question;
    let options = [rightAnswer, wrongAnswer];
    let num = Math.floor(Math.random()*options.length);
    option1.innerText = options[num];
    options.splice(num, 1);
    option2.innerText = options[0];
}


function checkResult(element){
    flag = 1;
    if (element.innerText === quiz[2].toUpperCase() ){
        incrementScore();
        element.style.backgroundColor = 'green';
        element.innerText = "Correct!";
        element.style.color = "white";
       
    } else  {
        element.style.backgroundColor = 'red';
        element.innerText = "Wrong!";
        element.style.color = "white";
    }
    document.querySelector('#option1').disabled = true;
    document.querySelector('#option2').disabled = true;

}


function incrementScore() {

    let oldScore = parseInt(score.innerText);
    let addScore = oldScore + 10;
    score.innerText = addScore ;
}


function incrementQuestion(){
    qCount.innerText = ++count;
    if(count === 15){
        question.classList.add('hide');
        lastQue.classList.remove('hide');
    }
    if(count === 16){
        showScorePage();
    }
}

function showScorePage() {
     scorePage.classList.remove('hide');
     gameArea.classList.add('hide');
     welcomePlayer.innerText = 'Game Over';
     let final = parseInt(score.innerText);
     if (final >= 100){
        congrats.innerText = `Congratulation ${userName.value} !!!`;
     } else{
        congrats.innerText = `Try again ${userName.value}!`;
        winLose.innerText = "You lose :( !!";
     }
     finalScore.innerText = `Your Score: ${final}`;
}


