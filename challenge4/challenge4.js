let response;

const password = document.querySelector('.password');
const confirm = document.querySelector('.confirm');
const username = document.querySelector('.username');

const form = document.querySelector('.form');
const button = document.querySelector('#button');
const responseSpace = document.querySelector('.responseSpace');

form.addEventListener('submit', passwordMatch);

function passwordMatch(e) {
    e.preventDefault();    

    if (password.value.length === 0 || confirm.value.length === 0 || username.value.length === 0) {

        let response = document.createElement('response');
        response.textContent = 'Sorry, all fields required. Please try again.';
        responseSpace.appendChild(response);
    }

    else if (password.value === confirm.value) {

        let response = document.createElement('response');
        response.textContent = 'Congratulations! Your information was accepted.';
        responseSpace.appendChild(response);
    }
    
    else{

        let response = document.createElement('response');
        response.textContent = 'Sorry, your passwords do not match. Please try again.';
        responseSpace.appendChild(response);

    }

}