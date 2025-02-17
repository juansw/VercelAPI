import express from "express";

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const apiResponse = await fetch("https://apim.workato.com/api_ferco/searchi-v1/search");
    const data = await apiResponse.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data", details: error.message });
  }
});

export default app;

