const marksmodel = require('../model/schema2')

exports.createdata1 = async (req, res) => {
    try {
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
exports.showdata1 = async (req, res) => {
    try {
        const data = await marksmodel.aggregate([
            {
                $lookup: {
                    from: "schema1", //TABLE NAME
                    localField: "StudentId",  //PASSED ID
                    foreignField: "_id",
                    as: "StudentInfo"
                }
            },
            {
                $unwind: "$StudentInfo"
            },
            {
                $addFields: {
                    total: {
                        $add: ['$Hindi', '$English', '$Science', '$Maths', '$SS']
                    },
                }
            },
            {
                $addFields: {
                    percentage: {
                        $divide: ['$total', 5]
                    }
                }
            },
            {
                $addFields: {
                    grade: {
                        $cond: {
                            if: {
                                $gt: ['$percentage', 80]
                            },
                            then: 'A',
                            else: {
                                $cond: {
                                    if: {
                                        $gt: ['$percentage', 60]
                                    },
                                    then: 'B',
                                    else: 'C'
                                }
                            }
                        }
                    }
                }
            },
            {
                $addFields: {
                    min: {
                        $min: ['$Hindi', '$English', '$Science', '$Maths', 'SS']
                    }
                }
            },
            {
                $addFields: {
                    max: {
                        $max: ['$Hindi', '$English', '$Science', '$Maths', 'SS']
                    }
                }
            },
        ])

        res.status(200).json({
            status: 'Success',
            Message: 'Data fetched successfully',
            Data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            Message: error.message
        })
    }
}

exports.deletedata1 = async (req, res) => {
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



