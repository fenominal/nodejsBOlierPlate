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
    language: { type: String, default: "english" },
    registartion_date: { type: Date, default: Date.now()},
    token: { type: String },
    UserImage: {type: String},
});

const customerModal = mongoose.model("customer_data", usersAuthModel);


export function find(data, column) {
    let val = userModel.find(data, column);
    return val;
  }
  
  export function deleteOne(data) {
    let val = userModel.deleteOne(data);
    return val;
  }
  
  export function updateOne(data, set) {
    let val = userModel.updateOne(data, set);
    return val;
  }
  
  export function insertOne(data) {
    let val = userModel.create(data);
    return val;
  }
  

// module.exports={customerModal}