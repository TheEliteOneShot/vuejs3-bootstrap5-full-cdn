const { createRouter, createWebHashHistory  } = VueRouter
import home from '../pages/home.js';
import one from '../pages/page1.js';
import two from '../pages/page2.js';
import five from '../pages/page5.js';
import NotFound from '../pages/NotFound.js';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/one',
        name: 'one',
        component: one
    },
    {
        path: '/two',
        name: 'two',
        component: two
    },
    {
        path: '/five',
        name: 'five',
        component: five
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
      }
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})

export default router