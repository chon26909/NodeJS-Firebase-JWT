const express = require("express");
const cors = require("cors");
const auth = require("./middleware/auth");
const usersRouter = require("./routes/users");
const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/data", auth, (req, res) => {
  return res.send("hello world");
});

app.use("/user", usersRouter);

app.listen(port, () => {
  console.log("server is running port ", port);
});
