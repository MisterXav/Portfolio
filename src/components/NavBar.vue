<!-- FAIRE LE MENU MOBILE -->

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isDarkMode = ref(false);

const showDarkIcon = () => {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    if (darkIcon && lightIcon) {
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    }
};

const showLightIcon = () => {
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    if (darkIcon && lightIcon) {
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    }
};

const setInitialTheme = () => {
    const storedTheme = localStorage.getItem('color-theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDarkMode)) {
        document.documentElement.classList.add('dark');
        showLightIcon();
        isDarkMode.value = true;
    } else {
        document.documentElement.classList.remove('dark');
        showDarkIcon();
        isDarkMode.value = false;
    }
};

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;

    if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        showLightIcon();
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        showDarkIcon();
    }
};

onMounted(() => {
    setInitialTheme();
});
</script>

<template>

    <nav class="flex fixed w-screen bg-white dark:bg-gray-900 z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

            <!-- Bouton Mobile -->
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg bg-gray-100 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Ouvrir le menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>

            <!-- Menu -->
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <router-link :to="{ name: 'Home'}">
                            <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">A propos</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Projets'}">
                            <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projets</a>
                        </router-link>
                    </li>
                    <li>
                    <router-link :to="{ name: 'Contact'}">
                        <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Me contacter</a>
                    </router-link>
                    </li>
                    <li class="inset-y-0 right-0">
                        <label class="inline-flex items-center cursor-pointer">
                            <input @click="toggleTheme" type="checkbox" value="" class="sr-only peer">
                            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>