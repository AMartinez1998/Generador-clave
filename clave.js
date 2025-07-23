const input = document.getElementById("cantidad");
    const mayusculas = document.getElementById("mayusculas");
    const minusculas = document.getElementById("minusculas");
    const numeros = document.getElementById("numeros");
    const simbolos = document.getElementById("simbolos");
    const boton = document.getElementById("boton1");
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", function (event) {
      event.preventDefault();

      let caracteres = [];

      if (mayusculas.checked) {
        caracteres = caracteres.concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
      }
      if (minusculas.checked) {
        caracteres = caracteres.concat('abcdefghijklmnopqrstuvwxyz'.split(''));
      }
      if (numeros.checked) {
        caracteres = caracteres.concat('0123456789'.split(''));
      }
      if (simbolos.checked) {
        caracteres = caracteres.concat('!@#$%^&*()_+[]{}<>?/|~-=.'.split(''));
      }

      const longitudClave = Number(input.value);

      if (caracteres.length === 0 || longitudClave < 8 || longitudClave > 12) {
        alert("Selecciona al menos un tipo de carácter y una longitud válida.");
        return;
      }

      let clave = "";
      for (let i = 0; i < longitudClave; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        clave += caracteres[indice];
      }

      // Limpia el contenido anterior
      resultado.innerHTML = "";

      

      // Muestra la nueva clave
      const mostrarClave = document.createElement("p");
      mostrarClave.textContent = "Tu clave generada es: " + clave;
      mostrarClave.classList.add("clave-generada");
      resultado.appendChild(mostrarClave);
      formulario.reset();
    });
