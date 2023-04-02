const toggleButton = document.querySelector('.toggle-btn')
const toggleIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.drop-down')

toggleIcon.onclick = function (){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleIcon.classList =isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}