// SET UP MONGOOSE
const mongoose = require('mongoose');
//const connectionString = 'mongodb://localhost:27017/eventManagement';
const connectionString = `mongodb+srv://emmy:thisismypassword@cluster0.hqsmf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

module.exports = function(){
//connect app to database
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('database connection successful')
}
});
}
