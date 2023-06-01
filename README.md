# MYROUND
MYROUND is a tracking web application that allows users to record their scores for each round of golf (18 holes).
Users can input their scores and round details to track the score, the golf course, date, feeling, and some notes about each round like a diary.
Users can also delete and edit their rounds on the web application.
## Screenshots
<img width="800" alt="Screen Shot 2023-06-02 at 12 06 12 AM" src="https://github.com/davin-oh/newMYROUNDS/assets/132634941/d4098b7a-6651-43ee-b751-c5a347684b83">
<img width="800" alt="Screen Shot 2023-06-02 at 12 06 33 AM" src="https://github.com/davin-oh/newMYROUNDS/assets/132634941/8a8bfce7-f982-4858-af11-71ee7efff0c1">
<img width="800" alt="Screen Shot 2023-06-02 at 12 06 48 AM" src="https://github.com/davin-oh/newMYROUNDS/assets/132634941/bffc9b08-e74b-4b0a-98da-d8bc31d7f067">

## Configuration and Deployment
### Configuration
- Because MYROUND is responsive to users' screensize, all screen dimensions and resolutions should work.
- For best experience however, users are encouraged to use desktop full screen.
- There is no specific steps required to set up use of an API to interact with MYROUND.
### Deployment
If you have Node.js downloaded, please skip Part 1 and follow Part 2.
#### Part 1: Node.js setup
1. Visit https://nodejs.org/en and download Node.js
#### Part 2: Express setup
1. Using the VS Code terminal, run the following command in the root directory of the project folder:
`npm install express`
2. When the installation is done, run the following command in the terminal: `npm run dev`
3. When the URL is generated, copy and paste it to your desired browser

## Development Documentation
### Iterations and Improvements
From the initial design, many iterations were made. For instance, the data model has changed like the following:
#### Initial design data model
<img width="482" alt="Screen Shot 2023-06-02 at 12 50 28 AM" src="https://github.com/davin-oh/newMYROUNDS/assets/132634941/b296444b-f77c-4cff-b079-f3c8356aa580">

#### Final prototype data model
Compared to the initial design, the following iterations were made:
- Deletion of handicap, image, and members data
  - This was because when I conducted a user-testing with golfers like golf instructor and casual golfers, users suggested that having to input all these data might prevent them from using the web application because it is not that necessary
- Inclusion of a 'feeling' data
  - For 'feeling' data, dropdown select is used, consisted of four feelings: 'Very happy', 'Happy', 'Okay', and 'Not Well'
  - This was included because through user-testings, some users suggested that because one of the purpose of MYROUND is to become a golf diary, it might be nice to implement a feature in which users can input their feelings after each round

#### Lessons learned 
Through such multiple iterations after the design, I learned an important lesson that it is crucial that a designer and a developer conduct user research and user testings because it helps indicate possible shortcomings of the design. 

For instance, if I had not conducted a user-testing, I would not have known that having too much data that is not necessary might prevent users from interacting with a web application. 

Not only that, I would not have been able to think about the 'feeling' data, which is now a crucial part of MYROUND.

Through these valuable experience, I decided that from now on, I will try to do more user research and user testing to become more articulate about what users would actually want and feel comfortable with. 

### Coding process
The coding process can be divided into mainly 4 stages: Intial stage, editing codes, back-end server setup, and commentation/documentation. 

***One thing to note is that stage 1 and 2 (initial stage and editing codes)'s commits and history can be seen in another repository: https://github.com/davin-oh/davin-oh.github.io**

#### 1. Initial Stage
For the initial stage of the coding process, I had to figure out how to structure the whole code. So I took a look at many tutorials and examples on Youtube that is related to tracking. Although there were many tutorials that was helpful and provided me a guideline, the following videos helped me the most in initially guiding the overall code:
- https://youtu.be/Efo7nIUF2JY
- https://youtu.be/01YKQmia2Jw
- https://youtu.be/BDo1lgaZuII
- https://youtu.be/AkIUtUWpyZs

