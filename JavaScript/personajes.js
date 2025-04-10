async function mostrarPersonajes() {
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Personajes</h2><div class='c-lista' id='lista-personajes'></div>";

    try {
        const personajes = await obtenerDatos("Characters");
        const contenedor = document.getElementById("lista-personajes");

        personajes.forEach(personaje => {
            const div = document.createElement("div");
            div.classList.add("c-card");
            div.innerHTML = `
                <strong>${personaje.fullName}</strong><br>
                <img src="${personaje.imageUrl}" alt="${personaje.fullName}" /><br>
                <em>${personaje.title}</em><br>
                <small>${personaje.family}</small>
            `;
            contenedor.appendChild(div);
        });
    } catch (error) {
        app.innerHTML = "<p>Error al cargar personajes</p>";
        console.error(error);
    }
}
