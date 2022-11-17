/*
  Project: @P5BK
  License: @ISC
*/

const express = require('express');
const fetch = require('node-fetch');

const __path = process.cwd();
const router = express.Router();

const loghandler = {
    error: {
        status: false,
        message: 'mungkin sedang dilakukan perbaikan',
    },

};

router.get('/cari/produk', async (req, res) => {
    const { kode } = req.query;

    if (!kode) return res.json({ status: false, message: 'masukan parameter kode' });

    res.sendFile(`${__path}/database/produk/data/${kode}.json`);
});

router.get('/data/produk', (req, res) =>
    res.sendFile(`${__path}/database/produk/data.json`));

module.exports = router;
