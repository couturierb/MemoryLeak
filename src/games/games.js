import { add, listAll } from '@/core/firebase';
import { search } from '@/core/igdb';
import { reactive, readonly } from 'vue';

const COLLECTION_NAME = 'videogames';
const state = reactive({
    games: []
});

async function searchGame(name) {
    return search(name);
}

async function listGames() {
    state.games = await listAll(COLLECTION_NAME);
}

async function addGame(gameFromIgdb) {
    const gameId = await add(COLLECTION_NAME, { name: gameFromIgdb.name });
    gameFromIgdb.id = gameId;
    state.games.push(gameFromIgdb);
}

export const store = {
    state: readonly(state),
    listGames,
    addGame
};
export { searchGame };
