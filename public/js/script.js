const sign_in_btn_toggle = document.querySelector("#sign-in-btn_toggle");
const sign_up_btn_toggle = document.querySelector("#sign-up-btn_toggle");
const signip_btn = document.querySelector("#signip_btn");
const container = document.querySelector(".container");
const signup_username = document.querySelector("#signup_username")

sign_up_btn_toggle.addEventListener("click", () => {
    container.classList.add("sign-up-mode");


});
signip_btn.addEventListener("click", () => {
    localStorage.setItem("username", signup_username.value);
})

sign_in_btn_toggle.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});
