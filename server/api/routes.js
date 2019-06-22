const express = require('express');
const router = express.Router();
const mongoDB = require('mongodb');
const auth = require('./authentication');
const models = require('../model/models');
const {streamFile} = require('./fileStreaming');


router.post('/api/mailing', async (req, res) => { };

router.post('/api/hacker', async (req, res) => { };

router.post('/api/hackers', async (req, res) => { };

router.post('/api/volunteer', async (req, res) => { };

router.post('/api/volunteers', async (req, res) => { };

router.post('/api/mentor', async (req, res) => { };

router.post('/api/mentors', async (req, res) => { };

router.post('/api/sponsor', async (req, res) => { };

router.post('/api/sponsors', async (req, res) => { };