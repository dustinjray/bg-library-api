import express from 'express';
import { getBoardGameDetails } from '../controllers/boardgameController.js';

const router = express.Router();

router.get('/:id', getBoardGameDetails);

export default router;