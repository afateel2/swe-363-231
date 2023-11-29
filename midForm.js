const logSubmission = (req, res, next) => {
    res.send("<h1>Your submission has been received.</h1>")
    // console.log("Form data: ",req.body);
    next()
}


module.exports = logSubmission;