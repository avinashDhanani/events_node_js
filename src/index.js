const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.get("/", (req, res) => {
    res.send("you are in the backend");
})

app.listen(port, () => {
    console.log("Server is up on port :- " + port);
})