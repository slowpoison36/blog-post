const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConfig = require("./util/db-config");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const path =require("path");
const cors = require("cors");
app.use(express.static(path.join(__dirname,"public","build")));
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect(dbConfig.config.connectionUrl,(err)=>{
    if(!err)
        console.log("connected to database");
})
app.use("/api",userRoutes);
app.use("/api",postRoutes);

const PORT = process.env.PORT || 7000;

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","build","index.html"));
})
app.listen(PORT, () => console.log("Server started successfully"));