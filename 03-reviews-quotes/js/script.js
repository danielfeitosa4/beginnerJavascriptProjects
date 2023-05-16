const randomButton = document.querySelector('#random-section')
const allSections = document.querySelectorAll('.sec')
const btnLeft = document.querySelector('.bi-arrow-left')
const btnRight = document.querySelector('.bi-arrow-right')

const toSpend = () => {
  console.log('test')
}

btnLeft.addEventListener('click', () => {
  toSpend()
})

const trade = () => {
  const loop = (Math.floor(Math.random() * 4))
  
  for (let i = 0; i < 4; i++) {
    if(loop != i){
      allSections[i].style.display = "none";
    } else{
      allSections[i].style.display = "block";
    }
  }
}

trade()

randomButton.addEventListener('click', () => {
  trade()
})
