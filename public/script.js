// Setting up variables for the HTML elements using DOM selection
const addBox = document.querySelector(".add-box"),
  popupBox = document.querySelector(".popup-box"),
  popupTitle = popupBox.querySelector("header p"),
  closeIcon = popupBox.querySelector("header i"),
  titleTag = popupBox.querySelector("input"),
  scoreTag = popupBox.querySelector('input[name="userScore"]'),
  feelingTag = popupBox.querySelector('select[name="feeling"]'),
  descTag = popupBox.querySelector("textarea"),
  addBtn = popupBox.querySelector("button");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// General function to fetch and parse round diaries from localStorage and rendering to screen
const rounds = JSON.parse(localStorage.getItem("rounds") || "[]");
let isUpdate = false,
  updateId;
// When the add box is clicked, the popup form shows up, where users can input data
addBox.addEventListener("click", () => {
  popupTitle.innerText = "How was today's round?";
  addBtn.innerText = "Submit";
  popupBox.classList.add("show");
  document.querySelector("body").style.overflow = "hidden";
  if (window.innerWidth > 660) titleTag.focus();
  if (window.innerWidth > 660) scoreTag.focus();
  if (window.innerWidth > 660) feelingTag.focus();
});
// When the close icon is pressed, the web app goes back to its original screen and does not update data
closeIcon.addEventListener("click", () => {
  isUpdate = false;
  titleTag.value = descTag.value = scoreTag.value = feelingTag.value = "";
  popupBox.classList.remove("show");
  document.querySelector("body").style.overflow = "auto";
});
// The summary boxes that show golf course, score, notes, and date for each round diary are displayed.
// Because it is a summary, it does not show data like the feeling, and it only shows 45 characters from the notes as a preview.
function showRounds() {
  if (!rounds) return;
  document.querySelectorAll(".round").forEach((li) => li.remove());
  rounds.forEach((round, id) => {
    const max_body_length = 45;
    let filterDesc = round.description.replaceAll("\n", "<br/>");
    /*var emoji;
        switch(feelingTag.value){
            case 0:
                emoji = "😄";
                break;
            case 1:
                emoji = "🙂";
                break;
            case 2:
                emoji = "😗";
                break;
            case 3:
                emoji = "😞";
                break;
        }
        
        `<p onclick="updateround(${id}, '${round.title}', '${round.score}', '${round.feeling}', '${filterDesc}')">
            ${round.feeling}
        </p>`*/

    // when the title, score, or note is clicked, it opens up the form again so that users can view the full data and also edit and update them. 
    // the note in the summary box shows ... after 45 characters to indicate that there is more characters, encouraging users to click and view the whole data. 
    let liTag = `<li class="round">
        <div class="details">
        <p onclick="updateround(${id}, '${round.title}', '${round.score}', '${round.feeling}', '${filterDesc}')">
            ${round.title}
        </p>
        <p1 onclick="updateround(${id}, '${round.title}', '${round.score}', '${round.feeling}', '${filterDesc}')">
            ${round.score}
        </p1>
        <span onclick="updateround(${id}, '${round.title}', '${round.score}', '${round.feeling}', '${filterDesc}')">
            ${filterDesc.substring(0, max_body_length)}
            ${filterDesc.length > max_body_length ? "..." : ""}
        </span>
        </div>
        <div class="bottom-content">
        <span>${round.date}</span>
        <div class="settings">
            <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
            <ul class="menu">
                <li onclick="deleteround(${id})"><i class="uil uil-trash"></i>Delete</li>
            </ul>
        </div>
        </div>
        </li>`;
    addBox.insertAdjacentHTML("afterend", liTag);
  });
}
// show all summary boxes
showRounds();
// when menu icon is clicked, it shows the delete button
function showMenu(elem) {
  elem.parentElement.classList.add("show");
  document.addEventListener("click", (e) => {
    if (e.target.tagName != "I" || e.target != elem) {
      elem.parentElement.classList.remove("show");
    }
  });
}
//when delete button is clicked, confirmation popup is shown so that users don't accidently delete round diaries
function deleteround(roundId) {
  let confirmDel = confirm("Are you sure you want to delete this round?");
  if (!confirmDel) return;
  rounds.splice(roundId, 1);
  localStorage.setItem("rounds", JSON.stringify(rounds));
  showRounds();
}
//update data for each round if the user input is changed and 'update round' button is clicked
function updateround(roundId, title, score, feeling, filterDesc) {
  let description = filterDesc.replaceAll("<br/>", "\r\n");
  updateId = roundId;
  isUpdate = true;
  addBox.click();
  titleTag.value = title;
  scoreTag.value = score;
  feelingTag.value = feeling;
  descTag.value = description;
  popupTitle.innerText = "Update a Round";
  addBtn.innerText = "Update Round";
}
// when 'update round' button is clicked, data is updated
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = titleTag.value.trim(),
    score = scoreTag.value.trim(),
    feeling = feelingTag.text.trim(),
    description = descTag.value.trim();
//auto generate date (month, day, year)
  if (title || description) {
    let currentDate = new Date(),
      month = months[currentDate.getMonth()],
      day = currentDate.getDate(),
      year = currentDate.getFullYear();
//all data for each round diary
    let roundInfo = {
      title,
      score,
      feeling,
      description,
      date: `${month} ${day}, ${year}`,
    };
//update each round if input is changed and 'update round' button is clicked
    if (!isUpdate) {
      rounds.push(roundInfo);
    } else {
      isUpdate = false;
      rounds[updateId] = roundInfo;
    }
    localStorage.setItem("rounds", JSON.stringify(rounds));
    showRounds();
    closeIcon.click();
  }
});
