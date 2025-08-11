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


// example hover states
const navItems = document.querySelectorAll('nav ul li');

navItems.forEach(item => { 
  item.addEventListener('mouseover', () => {    
    const targetId = item.getAttribute('data-target');
    const target = document.querySelector(targetId);
    
    if (target) {
      target.classList.add('focus');
      target.parentNode.classList.add('hover');
    };
  });
  
  item.addEventListener('mouseout', () => {
    const targetId = item.getAttribute('data-target');
    const target = document.querySelector(targetId);
    
    if (target) {
      target.classList.remove('focus');
      target.parentNode.classList.remove('hover');
    };
  });
});