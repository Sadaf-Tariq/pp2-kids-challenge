# Index - Table Of Contents:

1. [General Information](#Kids-Challenge)
2. [Features](#Features)
3. [Technologies Used](#Technologies-Used)
4. [Testing](#Testing)
5. [Bugs](#Bugs)
6. [Unfixed bugs](#Unfixed-Bugs)
7. [Validator Testing](#Validator-Testing)
8. [Deployment](#Deployment)
9. [Credits](#Credits)

# About Kids-Challenge
The Kids-Challenge game is a quiz for kids who love challenges. When deciding on a topic for the project. I wanted to do something my kid loves. My 4-year-old loves this quiz challenge, he is curious about everything and asks questions a lot, when I learned JavaScript, I wanted to make a quiz game for my son, which can be easy for kids of this age range and fun at the same time.

Users of this game will be able to easily navigate throughout the game. This game is fully interactive and gives feedback and alerts at every step to guide the users. This site is targeted toward kids who love challenges and fun.

![Responsive image](/images/amIresponsive.png)

# Features
* The Welcome section

  * The welcome section is the first section which interacts with the user
  
  * The welcom section has the game name and information about the game

  * The welcome section also asks user name to interact with the user

    ![Header Image](/images/welcome-page.png)
    
  * To increase interactivity, this section gives alert if the username is not entered

  * The submit button and Let's play button both gives an alert if user wants to start the game without entering the name
  
  ![welcome-section-usernameAlert1](/images/username-alert.png)
  ![welcome-section-usernameAlert2](/images/username-alert2.png)
  
  * When the username is enterd the submit button turns to "Thank you!", making the section more interactive
  
  ![Username-input](/images/Name-input.png)
  

* Getting - ready

  * This game is designed for kid, to give them as sense of challenge, a getting ready section is made

  * This section asks the user if they are ready or not, to make them ready to enter into the challenge

    ![Getting-ready](/images/getting-ready.png)

* The Game-section

  * This is the main game section where the user is given a question, an image and two options

  * The image can be an animal, a fruit, any color or any random thing

  * There will be one right and one wrong option
  
  ![Main image and banner](/images/game-page.png)

  * There is a "Next" button which tells the user if they are ready to move to the next question

  * This button gives an alert if user wants to move to next question withour choosing an option
  
  ![Alert for question](/images/alert.png)
  
  * To increase interactivity, the options give feedback for the correct and wrong answers
  
  ![Correct Answer](/images/correct-answer.png)
  ![Wrong Answer](/images/wrong-answer.png)
  
  * There are 15 questions user will answer, on the 15th question , instead of question number, a string 'Last Question!' is displayed

  * This awares the user that this is the last quesiton
  
  ![Last question](/images/last-que.png)


    

* The Score section

  * This section comes at the end when all the questions are answered

  * The seciton tells the user if they have won or lose with the total scores

  * There is a home icon present at the end of the section, it takes the user to the main section when pressed

  * The user can start to play again by going back to the main section

    ![Game won](/images/game-won.png)
    ![Game Lose](/images/game-lost.png)


# Technologies Used

#### Languages Used

* HTML5
* CSS3
* JavaScript

# Testing

* I tested this game on different browsers such as Microsoft Edge, Opera, Firefox, Chrome, and Safari and it works on all browser
* I confirm that this project is responsive, functions on all standard screen sizes, tested responsiveness using the developer tools, and looks good 

<img src="/images/responsive2.png"  width="750" height="500"> <img src="/images/responsive1.png"  width="300" height="500"> 

* I confirm that all the section of the game are all readable and easy to understand

# Bugs
* When I tested my HTML code for the index.html page on html validator, I got the error that I did not include alt for the image element.
* I fixed the error by including an alt text

# Unfixed Bugs
There is no unfixed bugs but there are warnings indicated by JShint validator:
- 'Trailing comma in arguments lists' is only available in ES8
- There is one unused checkResult function indicated by jshint, which was used from html through onclick attribute
- I used sweetalert2 using jquery ,the syntax is right byt the warning came from jshint for semicolons and undefined variable
![JShint Image](/images/JShint.png)

# Validator Testing
* HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)
  ![HTMLvalidator Image](/images/HTMLvalidator.png)
* CSS
  * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
  ![CSSvalidator Image](/images/CSSvalidator.png)
* JShint
  * Warnings were found when passing through the official [JShint validator](https://jshint.com/)
  * Discussed in [Unfixed bugs](#Unfixed-Bugs)
* Accessibility
  * I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in developer tools
    ![Lighthouse report](/images/lighthouse.png)
  * I also conducted a speed test at GTMetrix which produced positive results. 
    ![GMetrix report](/images/GMetrix.png)
  * The colours on my website passed accessibility tests at a11y
    ![Contrast report](/images/a11y.png)

# Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Main Branch
  - Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - [here](https://sadaf-tariq.github.io/pp2-kids-challenge/)

# Credits
* Content
  * [Font awesome](https://fontawesome.com/) provided the icon for home for the score section
  * [w3schools](https://www.w3schools.com/) helped me to use classLists
  * [Alvarotrigo](https://alvarotrigo.com/blog/disable-button-javascript/) helped me to disable option buttons
  * [StackOverflow](www.stackoverflow.com) helped me to adjust the image for each question
  * [StackOverflow](www.stackoverflow.com) helped me reverse css in JavaScript
  * I took the code from [LinuxHint](https://linuxhint.com/create-custom-alert-box-javascript/) for the customize alert box
  * [CodePen](https://codepen.io/whisoer/pen/oMxYQg) helped me to change the button color of sweetAlert2
  * Code Institute tutor support helped me to solve errors and gave tips for html page(https://github.com/HollyT85/QuizProject2). Thanks to **Holly** 
  * [w3schools](https://www.w3schools.com/), [StackOverflow](www.stackoverflow.com),  and Code Institute's walkthrough project [Love Maths](https://github.com/Sadaf-Tariq/love-math) helped me so much throughout my project

* Media
  * The images used in the website were taken from [Pexels](https://www.pexels.com/)

