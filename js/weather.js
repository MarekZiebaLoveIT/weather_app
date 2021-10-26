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
    
    
});





/*
const whichCity = document.querySelector('#weatherCity');
whichCity.addEventListener('change', () => {
    let i = whichCity.selectedIndex;
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${data[i-1].stacja}</td>
    <td>${data[i-1].data_pomiaru}</td>
    <td>${data[i-1].godzina_pomiaru}</td>
    <td>${data[i-1].temperatura}</td>
    <td>${data[i-1].suma_opadu}</td>
    <td>${data[i-1].cisnienie}</td>
    `;
    document.querySelector('table tbody').appendChild(tr);
});
*/