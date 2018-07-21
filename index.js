const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const crmRoutes = require("./routes/crmRoutes");

// express settings
const app = express();
const PORT = 3000;

// database connection
//mongoose.Promise = global.Promise;
mongoose
    .connect(
        "mongodb://localhost:27017/CRMdb",
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error", err));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// express routings
crmRoutes(app);
app.get("/", (req, res) => res.send(`Server started on port ${PORT}`));
// serve static files
app.use(express.static("public"));

// start express server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
