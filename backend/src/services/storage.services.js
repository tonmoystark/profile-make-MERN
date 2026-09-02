require("dotenv").config();
const { default: ImageKit } = require("@imagekit/nodejs")

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATEKEY
})


const uploadFile = async (buffer) => {
    try {
        const result = await imageKit.files.upload({
            file: buffer.toString("base64"),
            fileName: "image.jpg"
        })
        return result
    } catch (error) {
        console.error(error + "failed to upload file")
    }
}

module.exports = uploadFile