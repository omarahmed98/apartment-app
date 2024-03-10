import express from 'express';
import cors from 'cors';
import { createApartment, getAllApartments, getApartmentById } from '../controllers/apartmentsController';

const router = express.Router();

router.use(cors());

// Define routes
router.post('', createApartment);
router.get('', getAllApartments);
router.get('/:id', getApartmentById);

export default router;
