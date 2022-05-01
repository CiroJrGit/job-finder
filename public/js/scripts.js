let favLight = document.getElementById('favL');
let favDark = document.getElementById('favD');
let btnHamb = document.getElementById('btn-mob')
let valueDisplay = document.querySelectorAll('.counter');
let interval = 3000;

setTimeout(function() {
    $('#top-container').parallax({imageSrc: '/img/banner.jpg'});
}, 100);

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDisplay.textContent = startValue;
        
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

function favToggle() {
    favLight.classList.toggle("active");
    favDark.classList.toggle("active");
}

function hambToggle() {
    btnHamb.classList.toggle("active");
}