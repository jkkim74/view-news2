import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';
//import createListView from '@/views/CreateListView.js';
import JobsView from '@/views/JobsView.vue';
import NewsView from '@/views/NewsView.vue';
import AskView from '@/views/AskView.vue';
import StockDashboardView from '@/views/StockDashboard.vue';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            //component: createListView('NewsView'),
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
            //component: createListView('JobsView'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
            //component: createListView('AskView'),
        },
        {
            path: '/stockDashboard',
            name: 'stockDashboard',
            component: StockDashboardView,
            //component: createListView('AskView'),
        },
        {
            path: '/user/:id',
            component: UserView,

        },
        {
            path: '/item/:id',
            component: ItemView,
        }

    ]
});

