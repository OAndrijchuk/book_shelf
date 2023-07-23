const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[0].classList.add('activ-page');

const mobileLinks = document.querySelectorAll('.mob-menu-link');
mobileLinks.forEach(el => el.classList.remove('activ-page'));
mobileLinks[0].classList.add('activ-page');

const userEl = document.querySelector(".user-btn")
const logOutBtn = document.querySelector(".sign-out-btn");
const signUpBtn = document.querySelector(".sign-up-btn")

userEl.addEventListener("click", showLogOut)
function showLogOut() {   
    logOutBtn.classList.toggle("hidden-button")
}

logOutBtn.addEventListener("click", logOutUserSecssion)
function logOutUserSecssion() {   
    logOutBtn.classList.toggle("hidden-button")
    userEl.classList.add("hide-user")
    signUpBtn.classList.remove("hidden-button")
    // !NEED to add LOGIC TO "LOG OUT" or Redirect to "Log Out page"
}
