//IMPORT statements if any

//VARIABLE DECLARATIONS...........................................
const sendReviewBtnEl = document.getElementById("btn"); //target button from index.HTML
const ratingsEls = document.querySelectorAll(".rating"); //Access all the classes with name of rating
const containerEl = document.getElementById("container"); //accesses the container
let selectedRating = ""; //selectedRating value is an empty string

//FUNCTION DEFINITIONS................................................
function removeActive() {
  ratingsEls.forEach(function (ratingE1) {
    ratingE1.classList.remove("active");
  });
}

//EVENT LISTENERS.......................................................
ratingsEls.forEach(function (ratingE1) {
  ratingE1.addEventListener("click", function (e) {
    removeActive();
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active");
    e.target.parentNode.classList.add("active");
  });
});

sendReviewBtnEl.addEventListener("click", function (e) {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong class= "greeting1" > Thanks for taking part in the review </strong>
        <br>
        <br>
        <strong> Feedback: ${selectedRating} </strong> 
        <p> We'll use your feedback to support our work, thanks :)</p>
        `;
  }
});

/*code above adds click event to "send review" button
1st. rating(emoji) is selected then send review buton is clicked 
This then shows the other side of the container we add an "inner.html" with a 
 greeting message.

 *COMMENTS
************ VARIABLE DECLARATIONS *******************
1. selectedRating
selectedRating is initialized as an empty string ("") 
so that it has a value to start with, even before a user selects a rating.
common practice in programming, especially when you want to 
store a value that will be updated based on user interactions.


 ************ FUNCTION DEFINITIONS *******************
1.remove Active
removes the 'active' from other ratings, when one is clicked 
e.g. removes green shadow from emoji
It ensures that only one rating can be active at a time.



************ EVENT LISTENERS *******************
1.ratingE1.addEventListener
Allows access to all 3 ratings emojis ,attaches a "click" event listener to each 
rating element using forEach loop.
removeActive = this function removes the "active" class from all the emoji ratings elements


selectedRating = used to keep track of the rating emoji that is currently selected.
e.target.innerText || e.target.parentNode.innerText = 
The selectedRating can either be 2 options
The innerText =meaning it gets the text inside that emoji rating or 
parentNode = meaning it gets the text from the container around that emoji.

classlist means = accessing the classes of that element. 
e.g. classlist of emoji element in e.targetclassList.

etargetclassList = visually adds the "active" class, indicating that the emoji rating is selected or highlighted.
etargetparentNode= visually adds the "active" class to the parent element ensures that 
the background color of parent element (container) remains active along with the selectedRating.

2.sendReviewBtnEl
selectedRating !== ""
If a user hasn't selected any emoji rating 
(meaning the selectedRating is still an empty string), 
the content won't change when the button is clicked. 
If a rating has been selected (meaning selectedRating is something 
other than an empty string), 
the content on the page will change according to the chosen rating.
Template literals to show selectedRating is equal to whatever rating is clicked.



active - is like hover effect , it makes sure when rating is clicked 
the hover stays and does not disappear when you click away

 parents is the container:
child is the emoji inside the divbox
 1.Line was removed from ratingsEls. function:
    console.log(e.target.innerText || e.target.parentNode.innerText);
console.log(e.target.innerText); - shows ratings in console when CLICKED OUTSIDE the box, happy,angry satisfied

*/
