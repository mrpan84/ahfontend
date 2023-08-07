<template>
    <div class="page-container">
    <div class="settings-page">
      <div>
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link> / Settings
      </div>
      </div>
  </div>
      <!-- Profile Section -->
      <section class="profile-section">
        <h2>Profile</h2>
        <!-- Profile information display -->
        <div class="profile-info">
          <div class="field">
            <label>Full Name:</label>
            <input type="text" v-model="fullname" />
          </div>
          <div class="field">
            <label>Email:</label>
            <input type="email" v-model="email" />
          </div>
          <div class="field">
            <label>Username:</label>
            <input type="text" v-model="username" />
          </div>
          <div class="field">
            <label>Phone Number:</label>
            <input type="tel" v-model="phoneNumber" />
          </div>
          <div class="field">
            <label>Bio:</label>
            <textarea v-model="bio"></textarea>
          </div>
        </div>
      </section>
  
   <!-- Security Section -->
    <h2>Security</h2>
    <!-- Security settings -->
    <div class="security-settings">
      <div class="field">
        <label for="currentPassword">Current Password:</label>
        <input id="currentPassword" type="password" v-model="currentPassword" />
      </div>
      <div class="field">
        <label for="newPassword">New Password:</label>
        <input id="newPassword" type="password" v-model="newPassword" />
      </div>
      <div class="field">
        <label for="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" type="password" v-model="confirmPassword" />
      </div>
      <div class="field">
        <button @click="changePassword">Change Password</button>
      </div>
    </div>
  
  
      <!-- Preferences Section -->
      <section class="preferences-section">
        <h2>Preferences</h2>
        <!-- User preferences -->
        <div class="user-preferences">
          <div class="field">
            <label>Theme:</label>
            <select v-model="selectedTheme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div class="field">
            <label>Email Notifications:</label>
            <input type="checkbox" v-model="emailNotifications" />
          </div>
        </div>
      </section>
  
      <!-- Update and Cancel Buttons -->
      <div class="form-buttons">
        <button type="submit" @click="updateSettings">Update</button>
        <span class="button-space"></span>
        <button type="button" @click="cancelUpdate">Cancel</button>
      </div>
  
      <!-- Success Message -->
      <div class="success-message" v-if="showSuccessMessage">
        <p>Settings successfully updated!</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        fullname: '',
        email: '',
        username: '',
        phoneNumber: '',
        bio: '',
        twoFactorAuth: false,
        selectedTheme: 'light',
        emailNotifications: true,
        showSuccessMessage: false,
      };
    },
    methods: {
      updateSettings() {
        // Perform the settings update logic here, e.g., make an API request
  
        // Simulating a successful update
        // In a real scenario, you would handle the response from the server
        // to determine if the update was successful or not
        this.showSuccessMessage = true;
      },
      cancelUpdate() {
        // Reset the form fields and settings
        this.fullname = '';
        this.email = '';
        this.username = '';
        this.phoneNumber = '';
        this.bio = '';
        this.twoFactorAuth = false;
        this.selectedTheme = 'light';
        this.emailNotifications = true;
      },
      changePassword() {
        // Handle the password change logic here
      },
    },
  };
  </script>
  
  <style scoped>
  .settings-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .breadcrumb {
    /* Apply styling for the breadcrumb */
    margin: 10px 0;
    padding: 10px;
    font-size: 18px;
    background-color: var(--breadcrumb-background-color);
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .breadcrumb a {
    color: #007bff;
    text-decoration: none;
  }
  
  .profile-section,
  .security-section,
  .preferences-section {
    margin-bottom: 30px;
  }
  
  h2 {
    margin-bottom: 10px;
  }
  
  .field {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  label {
    font-weight: bold;
    margin-right: 10px;
    width: 150px;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea,
  select {
    width: 200px;
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type="checkbox"] {
    margin-left: 5px;
  }
  
  .success-message {
    margin-top: 20px;
    padding: 10px;
    background-color: #DFF2BF;
    color: #4F8A10;
    border: 1px solid #D6E9C6;
    border-radius: 4px;
  }
  .form-buttons {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .page-container {
    height: 100%;
    overflow-y: auto;
  }
  .form-buttons button {
    margin-right: 10px;
  }
  
  .button-space {
    width: 10px;
  }
  </style>