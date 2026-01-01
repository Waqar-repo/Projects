const submitEvent = document.getElementById('postcode-form')
const postCodeData = document.getElementById('postcode-input')
const container = document.querySelector('.container')

let postcode
submitEvent.addEventListener('submit',(e)=>{
    e.preventDefault()
     postcode = postCodeData.value
console.log('hi', typeof postcode);
container.style.display = 'none'

})


