


const mongoose = require('mongoose');

const emiSchema = mongoose.Schema({
    loanAmt : {type: Number, required : true},
    rate : {type: Number, required : true},
    months : {type: Number, required : true},
    emi: {type: Number, required: true}
}, {
    versionKey : false
})

const EmiModel = mongoose.model('emi', emiSchema)

module.exports = {
    EmiModel
}