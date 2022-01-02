document.querySelector(".login").addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "flex";
})

document.querySelector(".close-cross").addEventListener("click", function () {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".error").textContent = " ";
})

document.querySelector(".submit").addEventListener("click", function () {
    document.querySelector(".error").textContent = "Username not recognised. Please try again.";
    const inputEl = document.querySelectorAll(".input-el");
    inputEl.forEach(inputEl => inputEl.value = "");
    // for (let i = 0; i < inputEl.length; i++) {
    //   inputEl[i].value = " ";
    // }
})