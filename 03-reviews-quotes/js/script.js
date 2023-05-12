const randomButton = document.querySelector('#random-section')
const firstSection = document.querySelector('.sec1')
const secondSection = document.querySelector('.sec2')
const thirdSection = document.querySelector('.sec3')
const fourthSection = document.querySelector('.sec4')
const allSections = document.querySelectorAll('.sec')

const trade = () => {
  // const loop = (Math.floor(Math.random() * 4))
  // console.log(allSections)
  // console.log(loop)

  // for (let i = 0; i < 4; i++) {
  //   if(loop != i){
  //     allSections[i].style.display = "none";
  //   } else{
  //     allSections[i].style.display = "block";
  //   }
  // }

  const sectionRandom = Math.floor(Math.random() * 4)
  console.log(sectionRandom)

  for (i = 0; i < allSections.length; i++) {
    console.log(allSections[i])
  }

}

randomButton.addEventListener('click', () => {
  trade()
})
