import mongoose from "mongoose"

URL ="mongodb+srv://dataulpio:admin123@oxetech.dobku14.mongodb.net/livraria?retryWrites=true&w=majority&appName=oxetech"


async function connectDB(){
    mongoose.connect(URL)
    return mongoose.connection
}

export default connectDB