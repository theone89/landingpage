// Fetch Utility para hacer solicitudes HTTP
export async function fetchData(url: string) {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? process.env.PRODUTION_URL
      : process.env.lOCAL_URL;
  try {
    const res = await fetch(`${apiUrl}${url}`);

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
