const router = require('express').Router();

router.get('/mentor/:id', async (req, res) => { });

router.get('/mentors', async (req, res) => { res.send('mentors') });

router.post('/mentor/:id', async (req, res) => { });

router.post('/mentors', async (req, res) => { });

module.exports = router;