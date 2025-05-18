const File = require("../models/File")

const uploadFile = async (req, res) => {
    try {
        const {title, description} = req.body

        if(!req.file){
            return res.status(400).json({message: "Aucun fichier n'a été envoyé"})
        }

        const newFile = new File({
            title,
            description,
            filename: req.file.filename
        })

        const savedFile = await newFile.save()
        res.status(201).json(savedFile)
    } catch (error) {
        console.error("Erreur lors de l'uploads", error)
        res.status(500).json({message: "Erreur server"})
    }
}


const getAllFiles = async (req, res) => {
    try {
        const files = await File.find().sort({createdAt: -1})
        res.status(200).json(files)
    } catch (error) {
        console.error("Erreur lors de la recup: ", error)
        res.status(500).json("erreur serveur")
    }
}

module.exports = {
    uploadFile,
    getAllFiles,
}