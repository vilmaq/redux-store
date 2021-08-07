const mongoose = require("mongoose");

const DB_NAME = process.env.DB_NAME || "mernshopping";
// const DB_URL = process.env.MONGODB_URI || `mongodb://localhost/${DB_NAME}`;

// const MONGOOSE_OPTIONS = {
//   useUnifiedTopology: true,
//   useCreatedIndex: true,
//   useNewUrlParser: true,
//   useFindAndModify: false,
// };
// module.exports = {
//   DB_URL,
//   MONGOOSE_OPTIONS,
// };

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mernshopping",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
