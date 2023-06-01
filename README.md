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

One thing to note is that stage 1 and 2 (initial stage and editing codes)'s commits and history can be seen in **another repository**: https://github.com/davin-oh/davin-oh.github.io

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

Because I forked it, I had to use a different repository from what I used in stage 1-2. I deleted all unnecessary codes and files for MYROUND and replaced the .scss, index.html, and script.js file
#### 4. Commentation and Documentation

