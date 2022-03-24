const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

function getUpper() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLower() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = document.querySelector(".lenght").value;
    
    let password = '';

    for(let i = 0; i < len; i++) {
        const sign = generateSign();
        password += sign;
    }
    document.querySelector('.password_element').innerHTML = password
}

function generateSign() {
    const tab = [];
    if(document.querySelector('.uppercase').checked) {
        tab.push(getUpper());
    }
    if(document.querySelector('.lowercase').checked) {
        tab.push(getLower());
    }
    if(document.querySelector('.numbers').checked) {
        tab.push(getNumber());
    }
    if(document.querySelector('.symbols').checked) {
        tab.push(getSymbol());
    }


    return tab[Math.floor(Math.random() * tab.length)]
}

document.querySelector('button').addEventListener('click', () => {
    const len = document.querySelector(".lenght").value;
    const boxes = [...document.querySelectorAll('input[type="checkbox"]')]

    document.querySelector('.error_message').classList.remove('active')
    document.querySelector('.password_element').classList.remove('active')
    document.querySelector('.wrapper').classList.remove('active')

    if(boxes.some(box => box.checked)){
        if(len > 4 && len < 21) {
            document.querySelector('.password_element').classList.add('active')
            const password = generatePassword();
        } else {
            document.querySelector('.error_message').classList.add('active')
        }
    } else {
        document.querySelector('.error_message').classList.add('active')
    }
    if(document.querySelector('.error_message').className.endsWith('active') || document.querySelector('.password_element').className.endsWith('active')) {
        document.querySelector('.wrapper').classList.add('active')
    }
});