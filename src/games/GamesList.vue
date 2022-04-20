<template>
    <ul>
        <li v-for="game in games">{{ game.name }} - {{ game.how_long || 'NR' }} - {{ game.statut }} - {{ game.platform }}</li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import { listGames } from './games';

let games = ref([]);

listGames().then((res) => {
    console.log(res);
    games.value = res;
});
</script>

<style scoped></style>
