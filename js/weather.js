'use strict'

const baseUrl = 'https://danepubliczne.imgw.pl/api/data/synop/';

const getWeather = async city => {
    try {
        const response = await fetch(`${baseUrl}`);
        const data = await response.json();
        return data;

    } catch(error) {
        console.error(error);
    }
}

getWeather().then(data => {
    
    data.forEach((element) => {
        let option = document.createElement('option');
        option.text = element.stacja.toUpperCase();
        option.value = element.stacja;
        let select = document.querySelector('#weatherCity');
        select.appendChild(option);
    });
    
    const confBtn = document.querySelector('.confBtn');
    const otherCity = document.querySelector('.otherCity');
    const container = document.querySelectorAll('.container-display');
    
    confBtn.addEventListener('click', () => {
        container[0].classList.add('before');
        container[1].classList.add('after');
    });
    
    otherCity.addEventListener('click', () => {
        container[0].classList.remove('before');
        container[1].classList.remove('after');
    });


    const whichCity = document.querySelector('#weatherCity');
    whichCity.addEventListener('change', () => {
        let i = whichCity.selectedIndex;
        let cityPlace = document.querySelector('.cityPlace');
        cityPlace.innerHTML = `${data[i-1].stacja}`;
        let datePlace = document.querySelector('.datePlace');
        datePlace.innerHTML = `${data[i-1].data_pomiaru}`;
        let timePlace = document.querySelector('.timePlace');
        timePlace.innerHTML = `${data[i-1].godzina_pomiaru}.00`;
        let tempPlace = document.querySelector('.tempPlace');
        tempPlace.innerHTML = `${data[i-1].temperatura} <span class="temp">&deg;C</span>`;
        let windPlace = document.querySelector('.windPlace');
        windPlace.innerHTML = `<img src="/assets/wind.svg" alt="windSign" height="25px"> ${data[i-1].predkosc_wiatru} m/s`;
        let pressPlace = document.querySelector('.pressPlace');
        pressPlace.innerHTML = `<img src="/assets/pressure.svg" alt="pressureSign" height="25px"> ${data[i-1].cisnienie} hPa`;
        let icoPlace = document.querySelector('.icoPlace');
        if (data[i-1].temperatura.value < 0 && data[i-1].suma_opadu.value > 1) {
            icoPlace.innerHTML = `<img src="/assets/snowfall.png" alt="snow" width="150px">`;
        } else if (data[i-1].temperatura.value > 0 && data[i-1].suma_opadu.value > 3) {
            icoPlace.innerHTML = `<img src="/assets/rainy.png" alt="rainy" width="150px">`;
        } else if (data[i-1].temperatura.value > 0 && data[i-1].suma_opadu.value == 0) {
            icoPlace.innerHTML = `<img src="/assets/cloudy.png" alt="rainy" width="150px">`;
        } else if (data[i-1].temperatura.value > 0 && data[i-1].suma_opadu.value > 10  && data[i-1].cisnienie.value < 998) {
            icoPlace.innerHTML = `<img src="/assets/rain.png" alt="rainy" width="150px">`;
        } else {
            icoPlace.innerHTML = `<img src="/assets/sun.png" alt="sunny" width="150px">`;
        }
    });
    
});