Most of the videos showcase the sticky notes styled application, which I was aiming for MYROUND to have. After watching all videos, I decided that the video tutorial by CodingNepal (https://youtu.be/AkIUtUWpyZs) would be most appropriate for me to follow along. Therefore, I watched the whole tutorial, tried to understand and follow along the code.
#### 2. Editing codes
Then, because the data model for MYROUND is different from the tutorial code's data model, I needed to edit, add, delete, and basically change most codes to make the code function the way MYROUND is designed to become. While most codes were edited, some of the most important edits are the following:
- adding the background image
  - ex) 
  ```
  .golfImage{
  display:flex;
  position:fixed;
  overflow: hidden;
  width:100%;
  height:100%;
  justify-content:center;
  align-items:center;
  z-index: -1;
  background-position: 50% 50%;
  background-size: cover;}
  ```

- changing the title, description data into a golf course, notes data
  - ex) 
  ```
  titleTag = popupBox.querySelector("input"),
  scoreTag = popupBox.querySelector('input[name="userScore"]'),
  feelingTag = popupBox.querySelector('select[name="feeling"]'),
  descTag = popupBox.querySelector("textarea");
  ```


- adding the score and feelings data
  - ex) 
  ```
  <div class="row score">
    <label>Score *</label>
    <input type="number" name="userScore">
  </div>
  <div class="row feeling">
    <label>Feeling *</label>
    <select name="feeling">
      <option value = "0">Select feeling</option>
      <option value = "1">Very Happy</option>
      <option value = "2">Happy</option>
      <option value = "3">Okay</option>
      <option value = "4">Not well</option>
    </select>
  </div>
  ```
