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


// router.get('/posadas', (req, res) => {
//     getClient((err, db) => {
//         if(err) return res.setHeader(err)
//         db.collection('posadas').find().toArray((err, result) => {
//             if(err) return res.send(err)
//             return res.send(result)
//         })
//     })
// })


router.post('/posada', (req, res) => {
    const posada = new Posada(req.body)
    posada.save()
    .then(() => {
        res.send(posada)
    })
    .catch(err => res.status(500).send(err))
})


// router.post('/posada', (req, res) => {
//     const arr = []
//     arr.push(req.body)
//     getClient((err, db) => {
//         if(err) return res.send(err)
//         db.collection('posadas').insertMany(arr, (err, result) => {
//             if (err) return res.send(err)
//             return res.send(result)
//         })
//     })
// } )


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

// router.patch('/posada/:id', (req, res) => {
//     const { id } = req.params
//     const { name } = req.body
//     const { location } = req.body
//     const { description } = req.body
//     const { shortdescription } = req.body
//     getClient((err, db) => {
//         if (err) return res.send(err)
//         db.collection('posadas').updateOne({
//             _id: new ObjectId(id)
//         }, {
//             $set: { name, location, shortdescription, description }
          
//         }, (err, result) => {
//             if (err) return res.send(err)
//             return res.send(result)
//         })
//     })
// })

router.delete('/posada/:id', (req, res) => {
    const _id = req.params.id
    Posada.findByIdAndDelete(_id, req.body, {new: true, runValidators: true})
    .then(posada =>{
        if(!posada){
            return res.status(404).send()
        }
        res.send(posada)
    })
    .catch(err => res.status(404).send(err))
})


// router.delete('/posada/:id', (req, res) => {
//     const id = req.params
//     getClient((err, db) => {
//         if(err) return res.send(err)
//         db.collection('posadas').deleteOne({
//             _id: new ObjectId(id)
//         }, (err, result) => {
//             if(err) return res.send(err)
//             return res.send(result)
//         })
//     })
// })

module.exports = router