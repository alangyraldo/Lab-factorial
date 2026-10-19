function mostrar(mensaje) {// Muestra un mensaje por consola y en la página
  console.log(mensaje);
  document.getElementById("resultado").textContent = mensaje;
}


function factorial(n) {// Calcula el factorial de n con un cicl
  let resultado = 1; // empiezo en 1 no en 0 sino daira 0
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}


const entrada = prompt("Escribe un número entero para calcular su factorial:");// entrada 


if (entrada === null) {//Si el usuario canceloo termino
  mostrar("Operación cancelada.");
} else {
    
  const n = entrada.trim() === "" ? NaN : Number(entrada);// convierto de texto a numero y el trim paa los espacios

 
  if (Number.isNaN(n)) {// para validar que sea nuemoer entero o negativo
    mostrar("Error: debes escribir un número.");
  } else if (!Number.isInteger(n)) {
    mostrar("Error: el factorial solo existe para números enteros.");
  } else if (n < 0) {
    mostrar("Error: el factorial no existe para números negativos.");
  } else {
    
    const resultado = factorial(n);// desoyes de calular se sejecuta

    
    const pasos = n <= 1// se arma 1x2x3x4x para que se vea el progeso 
      ? "1"
      : Array.from({ length: n }, (_, i) => i + 1).join(" x ");

    mostrar(`${n}! = ${pasos} = ${resultado}`);
  }
}