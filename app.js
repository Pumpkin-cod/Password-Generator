
// Defining variables for generate/ reset passwords and outputs
var passwordEl = document.querySelector("#password-el")
var outputEl1 = document.querySelector("#passwordOutputOne-el")
var outputEl2 = document.querySelector("#passwordOutputTwo-el")
var resetEl = document.querySelector("#reset-el")
let passwordLength = 15
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
 "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
 "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
 "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
 "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
 ":",";","<",">",".","?","/"];

// Random Character function
function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
//Generate password function
passwordEl.addEventListener("click", function(){
    let randomPassword = getRandomCharacter()
    for (let i = 0; i < passwordLength; i++) {
    //    passwordEl.textContent += getRandomCharacter()
       outputEl1.value += randomPassword
       outputEl2.value += randomPassword         
    }
})

//Password reset function
resetEl.addEventListener("click", function(){
    let reset = ""
    outputEl1.value = reset
    outputEl2.value = reset
})
