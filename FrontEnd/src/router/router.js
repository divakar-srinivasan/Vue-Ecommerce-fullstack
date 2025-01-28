import { createRouter, createWebHashHistory } from "vue-router";

import CartComponent from "@/components/CartComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import DisplayCartItems from "@/components/DisplayCartItems.vue";
import LoginComponent from "@/components/LoginComponent.vue";
import ShopComponent from "@/components/ShopComponent.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
import BlogComponent from "@/components/BlogComponent.vue";
import AddProduct from "@/components/AddProduct.vue";
const routes = [
    { path: '/', component: LoginComponent },
    { path: '/home', component: HomeComponent },
    { path: '/displayCart', name: "CartComponent", component: CartComponent },
    { path: '/cart', name: "DisplayCartItems", component: DisplayCartItems },
    { path: '/shop', name: "ShopComponent", component: ShopComponent },
    { path: '/profile', name: "ProfileComponent", component: ProfileComponent },
    { path: '/blog', name: "BlogComponent", component: BlogComponent },
    { path: '/addProduct', name: "AddProduct", component: AddProduct }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;