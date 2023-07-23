<template>
  <ion-page>
    <ion-content class="login-content">
      <div class="login-container">
        <ion-icon :icon="personCircleOutline" class="login-icon"></ion-icon>
        <h1 class="login-title">Hi! Login Here </h1>
        <div class="input-container">
          <ion-input placeholder="Username" v-model="formInfo.username" class="input-field"></ion-input>
          <ion-input placeholder="Password" v-model="formInfo.password"
            :type="showPassword ? 'text' : 'password'" class="input-field" ></ion-input>
          <div class="show-password-checkbox">
            <input type="checkbox" id="showPasswordCheckbox" v-model="showPassword" class="checkbox-input">
            <label for="showPasswordCheckbox" class="checkbox-label">Show Password</label>
          </div>
        </div>
        <ion-button id="open-loading" class="login-button" v-on:click="login">Login</ion-button>
        <ion-loading
          trigger="open-loading"
          message="Please Wait..."
          duration="3000"
          spinner="circles"
          class="custom-loading"
          :cssClass="['custom-loading']"
        ></ion-loading>
        <div class="login-links">
          <div class="create-account-link">
            <router-link class="create-account" to="/folder/signup">Create Account</router-link>
          </div>
          <div class="forgot-password-link">
            <router-link class="forgot-password" to="/folder/forgot-password">Forgot Password?</router-link>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonIcon, IonInput, IonPage } from '@ionic/vue';
import { ref, defineComponent, watch } from 'vue';
import { personCircleOutline, eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { IonLoading } from '@ionic/vue';
import {useStore} from '@/Store/store.ts'
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginForm',
  components: {
    IonButton,
    IonContent,
    IonIcon,
    IonInput,
    IonPage,
    IonLoading,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const formInfo =ref({username: '', password: ''})

    const data = ref();

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

     // Create a ref to store the response of the Axios request.
    const response = ref();



    const send = (payload) => {
        const url = store.BASE_URL + "users/signin/";
        console.log(url);
        response.value = axios.post(url, payload).data
             .then((response) => console.log(response.value))
        return response.value.data;
    };

    const login = async () => {
        let payload = formInfo.value;
        const response = await send(payload);
        if (response){
          console.log(response)
          store.USERTYPE = response.user.utype;
          store.USER = response.user;
          router.push({ name: 'Home', replace: true })
        }
    };

    const goToRegistration = () => {
      console.log();
    };

    // Watch the `users` ref for changes.
        watch(response, (newValue, oldValue) => {
          // Update the `users` state with the new response data.
          console.log(this.response.value)
          if(this.response.value){
              store.USERTYPE = newValue.data.user.utype;
              store.USER = newValue.data.user;
              router.push({ name: 'Home', replace: true });
          } else {
              store.USERTYPE = "Guest";
              router.push({ name: 'Signin', replace: true });
          }
        });

    return { data, goToRegistration, login, username, password, showPassword, toggleShowPassword, personCircleOutline, eyeOutline, eyeOffOutline,
        formInfo
     };
  },
});
</script>

<style scoped>
.login-content {
  --background: linear-gradient(to bottom right, #4F80E1, #00C9FF);
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: sans-serif;
}

.login-icon {
  font-size: 80px;
  color: #fff;
  margin-top: 64px;
}

.login-title {
  margin-top: 32px;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}

.input-field {
  width: 300px;
  padding: 12px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  font-size: 16px;
  margin-bottom: 16px;
}

.show-password-checkbox {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.checkbox-input {
  margin-right: 8px;
}

.checkbox-label {
  color: #fff;
  font-size: 14px;
}

.login-button {
  margin-top: 32px;
  width: 300px;
  --background: #fff;
  --color: #4F80E1;
  font-size: 16px;
  font-weight: bold;
}

.login-links {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.create-account-link,
.forgot-password-link {
  margin-top: 8px;
}

.forgot-password,
.create-account {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
}

.forgot-password:hover,
.create-account:hover {
  text-decoration: underline;
}
.custom-loading .loading-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1000vh;
  width: 1000vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.custom-loading .loading-spinner {
  --width: 100px;
  --height: 100px;
}
</style>
