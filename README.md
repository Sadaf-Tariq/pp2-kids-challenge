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


    

* The Kitchen

  * This section of the page contains a brief description of what happens inside the kitchen to make the user feel trusted

    ![The kitchen](/images/kitchen.png)

* The Highlight

  * The highlight section gives the detail of everything DESI's specialty, this section ensures that the user do not loose their interest

    ![our speciality](/images/highlight.png)

* The Footer

  * The footer section encourages the user to keep in contact and provides a phone number, and street address where they can be found

  * The footer section also includes social media icons so that users can find the catering service on Facebook, Twitter, Youtube, and Instagram

  * The  contact information on the footer section is valuable to users as it helps them to find or contact them if they need to

    ![The footer](/images/footer.png)

* Menu Page

  * The menu link on the navigation bar links the age to the Menu page, where a detailed menu is available for users to help them to find the right desi food they want to order for their important event

  * It is the most important premise of the website as the majority of the users will be interested in this page hence why there is a separate page dedicated to this section and made in detail with a beautiful food background with the white font to ease accessibility

    ![The menu](/images/menu.png)

​    

* The Gallery

  * The gallery link on the navigation bar takes the user to the gallery page where there are images available for the users 

  * The gallery images of food served by everything DESI and their catering service give a clear picture to users to make an informed decision

    ![The gallery](/images/gallery.png)

* The Contact-us Page

  * The contact-us link on the navigation bar takes the user to the Contact us page, which consists of two sections. The contact section encourages the user to keep in contact and provides a phone number, email address, and street address where they can be found

  * It also includes information about its opening to help the users to know when they should be contacted

  * The enquiry section has a form for the users to give all the relevant information about the enquiry they want to make. This form feature establishes a connection between the user and the site

    ![The contact us page](/images/contact.png)

  * When the user presses the submit with all the information, they are taken to a Thank you window, further, emphasizing interaction 

    ![Thank you window](/images/thankyou.png)
# Technologies Used

#### Languages Used

* HTML5
* CSS3
* JavaScript

# Testing

* I tested the website on different browsers such as Microsoft Edge, Opera, Firefox, Chrome, and Safari and it works on all browser
* I confirm that this project is responsive, functions on all standard screen sizes, tested responsiveness using the developer tools, and looks good 

<img src="/images/responsive(1).png"  width="750" height="500"> <img src="/images/responsive(2).png"  width="300" height="500"> <img src="/images/responsive(3).png"  width="500" height="700">

* I confirm that the header, navigation bar, highlights, footer, menu, and form text are all readable and easy to understand
* I have confirmed that the form works: requires entries in every field, will only accept emails in an email field, and the submit button works

# Bugs
* When I tested my HTML code for the index.html page on html validator, I got the error that one of the div element was unclosed which was causing another section to give another error, I solved the problem by removing that div element
* Another error I found for the menu.html page, where I put an anchor element inside a button element, I solved that error by replacing the button to form 
* For the style.css for the header element in a media query, I got an error because there was a margin selector that had a negative value, I solved that error by removing that selector

# Unfixed Bugs
There is no unfixed bugs but there is a warning indicated by html validator for gallery.html page of the website, for my design I do not need any header for this section of the page that is why this warning was not entertained
![Warning Image](/images/warning.png)

# Validator Testing
* HTML
  * No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)
* CSS
  * No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)
* JShint
  * No errors were found when passing through the official [JShint validator](https://jshint.com/)
* Accessibility
  * I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in developer tools

    ![Lighthouse report](/images/lighthouse.png)

# Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - [https://sadaf-tariq.github.io/pp2-kids-challenge/](https://sadaf-tariq.github.io/pp2-kids-challenge/)

# Credits
* Content
  * [Font awesome](https://fontawesome.com/) provided the icon for my header and cover text on the hero-image element
  * [w3schools](https://www.w3schools.com/) helped me in creating my form
  * [w3schools](https://www.w3schools.com/) helped me in creating my button for the menu page
  * [StackOverflow](www.stackoverflow.com) helped me to create a custom bottom border on the speciality section heading
  * [StackOverflow](www.stackoverflow.com) helped me to remove the error I was getting for an anchor element inside the button element
  * The code for the social media link for the footer was taken from Code Institute [Love Running](https://github.com/Sadaf-Tariq/love-running/blob/main/index.html) project
  * The text for the home page was taken from [Wikipedia](www.wikipedia .com) and some open-source sites
  * The logo image for the website was taken from [Wix](www.wix.com)
  * I got the inspiration for the website from Zouq restaurant, Koyla restaurant, and David Smyth Catering
  * [w3schools](https://www.w3schools.com/), [StackOverflow](www.stackoverflow.com),  and Code Institute's walkthrough project [Love Running](https://github.com/Sadaf-Tariq/love-running) helped me so much throughout my project

* Media
  * The images used in the website were taken from [Pexels](https://www.pexels.com/)

