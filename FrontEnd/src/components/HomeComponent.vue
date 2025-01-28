<template>
    <v-container fluid style="padding: 0; margin: 0;">
        <NavigationComponent />
        <!-- this is the home page -->
        <v-main class="hero-section">
            <v-container fluid>
                <v-row align="center" justify="space-between" no-gutters>
                    <!-- Left Content -->
                    <v-col cols="12" md="6" class="text-center text-md-left">
                        <div class="hero-content">
                            <h1 class="display-2 font-weight-bold">Discover the Latest Tech</h1>
                            <h2 class="subtitle-1" data-aos="fade-up">Upgrade Your Life with the Best Deals</h2>
                            <h3 class="mb-4">Get up to <span class="highlight">70% Off</span> on Selected Products!</h3>
                            <v-btn color="secondary" class="home-button" large elevation="3" data-aos="fade-up"
                                data-aos-delay="400">
                                Shop Now!
                            </v-btn>
                        </div>
                    </v-col>

                    <!-- Right Image -->
                    <v-col cols="12" md="6">
                        <div class="hero-image" data-aos="zoom-in">
                            <!-- Replace with your image URL -->
                            <v-img :src="heroImage" alt="Hero Image" height="700px" width="100%"></v-img>

                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <!-- this is the carouselComponent -->

        <v-carousel data-aos="zoom-in-down" class="pt-10" height="400" show-arrows="hover" cycle
            hide-delimiter-background>
            <v-carousel-item v-for="(banner, i) in banners" :key="i">
                <v-img :src="banner" class="carousel-image">
                </v-img>
            </v-carousel-item>
        </v-carousel>

        <v-container style="height: auto; background-color: var(--v-primary-base);">
            <v-row class="text-center pb-10">
                <v-col>
                    <h1 class="display-1 font-weight-bold">Featured Product</h1>
                    <h2 class="display-2 font-weight-light">The best products we have on sale</h2>
                </v-col>
            </v-row>
            <v-row class="pt-6">
                <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
                    <v-card data-aos="zoom-in-down">
                        <v-img :src="product.link" height="400px" width="100%"></v-img>
                        <v-card-title>{{ product.name }}</v-card-title>
                        <v-card-subtitle>{{ product.category }}</v-card-subtitle>
                        <v-card-text>

                            <v-row no-gutters align="center">
                                <v-col cols="auto">
                                    ${{ product.price }}
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="auto" class="text-right">
                                    <v-btn color="primary" outlined @click="addToCart(product)">
                                        Add to Cart
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-img :src="img"></v-img>
            </v-row> -->
        </v-container>


        <v-container fluid>
            <v-row data-aos="zoom-in-down">
                <v-col>
                    <h2>Best Fashion Brand For You!</h2>
                    <v-carousel v-if="items.length" hide-delimiter-background style="height: 350px; width: 100%;"
                        align="center">
                        <v-carousel-item v-for="(group, index) in groupedItems" :key="index">
                            <v-row class="d-flex align-center justify-center fill-height" style="width: 100%;">
                                <v-col v-for="(item, idx) in group" :key="idx" cols="3">
                                    <v-card>
                                        <v-img :src="item.image" height="200px" class="fill-card"></v-img>
                                        <v-card-title>{{ item.title }}</v-card-title>
                                        <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            <v-row data-aos="zoom-in-down">
                <v-col>
                    <h2>Best Deals on SmartPhones</h2>
                    <v-carousel v-if="smartPhones.length" hide-delimiter-background show-arrows-on-hover
                        style="height: 350px; width: 100%;" align="center">
                        <v-carousel-item v-for="(group, index) in groupedSmartPhones" :key="index">
                            <v-row class="d-flex align-center justify-center fill-height" style="width: 100%;">
                                <v-col v-for="(phone, idx) in group" :key="idx" cols="3">
                                    <v-card>
                                        <v-img :src="phone.imgLink" height="200px" class="fill-card"></v-img>
                                        <v-card-title>{{ phone.name }}</v-card-title>
                                        <v-card-subtitle>${{ phone.price }}</v-card-subtitle>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>

        </v-container>
        <HomeBottomComponent fluid />
        <v-footer
            style="background-color: black; background-color: white;   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
            <v-container>
                <v-row>
                    <v-col cols="12" md="3">
                        <h3>ABOUT</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Stories</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Corporate Information</a></li>
                        </ul>
                    </v-col>
                    <v-col cols="12" md="3">
                        <h3>GROUP COMPANIES</h3>
                        <ul>
                            <li><a href="#">SpendSmart</a></li>
                            <li><a href="#">ManageSafely</a></li>
                            <li><a href="#">MakeTask</a></li>
                        </ul>
                    </v-col>
                    <v-col cols="12" md="3">
                        <h3>HELP</h3>
                        <ul>
                            <li><a href="#">Payments</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Cancellation & Returns</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Report Infringement</a></li>
                        </ul>
                    </v-col>
                    <v-col cols="12" md="3">
                        <h3>CONSUMER POLICY</h3>
                        <ul>
                            <li><a href="#">Cancellation & Returns</a></li>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Grievance Redressal</a></li>
                            <li><a href="#">EPR Compliance</a></li>
                        </ul>
                    </v-col>
                </v-row>
                <v-row class="mt-5">
                    <v-col cols="12" md="3">
                        <h3>Mail Us:</h3>
                        <p>
                            Gowri shankar Internet Private Limited,<br />
                            Bk pudur Kuniyamuthur, &<br />
                            Coimbatore, 560103,<br />
                            Tamil nadu, India
                        </p>
                    </v-col>
                    <v-col cols="12" md="3">
                        <h3>Registered Office Address:</h3>
                        <p>
                            Gowri shankar Internet Private Limited,<br />
                            Bk pudur, Kuniyamuthur &<br />
                            gandhipuram,<br />
                            Coimbatore, 560103,<br />
                            Tamil nadu, India<br />
                            Telephone: 044-00000000 / 044-00000000
                        </p>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="4">
                                <a href="#">Become a Seller</a>
                            </v-col>
                            <v-col cols="4">
                                <a href="#">Advertise</a>
                            </v-col>
                            <v-col cols="4">
                                <a href="#">Gift Cards</a>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="4">
                                <a href="#">Help Center</a>
                            </v-col>
                            <v-col cols="4">
                                <a href="#">Payments</a>
                            </v-col>
                            <v-col cols="4">
                                <a href="#">Security</a>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="mt-5">
                    <v-col cols="12" class="text-center">
                        <span>&copy; gowrishankarsrinivasan3@gmail.com</span>
                        <v-row justify="center" class="mt-2">
                            <v-icon class="mx-2">mdi-facebook</v-icon>
                            <v-icon class="mx-2">mdi-twitter</v-icon>
                            <v-icon class="mx-2">mdi-youtube</v-icon>
                        </v-row>
                        <!-- <v-row justify="center" class="mt-2">
                        <v-img src="visa.png" height="40"></v-img>
                        <v-img src="mastercard.png" height="40"></v-img>
                        <v-img src="discover.png" height="40"></v-img>
                        <v-img src="rupay.png" height="40"></v-img>
                        <v-img src="netbanking.png" height="40"></v-img>
                        <v-img src="cashondelivery.png" height="40"></v-img>
                        <v-img src="emi.png" height="40"></v-img>
                    </v-row> -->
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-container>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../assets/Banners/Tb.png";
import { mapActions } from 'vuex'; // Import Vuex
import NavigationComponent from './NavigationComponent.vue';

