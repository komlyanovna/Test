import {
  popupClose, popupMessage, popupOpen, popupSuccess,
} from './popup';

const formMessage = document.getElementById('form-message');

function validation(form) {
  function createError(input, text) {
    const parent = input.parentNode;
    const errorText = document.createElement('p');

    errorText.classList.add('error-text');
    errorText.textContent = text;

    parent.classList.add('error');
    parent.append(errorText);
  }

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-text').remove();
      parent.classList.remove('error');
    }
  }

  let res = true;

  form.querySelectorAll('input').forEach((el) => {
    removeError(el);
    if (el.value === '') {
      createError(el, 'Поле не заполнено!');
      res = false;
    }
  });

  return res;
}

formMessage.addEventListener('submit', (event) => {
  event.preventDefault();

  validation(formMessage);

  if (validation(formMessage) === true) {
    popupClose(popupMessage);
    formMessage.reset();
    popupOpen(popupSuccess);
  }
});
