const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://jindalm55:V3g56BQrT4RfwlQr@cluster0.tpshdmt.mongodb.net/RessQ");

// Check if connection is successful
connect.then(() => {
    console.log("Database connected successfully");
})
.catch((err) => {
    console.log("Database connection failed:", err);
});

// Create a schema 
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create a model
const collection = mongoose.model("User", LoginSchema); // Changed model name to "User"

module.exports = collection;
