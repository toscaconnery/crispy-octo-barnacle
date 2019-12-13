const getUser = (req, res) => {
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
    res.json(dummyJson)
}

module.exports = getUser