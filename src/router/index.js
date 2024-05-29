import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/About/AboutView.vue'
import UserView from '../views/UserView.vue'
import AboutUs from '../views/About/AboutUs.vue'
import CompanyInfo from '../views/About/CompanyInfo.vue'
import RecipePage from '../views/RecipePage.vue'
import ToDo from '../views/ToDo.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
    {path:'/', name:'home', component:HomeView},
    {path:'/about', name:'about', component:AboutView,
        children:[
            {path:'about-us', name:'uss', component:AboutUs},
            {path:'our-company', name:'company', component:CompanyInfo},
        ]
    },
    {path:'/todo', component:ToDo},
    {path:'/user/:id', name:'user', component:UserView},
    {path:'/recipes', component:RecipePage},
    {path:'/:pathMatch(.*)*', component:NotFound},
]

const router = createRouter({
  history:createWebHistory(),
  routes  
})
export default router;