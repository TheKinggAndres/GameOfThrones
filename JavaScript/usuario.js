function mostrarUsuario() {
    const app = document.getElementById("app");
    app.innerHTML = "";
  
    const titulo = document.createElement("h2");
    titulo.textContent = "Game of Thrones API";
    app.appendChild(titulo);
  
    const imagen = document.createElement("img");
    imagen.src = "/mnt/data/622bf45d-4f3e-49a6-b240-ae5710290faa.png"; // La que subiste
    imagen.alt = "Logo Game of Thrones";
    app.appendChild(imagen);
  
    const descripcion = document.createElement("p");
    descripcion.textContent = "Explora los personajes de Game of Thrones usando la ThronesAPI.";
    app.appendChild(descripcion);
  
    const github = document.createElement("p");
    github.innerHTML = 'GitHub: <a href="https://github.com/TheKinggAndres" target="_blank">@tuUsuario</a>';
    app.appendChild(github);
  
    const nombre = document.createElement("footer");
    nombre.textContent = "Creado por: Andres Puentes";
    app.appendChild(nombre);
  }
  