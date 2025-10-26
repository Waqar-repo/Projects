
const countriesContainer = document.querySelector('.countries-container')


fetch ('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders')
.then((res)=> res.json()).then((data)=>{
    data.forEach(country => {
        // console.log(country.capital[0]);
const countryCard = document.createElement('a')
countryCard.classList.add('country-card')
const x = country.population
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const cardHTML = `

  <img src="${country.flags.svg}" alt="flag">
  <div class="card-text">
    <h3 class="card-title">${country.name.common}</h3>
    <p><b>Population</b>: ${numberWithCommas(x)}</p>
    <p><b>Region</b>: ${country.region}</p>
    <p><b>Capital</b>: ${country.capital[0]}</p>

    </div>

`
countryCard.innerHTML = cardHTML

countriesContainer.append(countryCard)

        

    });

})

