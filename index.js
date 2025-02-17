import express from "express";
import path from "path";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.post("/api", async (req, res) => {
  try {
    const apiResponse = await fetch("https://apim.workato.com/api_ferco/searchi-v1/search");
    const data = await apiResponse.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data", details: error.message });
  }
});

// Export properly for ESM
export default app;

