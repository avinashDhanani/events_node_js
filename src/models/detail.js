const mongoose = require("mongoose");
const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim:true,
    },
    uid: {
        type: String,
        require:true,
    }
});

const Detail = mongoose.model("Detail", vehicalSchema);
module.exports = Detail;
