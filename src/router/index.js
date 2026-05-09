import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import pricing from '../views/pricing.vue'
import contact from '../views/contact.vue'
import about from '../views/about.vue'
import product from '../views/product.vue'
import accessibility from '../views/accessibility.vue'
import copyright from '../views/copyright.vue'
import datenschutz from '../views/datenschutz.vue'
import imprint from '../views/imprint.vue'
import licensing from '../views/licensing.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: homePage },
    { path: '/pricing', name: 'pricing', component: pricing },
    { path: '/about', name: 'about', component: about },
    { path: '/contact', name: 'contact', component: contact },
    { path: '/product', name: 'product', component: product },
    { path: '/accessibility', name: 'accessibility', component: accessibility },
    { path: '/copyright', name: 'copyright', component: copyright },
    { path: '/datenschutz', name: 'datenschutz', component: datenschutz },
    { path: '/imprint', name: 'imprint', component: imprint },
    { path: '/licensing', name: 'licensing', component: licensing },
  ],
  scrollBehavior(to, from, savedPosition){
    if(savedPosition) return savedPosition;
    return{ top: 0 }
  }
})

export default router