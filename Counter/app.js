// set initial count
let count = 0;

// selct value and btns

var value = document.querySelector('#value');
var btns = document.querySelectorAll('.btn');


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        var styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = '#222';
        }
        value.textContent = count;
    })
});