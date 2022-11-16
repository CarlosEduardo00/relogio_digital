const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date ();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    if (hr >= 5 && hr < 7) {
        document.body.style.background =
        "linear-gradient(120deg, #108dc7, #ef8e38)";
    } else if (hr >= 7 && hr < 16) {
        document.body.style.background =
        "linear-gradient(120deg, #FDC830, #F37335)";
    } else if (hr >= 16 && hr < 18) {
        document.body.style.background =
        "linear-gradient(120deg, #8A2387, #E94057, #F27121)";
    } else {
        document.body.style.background =
        "linear-gradient(120deg, #0F2027, #203A43, #2c5364)";
    }
})