- creating a 'landing page' that shows the users the logo and catch phrase of MYROUND
  - ex)
  ```
  <body>
    <div class="golfImage">
      <img src="./images/thumbnails/grass.png" alt="image of a golf ball on the green">
    </div>
    <h1>MYROUND</h1>
    <h2>YOUR EVERY DAY GOLF DIARY</h2>`
   ```
- creating a 'scroll icon' with scrolling mouse animation
  - ex)
  ```
  .scroll-icon {
    position: sticky;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 2em;
    height: 4em;
    border: .3em solid #97B871;
    border-radius: 2em;
    margin-top: 15%;
    margin-bottom: 20%;
  }
  // wheel part of the scroll icon
  .scroll-icon.ex-1 .wheel {
    position: absolute;
    left: 49%;
    top: auto;
    width: .6em;
    height: .6em;
    background-color: #97B871;
    transform: translate(-50%, 0);
    border-radius: .6em;
    animation: ex-1-wheel 2s ease-in-out infinite;
  }
  // the wheel icon animation, so that it is more interactive and fun for the users. 
  // encourages users to scroll down
  @keyframes ex-1-wheel {
    0% {
      transform: translate(-50%, 0);
      opacity: 0;
    }
    20%, 70% {
      opacity: 1;
    }
    90%, 100% {
      transform: translate(-50%, 150%);
      opacity: 0;
    }
  }
  ```
- changing the colour scheme, font, text size, boldness, etc. 
  - ex)
  ```
  ::selection{
  color: #fff;
  background: #A6BB8D;
  }
  ```
#### 3. Backend server setup
After I finilised editing all code to make the desired interface for MYROUND through stage 2 (editing codes), I realised that I did something wrong. I read the assignment guideline and Piazza again, and found out that this assignment is being marked through the back-end server, using `npm run dev`. 

Until stage 2, I was using a live domain that I made through Github pages. After I realised my mistake that I have not yet set up a back-end server, I referred back to the scrimba that we did during tutorial, and forked the solutions from the todo list github page (https://github.com/robdongas/deco2017-task-tracker/blob/solutions/public/script.js)

Because I forked it, I had to use a different repository from what I used in stage 1-2. I deleted all unnecessary codes and files for MYROUND and replaced the codes in .scss, index.html, and script.js file to the codes that I made in stage 1-2. I did this by copy and pasting the codes from my previous repository.

Then, I installed node.js, edited the package.json properties to suit MYROUND, and installed express through running the `npm install express` command on console. 

Finally, I was able to run the back-end server through running the `npm run dev` command on console. 

#### 4. Commentation and Documentation
Lastly, after I finalised my codes from stage 3, I started writing comments and documentations to make sure that the users or future developers understand my code with ease. I tried to be specific about the code, so that the readers can not only know what the code is about but also why I wanted that specific code. 

Some examples of such detailed commentation are as follows:
```
// background is set as a golf-related image to set a consistant golf-vibrance
// z-index is set as -1 so that other contents is on top of the background
```

```
// summary box of round diaries
// all summary boxes of round diaries would look the same, be displayed in a grid-style to make the web app more simple and clean
```

```
// the wheel icon animation, so that it is more interactive and fun for the users. 
// encourages users to scroll down
```

## Self-evaluation
The overall journey of developing MYROUND was very meaningful. This is because I was able to utilise the skillsets that I learned from lectures and tutorials into developing a real-life web application. I was able to put my very hard effort into this development because I am actually very passionate about the area of this tracking app, which is golf. I think it was a great opportunity for me to plan, design, and build an application in which I actually needed.

Through the whole process, I believe there are things that I did well and things that I could improve in the future.

#### Things I did well
- Firstly, I built something I have been passionate about
  - Because I love playing golf and I play it often, I was able to think about what kind of tracking application golfers would need. This is because every time I go on a golf round, I always forget my score; I have always wished that there is an easy and light application where I could keep the log of my score. Because I was sure about what I wanted to create, the planning and design part was quite easy. Even though the development part was very challenging, I believe was able to finish it because I actually am care about what I was building. I learned that selecting a well-suited design brief to my own passion is very important. I will continue to work on things that interest me.
- Secondly, I conducted many user testings
  -  After the design assignment, I tested out my design to 6 potential users who engage with golf. Through multiple rounds of user testing, I was able to find out some common fields that most users liked and fields they disliked. For instance, most users suggested that the handicap and members data might be unnecessary and that images might pressure them to take photos constantly. Moreover, suggestions like the feelings data helped me incorporate some pillars to MYROUND. I believe that such feedback from user testing helped me develop a much more simple but effective golf round tracking web application. If I develop another web application, I will continue to conduct multiple user testings.
  
#### Things I could improve in
- back-end server
  - If I were given another chance to work on this assignment, the first thing would be setting up a back-end server. Because I was mistaken of the assignment brief, I had to work on the back-end server quite last minute, and it was not as efficient and optimal timing-wise. I was also very stressed because I had two repositories due to this mistake that I made. Although I was able to fix the problem at the end, if I worked on the back-end server first, development process would have been much more comfortable for me. 
- commentation
  - During this assignment, I think I did not put in much commentation as I was writing down my code. I mostly wrote all the codes first and then when I was done with the codes, I started writing the comments. However, I think this is a very bad move because as I was going through my codes to edit parts, it took me quite long to find where things are, because there were only few comments. I learned that writing comment throughout the code from an early stage is important not only because future developers can easily understand but also because it helps me understand and go through my codes. 

#### Recommendations for further improvement and extensions
- Search keywords function
  - It would be very convenient for users to be able to search up for keywords and the notes with that keyword is shown on the screen
- Showcase average score, Best score, top 5 scores, etc. 
  - Having a dashboard related to users' score would be interesting. I believe this could also encourage users to practice and play golf more often because it adds a gamification effect. Users would want to build new record scores on their dashboard. 
- Show image of each golf course
  - Having an image for all possible golf courses would be very nice as it would add a visual element to MYROUND. 
