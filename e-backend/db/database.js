const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/elandary').then(()=>{
    console.log('Database connection established')
})