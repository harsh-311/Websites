const mongoose=require('mongoose')

const clothes_user_schema= new mongoose.Schema({
   name:String,
   email:String,
   password:String,
   number:Number,
   no_of_cloths:{
    male_cloths:{ 
        no_of_shirts:Number,
        no_of_pents:Number
    },
    female_cloths:{
        no_of_saris:Number,
        no_of_tops:Number,
        no_of_dresses:Number
    },
    no_of_traditional_cloths:Number,
},
type_of_wash:String
})
const user_cloths_model=mongoose.model('UserCloths',clothes_user_schema)
module.exports=user_cloths_model