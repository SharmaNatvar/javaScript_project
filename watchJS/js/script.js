const hourLine = document.querySelector('.hour_line')
const minLine = document.querySelector('.min_line')
const secLine = document.querySelector('.sec_line')

function setTime() {
    const date = new Date()

    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    console.log(hour , min , sec);

    const hourDeg = ((min/24)*360)
    hourLine.style.transform = `rotate(${hourDeg}deg)`;


    const minDeg = ((min/60)*360)
    minLine.style.transform = `rotate(${minDeg}deg)`;


    const secDeg = ((sec/60)*360)
    secLine.style.transform = `rotate(${secDeg}deg)`;
}

setInterval(() => {
    setTime()
}, 1000);