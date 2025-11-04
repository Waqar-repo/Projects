
const countriesContainer = document.querySelector('.countries-container')
const filterByRegion = document.querySelector('.filter-by-region')
let allCountriesData
fetch ('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,tld,languages,borders')
.then((res)=> res.json())
.then((data)=>{

  renderCountries(data)
  allCountriesData = data
//     data.forEach(country => {
//         // console.log(country.capital[0]);
       
// const countryCard = document.createElement('a')
// countryCard.classList.add('country-card')
// const x = country.population
// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// countryCard.href = `/country.html?name=${country.name.common}`
// const cardHTML = `

//   <img src="${country.flags.svg}" alt="flag">
//   <div class="card-text">
//     <h3 class="card-title">${country.name.common}</h3>
//     <p><b>Population</b>: ${numberWithCommas(x)}</p>
//     <p><b>Region</b>: ${country.region}</p>
//     <p><b>Capital</b>: ${country.capital[0]}</p>

//     </div>

// `
// countryCard.innerHTML = cardHTML

// countriesContainer.append(countryCard)

        

//     });

})

filterByRegion.addEventListener('change',(e)=>{
// console.log(filterByRegion.value);
countriesContainer.innerHTML = '';
fetch (`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
.then((res)=> res.json())
.then((data)=>{
  renderCountries(data)
//   console.log(data);
//   // countriesContainer = ''
//     data.forEach(country => {
//        const countryName = country.name.common
//        console.log(countryName);
//        const countryFlag = country.flags.svg
//        console.log(countryFlag);
//        const countryPopulation = country.population || 0
//        console.log(countryPopulation);
//        const CountryRegion = country.region
//        console.log(CountryRegion);
//        const countryCapital = country.capital[0]
//        console.log(countryCapital);

//        const xs = country.population
// function numberWithCommas(xs) {
//   return xs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// const countryCard = document.createElement('a')
// countryCard.classList.add('country-card')

// countryCard.href = `/country.html?name=${countryName}`
// const cardHTML = `

//   <img src="${countryFlag}" alt="flag">
//   <div class="card-text">
//     <h3 class="card-title">${countryName}</h3>
//     <p><b>Population</b>: ${numberWithCommas(xs)}</p>
//     <p><b>Region</b>: ${CountryRegion}</p>
//     <p><b>Capital</b>: ${countryCapital}</p>

//     </div>

// `
// countryCard.innerHTML = cardHTML

// countriesContainer.append(countryCard)

        

//     });

})
})
function renderCountries(data){

  //  console.log(data);
  // countriesContainer = ''
    data.forEach(country => {
       const countryName = country.name.common
      //  console.log(countryName);
       const countryFlag = country.flags.svg
      //  console.log(countryFlag);
       const countryPopulation = country.population || 0
      //  console.log(countryPopulation);
       const CountryRegion = country.region
      //  console.log(CountryRegion);
       const countryCapital = country.capital[0]
      //  console.log(countryCapital);

       const xs = countryPopulation 
function numberWithCommas(xs) {
  return xs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const countryCard = document.createElement('a')
countryCard.classList.add('country-card')

countryCard.href = `/country.html?name=${countryName}`
const cardHTML = `

  <img src="${countryFlag}" alt="flag">
  <div class="card-text">
    <h3 class="card-title">${countryName}</h3>
    <p><b>Population</b>: ${numberWithCommas(xs)}</p>
    <p><b>Region</b>: ${CountryRegion}</p>
    <p><b>Capital</b>: ${countryCapital}</p>

    </div>

`
countryCard.innerHTML = cardHTML

countriesContainer.append(countryCard)

        

    });

  }

