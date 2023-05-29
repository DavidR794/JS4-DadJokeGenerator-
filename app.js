//IMPORT statements if any

//VARIABLE DECLARATIONS...........................................
const btnEl = document.getElementById("btn"); //target button from index.HTML
const ratingsEls = document.querySelectorAll(".rating"); //Access all the classes with name of rating
const containerEl = document.getElementById("container"); //accesses the container
let selectedRating = ""; //selectedRating value is an empty string

//FUNCTION DEFINITIONS................................................
/*removes the 'active' from other ratings, when one is clicked 
e.g. removes green shadow from emoji
/It ensures that only one rating can be active at a time.*/
function removeActive() {
  ratingsEls.forEach(function (ratingE1) {
    ratingE1.classList.remove("active");
  });
}

//EVENT LISTENERS.......................................................
//access the ratings x3buttons...........
ratingsEls.forEach(function (ratingE1) {
  ratingE1.addEventListener("click", function (e) {
    removeActive(); //function to remove the "active" class from all the elements(ratings).
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.target.classList.add("active"); //Add the "active" class to the clicked element using
    e.target.parentNode.classList.add("active"); //Add the "active" class to the parent element of the clicked element using  background stays green once emoji clicked
  });
});

/*clicking button to show innertext and using dynamic innerHTML
 use of template literals to show selectedRating is equal to whatever rating is clicked.
 */
btnEl.addEventListener("click", function (e) {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong class= "greeting1" > Thanks for taking part in the review </strong>
        <br>
        <br>
        <strong> Feedback: ${selectedRating} </strong>
        <p> We'll use your feedback to support our YOU :)</p>
        `;
  }
});

// Main Logic or additional code ..........................................

// Export statements (if applicable)..........................................

/*parents is the divbox around the emoji:
    selectedRating = e.target.innerText || e.target.parentNode.innerText;
    e.targer.innertext = checks to see if in element/rating has text content inside it.
    OR
    e.target.parentNode.innerText = it checks the parent which is the box
    around the outside if it has innertext

child is the emoji inside the divbox
 1.Line was removed from ratingsEls. function:
    console.log(e.target.innerText || e.target.parentNode.innerText);
console.log(e.target.innerText); - shows ratings in console when CLICKED OUTSIDE the box, happy,angry satisfied
e.target.parentNode.innerText - click on emoji will show rating text in console.
2. active - is like hover effect , it makes sure when rating is clicked the hover stays and does not disappear when you click away
3. e.target.classList.add("active") - adds active to classlist in html
4. e.target.parentNode.classList.add("active")- makes background stay once emoji is clicked

*/
