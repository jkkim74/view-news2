import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // news: [],
        // jobs: [],
        // asks: [],
        user: {},
        item: {},
        list: [],
    },
    mutations,
    getters: {
        fetchedAsk(state){
            return state.asks;
        },
        fetchedJob(state){
            return state.jobs;
        },
        fetchedNews(state){
            return state.news;
        },
        fetchedItem(state){
            return state.item;
        }

    },
    actions,
})