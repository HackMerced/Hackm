const express = require('express');
const router = express.Router();
const mongoDB = require('mongodb');
const auth = require('./authentication');
const models = require('../model/models');
const {streamFile} = require('./fileStreaming');


router.post('/api/mailing', async (req, res) => { };

router.post('/api/hacker', async (req, res) => { };

router.post('/api/volunteer', async (req, res) => { };

router.post('/api/mentor', async (req, res) => { };

router.post('/api/sponsor', async (req, res) => { };