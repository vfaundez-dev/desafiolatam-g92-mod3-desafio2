const imgChangeStyle = document.querySelector("#imgChangeStyle");
const btnChangeStyle = document.querySelector("#btnChangeStyle");


btnChangeStyle.addEventListener('click', function(event) {

  if (imgChangeStyle.style.border == '2px solid red') {
    imgChangeStyle.style.border = 'none';
    btnChangeStyle.innerHTML = 'Agregar Borde'
  } else {
    imgChangeStyle.style.border = '2px solid red';
    btnChangeStyle.innerHTML = 'Quitar Borde'
  }
  
});