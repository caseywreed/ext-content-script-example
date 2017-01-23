console.log('Extension loading successful')

// //Remove that annoying Twitter DIV
// let annoyingDiv = document.querySelectorAll('.import-prompt')
// annoyingDiv.forEach((div) => {
//     div.remove()
// })

// //Remove Promoted Tweets
// //Make this timeout to every 1 second so that it runs but never infinite loops
// const removePromotedTweets = function () {
//     let promotedTweets = document.getElementsByClassName('promoted-tweet')
//     for (var i=0; i < promotedTweets.length; i++) {
//         // promotedTweets[i].remove()
//         promotedTweets[i].innerHTML = 'A GROSS PROMOTED TWEET THIS IS DISGUSTING'
//     }
// }

//Alter text on the page
let header = document.getElementById('mainHeader')
header.innerHTML = 'What an annoying header'

//Deactivate buttons!
let buttons = document.querySelectorAll('.button')
buttons.forEach((button) => {
    button.disabled = true
})

//Change in-line CSS
let listItems = document.querySelectorAll('.listItem')
listItems.forEach((li) => {
    li.style.color = 'red'
})

//Add your own HTML
var newDiv = document.createElement('div')
newDiv.innerHTML = 'Check out this cool new DIV element'
document.body.appendChild(newDiv)
