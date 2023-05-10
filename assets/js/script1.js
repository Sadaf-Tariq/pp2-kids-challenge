import {userName} from './script.js';
console.log(userName);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("welcome-player").textContent = userName;
});