import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import boardGameRoutes from './routes/boardgame.js';

const app = express();
const port = process.env.PORT || 8080;

app.get('/healthcheck', (req, res) => {
    res.status(200).json({ status: 'up' });
});

app.use('/boardgame', boardGameRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});