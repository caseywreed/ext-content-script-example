console.log('Extension loading successful')

// //Remove that annoying Twitter DIV
// let annoyingDiv = document.getElementsByClassName('import-prompt')
// for (var i=0; i < annoyingDiv.length; i++) {
//     annoyingDiv[i].remove()
// }

// //Remove Promoted Tweets
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
let buttons = document.getElementsByClassName('button')
for (var i=0; i < buttons.length; i++) {
    buttons[i].disabled = true
}

//Change in-line CSS
let listItems = document.getElementsByClassName('listItem')
for (var i=0; i < listItems.length; i++) {
    listItems[i].style.color = 'red'
}

//Add your own HTML
var newDiv = document.createElement('div')
newDiv.innerHTML = 'Check out this cool new DIV element'
document.body.appendChild(newDiv)
