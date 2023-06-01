# MYROUND
## Introduction
MYROUND is a tracking web application that allows users to record their scores for each round of golf (18 holes).
Users can input their scores and round details to track the score, the golf course, date, feeling, and some notes about each round like a diary.
Users can also delete and edit their rounds on the web application.
### Screenshots
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

## Iterations and Improvements
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

### 

