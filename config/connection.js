const mongoose = require('mongoose');
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/Social_Network_DB');
module.exports = mongoose.connection
