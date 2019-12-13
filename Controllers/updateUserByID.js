const updateUserByID = (req, res) => {
    console.log("Params update : ", req.params)
    console.log("Params body : ", req.body)
    let dummyJson = [
        {
            id : 1,
            name : "Tosca",
        },
        {
            id : 2,
            name : "Hari",
        },
    ]

    const params = parseInt(req.params.id)
    const body = req.body.name

    const filterByID = dummyJson.filter(data => {
        if (data.id === params) {
            data.name = body
            return data
        } else {
            return false
        }
    })

    if (filterByID.length > 0) {
        res.json(filterByID)
    } else {
        res.json({
            error: "Data not found"
        })
    }
}

module.exports = updateUserByID