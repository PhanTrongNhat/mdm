import mongoose from "mongoose";
const uri = process.env.MONGODB_URL || `mongodb+srv://nhat:123456nhat@mdm.l7t9g4e.mongodb.net/?retryWrites=true&w=majority`
class DbMongo{
    constructor(){
        
    }

    _connect(){
        mongoose.connect(uri, {useNewUrlParser: true,useUnifiedTopology: true })
            .then(() => {console.log('connect mongodb successful')})
            .catch((err) => console.log('connect error'));
    }

    _disconnect(){
        mongoose.disconnect(() => {
            console.log('disconnect')
        })
        
    }
}
export default new DbMongo();