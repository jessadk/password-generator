const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const copyBtnOne = document.getElementById("copy-btn-one");
const copyBtnTwo = document.getElementById("copy-btn-two");
const passwordOne = document.getElementById("password-one");
const passwordTwo = document.getElementById("password-two");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const lengthBtn = document.querySelectorAll(".length-btn");

// Default password
let lengthValue = 15;


function resetValues(value = 15){
    /* Loop through length buttons and toggle "checked" class based on
    button data-value and value passed */
    for (let i = 0; i < lengthBtn.length; i++) {
            lengthBtn[i].classList.toggle("checked", parseInt(lengthBtn[i].dataset.value) === value);
    }
    lengthValue = value;
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
    copyBtnOne.classList.remove('copied');
    copyBtnTwo.classList.remove('copied');
}

/* Add event click to each button. When clicked, pass button data-value
to resetValues function to toggle clicked button styles, update length value and reset password container values */
for(let i = 0; i < lengthBtn.length; i++){
    lengthBtn[i].addEventListener('click', ()=>{
        resetValues(parseInt(lengthBtn[i].dataset.value));
    });
}

/* Function uses random index on characters array to generate and return
password that is (default) 15 characters long */
function generatePassword(value = 15) {
    let randomIndex = "";
    let password = "";
    for(let i = 0; i < value; i++){
        randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex];
    }
    return password;
}

// function copies password to system clipboard
function copyClick(password, btn) {
    navigator.clipboard.writeText(password.innerText)
    btn.classList.add('copied');
}

generateBtn.addEventListener('click', ()=>{
    passwordOne.textContent = generatePassword(lengthValue);
    passwordTwo.textContent = generatePassword(lengthValue);
});

resetBtn.addEventListener('click', ()=>{
    resetValues();
});

copyBtnOne.addEventListener('click', () => {
    copyClick(passwordOne, copyBtnOne);
});

copyBtnTwo.addEventListener('click', () => {
    copyClick(passwordTwo, copyBtnTwo);
});

themeToggle.addEventListener('click', ()=>{
    let main = document.querySelector("main");
    main.classList.toggle('light-mode');
    if (!main.classList.contains('light-mode')) {
        themeIcon.src = "assets/light-icon.svg";
    } else {
        themeIcon.src = "assets/dark-icon.svg";
    }
});