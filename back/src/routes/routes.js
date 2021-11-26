const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    let data = {
        mensaje : 'Servidor funcionando!'
    }

    res.json(data)
})

module.exports = router