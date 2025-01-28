<template>
  <NavigationComponent/>
  <v-container class="py-10">
    <v-row>
      <!-- Sidebar Navigation -->
      <v-col cols="12" md="3" class="sidebar">
        <v-list dense nav>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Hello, GOWRI SHANKAR</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item-group>
            <v-list-item>My Orders</v-list-item>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Account Settings</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-group no-action sub-group>
                <template v-slot:activator>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title>Profile Information</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
                <v-list-item>Manage Addresses</v-list-item>
                <v-list-item>PAN Card Information</v-list-item>
              </v-list-group>
            </v-list-item-group>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Payments</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <!-- Profile Information -->
      <v-col cols="12" md="9">
        <v-card class="pa-5">
          <v-row>
            <v-col cols="12" md="4" class="text-center">
              <v-avatar size="150" @click="triggerFileInput" class="profile-avatar">
                <img :src="profileImage || 'https://via.placeholder.com/150'" alt="Profile Picture" class="avatar-img">
              </v-avatar>
              <input ref="fileInput" type="file" accept="image/*" @change="onFileChange" style="display: none;" />
              <v-btn class="mt-2" small outlined @click="triggerFileInput">Change Image</v-btn>
            </v-col>
            <v-col cols="12" md="8">
              <v-form>
                <v-row>
                  <!-- First Name Field -->
                  <v-col cols="12">
                    <v-text-field label="First Name" v-model="profile.firstName" :readonly="!isEditing" outlined
                      dense></v-text-field>
                  </v-col>
                  <!-- Last Name Field -->
                  <v-col cols="12">
                    <v-text-field label="Last Name" v-model="profile.lastName" :readonly="!isEditing" outlined
                      dense></v-text-field>
                  </v-col>
                  <!-- Gender and DOB Section -->
                  <v-col cols="12">

                        <v-radio-group v-model="profile.gender" :disabled="!isEditing" label="Your Gender" row dense>
                          <v-radio label="Male" value="male"></v-radio>
                          <v-radio label="Female" value="female"></v-radio>
                        </v-radio-group>

                  </v-col>
                  <v-col>
                    <v-text-field label="Date of Birth" v-model="profile.dob" :readonly="!isEditing" outlined
                      dense></v-text-field>
                  </v-col>
                  <!-- Email Address Field -->
                  <v-col cols="12">
                    <v-text-field label="Email Address" v-model="profile.email" :readonly="!isEditing" outlined
                      dense></v-text-field>
                  </v-col>
                  <!-- Mobile Number Field -->
                  <v-col cols="12">
                    <v-text-field label="Mobile Number" v-model="profile.phone" :readonly="!isEditing" outlined
                      dense></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
              <v-divider class="my-4"></v-divider>
              <v-row>
                <v-col cols="12">
                  <v-btn block color="primary" @click="toggleEditMode">
                    {{ isEditing ? 'Save Profile' : 'Edit Profile' }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavigationComponent from './NavigationComponent.vue';

export default {

  components:{
    NavigationComponent
  },

  data() {
    return {
      profileImage: null,
      isEditing: false,
      profile: {
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    toggleEditMode() {
      if (this.isEditing) {
        this.saveProfile();
      }
      this.isEditing = !this.isEditing;
    },
    saveProfile() {
      // Logic to save profile details
      alert('Profile saved successfully!');
    },
  },
};
</script>

<style scoped>
.sidebar {
  border-right: 1px solid #E0E0E0;
}

.profile-avatar {
  cursor: pointer;
  border: 2px solid #E0E0E0;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>