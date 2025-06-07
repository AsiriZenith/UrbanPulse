import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import LocalIssues from '../views/LocalIssues.vue'
import Solutions from '../views/Solutions.vue'
import Events from '../views/Events.vue'
import Feedback from '../views/Feedback.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/local-issues', name: 'LocalIssues', component: LocalIssues },
  { path: '/solutions', name: 'Solutions', component: Solutions },
  { path: '/events', name: 'Events', component: Events },
  { path: '/feedback', name: 'Feedback', component: Feedback }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
