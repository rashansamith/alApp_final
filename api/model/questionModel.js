const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const QuestionSchema = mongoose.Schema({
     subjectId:{type:Schema.Types.ObjectId, ref: 'Subjects'},
     topicId:{type:Number,default:null,require:true},// need to referance topic id in topic schem  (not fix)
     year:{type:String,default:null},
     qNumber:{type:String,default:null},// question number of paper
     question:{type:String,default:null,},//question
     number:{type:Number,default:false,},
  
     qImageUrl:{type:String,default:null},
     correctAnswer:[{
        number:{type:Number,efault:null},
     }],
     answers:[
            {
            number:{type:Number,default:null},
            value:{type:String,default:null},// answer
            aImageUrl:{type:String,default:null}//answer image url
          }
     ],
     videoId:[{type:Schema.Types.ObjectId, ref: 'Videos'}],
     ansDiscription:{type:String,default:null},//should be a url

});
var QuestionModel = mongoose.model('Questions', QuestionSchema);
module.exports =QuestionModel;