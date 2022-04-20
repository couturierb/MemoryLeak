import { add, listAll } from '@/core/firebase';
import { search } from '@/core/igdb';

const COLLECTION_NAME = 'videogames';

async function searchGame(name) {
    return search(name);
}

async function listGames() {
    return listAll(COLLECTION_NAME);
}

async function addGame(gameFromIgdb) {
    const game = {
        name: gameFromIgdb.name
    };
    return add(COLLECTION_NAME, game);
}

export { searchGame, listGames, addGame };
