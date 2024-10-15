import {config} from Dotenv
import mongoose from mongoose

config()

const dbConnection=async()=>{
    try{
        await mongoose.connect(process.env.ATLAS_URI)
        console.log('MongoDB connected...')
        return mongoose.connection;
    }catch(err) {
    console.log("Error while connecting")
    }
}
export default dbConnection
