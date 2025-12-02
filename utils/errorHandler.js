'use strict';

const fs = require('fs');
const path = require('path');

function logError(error) {
    const errorLogPath = path.join(__dirname, 'error.log');
    const errorMessage = `${new Date().toISOString()}: ${error}\n`;
    fs.appendFileSync(errorLogPath, errorMessage, 'utf8');
}

function handleError(error, req, res) {
    logError(error);
    res.status(500).json({ message: 'Internal Server Error' });
}

module.exports = {
    handleError
};
