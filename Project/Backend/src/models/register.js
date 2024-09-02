const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const employeeSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
    },
    lastname : {
        type : String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    gender : {
        type: String,
        required: true,
    },
    phno : {
        type: Number,
        required: true,
        unique: true,
    },
    age : {
        type: Number,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    confirmPassword : {
        type : String,
        required: true,
    }
});

employeeSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(`The current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log("The password after bcrypt is ", this.password);
        this.confirmPassword = undefined;
    }
    next();
});


// Create Collection

const Register = new mongoose.model("Register", employeeSchema)

module.exports = Register;