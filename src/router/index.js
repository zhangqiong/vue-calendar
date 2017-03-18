import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Calendar from '@/components/Calendar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar
        }
    ]
})