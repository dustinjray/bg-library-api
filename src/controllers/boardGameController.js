import * as gameService from '../services/gamesService.js';

export async function getBoardGameDetails(req, res) {
    const id = req.params.id;
    try {
        const details = await gameService.getBoardGameDetails(id);
        res.header('Content-Type', 'application/xml');
        res.send(details);
    } catch (error) {
        console.error('Error fetching board game details:', error);
        res.status(500).json({ error: 'Failed to fetch board game details' });
    }
}