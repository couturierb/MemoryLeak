<template>
    <ul>
        <li v-for="game in store.state.games">{{ game.name }} - {{ game.how_long || 'NR' }} - {{ game.statut }} - {{ game.platform }}</li>
    </ul>
</template>

<script setup>
import { store } from './games';

store.listGames();
</script>

<style scoped></style>