import B3 from "../assets/Banners/B3.jpg";
import B4 from "../assets/Banners/B4.jpg";
import B5 from "../assets/Banners/B5.jpg";
import heroImage from '../assets/Home/home.jpg'
import HomeBottomComponent from './HomeBottomComponent.vue';
export default {
    name: 'HomeComponent',
    components: {
        HomeBottomComponent,
        NavigationComponent
    },
    data() {
        return {
            products: [],
            banners: [
                B4, B5, B3
            ],
            items: [],
            smartPhones: [],
            img,
            heroImage,
            drawer: false,
            Navitems: [
                { title: 'Home', value: 'home' },
                { title: 'Shop', value: 'shop' },
                { title: 'Blog', value: 'blog' },
                { title: 'Cart', value: 'cart' },
            ],
            DropItems: [
                { title: 'My Profile', route: '/profile' },
                { title: 'Orders', route: '/orders' },
                { title: 'WhishList', route: '/wishlist' },
                { title: 'Logout', route: '/logout' },
            ],
        };
    },
    created() {
        this.fetchProducts();
        this.fetchPhones();
        this.fetchBrandItems();
    },
    computed: {
        groupedItems() {
            const groups = [];
            for (let i = 0; i < this.items.length; i += 4) {
                groups.push(this.items.slice(i, i + 4));
            }
            return groups;
        },
        groupedSmartPhones() {
            const groups = [];
            for (let i = 0; i < this.smartPhones.length; i += 4) {
                groups.push(this.smartPhones.slice(i, i + 4));
            }
            return groups;
        },
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('http://localhost:3000/api/products/products');
                this.products = await response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async fetchPhones() {
            try {
                const response = await axios.get('http://localhost:3000/smartPhones');
                this.smartPhones = await response.data;
            } catch (e) {
                console.error(e.message);
            }
        },
        async fetchBrandItems() {
            try {
                const response = await axios.get('http://localhost:3000/items');
                this.items = response.data;
            } catch (e) {
                console.error(e.message);
            }
        },
        ...mapActions(['addToCart'])
    },
    mounted() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }
};
</script>

<style scoped>
.right-img {


    background-image: url('D:/E-commerce/FrontEnd/src/assets/happy-pretty-asian-woman-carrying-colorful-shopping-bags-isolated-yellow-studio-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.v-card {
    margin-bottom: 20px;
}

.carousel-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}


h3 {
    margin-top: 0;
    color: #000000;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}

a {
    color: #000000;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
