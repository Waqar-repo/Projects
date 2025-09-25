const errorCheck= document.querySelector('.error-label')
const goalInput = document.querySelectorAll('.goal-input')
const CheckBoxList = document.querySelectorAll('.custom-checkbox')
const progressValue = document.querySelector('.progress-value')
const progressBar = document.querySelector('.progress-bar')

CheckBoxList.forEach((checkbox)=>{
    checkbox.addEventListener('click', (e)=> {

const allFieldsfilled = [...goalInput].every((input)=>{
return input.value
})
if(allFieldsfilled){
      checkbox.parentElement.classList.toggle('completed')
      
      progressValue.style.width='33.33%'
            
}
else{
  errorCheck.classList.add('error-label1')
}
    })
})

goalInput.forEach((input)=>{
input.addEventListener('focus',()=>{
errorCheck.classList.remove('error-label1')
})
})

