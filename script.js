var signUpContainer=document.querySelector(".signup-container")
var signInContainer=document.querySelector(".signin-container")
var sbutton=document.querySelector(".swipbutton")

sbutton.addEventListener("click", function(){
    signInContainer.style.display="block";
    signUpContainer.style.display="none";
    sbutton.textContent="signin"
})

