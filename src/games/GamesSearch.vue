<template>
    <input type="search" v-model.trim="searchValue" placeholder="Rechercher..." name="search" id="search" />
    <ul>
        <li v-for="game in games">
            {{ game.name }}
            <button @click="addGame(game)">Ajouter</button>
        </li>
    </ul>
    <a v-if="searchDone && games.length === 0" href>Aucun jeu trouvé, en ajouter un manuellement ?</a>
</template>

<script setup>
import { GamesService } from './games';
import { ref, watch } from 'vue';

const SEARCH_TIMER_DELAY = import.meta.env.VITE_SEARCH_TIMER_DELAY;

let games = ref([]);
let searchValue = ref([]);
let searchDone = ref(false);
let searchTimer;

watch(searchValue, () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        GamesService.search(searchValue.value)
            .then((res) => (games.value = res))
            .then(() => (searchDone.value = true));
    }, SEARCH_TIMER_DELAY);
});

function addGame(game) {
    console.log(game);
}
</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-top: darkgray 1px solid;
    box-shadow: 0 -3px 10px 0px darkgray;
}

input {
    height: 2.8rem;
    flex: 1;
    margin: 0.3rem;
}

p {
    margin-left: 0.3rem;
}
</style>
