let totalQty = 0;
const btnVerify = document.querySelector("#btnVerify");
//const inputs = document.querySelectorAll(".inputQty");
const input1 = document.querySelector('input[name="input1"]');
const input2 = document.querySelector('input[name="input2"]');
const input3 = document.querySelector('input[name="input3"]');

const msg = document.querySelector(".msg");

btnVerify.addEventListener('click', function(event) {
  totalQty = parseInt(input1.value) + parseInt(input2.value) + parseInt(input3.value);

  // Validar ingreso de campos
  if ( isNaN(totalQty) ) {
    msg.innerHTML = 'Debe rellenar los campos para poder continuar!';
    msg.style.color = 'red';
    return;
  }

  // Validar mayor a cero
  if (totalQty <= 0) {
    msg.innerHTML = 'Debe Ingresar al menos un sticker!';
    msg.style.color = 'red';
    return;
  }

  // Validar Cantidad Total
  if (totalQty > 10) {
    msg.innerHTML = 'Llevas demasiados stickers';
    msg.style.color = 'red';
    return;
  }

  // Mostrar mensaje y Cantidad
  msg.innerHTML = `Llevas ${totalQty} stickers`;
  msg.style.color = '#143D60';

});