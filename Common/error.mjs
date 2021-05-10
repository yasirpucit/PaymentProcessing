export default (err, req, res, next) => {
    if (!err) next()   
    console.log("Oopps... Exception Caught");
    console.log(err);
    const status = err.code || 500;
    const message = err.message;
    res.status(status).json({ message: message });
  }