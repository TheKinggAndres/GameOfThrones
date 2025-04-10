async function mostrarCasas() {
    const app = document.getElementById("app");
    app.innerHTML = "<h2>Casas</h2><div class='c-lista' id='lista-casas'></div>";

    try {
        const personajes = await obtenerDatos("Characters");
        const contenedor = document.getElementById("lista-casas");

        const casasUnicas = [...new Set(personajes.map(p => p.family).filter(f => f.trim() !== ""))];

        casasUnicas.forEach(casa => {
            const div = document.createElement("div");
            div.classList.add("c-card");
            div.innerHTML = `<strong>${casa}</strong>`;
            contenedor.appendChild(div);
        });
    } catch (error) {
        app.innerHTML = "<p>Error al cargar casas</p>";
        console.error(error);
    }
}
