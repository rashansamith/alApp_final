const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: { 
        type: String,
        lowercase: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    isVerified: { type: Boolean },
    verificationCode: { type: String },
    password: { type: String, default:null },
    role: { type: String, default:null  },
    firstName: { type: String , default:null },
    lastName: { type: String, default:null },
    city: { type: String, default:null },
    contactNumber:{type: String, default:null },
    stream :{type:String, default:null },
    class: [{
        district: { type: String, default:null },
        institute: { type: String, default:null },
        classDate: { type: String, default:null }
    }] 
},{
    timestamps: true
});

module.exports = mongoose.model('User', userSchema); 