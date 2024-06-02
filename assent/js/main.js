// BASE
precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
// FIN DE BASE

// DESAFÍO JS
let boton1 = document.querySelector(".boton-mas"); // Botón sumar.
let boton2 = document.querySelector(".boton-menos"); // Botón restar.
let n = 0;
let cuantos = document.querySelector(".cantidad"); // Cantidad variable.

// EVENTOS
// [ + ] : Botón sumar.
boton1.addEventListener("click", () => {
  n = n + 1;
  let totalapagar = document.querySelector(".valor-total"); // Llama al span del valor total.
  totalapagar.innerHTML = precio * n; // El total a pagar es igual al precio por la cantidad.

  cuantos.innerHTML = n; // Se muestra la nueva cantidad elegida.

  // Detalle extra que cambia colores si se va a comprar algo.
  if (n > 0) {
    body = document.querySelector("body");
    body.style.backgroundColor = "#7ba238";
    tarjeta = document.querySelector(".card");
    tarjeta.style.backgroundColor = "black";
  }
});

// [ - ] : Botón restar.
boton2.addEventListener("click", () => {
  n = n - 1;
  let totalapagar = document.querySelector(".valor-total");
  totalapagar.innerHTML = precio * n; // El total a pagar es igual al precio por la cantidad

  // Como n refleja una cantidad, debe ser un número natural.
  // Así que se hace la siguiente restricción para que no haya problemas.
  if (n <= 0) {
    totalapagar.innerHTML = "";
    n = 0; // Esta línea es MUY necesaria para que al sumar no se comience desde negativos.

    // Vuelve a colores originales si no se va a comprar nada.
    body = document.querySelector("body");
    body.style.backgroundColor = "#FFFFFFED"; // Fondo original en hexadecimal.
    tarjeta = document.querySelector(".card");
    tarjeta.style.backgroundColor = "#0785FA";
  }

  cuantos.innerHTML = n; // Se muestra la nueva cantidad elegida
});
// FIN DE DESAFÍO JS
