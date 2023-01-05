

function getPassword(){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var passwordLength = 15;
    var password = ""

    for(var i = 0; i < passwordLength; i++){
        var randomPassword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPassword, randomPassword+1);
    }
    document.getElementById("passwordOutputOne-el").value = password
    document.getElementById("passwordOutputTwo-el").value = password
}

//Password reset function
document.getElementById("reset-el").addEventListener("click", function(){
    let reset = " "
    document.getElementById("passwordOutputOne-el").value = reset
    document.getElementById("passwordOutputTwo-el").value = reset
})


// working on the first input field
document.getElementById("eye").addEventListener("click", function () {
    // toggling the type attribute
    const type = document.getElementById("passwordOutputOne-el").getAttribute("type") === "text" ? "text" : "password"
    document.getElementById("passwordOutputOne-el").setAttribute("type", type);
    // toggle the icon
    this.classList.toggle("fa-eye-slash");
});
