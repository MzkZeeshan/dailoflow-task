module.exports = function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error stack for debugging

    // Send a generic error response
    res.status(500).json({
        success: false,
        message: 'An error occurred. Please try again later.',
    });
};