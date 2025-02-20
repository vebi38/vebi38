const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const countriesContainer = document.getElementById('countries-container');
const loading = document.getElementById('loading');
const noResults = document.getElementById('no-results');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        fetchCountries(query);
    }
});

async function fetchCountries(query) {
    showLoading();
    countriesContainer.innerHTML = '';
    noResults.classList.add('hidden');

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        const countries = await response.json();
        displayCountries(countries);
    } catch (error) {
        noResults.classList.remove('hidden');
    } finally {
        hideLoading();
    }
}

function displayCountries(countries) {
    countries.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('country-card');
        
        const flag = country.flags.svg || country.flags.png || '';
        const capital = country.capital ? country.capital[0] : 'N/A';
        const languages = Object.values(country.languages).join(', ');
        const currencies = Object.values(country.currencies).map(c => c.name).join(', ');
        
        card.innerHTML = `
            <img src="${flag}" alt="${country.name.common} flag" width="100">
            <h2>${country.name.common}</h2>
            <p>Population: ${country.population.toLocaleString()}</p>
            <p>Capital: ${capital}</p>
            <p>Area: ${country.area.toLocaleString()} km²</p>
            <p>Languages: ${languages}</p>
            <p>Currencies: ${currencies}</p>
        `;
        
        countriesContainer.appendChild(card);
    });
}

function showLoading() {
    loading.classList.remove('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}

// Extra buttons functionality
document.getElementById('get-europe').addEventListener('click', () => fetchRegion('Europe'));
document.getElementById('get-neighbors').addEventListener('click', () => fetchNeighbors('Macedonia'));
document.getElementById('get-macedonia').addEventListener('click', () => fetchCountries('Macedonia'));

async function fetchRegion(region) {
    showLoading();
    countriesContainer.innerHTML = '';
    noResults.classList.add('hidden');

    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const countries = await response.json();
        displayCountries(countries);
    } catch (error) {
        noResults.classList.remove('hidden');
    } finally {
        hideLoading();
    }
}

async function fetchNeighbors(countryName) {
    const countries = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const countryData = await countries.json();
    const neighbors = countryData[0].borders || [];

    if (neighbors.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    const neighborsPromises = neighbors.map(async (code) => {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        return res.json();
    });
    
    const neighborCountries = await Promise.all(neighborsPromises);
    displayCountries(neighborCountries);
}
