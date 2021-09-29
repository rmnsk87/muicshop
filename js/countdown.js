const finalDate = new Date("Dec 31, 2021 23:59:59").getTime();
let x = setInterval(function () {

    let now = new Date().getTime();
    let difference = finalDate - now;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown_clock").innerHTML = `<div>Днів:<br/> <span>${days}</span></div>` + `<div>Годин:<br/> <span>${hours}</span></div>` + `<div>Хвилин:<br/> <span>${minutes}</span></div>` + `<div>Секунд:<br/> <span>${seconds}</span></div>`;

    if (difference < 0) {
        clearInterval(x);
        document.getElementById("countdown_clock").innerHTML = "Школа стартувала";
    }
}, 1000);
