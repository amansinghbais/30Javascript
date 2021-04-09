const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data))


function cityMatcher(wordToMatch,cities){
    return cities.filter(place=>{
        const regex = new RegExp(wordToMatch,'gi');
        return place.city.match(regex) || place.state.match(regex);
    });

}

function displayMatches(){
    const array = cityMatcher(this.value,cities);
    suggestion.innerHTML = '';
    const html = array.map(place=>{
        const cityName = place.city;
        const stateName = place.state;
        const population = place.population;

        return `
            <li><p>${cityName}, ${stateName}</p><span>${population}</span></li>
        `
    }).join('');
    suggestion.innerHTML += html;
}

const search = document.querySelector('#search');
const suggestion = document.querySelector('.suggestion');

search.addEventListener('keyup', displayMatches);
search.addEventListener('change',displayMatches);