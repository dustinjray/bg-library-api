import axios from 'axios';
import * as authService from './authService.js';

const BASE_URL = 'http://boardgamegeek.com/xmlapi';

export async function getBoardGameDetails(gameId) {
    const token = await authService.getBearerToken();
    const url = `${BASE_URL}/boardgame/${gameId}`;
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/xml'
        }
    });
    return response.data;
}