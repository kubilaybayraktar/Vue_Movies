import Vue from 'vue';
import App from './app.vue';
import router from './router';
import './shared/filters';

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
