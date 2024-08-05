// back button
const backButtons = document.querySelectorAll('.back');

backButtons.forEach((button) => {
  button.addEventListener('click', () => {
    history.back()
    console.log('go back')
  })
})


// colour button
const colourButton = document.querySelector('#colourButton');

colourButton.addEventListener('click', () => {
  console.log('change colour');
  colourButton.classList.toggle("colour");
});