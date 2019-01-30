const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: { type: String, lowercase: true, required: true },
    password: { type: String, minlength: 4, required: true },
    email:String,
    address: {
        primary: Boolean,
        add1: String,
        city: String,
        state: String,
        country: String
    }
})

userSchema.pre("save", function(next){
    var user = this;
    if(!user.isModified('password')) return next();
    bcrypt.hash(user.password, null, null,(err, hash) => {
        if(err) return next(err);
        user.password = hash;
        next();
    })
})

userSchema.methods.comparePassword = function (password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", userSchema);