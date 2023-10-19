import express from 'express'
import { getAllImages } from '../controllers/image/getAllImages';
import { createImage } from '../controllers/image/createImage';
import { getImageById } from '../controllers/image/getImageById';
import { updateImage } from '../controllers/image/updateImage';
import { deleteImage } from '../controllers/image/deleteImage';


const router = express.Router()

router.post('/', createImage);
router.get('/', getAllImages);
router.get('/:id', getImageById)
router.put('/:id', updateImage);
router.delete('/:id', deleteImage)

export default router
