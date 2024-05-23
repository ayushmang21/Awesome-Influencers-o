const multer = require('multer');
const router = require('express').Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const myStorage = multer({ storage: storage });

router.post('/uploadfile', myStorage.single('myfile'), (req, res) => {
  res.send('File uploaded').status(200).json({ status: 'success' });
});

module.exports = router;