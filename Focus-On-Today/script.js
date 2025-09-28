const errorCheck = document.querySelector('.error-label');
const goalInput = document.querySelectorAll('.goal-input');
const CheckBoxList = document.querySelectorAll('.custom-checkbox');
const progressValue = document.querySelector('.progress-value');
const progressBar = document.querySelector('.progress-bar');
const Allgoals = JSON.parse(localStorage.getItem('Allgoals')) || {};
const progressLabel = document.querySelector('.progress-label');
const bottonQuote = document.querySelector('.quote');

const button = document.querySelector('.buton')
const duplicate = document.querySelector('.duplicate')

const allQuotes = [
  'Rise the bar by completing your goal!',
  'well begun is half done',
  'Just a step away,keep going!',
  'Whao! you just completed all the goals. time for chill :D',
  // '“Keep Going, You are making great progress!”',
  // '“Move one step ahead, today!”',
  // 'Well done',
];
let completedGoalCount = Object.values(Allgoals).filter(
  (goal) => goal.completed
).length;
progressValue.style.width = `${(completedGoalCount / goalInput.length) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalCount}/${ goalInput.length} completed`;
progressLabel.innerText = allQuotes[completedGoalCount];

CheckBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const allFieldsfilled = [...goalInput].every((input) => {
      return input.value;
    });

    if (allFieldsfilled) {
      checkbox.parentElement.classList.toggle('completed');

      const inputId = checkbox.nextElementSibling.id;
      Allgoals[inputId].completed = !Allgoals[inputId].completed;
      completedGoalCount = Object.values(Allgoals).filter(
        (goal) => goal.completed).length;
      progressValue.style.width = `${(completedGoalCount / goalInput.length) * 100}%`;
     progressValue.firstElementChild.innerText = `${completedGoalCount}/${ goalInput.length} completed`;
      localStorage.setItem('Allgoals', JSON.stringify(Allgoals));
      progressLabel.innerText = allQuotes[completedGoalCount];
 
    } else {
      errorCheck.classList.add('error-label1');
    }
  });
});

goalInput.forEach((input) => {
  if (Allgoals[input.id]) {
    input.value = Allgoals[input.id].name;
    if (Allgoals[input.id].completed) {
      input.parentElement.classList.add('completed');
    }
  } else {
    // Initialize empty goal if not in localStorage
    Allgoals[input.id] = { name: "", completed: false };
  }

  input.addEventListener('focus', () => {
    errorCheck.classList.remove('error-label1');
  });

  input.addEventListener('input', (e) => {
    if (Allgoals[input.id].completed) {
      e.target.value = Allgoals[e.target.id].name;
      return;
    }
    Allgoals[input.id] = {
      name: e.target.value,
      completed: false,
    };

    localStorage.setItem('Allgoals', JSON.stringify(Allgoals));
  });
});
// button.addEventListener('click',(e)=>{
//   const newDiv = duplicate.cloneNode(true)

// duplicate.appendChild(newDiv)
  

// })