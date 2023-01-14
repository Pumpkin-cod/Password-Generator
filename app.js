
var outputOne = document.getElementById("passwordOutputOne-el")
var outputTwo = document.getElementById("passwordOutputTwo-el")

function getPassword(){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var passwordLength = 15;
    var password = ""

    for(var i = 0; i < passwordLength; i++){
        var randomPassword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPassword, randomPassword+1);
    }
    outputOne.value = password
    outputTwo.value = password
}

//Password reset function
document.getElementById("reset-el").addEventListener("click", function(){
    let reset = " "
    outputOne.value = reset
    outputTwo.value = reset
})


//copy function
var copyBtn = document.getElementById("copy")
var copied = document.querySelector(".success")

copyBtn.addEventListener('click', () => {
    console.log (outputOne.value)
    window.navigator.clipboard.writeText(outputOne.value)
})


// toggling eye function
let eyeId = document.getElementById("eye")

eyeId.addEventListener('click', () => {
    if (outputTwo.type === 'text'){
        outputTwo.type = 'password'
    }else{
        outputTwo.type = 'text'
    }
})
