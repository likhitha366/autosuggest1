const express = require('express');
const app = express();
const port = 3002;
app.use(express.static("frontend"))
app.listen(port,function(){
  console.log(`Successfully running at http://localhost:${port}`);
});