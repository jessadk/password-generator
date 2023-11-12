let themeToggle = document.getElementById("theme-toggle");
let themeIcon = document.getElementById("theme-icon");
let generateBtn = document.getElementById("generate-btn");
let resetBtn = document.getElementById("reset-btn");
let copyBtnOne = document.getElementById("copy-btn-one");
let copyBtnTwo = document.getElementById("copy-btn-two");
let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let lengthBtn = document.querySelectorAll(".length-btn");
let lengthValue = 15;


function reset(value = 15){
    // Remove "checked" class from all elements
    for (let i = 0; i < lengthBtn.length; i++) {
            lengthBtn[i].classList.toggle("checked", parseInt(lengthBtn[i].dataset.value) === value);
    }
    lengthValue = 15;
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
    copyBtnOne.classList.remove('copied');
    copyBtnTwo.classList.remove('copied');
}

for(let i = 0; i < lengthBtn.length; i++){
    lengthBtn[i].addEventListener('click', ()=>{
        reset(parseInt(lengthBtn[i].dataset.value));
        // Add "checked" class to the clicked element and update lengthValue with selected length
        lengthBtn[i].classList.add('checked');
        lengthValue = parseInt(lengthBtn[i].dataset.value);
    });
}

// Function uses random index on characters array to generate and return password that is 15 characters long
function generatePassword(value = 15) {
    let randomIndex = "";
    let password = "";
    for(let i = 0; i < value; i++){
        randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex];
    }
    return password;
}

function copyClick(password, btn) {
    navigator.clipboard.writeText(password.innerText)
    btn.classList.add('copied');
}


// Display two passwords on button click
generateBtn.addEventListener('click', ()=>{
    passwordOne.textContent = generatePassword(lengthValue);
    passwordTwo.textContent = generatePassword(lengthValue);
});

resetBtn.addEventListener('click', ()=>{
    reset();
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