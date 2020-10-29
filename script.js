let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let checkbox = document.getElementById('accept');
let btn = document.getElementById('signup-btn');

//error classes

/*
let firstNameError = document.getElementById('firstname-error');
let lastNameError = document.getElementById('lastname-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let confirmPasswordError = document.getElementById('confirm-password-error');
let genError = document.querySelector('.error');
*/

let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function errorFxn(input, message) {
    const fieldInput = input.parentElement;
    const small = fieldInput.querySelector('small');

    small.style.display = 'block';
    small.style.color = 'red';
    small.innerText = message;

    input.className = 'error'
}

function successFxn(input) {
    const fieldInput = input.parentElement;
    const small = fieldInput.querySelector('small');
    small.style.display = 'none';
    input.className = 'success';
}

let fnv, lnv, ev, pv, cpv;


function validate() {
    firstName.addEventListener('keyup', function() {
        if (/\d/.test(firstName.value)) {
            errorFxn(firstName, 'Your firstname must NOT contain any number.');
        } else if (!/\d/.test(firstName.value)) {
            successFxn(firstName);
        } else if (firstName.value.trim() === '') {
            errorFxn(firstName, 'This field cannot be left empty');
        }
    });
    
    lastName.addEventListener('keyup', function() {
        if (/\d/.test(lastName.value)) {
            errorFxn(lastName, 'Your lastname must NOT contain any number.');
        } else if (!/\d/.test(lastName.value)) {
            successFxn(lastName);
        } else if (lastName.value.trim() === '') {
            errorFxn(lastName, 'This field cannot be left empty');
        }
    });
    
    email.addEventListener('keyup', function() {
        if (!email.value.match(mailformat)) {
            errorFxn(email, 'Please enter a valid email address.');
        } else if (email.value.match(mailformat)) {
            successFxn(email);
        } else if (email.value.trim() === '') {
            errorFxn(email, 'This field cannot be left empty');
        }
    })
    
    password.addEventListener('keyup', function() {
        if (password.value.length < 8) {
            errorFxn(password, 'Password must be at least 8 characters.');
        } else if (password.value.length >= 8) {
            successFxn(password);
        } else if (password.value.trim() === '') {
            errorFxn(password, 'This field cannot be left empty');
        }
    })
    
    confirmPassword.addEventListener('keyup', function() {
        if (confirmPassword.value !== password.value) {
            errorFxn(confirmPassword, 'The passwords must match.');
        } else if (confirmPassword.value === password.value) {
            successFxn(confirmPassword);
        } else if (confirmPassword.trim() === '') {
            errorFxn(password, 'This field cannot be left empty');
        }
    });
    
    signUp();
}

function signUp() {
    if (
        /\d/.test(firstName.value) === false && 
        /\d/.test(lastName.value) === false && 
        email.value.match(mailformat) && 
        password.value.length >= 8 &&
        confirmPassword.value === password.value
    ) {
            // let att = document.createAttribute('href');
            // att.value = '#'
            // btn.setAttributeNode(att);

            btn.style.backgroundColor = '#3598DC';
            btn.style.cursor = 'pointer';
        }
};

validate();



/*
/\d/.test(firstName.value) === true && 
    /\d/.test(lastName.value) === true && 
    email.value.match(mailformat) && 
    password.value.length >= 8 &&
    confirmPassword.value === password.value &&
    checkbox.checked

    fnv !== '' && 
    lnv !== '' && 
    ev !== '' && 
    pv !== '' &&
    cpv !== '' &&
    checkbox.checked === true
*/