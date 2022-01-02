const express = require('express')
require('.db/mongoose')

const router = express.Router() 
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001


app.use(express.json())
app.use(router)

app.use(cors())

const posadasRouter = require ('./routers/posadas')
app.use(posadasRouter)


app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})