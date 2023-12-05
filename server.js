const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Chandan:Chandan1402@cluster0.gmwqwi1.mongodb.net/?retryWrites=true&w=majority").then(() => {
  console.log("MongoDB Connected");
});

const userRouter = require('./routes/UserRoute')

app.use('/users', userRouter)

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
