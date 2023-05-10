/* var image = document.createElement("img");
var imageParent = document.getElementById("question-img1");
searchPic = new Image();
searchPic.src = "assets/images/red.jpg";
image.src = searchPic.src;            // image.src = "IMAGE URL/PATH"
imageParent.appendChild(image); */

/* Start Game after DOM finished loading.. */

let userName;
let computer;
let friend;


document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName("button");
    document.getElementById("name-id").focus();

    for (let button of buttons){
        
        button.addEventListener("click", function(){

            if (this.getAttribute("data-type") === "submit") {
                
                 userName = document.getElementById("name-id").value;
                console.log(userName);

            } else if (this.getAttribute("data-type") === "computer") {
                
                computer = document.getElementById("computer").textContent;
                console.log(computer);

            } else if (this.getAttribute("data-type") === "friend") {
                
                friend = document.getElementById("friend").textContent;
                console.log(friend);

            } 
    
        });
    }
});




function runGame(){
   
}


