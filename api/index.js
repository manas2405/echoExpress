const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname,"/images")))

mongoose.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDb"))
.catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "images");
    },

    filename : (req, file, cb) => {
        cb(null, "aikshitIcar.jpg");
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


console.log("hello");

app.use("/lama", (req, res) => {
    console.log("hey this is lama url");
})

app.listen("5000", () => {
    console.log("Backend is running");
})

