const express = require('express')
const Posada = require('../models/posadas')

const router = express.Router()

router.get('/posadas', (req, res) => {
    Posada.find()
    .then(posadas => {
        res.send(posadas)
    })
    .catch(err => res.send(err))
})


router.post('/posada', (req, res) => {
    const posada = new Posada(req.body)
    posada.save()
    .then(() => {
        res.send(posada)
    })
    .catch(err => res.status(500).send(err))
})


router.patch('/posada/:id', (req, res) => {
    const _id = req.params.id
    Posada.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
    .then(posada =>{
        if(!posada){
            return res.status(404).send()
        }
        res.send(posada)
    })
    .catch(err => res.status(404).send(err))
})

router.delete('/posada/:id', (req, res) => {
    const _id = req.params.id
    Posada.findByIdAndDelete(_id, {new: true, runValidators: true})
    .then(posada => {
        if(!posada){
            return res.status(404).send()
        }
        res.send(posada)
    })
    .catch(err => res.status(404).send(err))
})


module.exports = router