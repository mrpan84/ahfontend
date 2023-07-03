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
  
    export default defineComponent({
      components: { IonItem, IonList, IonSelect, IonSelectOption, IonText },
      setup(){
        const consignments = ref();

        const loadConsignments = async () => {
            const response = await axios.get("http://192.168.114.162:8000/api/v1/stock/consignments/");
            consignments.value = response.data;
        }

        loadConsignments();
        return {consignments};
      }
    });
  </script>

