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

let watch = {
    one: '',
    two: ''
};

function emailValidate() {
    if (!email.value.match(mailformat)) {
        errorFxn(email, 'Please enter a valid email address.')
        watch.one = 'false';
    } else if (email.value.match(mailformat) && password.value.trim().length < 8) {
        successFxn(email);
        watch.one = 'true';
    } else if (email.value.match(mailformat) && password.value.trim().length >= 8) {
        successFxn(email);
        watch.one = 'true';
        watch.two = 'true';
        login();
    }
}

function passwordValidate() {
    if (password.value.trim().length < 8) {
        errorFxn(password, 'Password should be at least 8 characters long.');
        watch.one = 'false';
    } else if (password.value.trim().length >= 8 && !email.value.match(mailformat)) {
        successFxn(password);
        watch.two = 'true'
        watch.one = 'true'
    } else if (password.value.trim().length >= 8 && email.value.match(mailformat)) {
        successFxn(password);
        watch.one = 'true'
        watch.two = 'true'
        login();
    }
}

function login() {
    btn.disabled = false;
}

function validate() {
    email.addEventListener('keyup', emailValidate);

    password.addEventListener('keyup', passwordValidate);
}

validate();
