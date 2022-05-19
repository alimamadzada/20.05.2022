"use strict"
let nameIn = document.querySelector(".name");
let middnameIn = document.querySelector(".midname");
let surnameIn = document.querySelector(".surname");
let birthdayIn = document.querySelector(".birthday");
let submitIn = document.querySelector(".submit");
let formContent = document.querySelector(".form__content");

document.addEventListener("click", function(e) {
    if (e.target.hasAttribute("class") && e.target.getAttribute("class").includes("submit")) {
        formContent.classList.add("d-none");
        formContent.style.display = "none";
    }
})