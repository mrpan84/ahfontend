<template>
    <ion-list>
      <ion-item>
        <ion-select>
            <div slot="label">Consignment <ion-text color="danger">(Required)</ion-text></div>
            <ion-select-option v-for="consignment in consignments" :value="consignment.reg_number">{{ consignment.grower.club_name }}</ion-select-option>
       </ion-select>
      </ion-item>
    </ion-list>
  </template>
  
  <script lang="ts">
    import { IonItem, IonList, IonSelect, IonSelectOption, IonText } from '@ionic/vue';
    import { defineComponent, ref } from 'vue';
    import axios from 'axios';
    import {useStore} from '@/Store/store.ts';
  
    export default defineComponent({
      components: { IonItem, IonList, IonSelect, IonSelectOption, IonText },
      setup(){
        const store = useStore();
        const consignments = ref();

        const loadConsignments = async () => {
            const response = await axios.get(store.BASE_URL + "stock/consignments/");
            consignments.value = response.data;
        }

        loadConsignments();
        return {consignments};
      }
    });
  </script>

