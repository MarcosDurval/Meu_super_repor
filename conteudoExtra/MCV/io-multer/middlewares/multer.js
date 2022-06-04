const multer = require('multer');
const path = require('path');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const { STORAGE, BUCKET } = process.env;

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, callback) => {
      const docName = file.originalname.trim().split(' ').join('_'); 
      callback(null, `${Date.now()}-${docName}`);
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, callback) => {
      const docName = file.originalname.trim().split(' ').join('_'); 
      callback(null, `${Date.now()}-${docName}`);
    },
  }),
};

const configMulter = multer({ storage: storageTypes[STORAGE] });

module.exports = configMulter;
