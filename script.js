// back button
const backButtons = document.querySelectorAll('.back');

backButtons.forEach((button) => {
  button.addEventListener('click', () => {
    history.back()
    console.log('go back')
  })
})

// add your own custom scripts here