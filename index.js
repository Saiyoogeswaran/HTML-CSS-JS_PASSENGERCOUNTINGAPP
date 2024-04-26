//First we need to store the count values
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
//USe camelCase
let countEl=document.getElementById('count-el') //==>This is called pass in arguments.
//let countEl = document.getElementById("count-el") this is the JS equivalent of this html code <h2 id = "count-el">0</h2> 
//console.log(countEl)
// while we are using documents we refer it as DOM(Document Object Model)==>How you use JS to modify website
let count = 0
//console.log(count);
function increment() {
    count += 1
    countEl.innerText=count
    //console.log(count)
}
//Grab the save-el paragrah and store it in a variable called saveEl
//Create a variable that contains both the count and the dash separator, i.e. "12 - "
//Render the variable in the saveEl using innerText
//Make sure to not delete the existing content of the paragraph
let saveEl = document.getElementById("save-el")

function save() {
    let displayCount = " " + count + ' - '
    saveEl.textContent += displayCount
    countEl.innerText = 0
    count = 0
}
function reset() {
    saveEl.textContent = "Previous entries :"
}
//textContent is the alternative for the innertext one