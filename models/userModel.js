const mongoose= require('mongoose');

const userSchema= mongoose.Schema({
     name:{
         type: String,
         required: true
     },
     email:{
         type: String,
         required: true
     },
     phone:{
         type: String,
         required: true
     },
     password:{
         type: String,
         required: true
     },

     type:{
        type: String,
        required: true
    },

     tokens:{
         type: Array,
    //     default: ''
     }

    
});

module.exports= mongoose.model("person", userSchema);