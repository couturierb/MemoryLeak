import igdb from '@/core/igdb.js';
import fdb from '@/core/firebaseConfig.js';

async function search(name) {
    return igdb.search(name);
}

async function getAll() {
    return fdb.getAll('videogames');
}

export const GamesService = {
    search,
    getAll
};
