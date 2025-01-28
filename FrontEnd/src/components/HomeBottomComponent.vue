<template>
    <v-container>
        <v-row>
            <!-- First Block -->
            <v-col cols="12" sm="6">
                <v-card height="250px">
                    <v-img :src="p1" cover height="100%" class="d-flex align-center justify-center">
                        <v-card-title>spring/summer</v-card-title>
                        <v-card-subtitle>
                            These are the best fits for the summer season
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn color="white">Learn More</v-btn>
                        </v-card-actions>
                    </v-img>
                </v-card>
            </v-col>

            <!-- Second Block -->
            <v-col cols="12" sm="6">
                <v-card height="250px">
                    <v-img :src="p2" cover height="100%" class="d-flex align-center justify-center">
                        <v-card-title class="white--text">winter</v-card-title>
                        <v-card-subtitle class="white--text">
                            The new warm and cozy winter collection
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn color="white" outlined>Collections</v-btn>
                        </v-card-actions>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <!-- Third Block -->
            <v-col cols="12" sm="4">
                <v-card height="250px">
                    <v-img :src="p3" cover height="100%" class="d-flex align-center justify-center">
                        <v-card-title class="white--text">spring/summer</v-card-title>
                        <v-card-subtitle class="white--text">
                            These are the best fits for the summer season
                        </v-card-subtitle>
                    </v-img>
                </v-card>
            </v-col>

            <!-- Fourth Block -->
            <v-col cols="12" sm="4">
                <v-card height="250px">
                    <v-img :src="p4" cover height="100%" class="d-flex align-center justify-center">
                        <v-card-title class="white--text">spring/summer</v-card-title>
                        <v-card-subtitle class="white--text">
                            These are the best fits for the summer season
                        </v-card-subtitle>
                    </v-img>
                </v-card>
            </v-col>

            <!-- Fifth Block -->
            <v-col cols="12" sm="4">
                <v-card height="250px">
                    <v-img :src="p5" cover height="100%" class="d-flex align-center justify-center">
                        <v-card-title class="white--text">spring/summer</v-card-title>
                        <v-card-subtitle class="white--text">
                            These are the best fits for the summer season
                        </v-card-subtitle>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>



    </v-container>
    <v-container class="fill-height pa-0" fluid>
        <v-row class="d-flex justify-center align-center">
            <v-col cols="12" sm="10">
                <v-card class="pa-4" color="#006070" dark>
                    <v-row class="d-flex justify-center align-center">
                        <v-col cols="12" sm="6">
                            <h2 class="white--text">Subscribe to Our Newsletters</h2>
                            <p>To stay up-to-date with our new arrivals and <span class="font-weight-bold">coupon
                                    giveaways</span>.</p>
                        </v-col>
                        <v-col cols="12" sm="6" class="d-flex align-center">
                            <v-text-field placeholder="Enter your email" outlined hide-details dense class="mr-2"
                                color="white"></v-text-field>
                            <v-btn color="success" class="white--text">Subscribe</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import p1 from "../assets/Home/p1.jpg";
import p2 from "../assets/Home/p2.jpg";
import p3 from "../assets/Home/p3.jpg";
import p4 from "../assets/Home/p4.jpg";
import p5 from "../assets/Home/p5.jpg";

export default {
    name: 'ImageGrid',
    data() {
        return {
            p1,
            p2,
            p3,
            p4,
            p5,
        };
    },
};
</script>
<style scoped>
.fill-height {
    height: 100vh; /* Full height */
  }
.my-5 {
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.pa-4 {
    padding: 1.5rem;
}
</style>