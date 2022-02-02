import igdb from '@/core/igdb.js';

async function search(name) {
    return igdb.search(name);
}

export const GamesService = { 
    search
};