// SET UP MONGOOSE
const mongoose = require('mongoose');
//const connectionString (to mongodb) = 'mongodb://localhost:27017/eventManagement';
const connectionString = process.env.DB_URL;

module.exports = function(){
//connect app to database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('database connection successful')
}
});
}
