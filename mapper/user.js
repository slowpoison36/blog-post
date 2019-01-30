
let userMapper = function(user){
    this._id = user._id;
    this.userName = user.userName;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.address = user.address;
}

module.exports = userMapper;