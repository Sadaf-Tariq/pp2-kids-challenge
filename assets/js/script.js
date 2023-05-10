/* var image = document.createElement("img");
var imageParent = document.getElementById("question-img1");
searchPic = new Image();
searchPic.src = "assets/images/red.jpg";
image.src = searchPic.src;            // image.src = "IMAGE URL/PATH"
imageParent.appendChild(image); */

/* Start Game after DOM finished loading.. */

document.addEventListener("DOMContentLoaded", function(){


    let buttons = document.getElementsByTagName("button");
    document.getElementById("name-id").focus();

    for (let button of buttons){
        
        button.addEventListener("click", function(){

            if (this.getAttribute("data-type") === "submit") {
                
                let userName = document.getElementById("name-id").value;
                console.log(userName);

            } else if (this.getAttribute("data-type") === "computer") {
                
                let player = document.getElementById("computer").textContent;
                console.log(player);

            } else if (this.getAttribute("data-type") === "friend") {
                
                let player = document.getElementById("friend").textContent;
                console.log(player);

            } 
    
        });
    }
});



