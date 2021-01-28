const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalContent = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click', ()=> {
    modalContent.classList.toggle('open-modal');
});
closeBtn.addEventListener('click', ()=> {
    modalContent.classList.remove('open-modal');
});