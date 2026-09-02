const express = require("express");
const multer = require("multer");
const cors = require("cors")
const uploadFile = require("./services/storage.services.js");
const profileModel = require("./models/profile.model.js");
const app = express();

app.use(cors())
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-profiles", upload.single("image"), async (req, res) => {
    const { name, bio } = req.body;
    const image = await uploadFile(req.file.buffer);

    const profile = await profileModel.create({ name, bio, image: image.url });
    res.status(201).json({ message: "profile created successfully", profile });
})


app.get("/profiles", async (req, res) => {
    const profiles = await profileModel.find()
    res.status(200).json({
        message: "profiles fetched successfully",
        profiles
    })
})

app.patch("/profiles/:id", async (req, res) => {
    const { id } = req.params
    const { name, bio } = req.body
    const profile = await profileModel.findById(id)
    profile.name = name
    profile.bio = bio
    await profile.save()
    res.status(200).json({
        message: "profile updated successfully",
        profile
    })
})

app.delete("/profiles/:id", async (req, res) => {
    const { id } = req.params
    const profile = await profileModel.findByIdAndDelete(id)
    res.status(200).json({
        message: "profile deleted successfully",
        profile
    })
})


module.exports = app