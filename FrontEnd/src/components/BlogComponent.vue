<template>
    <NavigationComponent />
    <v-container>
        <v-row>
            <v-col v-for="post in posts" :key="post.id" cols="12" md="6" lg="4">
                <v-card class="blog-card">
                    <v-img :src="post.coverImage" height="250px" class="blog-cover"></v-img>
                    <v-card-title class="headline">{{ post.title }}</v-card-title>
                    <v-card-subtitle class="subheading">{{ formattedDate(post.date) }}</v-card-subtitle>
                    <v-card-text>
                        <v-chip color="primary" text-color="white" class="mb-2">{{ post.category }}</v-chip>
                        <p>{{ post.summary }}</p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn :to="`/blog/${post.id}`" color="primary" text>Read More</v-btn>
                        <v-btn icon @click="likePost(post.id)">
                            <v-icon>{{ post.liked ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NavigationComponent from './NavigationComponent.vue';
import img1 from '../assets/Home/p1.jpg';
import img2 from '../assets/Home/p2.jpg';
import img3 from '../assets/Home/p4.jpg';

export default {
    components: {
        NavigationComponent
    },
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'How to Choose the Perfect Product for Your Needs',
                    date: '2024-08-16',
                    summary: 'Discover tips and tricks for selecting the best products tailored to your needs in our comprehensive guide.',
                    coverImage: img1,
                    category: 'Tips & Tricks',
                    liked: false,
                },
                {
                    id: 2,
                    title: 'Top 10 Products for Summer 2024',
                    date: '2024-08-17',
                    summary: 'Explore our curated list of top products that will make your summer of 2024 unforgettable.',
                    coverImage: img2,
                    category: 'Product Reviews',
                    liked: false,
                },
                {
                    id: 3,
                    title: 'Essential Gadgets for Modern Living',
                    date: '2024-08-17',
                    summary: 'Discover the latest gadgets designed to enhance your daily life with convenience, efficiency, and style.',
                    coverImage: img3,
                    category: 'Tech Insights',
                    liked: false,
                }

                // Add more posts here
            ],
        };
    },
    methods: {
        formattedDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        likePost(id) {
            const post = this.posts.find(post => post.id === id);
            if (post) {
                post.liked = !post.liked;
            }
        },
    },
};
</script>

<style scoped>
.blog-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.blog-cover {
    border-radius: 4px;
}

.v-card-title {
    font-weight: bold;
}

.v-card-subtitle {
    color: #6c757d;
}

.v-card-text {
    margin-bottom: 16px;
}

.v-chip {
    margin-right: 8px;
}
</style>