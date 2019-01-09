module.exports = {
    catchError(res, error) {
        console.log(error)
        res.status(500).json({
            error: 'Server Error'
        })
    }
}