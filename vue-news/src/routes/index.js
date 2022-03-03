import Vue from 'vue';
import VueRouter from 'vue-router';
// 왜 바로 vue-router로 가져올 수 있을까? package.json에 정의되어 있기 때문이다.
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

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
            // component에는 url 주소로 갔을 때 표시될 컴포넌트가 표시된다.
            component: NewsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        
    ]
});