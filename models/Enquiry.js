const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Please add a name'] 
  },
  phone: { 
    type: String, 
    required: [true, 'Please add a phone number'] 
  },
  businessType: { 
    type: String, 
    required: true,
    enum: ['Gym / Fitness Center', 'Retail / Grocery Shop', 'Wholesale / Distribution', 'Other']
  },
  message: { 
    type: String, 
    required: [true, 'Please add a message'] 
  }
}, {
  timestamps: true // This automatically adds 'createdAt' and 'updatedAt' fields
});

module.exports = mongoose.model('Enquiry', enquirySchema);