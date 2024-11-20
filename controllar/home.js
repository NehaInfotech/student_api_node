const studentmodel = require('../model/schema1')

exports.createdata = async (req, res) => {
    try {
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
exports.deletedata = async (req, res) => {
    const id = req.params.id
    try {
        const deldata = await studentmodel.findByIdAndDelete(id)
        res.status(200).json({
            status: "success",
            message: "data deleted successfuly",
            data: deldata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "not deleted"
        })

    }

}
