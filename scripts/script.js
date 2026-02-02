const buttonSearch = document.querySelector('.button-search');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal-close-button');

buttonSearch.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-closed');
})

modalCloseButton.addEventListener('click', () => {
    modal.classList.add('modal-closed');
});
