import "./set-public-path";
import singleSpaVue from 'single-spa-vue';
import { createRouter,createWebHistory } from "vue-router";
import { h, createApp } from "vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(<></>);
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
