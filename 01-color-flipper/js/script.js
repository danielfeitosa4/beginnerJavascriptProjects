const message = document.querySelector('#text')
const button = document.querySelector('.random-button')

button.addEventListener('click', () => {
  const color = document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);

  message.innerHTML = color
})