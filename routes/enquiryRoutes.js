const express = require('express');
const router = express.Router();
const { createEnquiry } = require('../controllers/enquiryController');

// This matches: POST http://localhost:5000/api/enquiries
router.post('/', createEnquiry);

module.exports = router;