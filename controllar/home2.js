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



