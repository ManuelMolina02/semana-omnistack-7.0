require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

//conexão com banco de dados
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lvrlx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);

//configs express
app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(cors());
app.use(express.json());
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);
app.use(require("./routes"));

//porta de escuta
server.listen(3333, () => {
  console.log("Server running on port -> http://localhost:3333");
});
