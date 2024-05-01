const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");


app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true ,
    useUnifiedTopology: true ,
})
.then(console.log("Connected to MongoDb"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "images");
    },

    filename : (req, file, cb) => {
        cb(null, req.body.name);
    },
})

const upload = multer({storage : storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);


app.use("/lama", (req, res) => {
    console.log("hey this is lama url");
})

app.listen(PORT, () => {
    console.log("Backend is running");
})

