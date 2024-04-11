import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import NotFound from './pages/NotFound.vue';
import SingleProject from './pages/SingleProject.vue';
import ContactUs from './pages/ContactUs.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
          path: '/',
          name: 'home',
          component: AppHome
      },
      {
          path: '/apiprojects',
          name: 'projects',
          component: ProjectList
      },
      {
          path: '/apiprojects/:slug',
          name: 'single-project',
          component: SingleProject
      },
      {
        path: '/contact-us/',
        name: 'contact-us',
        component: ContactUs
    }
  ]
});
export { router };