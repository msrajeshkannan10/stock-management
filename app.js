const express = require("express");
const mongoose = require("mongoose");
const app = express();
const admin = require("./routes/admin")
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect(`mongodb+srv://rajesh:rajesh@cluster0.abit9fy.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("success"));
app.listen(port, () => {
    console.log(`local server started on http://localhost:${port}`);
  });
app.use("/api",admin)
module.exports=app;