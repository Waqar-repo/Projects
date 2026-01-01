const submitEvent = document.getElementById('postcode-form')
const postCodeData = document.getElementById('postcode-input')
const container = document.querySelector('.container')
const refreshUl = document.querySelector('.refresh')
const resultsContainerUl = document.querySelector('.resultsContainer')
const arrowUl = document.querySelector('.arrow')
const carbonText = document.querySelector('.carbonText')
const messageUl = document.querySelector('.message')
const recomandationUl = document.querySelector('.recomandation')
const durationUl = document.querySelector('.duration')
const indicatorH1Ul = document.querySelector('.indicatorH1')

submitEvent.addEventListener('submit',(e)=>{
    e.preventDefault()
    const postcode = postCodeData.value
const p = postcode.trim().split(' ')[0].toUpperCase()
const url = `https://api.carbonintensity.org.uk/regional/postcode/${p}`

async function getApiData(){
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.data[0].data[0].generationmix);
const fromdate = data.data[0].data[0].from
const toDate = data.data[0].data[0].to
const foreCast = data.data[0].data[0].intensity.forecast
const index = data.data[0].data[0].intensity.index

const start = new Date(fromdate);
const end = new Date(toDate);
const diffInMs = end - start
const diffInHours = diffInMs / (1000 * 60 * 60)
durationUl.innerText = `on next ${diffInHours} hours`

carbonText.innerText = `Current Carbon Level: ${foreCast}`

 indicatorH1Ul.innerText = index


if(foreCast <= 150){

   
    arrowUl.style.left = `${(540/540)*foreCast+10}px`
    messageUl.innerText = 'Great time to use electricity!'
    recomandationUl.innerText = 'Run the dishwasher or charge the EV now.'
    
}
else if(foreCast > 150 && foreCast <=250){
    arrowUl.style.left = `${(540/540)*foreCast}px`
    messageUl.innerText = 'Think before you plug in.'
    recomandationUl.innerText = 'Its an average day; maybe wait for a sunnier/windier hour.'
    
}
else{
    arrowUl.style.left = '470px';
    messageUl.innerText = 'Try to avoid heavy usage right now.'
    recomandationUl.innerText = 'High carbon impact; wait until later to use the washing machine.'
    
}

}
getApiData()

container.style.display = 'none'
resultsContainerUl.style.display = 'block'

})

refreshUl.addEventListener('click',()=>{
container.style.display = 'block'
resultsContainerUl.style.display = 'none'
})

