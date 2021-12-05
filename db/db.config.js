const dotenv = require('dotenv');
dotenv.config();
const config={
    uri:`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.s7i2h.mongodb.net/${process.env.DB_DATABASENAME}?retryWrites=true&w=majority`
    // uri:`mongodb+srv://SWAGgd132001:SWAGgd132001@cluster0.popjg.mongodb.net/contactsManagerDatabase?retryWrites=true&w=majority`
}
module.exports=config;