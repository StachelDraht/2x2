function User(name) {
    this.name = name
}

User.prototype.age = function(age) {
    this.age = age
}

User.prototype.qcount = function(qcount) {
    this.qcount = qcount
}

module.exports = User