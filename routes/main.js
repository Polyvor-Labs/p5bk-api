/*
  Project: @P5BK
  License: @ISC
*/


const express = require('express');

const __path = process.cwd();
const router = express.Router();

router.get('/', (req, res) => {
    res.send("P5BK Rest Api Server")
});

router.get('/api', (req, res) => {
    const config = {
        status: true,
        result: {
            project: 'P5BK',
            license: 'ISC'
        },
    };
    res.json(config);
});

module.exports = router;
