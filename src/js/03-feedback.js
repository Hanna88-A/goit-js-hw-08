import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";
let objectFormElements = {};

form.addEventListener('input', throttle(onTextareaInput, 500));
form.addEventListener('submit', onFormSubmit);

populateMessage()

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(objectFormElements);
    
}

function onTextareaInput(e) {
    objectFormElements = {
        mail: form.elements.email.value,
        message: form.elements.message.value,
    };
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectFormElements));
}

function populateMessage(e) {
    const savedobjectFormElements= localStorage.getItem(STORAGE_KEY);
    const parsedobjectFormElements = JSON.parse(savedobjectFormElements);
    
    if (parsedobjectFormElements) {
        form.elements.email.value = parsedobjectFormElements.mail;
        form.elements.message.value = parsedobjectFormElements.message;
    }
}

