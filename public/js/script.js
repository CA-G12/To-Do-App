const sign_in_btn_toggle = document.querySelector("#sign-in-btn_toggle");
const sign_up_btn_toggle = document.querySelector("#sign-up-btn_toggle");
const signup_btn = document.querySelector("#signup_btn");
const signin_btn = document.querySelector("#signin_btn");
const container = document.querySelector(".container");
const signup_username = document.querySelector("#signup_username")
const signin_username = document.querySelector("#signin_username")

sign_up_btn_toggle.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});
signup_btn.addEventListener("click", () => {
    localStorage.setItem("signupUsername", signup_username.value);
})
signin_btn.addEventListener("click", () => {
    localStorage.setItem("signinUsername", signin_username.value);
})

sign_in_btn_toggle.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
