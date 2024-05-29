import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Projets from './views/Projets.vue'
import Contact from './views/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/projets',
        name: 'Projets',
        component: Projets
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // Toujours défiler jusqu'en haut
        return { top: 0 }
    }
    
});