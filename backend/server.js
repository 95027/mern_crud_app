const express = require('express');
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const cors = require("cors");
const taskRoutes = require("./routes/taskRoute");

const app = express();

//middleware
app.use(express.json());

// for accessing form data
app.use(express.urlencoded({ extended : false }));
// cross origion resource sharing
// for sharing data from frontend to backend through diff origions
app.use(cors({
    origin : ["http://localhost:3000", "https://mern-crud-app-s0ny.onrender.com"]
}));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/api/tasks", taskRoutes);


const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT, () => console.log(`server is running on ${PORT}`))
})
.catch(err => console.log(err));


