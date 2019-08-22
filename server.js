'use strict';

var express = require('express');
var cors = require('cors');

// require and use "multer"...
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// Uploaded File Details Endpoint
app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  const { file: { originalname, mimetype, size } } = req;
  //const originalname = req.file.originalname;
  //const mimetype = req.file.mimetype;
  //const size = req.file.size;
  res.json({ name: originalname, type: mimetype, size })
  
  next();
})

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
