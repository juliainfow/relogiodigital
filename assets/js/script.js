const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function () {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}, 1000);

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const data = setInterval(function () {
    let dateToday = new Date();
    let day = dateToday.getDate();
    let month = dateToday.getMonth() + 1; // Os meses em JavaScript são de 0 a 11
    let year = dateToday.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    dia.textContent = day;
    mes.textContent = month;
    ano.textContent = year;
}, 1000);
