const decrease = document.querySelector('.btn-decrease')
const reset = document.querySelector('.btn-reset')
const increase = document.querySelector('.btn-increase')

const saudacao = () => {
  console.log('Olá, como você está?!')
}

decrease.addEventListener('click', () => {
  saudacao()
})