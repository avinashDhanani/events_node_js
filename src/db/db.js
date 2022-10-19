const mongoose = require("mongoose");
const url = `mongodb://localhost:27017/details`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then((res) => {
    console.log("db connected");
  });
