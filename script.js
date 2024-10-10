const button = document.getElementById('button');
const navig = document.getElementById('navig');

button.addEventListener('click', () => {
    navig.classList.toggle('active');
})