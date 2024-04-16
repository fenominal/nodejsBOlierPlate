// file for auth model like user and admin.
import mongoose from "mongoose";

const usersAuthModel = new mongoose.Schema({
    fullname: { type: String,require: true },
    username:{type:String , unique :true},
    email: { type: String},
    password: { type: String  },
    role: {type: String},
    phone_number: { type: Number},
    country_code: { type: String},
    country: { type: String },
    language: { type: String, default: english },
    registartion_date: { type: Date, default: Date.now()},
    token: { type: String },
    UserImage: {type: String},
});

const customerModal = mongoose.model("customer_data", customerSchema);

module.exports={customerModal}