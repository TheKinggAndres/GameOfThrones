const API_BASE = "https://thronesapi.com/api/v2";

async function obtenerDatos(endpoint) {
    const res = await fetch(`${API_BASE}/${endpoint}`);
    if (!res.ok) {
        throw new Error("Error al obtener datos");
    }
    return await res.json();
}
