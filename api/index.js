export default async function handler(req, res) {
  /*if (req.method === "GET") {
    return res.json({ message: "API funcionando correctamente" });
  }*/

  if (req.method === "POST") {
    try {
      const apiResponse = await fetch('https://apim.workato.com/api_ferco/searchi-v1/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-token': '94700300d77ce83c0806ec2e9cec6d16f24522b9a49bf4e9638d7efcc1e39710'
            },
            body: JSON.stringify(req.body),
            //body: JSON.stringify(payload),
      });
      const data = await apiResponse.json();
      res.json(data);
    } catch (error) {
      console.error("Error en la API:", error);
      res.status(500).json({ error: "Error en la API", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]); // 🔹 Indica métodos permitidos
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
