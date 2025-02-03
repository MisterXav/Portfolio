<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
</script>

<template>
    <NavBar/>

    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Me contacter</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Vous pouvez me contacter sur :</p>
    </div>


    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">

        <!-- GitHub -->
        <div class="transition-all duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-gray-950 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://github.com/misterxav" target="_blank">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">GitHub</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-300">Vous pouvez retrouver certains de mes projets sur GitHub</p>
            <a href="https://github.com/misterxav" target="_blank" class="inline-flex font-medium items-center text-blue-600 hover:underline">
                Voir mon profil
                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
            </a>
        </div>

        <!-- Mail -->
        <div class="transition-all duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-blue-500 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="mailto:xvalckbreton@proton.me" target="_blank">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Mail</h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-300">Vous pouvez m'envoyer un mail</p>
            <a href="mailto:xavier@misterxav.fr" target="_blank"class="inline-flex font-medium items-center text-blue-600 hover:underline">
                M'envoyer un mail
                <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                </svg>
            </a>
        </div>

    </div>
</template>