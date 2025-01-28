<template>
    <NavigationComponent/>
    <v-container>
        <v-row class="pt-6">
            <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
                <v-card data-aos="zoom-in-down">

                    <v-img :src="product.image_url" height="400px" width="100%"></v-img>


                    <v-card-text>
                        <v-row no-gutters align="center">
                            <v-col cols="auto">
                                {{ product.product_name }}
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto" class="text-right">
                                <v-btn color="primary" outlined @click="addToCart(product)">
                                    In Stock
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-row align="center">
                        <v-col>
                            <v-card-title>${{ product.product_price }}</v-card-title>
                        </v-col>
                        <v-col>
                            <v-spacer></v-spacer>
                            <v-rating hover :length="5" :size="32" :model-value=product.ratings active-color="primary"
                                class="pr='4'" />
                        </v-col>
                    </v-row>
                    <!-- <v-card-subtitle>{{ product.category }}</v-card-subtitle> -->

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios';
import NavigationComponent from './NavigationComponent.vue';
export default {
    components:{
        NavigationComponent
    },
    data() {
        return {
            products: [],
        }
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('http://localhost:3000/shop');
                this.products = response.data;
            } catch (e) {
                console.error(e);
            }
        }
    }
}
</script>