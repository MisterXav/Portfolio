<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
</script>

<template>
    <NavBar/>
    <h1 class="text-gray-900 dark:text-white">404</h1>
    <h3 class="mb-10 text-gray-900 dark:text-white">Cette page n'existe pas.</h3>
    <router-link :to="{ name: 'Home'}">
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Retourner a l'accueil</button>
    </router-link>
</template>