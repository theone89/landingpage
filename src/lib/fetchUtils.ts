// Fetch Utility para hacer solicitudes HTTP
export async function fetchData(url: string) {
  const apiUrl =
    process.env.NODE_ENV === "production"
      ? "https://strongfreecode.com"
      : "http://127.0.0.1:3000";
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
