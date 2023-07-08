<template>
    <ion-list>
      <ion-item>
        <ion-select>
            <div slot="label">Grower <ion-text color="danger">(Required)</ion-text></div>
            <ion-select-option v-for="grower in growers" :value="grower.grower_id">
                {{growers.district}} {{ grower.club_name }}</ion-select-option>
       </ion-select>
      </ion-item>
    </ion-list>
  </template>
  
  <script lang="ts">
    import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/vue';
    import { defineComponent, ref } from 'vue';
    import axios from 'axios';
  
    export default defineComponent({
      components: { IonItem, IonList, IonSelect, IonSelectOption, IonText },
      setup(){
        const growers = ref();

        const loadGrowers = async () => {
            const response = await axios.get("http://127.0.0.1:8000/api/v1/users/growers/");
            growers.value = response.data;
        }

        loadGrowers();
        return {growers};
      }
    });
  </script>

