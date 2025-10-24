require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const routes = require("./src/routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes.router);


app.get("/", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
