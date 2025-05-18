const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const fileRoutes = require('./routes/fileRoutes')
const path = require('path')

dotenv.config()

const app = express()

connectDB()

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api/files', fileRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
})