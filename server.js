const express = require("react");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;

//Define middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Serve up static assets for heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//Add API and view routes
app.use(routes);

//Connect to Mongoose Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbooklist");

//Start the AP server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});