import Vue from 'vue';
import VueRouter from 'vue-router';
// node_modules에 있는 것은 이렇게 바로 가져올 수 있다.
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
// import createListView from '../views/CreateListView.js';

// import bus from '../utils/bus.js';
import { store } from '../store/index.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // # 값을 제거해주는 것이다.
    routes: [
        {
            path: '/',
            redirect: '/news',
            // 처음 접속시 new로 리다이렉트된다.
        },
        {
            // path에는 url에 대한 주소가 들어간다
            path: '/news',
            name: 'news',
            // component에는 url 주소로 갔을 때 표시될 컴포넌트가 표시된다.
            component: NewsView,
            // component: createListView('NewsView'),
            beforeEnter: (to, from, next) => {
                console.log(from);
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {      
                  next();
                })
                .catch((error) => {
                  console.log(error);
                });
            }
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView'),
            component: AskView,

            beforeEnter: (to, from, next) => {
                console.log(from);
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {      
                  next();
                })
                .catch((error) => {
                  console.log(error);
                });
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView'),
            component: JobsView,
            beforeEnter: (to, from, next) => {
                console.log(from);
                store.dispatch('FETCH_LIST', to.name)
                .then(() => {      
                  next();
                })
                .catch((error) => {
                  console.log(error);
                });
            }
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ]
});