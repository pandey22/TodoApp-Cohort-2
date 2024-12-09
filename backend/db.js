const mongoose = require("mongoose");
// mongodb url : mongodb+srv://admin-Kshitij:Zlatan250400!@test-mongo.iyjkp.mongodb.net/?retryWrites=true&w=majority&appName=Test-Mongo

mongoose.connect("mongodb+srv://admin-Kshitij:Zlatan250400!@test-mongo.iyjkp.mongodb.net/?retryWrites=true&w=majority&appName=Test-Mongo")
const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model("todos",todoSchema)
module.exports = {
    todo
}