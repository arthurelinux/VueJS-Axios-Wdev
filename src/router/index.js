import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Videos from '@/pages/Videos.vue';
import About from '@/pages/Sobre.vue';
import Contato from '@/pages/Contatos.vue';




Vue.use(VueRouter);

const routes = [
 {
   path: '/',
   component: Home,
 },
 {
  path: '/videos',
  component: Videos,
},
{
  path: '/sobre',
  component: About,
},
{
  path: '/contato',
  component: Contato,
}
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router;


