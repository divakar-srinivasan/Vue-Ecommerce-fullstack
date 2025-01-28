<template>
    <NavigationComponent />
    <v-container>

        <v-row>
            <!-- Left Section: Cart Items -->
            <v-col cols="8">
                <v-card outlined>
                    <v-card-title>From Saved Addresses</v-card-title>
                    <v-divider></v-divider>

                    <!-- Cart Items -->
                    <v-card-subtitle v-for="(item, index) in cartItems" :key="index" class="pb-5 pt-5">
                        <v-row no-gutters align="center">
                            <v-col cols="2">
                                <v-img :src="item.image" max-width="100" max-height="100"></v-img>
                            </v-col>
                            <v-col cols="6">
                                <div>{{ item.name }}</div>
                                <div>{{ item.category }}</div>
                                <div class="green--text">Available</div>
                            </v-col>
                            <v-col cols="4" class="text-right">
                                <div>{{ formatCurrency(item.price) }}</div>
                                <!-- <div>{{ item.unit }}</div> -->
                                <v-btn text>Save for Later</v-btn>
                                <v-btn text @click="removeItem(item)">Remove</v-btn>
                            </v-col>
                        </v-row>
                        <v-divider></v-divider>
                    </v-card-subtitle>
                </v-card>
            </v-col>

            <!-- Right Section: Price Details -->
            <v-col cols="4">
                <v-card outlined>
                    <v-card-title>Price Details</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <v-row>
                            <v-col cols="6">Total Items</v-col>
                            <v-col cols="6" class="text-right">{{ cartItems.length }}</v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="6">Total Amount</v-col>
                            <v-col cols="6" class="text-right">{{ formatCurrency(totalPrice) }}</v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="orange" block class="custom-hover-btn">PLACE ORDER</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NavigationComponent from "./NavigationComponent.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ShoppingCart",
    components: {
        NavigationComponent
    },
    data() {
        return {
            items: [
                { title: 'My Profile' },
                { title: 'Orders' },
                { title: 'WhishList' },
                { title: 'Logout' },
            ],
        }
    },
    computed: {
        ...mapGetters(["cartItems"]),

        totalPrice() {
            return this.cartItems.reduce((acc, item) => acc + item.price, 0);
        }
    },
    methods: {
        formatCurrency(value) {
            return `₹${value.toFixed(2)}`;
        },
        ...mapActions(['removeFromCart']),

        removeItem(item) {
            this.removeFromCart(item);
        }

    }
};
</script>

<style scoped>
.text-right {
    text-align: right;
}

.red--text {
    color: red;
}

.custom-hover-btn:hover {
    background-color: #FFA726 !important;
    /* Change to your desired hover color */
    color: white !important;
    /* Optional: Change text color on hover */
}
</style>
