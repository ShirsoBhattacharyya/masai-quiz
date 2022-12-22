const mongoose=require('mongoose');
const dbConnect=()=>{
    return mongoose.connect(`mongodb+srv://masai-quiz:masai-quiz@masai-quiz.cjvmixc.mongodb.net/masai-quiz`)
}
module.exports=dbConnect;