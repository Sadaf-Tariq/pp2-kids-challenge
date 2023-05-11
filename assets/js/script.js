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

document.addEventListener("DOMContentLoaded", function(){
        runGame();
   
});

function runGame(){

    let quizDone =[''];
    let category = getCategory();   
    let quiz = categoryQuestionSelector(category);
    appendImage(quiz[1]);
    appendQuiz(quiz[0],quiz[2],quiz[3]);
    quizDone.push(quiz[2]);

    let buttons = document.getElementsByTagName('button');
    for (let button of buttons){
        button.addEventListener('click', function(){
            let userAnswer = this.innerText;
            let isCorrect = userAnswer === quiz[2].toUpperCase();
            if (isCorrect){
                console.log("You are right!");
                incrementScore();
            } else {
                console.log("Your nswer is wrong!");
                decrementScore();
            }
        });
    }
    console.log(quiz);
    console.log(quizDone);
}

function getCategory(){
    let category = ['colors', 'fruits' , 'vehicles'];
    let randomCategory = Math.floor(Math.random()*category.length);
    return category[randomCategory] ;
}

function categoryQuestionSelector(category){
    
    let quiz;

    if (category === 'colors'){
        quiz = colorQuestions();
    } else if (category === 'fruits'){
        quiz = fruitQuestions();
    } else if (category === 'vehicles'){
        quiz = vehicleQuestions();
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
    console.log(quizQuestion);
    let keys = Object.keys(colorImagePaths);
    let rightAnswer = keys[Math.floor(Math.random()*keys.length)];
    let quizPath = colorImagePaths[rightAnswer];
    console.log(rightAnswer,quizPath); 
    let wrongAnswer = selectWrongAnswer(wrongAnswers,rightAnswer);
    console.log(wrongAnswer);
    return [quizQuestion, quizPath, rightAnswer,wrongAnswer];
}


function fruitQuestions(){
    console.log("Fruit Questions called!!!");
    let quiz = { "What color is this?" : ['assets/images/red.jpg','Red'],
                 "What color is this?" : ['assets./images/green.jpg','Green'],
                 "What color is this?" : ['assets./images/blue.jpg','Blue'],
                 "What color is this?" : ['assets./images/black.jpg','Black'],
                 "What color is this?" : ['assets./images/orange.jpg','Orange'],
                 "What color is this?" : ['assets./images/pink.jpg','Pink'],
                 "What color is this?" : ['assets./images/purple.jpg','Purple'],
                 "What color is this?" : ['assets./images/brown.jpg','Brown'],
                 "What color is this?" : ['assets./images/white.jpg','White'],
                 "What color is this?" : ['assets./images/yellow.jpg','Yellow']
    };
}

function vehicleQuestions(){
    console.log("Vehicle Questions called!!!");
    let quiz = { "What color is this?" : ['assets/images/red.jpg','Red'],
                 "What color is this?" : ['assets./images/green.jpg','Green'],
                 "What color is this?" : ['assets./images/blue.jpg','Blue'],
                 "What color is this?" : ['assets./images/black.jpg','Black'],
                 "What color is this?" : ['assets./images/orange.jpg','Orange'],
                 "What color is this?" : ['assets./images/pink.jpg','Pink'],
                 "What color is this?" : ['assets./images/purple.jpg','Purple'],
                 "What color is this?" : ['assets./images/brown.jpg','Brown'],
                 "What color is this?" : ['assets./images/white.jpg','White'],
                 "What color is this?" : ['assets./images/yellow.jpg','Yellow']
    };
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
    let image = document.createElement("img");
    let imageParent = document.getElementById("question-img");
    searchPic = new Image(100, 100);
    searchPic.src = pathSrc;
    image.src = searchPic.src;            // image.src = "IMAGE URL/PATH"
    imageParent.appendChild(image);
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


function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore + 10;

}

function decrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = oldScore - 10;

}
