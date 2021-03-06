const mongoose = require("mongoose")
const { stringify } = require("querystring")

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	displayName: { type: String },
})

module.exports = User = mongoose.model("user", userSchema)
