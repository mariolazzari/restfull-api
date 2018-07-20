const express = require("express");
const crmRoutes = require("./routes/crmRoutes");

const app = express();
const PORT = 3000;

crmRoutes(app);

app.get("/", (req, res) => res.send(`Server started on port ${PORT}`));

app.listen(PORT, () => console.log("Server started on port", PORT));
