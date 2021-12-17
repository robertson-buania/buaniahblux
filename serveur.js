const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + "dist/hblux"))
app.get("/*", function(req, es) {
    res.sendFile(path.join(__dirname + "dist/hblux/index.html"))
})


app.listen(process.env.PORT);
