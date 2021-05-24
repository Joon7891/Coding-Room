const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Setting up Express app with middleware
const app = express();
app.use(express.json());
app.use(morgan("tiny"));

// Route for testing
app.get("/testroute", (req, res) => {
  res.json({
    message: "Hi from server!",
  });
});

// Default PORT is 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

//const shell = require("shelljs");

// Compile C code

// Compile C++ code

// Run Python code

// Run Java (maybe)

// shell.exec("rm test.cc");
