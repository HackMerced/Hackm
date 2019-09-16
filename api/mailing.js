const router = require('express').Router();

router.get('/mailing/:id', async (req, res) => { });

router.get('/mailing', async (req, res) => { res.send('mailing') });

router.post('/mailing/:id', async (req, res) => { });

router.post('/mailing', async (req, res) => { });

module.exports = router;