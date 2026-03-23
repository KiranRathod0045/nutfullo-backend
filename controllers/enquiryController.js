const Enquiry = require('../models/Enquiry');
const colors = require('colors');

const createEnquiry = async (req, res) => {
  try {
    const { name, phone, businessType, message } = req.body;
    
    // Check if data is actually arriving
    if (!name || !phone) {
       return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const enquiry = await Enquiry.create({ name, phone, businessType, message });
    
    // Ensure we send a proper JSON response
    return res.status(201).json({ success: true, data: enquiry });

  } catch (error) {
    // Use the functional colors approach to avoid the 'bold' undefined error
    console.error(colors.red(`[Backend Error]: ${error.message}`));
    
    // Always return JSON, never leave the request hanging
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { createEnquiry };