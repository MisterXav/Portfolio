<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import APropos from '../components/APropos.vue'
</script>

<template>

    <NavBar/>
    
    <section id="apropos">
        <div class="flex flex-col items-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <img class="transition-all duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-gray-100 w-24 h-24 mt-6 sm:mt-3 mb-10 rounded-full shadow-lg" src="../assets/images/xav.png" alt="Xav"/>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Xavier VALCK-BRETON</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">J'aime toucher à tout et apprendre des nouvelles choses</p>
        </div>
    </section>

    <APropos/>

</template>