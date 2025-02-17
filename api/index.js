export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const apiResponse = await fetch("https://apim.workato.com/api_ferco/searchi-v1/search");
    const data = await apiResponse.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data", details: error.message });
  }
}
