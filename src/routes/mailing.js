const mailing = require('express').Router();

mailing.get('/mailing/:id', async (req, res) => { });

mailing.get('/mailing', async (req, res) => { res.send('mailing') });

mailing.post('/mailing/:id', async (req, res) => { });

mailing.post('/mailing', async (req, res) => { });

module.exports = mailing;