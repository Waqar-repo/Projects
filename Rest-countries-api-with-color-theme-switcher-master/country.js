const countryContainerCountry = document.querySelector('body')

const countryName = new URLSearchParams(window.location.search).get('name');


// console.log(countryName);


fetch (`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=> res.json()).then((data)=>{
    // console.log(data[0])
const x = data[0].population
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const countrydiv = document.createElement('div')
countrydiv.classList.add('country-container-country')

const country = data[0];
const currencyName = Object.values(country.currencies || {})[0]?.name;
const language = Object.values(country.languages)
// console.log(Object.values(data[0].name.nativeName));


const countryInfo = `
<div class="country-img">
  <img src="${data[0].flags.svg}" alt="flag">
</div>

<div class="country-data">
  <h1>${data[0].name.common}</h1>

  <div class="country-details">
    <p><strong>Native Name:</strong> ${Object.values(data[0].name.nativeName)[0].common}</p>
    <p><strong>Population:</strong> ${numberWithCommas(x)}</p>
    <p><strong>Region:</strong> ${data[0].region}</p>
    <p><strong>Sub Region:</strong> ${data[0].subregion}</p>
    <p><strong>Capital:</strong> ${data[0].capital[0]}</p>
    <p><strong>Top Level Domain:</strong> ${data[0].tld[0]}</p>
    <p><strong>Currencies:</strong> ${currencyName}</p>
    <p><strong>Languages:</strong> ${language}</p>
  </div>

  <div class="border">
    <h4>Border Countries:</h4>
    <div class="border-list">
      ${
        data[0].borders && data[0].borders.length > 0
          ? data[0].borders.slice(0, 3).map(border => `<span>${border}</span>`).join(' ')
          : '<span>None</span>'
      }
    </div>
  </div>
</div>
`;

countrydiv.innerHTML = countryInfo
countryContainerCountry.append(countrydiv)

})