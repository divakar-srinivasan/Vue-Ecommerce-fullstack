<template>
    <v-container>
        <v-row>
        <v-card>
                <!-- Full-width image -->
                <v-img
                    src="https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    height="200px" class="card-image"></v-img>

                <v-card-title>Card Title</v-card-title>

                <v-card-subtitle>Card Subtitle</v-card-subtitle>

                <v-card-text>
                    This is some text inside the card. It can be a description or any other content.
                </v-card-text>

                <v-card-actions>

                    <v-btn color="primary">Action 1</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="secondary">Action 2</v-btn>
                </v-card-actions>
        </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ProductsComponent',
};
</script>

<style scoped>
/* Ensure the image takes full width */
.card-image {
    width: 100%;
}
</style>