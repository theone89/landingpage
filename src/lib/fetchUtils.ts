// Fetch Utility para hacer solicitudes HTTP
export async function fetchData(url: string) {
  try {
    const res = await fetch(`${url}`);
    console.log(url);
    if (!res.ok) {
      throw new Error(`Error en la solicitud: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al realizar el fetch:", error);
    throw error;
  }
}
