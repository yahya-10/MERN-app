const express = require("express");
const app = express();
const connectToDatabase = require("./config/connectToDatabase");
const cors = require("cors");

//Function that connects express app to database
connectToDatabase();

//We prevent from cors policy warning
app.use(cors());

//Allows us to use body json thing to create posts
app.use(express.json({ extended: false }));

//Routes
app.use("/api/posts", require("./routes/posts.js"));
app.use("/api/users", require("./routes/users.js"));
// app.use("/admin", require("./routes/admin"));

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is on port: ${PORT}`));
