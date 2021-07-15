const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/htmlRoutes"));

app.use(require("./routes/apiRoutes"))



app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
