const decrease = document.querySelector('.btn-decrease')
const reset = document.querySelector('.btn-reset')
const increase = document.querySelector('.btn-increase')
const value = document.querySelector('#value')

let counterVal = 0

const updateDisplay = (val) => {
  if(counterVal < 0) {
    document.getElementById('value').style.color = 'red'
  } else if (counterVal > 0) {
    document.getElementById('value').style.color = 'green'
  } else {
    document.getElementById('value').style.color = '#102A42'
  }
  value.innerHTML = val
}

decrease.addEventListener('click', () => {
  updateDisplay(--counterVal)
})

reset.addEventListener('click', () => {
  updateDisplay(counterVal = 0)
})

increase.addEventListener('click', () => {
  updateDisplay(++counterVal)
})

