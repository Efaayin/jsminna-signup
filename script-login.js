let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('btn');

let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function errorFxn(input, message) {
    const fieldInput = input.parentElement;
    const small = fieldInput.querySelector('small');

    small.style.display = 'block';
    small.innerText = message;

    input.className = 'error'
}

function successFxn(input) {
    const fieldInput = input.parentElement;
    const small = fieldInput.querySelector('small');
    small.style.display = 'none';
    input.className = 'success'
}

function validate() {
    password.addEventListener('keyup', function() {
        if (password.value.trim().length < 8) {
            errorFxn(password, 'Password should be at least 8 characters long.')
        } else if (password.value.trim().length >= 8)
        {
            successFxn(password);
        }
    });

    email.addEventListener('keyup', function() {
        if (!email.value.match(mailformat)) {
            errorFxn(email, 'Please enter a valid email address.')
        } else {
            successFxn(email);
        }
    });

    login();
}

validate();

console.log(password.value === '');

function login() {
    if (email.value !== '' && password.value !== '') {
        btn.removeAttribute('disabled');
    }
}