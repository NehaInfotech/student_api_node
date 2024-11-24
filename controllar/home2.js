const marksmodel = require('../model/schema2')

exports.createdata1 = async(req,res) =>{
    try 
    {
        const mmodel = await marksmodel.create(req.body) 
        res.status(200).json({
            status: 'Success',
            Message: 'Data enter success',
            Data: mmodel
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}

exports.showdata1 = async(req,res) =>{
    const data = req.body
    try {
        const show1 = await marksmodel.find().populate("StudentId")
        res.status(200).json({
            status: "success",
            Message: 'data show succes',
            Data: show1
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: "not show"
        })
  
    }
}



exports.deletedata1 = async(req,res) =>{
    const id = req.params.id
    try {
        const del = await marksmodel.findByIdAndDelete(id)
        res.status(200).json({
            status: "success",
            Message: 'data show succes',
            Data: del
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: "not show"
        })
  
    }
}



