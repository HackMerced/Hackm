const router = require('express').Router();

router.get('/hacker/:id', async (req, res) => { });

router.get('/hackers', async (req, res) => { res.send('hello') });

router.post('/hacker/:id', async (req, res) => { });

router.post('/hackers', async (req, res) => { });

module.exports = router;