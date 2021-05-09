import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '../views/page-not-found';

Vue.use(VueRouter);

const parseProps = (r) => ({
    id: parseInt(r.params.id),
});

const routes = [
    {
        path: '/',
        redirect: '/movies',
    },
    {
        path: '/populars',
        redirect: '/movies',
    },
    {
        path: '/movies',
        name: 'movies',
        component: () => import(/* webpackChunkName: "movies" */ '../views/movies.vue'),
    },
    {
        path: '/movies/:id',
        name: 'movie-detail',
        component: () => import(/* webpackChunkName: "movies" */ '../views/movie-detail.vue'),
        props: parseProps,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
    },
    {
        path: '*',
        component: PageNotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
