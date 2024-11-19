const studentmodel = require('../model/schema1')

exports.createdata = async(req,res) =>{
    try 
    {
        const smodel = await studentmodel.create(req.body) 
        res.status(200).json({
            status: 'Success',
            Message: 'Data enter success',
            Data: smodel
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}
exports.showdata = async (req, res) => {
    const data = req.body
    try {
        const show = await studentmodel.find(data)
        res.status(200).json({
            status: "success",
            Message: 'data show succes',
            Data: show
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: "not show"
        })
  
    }
  }
