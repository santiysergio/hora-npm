const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/get_time", (req, res) => {
    const current_time = new Date().toLocaleTimeString("es-ES", { timeZone: "Europe/Madrid" });
    res.json({ time: current_time });
});

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}`);
});
