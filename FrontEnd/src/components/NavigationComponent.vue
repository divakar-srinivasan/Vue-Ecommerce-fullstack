<template>
    <v-container>
        <v-app-bar prominent>
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>My Store</v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-if="$vuetify.display.mdAndUp">

                <router-link to="/home">
                    <v-btn color="black" text class="d-none d-md-inline-flex">Home</v-btn>
                </router-link>
                <router-link to="/shop">
                    <v-btn color="black" text class="d-none d-md-inline-flex">Shop</v-btn>
                </router-link>
                <router-link to="/blog">
                    <v-btn color="black" text class="d-none d-md-inline-flex">Blog</v-btn>
                </router-link>
                <router-link to="/cart">
                    <v-btn color="black" text class="d-none d-md-inline-flex">Cart</v-btn>
                </router-link>

            </template>

            <router-link to="/profile">

                <v-btn color="black" icon="mdi-account" variant="text"></v-btn>
            </router-link>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                title: 'My Profile',
                value: 'Profile',
            },
            {
                title: 'Orders',
                value: 'bar',
            },
            {
                title: 'WhishList',
                value: 'fizz',
            },
            {
                title: 'Logout',
                value: 'buzz',
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style scoped>
.default-btn {
    justify-content: flex-start;
}

.menu-list {
    padding: 0;
}

.menu-list .v-list-item {
    margin: 0;
}
</style>