const express = require('express')
const { ObjectId } = require('mongodb')
const router = express.Router()
const getClient = require('../db/mongodb')

router.get('/posadas', (req, res) => {
    getClient((err, db) => {
        if(err) return res.setHeader(err)
        db.collection('posadas').find().toArray((err, result) => {
            if(err) return res.send(err)
            return res.send(result)
        })
    })
})

router.post('/posada', (req, res) => {
    const arr = []
    arr.push(req.body)
    getClient((err, db) => {
        if(err) return res.send(err)
        db.collection('posadas').insertMany(arr, (err, result) => {
            if (err) return res.send(err)
            return res.send(result)
        })
    })
} )

router.patch('/posada/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const { location } = req.body
    const { description } = req.body
    const { shortdescription } = req.body
    getClient((err, db) => {
        if (err) return res.send(err)
        db.collection('posadas').updateOne({
            _id: new ObjectId(id)
        }, {
            $set: { name, location, shortdescription, description }
          
        }, (err, result) => {
            if (err) return res.send(err)
            return res.send(result)
        })
    })
})


router.delete('/posada/:id', (req, res) => {
    const id = req.params
    getClient((err, db) => {
        if(err) return res.send(err)
        db.collection('posadas').deleteOne({
            _id: new ObjectId(id)
        }, (err, result) => {
            if(err) return res.send(err)
            return res.send(result)
        })
    })
})

module.exports = router