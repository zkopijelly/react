const logRequest = (req, res, next) => {

    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    console.log(`Method [${timestamp} ${method} URL: ${url}]`)
    next()
}

export default logRequest