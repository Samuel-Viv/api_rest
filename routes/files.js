const express = require('express');
const router =  express.Router();

const service = require('../services/files.js');
const multer = require('../middleware/files-storage.js');
const private = require('../middleware/private.js');

router.get('/', private.checkJWT, service.getAllFiles);
router.post('/', private.checkJWT, multer.single('file'), service.createOneFile);
router.get('/:id', private.checkJWT, service.getOneFile);
router.put('/:id', private.checkJWT, multer.single('file'), service.modifyOneFile);
router.delete('/delete', private.checkJWT, service.deleteOneFile);

module.exports = router;