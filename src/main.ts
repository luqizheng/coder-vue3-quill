import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";




import router from './router'
import DevelopCompents from '../lib'


createApp(App)
  
    .use(Antd)

    .use(router)
    .mount("#app");

