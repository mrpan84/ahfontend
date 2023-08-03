<template>
  <ion-page>
    <ion-content class="registration-content">
      <div class="registration-container">
        <ion-icon :icon="personAddOutline" class="registration-icon"></ion-icon>
        <h1 class="registration-title">Create an Account</h1>
        <div class="input-container">
          <ion-input
            placeholder="Full Name"
            v-model="fullName"
            class="input-field"
          ></ion-input>
          <ion-input
            placeholder="Email"
            v-model="email"
            class="input-field"
          ></ion-input>
          <ion-select
            v-model="userType"
            class="input-field ion-select"
            :interfaceOptions="selectOptions"
            placeholder="Select User Type"
          >
            <ion-select-option value="farmer">Farmer</ion-select-option>
            <ion-select-option value="buyer">Buyer</ion-select-option>
            <ion-select-option value="auctioneer">Auctioneer</ion-select-option>
          </ion-select>
          <ion-input
            placeholder="Password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            class="input-field"
          ></ion-input>
          <div class="show-password-checkbox">
            <input type="checkbox" id="showPasswordCheckbox" v-model="showPassword" class="checkbox-input">
            <label for="showPasswordCheckbox" class="checkbox-label">Show Password</label>
          </div>
        </div>
        <ion-button expand="block" @click="register" class="register-button">Register</ion-button>
        <div class="login-link">
          <router-link class="login" to="/folder/signin">Already have an account? Login</router-link>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonIcon, IonInput, IonPage, IonSelect, IonSelectOption } from '@ionic/vue';
import { ref, defineComponent } from 'vue';
import { personAddOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { useStore } from '@/Store/store.ts';

export default defineComponent({
  name: 'RegistrationForm',
  components: {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonPage,
    IonSelect,
    IonSelectOption,
  },
  setup() {
    const store = useStore();
    const fullName = ref('');
    const email = ref('');
    const password = ref('');
    const userType = ref(''); // To store the selected user type
    const showPassword = ref(false);

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const register = () => {
      console.log('Register');
    };

    // Optional interface options for the ion-select
    const selectOptions = {
      header: 'Select User Type',
    };

    return { register, fullName, email, password, userType, showPassword, toggleShowPassword, personAddOutline, eyeOutline, eyeOffOutline, selectOptions };
  },
});
</script>

<style scoped>
  /* The background color for the whole content area */
  .registration-content {
    --background: linear-gradient(to bottom right, #4F80E1, #00C9FF);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  /* Container for the registration form */
  .registration-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    color: #fff; /* Default text color for the form */
  }

  /* Icon style */
  .registration-icon {
    font-size: 80px;
    color: #fff;
    margin-top: 64px;
  }

  /* Title style */
  .registration-title {
    margin-top: 32px;
    font-size: 28px;
    font-weight: bold;
  }

  /* Input fields style */
  .input-field,
  ion-input.input-field {
    width: 300px;
    padding: 12px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    font-size: 16px;
    margin-bottom: 16px;
  }

  /* ion-select style */
  .input-field .select-text {
    width: 100%;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    color: #000;
    font-size: 16px;
    margin-bottom: 16px;
  }

  /* Show password checkbox style */
  .show-password-checkbox {
    display: flex;
    align-items: center;
    margin-top: 8px;
  }

  /* Register button style */
  .register-button {
    margin-top: 32px;
    width: 300px;
    --background: #fff;
    --color: #4F80E1;
    font-size: 16px;
    font-weight: bold;
  }

  /* Login link style */
  .login-link {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
  }

  /* Hover style for login link */
  .login:hover {
    text-decoration: underline;
  }
</style>
