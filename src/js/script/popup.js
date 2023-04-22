/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-template */
const openBtn = document.querySelector('.footer__container-button');
export const popupMessage = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__form-close');
const body = document.body;
export const popupSuccess = document.querySelector('.popup__success');
const popupCloseSuccess = document.querySelector('.popup__form-close-success');
console.log(popupCloseSuccess);

// Функция открытия попапа

export function popupOpen(popup) {
  popup.classList.add('popup__opened');
  body.classList.add('scroll__hidden');
}

// Функция закрытия popup

export function popupClose(popup) {
  popup.classList.remove('popup__opened');
  body.classList.remove('scroll__hidden');
}

openBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popupOpen(popupMessage);
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popupClose(popupMessage);
});

// закрытие модального окна при клике на подложку
popupMessage.addEventListener('click', (e) => {
  if (e.target === popupMessage) {
    popupClose(popupMessage);
  }
});

// закрытие модального окна при клике на клавишу ESC

document.body.addEventListener('keyup', (e) => {
  const key = e.keyCode;

  if (key === 27) {
    popupClose(popupMessage);
  }
});

// закрытие модального окна success
popupCloseSuccess.addEventListener('click', () => {
  popupClose(popupSuccess);
});

popupSuccess.addEventListener('click', (e) => {
  if (e.target === popupSuccess) {
    popupClose(popupSuccess);
  }
});
