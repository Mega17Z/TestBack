const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const {uploadFile, getAllFiles} = require('../controllers/fileControllers')

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb){
        const ext = path.extname(file.originalname)
        const uniqueName = Date.now() + '-' + Math.round(Math.random * 1e9) + ext
        cb(null, uniqueName)
    }
})

const upload = multer({storage: storage})

router.post('/', upload.single('file'), uploadFile)
router.get('/', getAllFiles)

module.exports = router