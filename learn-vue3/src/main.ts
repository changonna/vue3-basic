import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

app.config.globalProperties.abc = 'abc';
app.provide('def', 'def');

app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
