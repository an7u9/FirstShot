const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const metadataService = require('../services/metadataService');
const { deleteFile } = require('../utils/fileUtils');

router.post('/extract-metadata', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  try {
    console.log('File received:', req.file);
    const filePath = req.file.path;
    const metadata = await metadataService.extractMetadata(filePath);
    res.json({ fileName: req.file.originalname, metadata });
  } catch (error) {
    console.error('Metadata extraction error:', error);
    console.error('Error details:', error.stack);
    res.status(500).json({ message: 'Error extracting metadata', error: error.message });
  } finally {
    if (req.file) {
      deleteFile(req.file.path);
    }
  }
});

module.exports = router;