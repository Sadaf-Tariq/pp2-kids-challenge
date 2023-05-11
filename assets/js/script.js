/* var image = document.createElement("img");
var imageParent = document.getElementById("question-img1");
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

    let category = getCategory();   
    let categoryQuestion = categoryQuestionSelector(category);
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


