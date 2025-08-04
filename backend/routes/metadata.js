import express from 'express';
import upload from '../middleware/upload.js';
import * as metadataService from '../services/metadataService.js';
import { deleteFile } from '../utils/fileUtils.js';

const router = express.Router();

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

export default router;