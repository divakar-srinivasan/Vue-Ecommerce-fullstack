<template>
    <div class="d-flex justify-center align-center" style="height: 100vh;">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <!-- Conditional Rendering for Login and Registration -->
        <div v-if="isLogin">
          <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
          <v-text-field 
            v-model="email"
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>
  
          <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
            Password
            <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
              Forgot login password?
            </a>
          </div>
  
          <v-text-field 
            v-model="password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
  
          <v-card class="mb-12" color="surface-variant" variant="tonal">
            <v-card-text class="text-medium-emphasis text-caption">
              Warning: After 3 consecutive failed login attempts, your account will be temporarily locked for
              three hours. If you must log in now, you can also click "Forgot login password?" below to reset the
              login password.
            </v-card-text>
          </v-card>
  
          <v-btn class="mb-8" color="blue" size="large" variant="tonal" block @click="login">
            Log In
          </v-btn>
  
          <v-card-text class="text-center">
            <a class="text-blue text-decoration-none" href="#" @click.prevent="toggleForm">
              Sign up now
              <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </div>
  
        <div v-else>
          <v-card-title>User Registration</v-card-title>
  
          <v-container>
            <v-text-field v-model="first" color="primary" label="First name" variant="underlined"></v-text-field>
  
            <v-text-field v-model="last" color="primary" label="Last name" variant="underlined"></v-text-field>
  
            <v-text-field v-model="email" color="primary" label="Email" variant="underlined"></v-text-field>
  
            <v-text-field v-model="password" color="primary" label="Password" placeholder="Enter your password" variant="underlined"></v-text-field>
  
            <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox>
          </v-container>
  
          <v-divider></v-divider>
  
          <v-card-text class="text-center">
            <v-btn color="success" @click="register">
              Complete Registration
              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-text>
  
          <v-card-text class="text-center">
            <a class="text-blue text-decoration-none" href="#" @click.prevent="toggleForm">
              Already have an account? Log in
              <v-icon icon="mdi-chevron-left"></v-icon>
            </a>
          </v-card-text>
        </div>
      </v-card>
    </div>
  </template>
  

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
    name: 'LoginComponent',
    data() {
        return {
            isLogin: true,  // Control whether the login or registration form is displayed
            visible: false,
            first: null,
            last: null,
            email: null,
            password: null,
            terms: false,
        };
    },
    setup() {
        const router = useRouter();
        return { router };
    },
    methods: {
        toggleForm() {
            this.isLogin = !this.isLogin;  // Toggle between login and registration form
        },
        async login() {
            try {
                console.log('Email:', this.email);
                console.log('Password:', this.password);

                const response = await axios.get(`http://localhost:3000/users?email=${this.email}`);
                console.log('Response data:', response.data);
                const user = response.data[0];

                if (user) {
                    console.log('User found:', user);
                    console.log('Stored password:', user.password);
                    console.log('Entered password:', this.password);

                    if (user.password === this.password) {
                        console.log('Login successful');
                        this.router.push('/home');
                    } else {
                        console.error('Invalid password');
                    }
                } else {
                    console.error('Invalid email');
                }
            } catch (error) {
                console.error('Error logging in:', error);
            }
        },

        async register() {
            if (!this.terms) {
                console.error('You must agree to the terms and conditions');
                return;
            }

            try {
                // Check if the email already exists
                const existingUser = (await axios.get(`http://localhost:3000/users?email=${this.email}`)).data;
                if (existingUser.length > 0) {
                    console.error('Email already exists');
                    return;
                }

                const newUser = {
                    first: this.first,
                    last: this.last,
                    email: this.email,
                    password: this.password,  // Ensure the password is stored as entered
                };

                const response = await axios.post('http://localhost:3000/users', newUser);
                console.log('Registration successful:', response.data);

                // Optionally, switch to the login form after registration
                this.toggleForm();
            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Optional: Customize styles for better UX */
</style>