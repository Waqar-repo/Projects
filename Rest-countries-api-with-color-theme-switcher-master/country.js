const countryContainerCountry = document.querySelector('body')

const countryName = new URLSearchParams(window.location.search).get('name');


console.log(countryName);


fetch (`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json()).then((data)=>{
    console.log(data[0])
const x = data[0].population
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const countrydiv = document.createElement('div')
countrydiv.classList.add('country-container-country')

const country = data[0];
const currencyName = Object.values(country.currencies || {})[0]?.name;
const language = Object.values(country.languages)
const countryInfo = `

<div class="country-img">
    <img src="${data[0].flags.svg}" alt="flag">
</div>
<div class="country-data">
<h1>${data[0].name.common}</h1>
<p>Native Name: ${data[0].name.common}</p>
<p>Population: ${numberWithCommas(x)}</p>
<p>Region: ${data[0].region}</p>
<p>Sub Region: ${data[0].subregion}</p>
<p>Capital: ${data[0].capital[0]} </p>
</div>
<div class="country-data-one">
<p>Top Level Domain: ${data[0].tld[0]}</p>
<p>Currencies: ${currencyName}</p>
<p>Language: ${language}</p>

</div>
<div class="border">
<h4>  Border Countries:
  ${data[0].borders && data[0].borders.length > 0
    ? data[0].borders.slice(0, 3).map(border => `<span>${border}</span>`).join(' ')
    : '<span>None</span>'}</h4>
</div>

`
countrydiv.innerHTML = countryInfo
countryContainerCountry.append(countrydiv)

})