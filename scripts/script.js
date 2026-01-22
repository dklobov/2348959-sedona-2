const buttonWantHere = document.querySelector('.button-want-here');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');

buttonWantHere.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-closed');
})

modalCloseButton.addEventListener('click', () => {
    modal.classList.add('modal-closed');
});
