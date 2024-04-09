import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import NotFound from './pages/NotFound.vue';
import SingleProject from './pages/SingleProject.vue';

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
          path: '/:pathMatch(.*)*',
          name: "not-found",
          component: NotFound
      }
  ]
});
export { router };