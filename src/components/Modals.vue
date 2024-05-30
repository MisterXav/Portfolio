<template>

    <!-- Portfolio -->
    <div id="portfolio" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Portfolio
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Fermer la modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
                        Le portfolio a pour but de présenter les différents projets et compétences que j'ai acquise ces dernières années<br><br>
                        J'ai développé mon portfolio avec Vue, VueRouter, Vite et Tailwind. Le code n'est pas encore très optimisé, je prévois de tout refactoriser pour avoir un code plus léger et donc plus rapide.<br><br>
                        Le code est disponible sur GitHub
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Loctool -->
    <!--<div id="loctool" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Projet PPE : Loctool
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Fermer la modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
                        LocTool est une application de location de matériel pour les entreprises. Le projet a été développé pour le BTS dans le cadre de l'épreuve E6<br><br>
                        L'application a été développé en équipe de 4, avec Angular en front end pour le web, Ionic Angular pour le mobile et Flask pour l'API. Le projet n'est pas totalement fini.
                    </p>
                </div>
            </div>
        </div>
    </div>-->

    <!-- Server -->
    <div id="nas" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Mise en place d'un serveur MediaCenter
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Fermer la modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
                        Dans l'optique de stocker et sauvegarder toutes mes données, j'ai voulu mettre en place mon propre serveur MediaCenter<br><br>
                        J'ai utilisé AlmaLinux, un Linux qui reprend une base de CentOs qui répond parfaitement a mes besoins, et j'ai installé Docker pour faire tourner la totalité de mes applications.<br><br>
                        Sur mon serveur, pour le moment j'ai surtout Nextcloud qui est le "cerveau", je m'en sert pour tout, stockage de fichier, calendrier, notes, Kanban, RSS, etc. J'ai également mis en place NGINX Proxy Manager pour mettre en place plusiueurs autres services.<br><br>
                        Dans le futur, je prévois d'installer encore d'autres applications, toujours en Docker, que ce soit des serveurs de jeu, des outils de productivités, des outils pour la programmation, etc. J'ai déjà prévu une liste d'outils.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Docker -->
    <div id="dockerquali" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Dockerisation de l'environnement de développement
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Fermer la modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
                        J'ai eu pour mission de dockeuriser 3 API dont 2 sous codeigniter et une sous CakePHP. Les stacks se composaient de l'API, la base de donnée, le PHPMyAdmin.<br><br>
                        Un script permettais l'installation automatique de l'environnement avec une copie d'une base de donnée de développement.<br><br>
                        Grâce a ce script, l'installation de l'environnement ne prend qu'une 10aine de minutes au lieu de perdre une demi journée, et a terme il est possible de faire un CI en mettant docker sur le serveur.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Qualipad -->
    <div id="qualipad" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Appli web et mobile Qualipad
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Fermer la modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
                        J'ai développé en équipe une application Web déjà existante. Mon travail consistait à apporter des modifications en fonction des demandes de clients.<br><br>
                        J'ai par exemple ajouté la prise de photo lors de contrôles de nettoyage, des contrôles de nettoyage aléatoire, des labels customisés pour le contrôle à réception, etc...
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- AtlasNation -->
    <div id="atlasnation" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        AtlasNation
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Fermer la modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
                        AtlasNation est un serveur de jeu sur Minecraft se déroulant sur un planisphère. Le but est de créer ses villes et son pays et de les développer (Créer les bâtiments, mettre en place l'économie, mettre en place un rôleplay et créer son lore).<br><br>
                        Il accueille déjà plus de 80 joueurs. J'ai eu pour mission de faire de la communication, gérer une équipe de 6 personnes (attribution des tâches, mise en place de la méthode Agile, recrutement de nouveaux talents)
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- CMFR -->
    <div id="cmfr" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        Communauté Minectaft FR
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Fermer la modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-300">
                        Communauté Minecraft FR est une communauté se situant principalement sur Discord et sert de hub pour la communauté française du jeu Minecraft.<br><br>
                        L'intérêt de cette communauté est de trouver des compagnons de jeu, discuter avec des personnes ayant un intérêt commun : Minecraft, suivre l'actualité du jeu et participer a des annimations.<br><br>
                        J'ai crée le projet avec mon ami Akerck en 2018, le serveur a énormément évolué, j'ai pu faire de très nombreuses tâches comme le développement d'un bot discord, la mise en place d'un serveur, le développement de sites, de l'évènementiel, de la gestions d'équipe, etc.<br>
                        J'ai quitté le projet en 2022 pour me concentrer sur d'autres projets, mais il existe toujours et est actuellement géré par Akerck.
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const name = [
    {
        id: 1,
        name: 'CMFR'
    },
]
console.log(name)
</script>