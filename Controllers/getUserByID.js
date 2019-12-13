const getUserByID = (req, res) => {
    console.log("Params : ", req.params)
    const dummyJson = [
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

    const filterByID = dummyJson.filter(data => {
        if (data.id === params) {
            return data
        }
    })

    if (filterByID) {
        res.json(filterByID)
    }

}

module.exports = getUserByID