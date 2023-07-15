<template>
    <ion-accordion-group>
      <ion-accordion v-for="(grower, index) in growers" :value="grower.grower_id" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
        <ion-item slot="header" color="light">
          <ion-label>{{ grower.district }} {{grower.club_name}} <small><date-format :date="grower.registered" has-time/></small></ion-label>
          <ion-badge slot="end">Pending</ion-badge>
        </ion-item>
        <div class="ion-padding" slot="content">
            
        </div>
      </ion-accordion>
    </ion-accordion-group>
  </template>
  
  <script lang="ts">
    import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonBadge } from '@ionic/vue';
    import { caretDownCircle } from 'ionicons/icons';
    import { defineComponent, ref } from 'vue';
    import axios, { Axios } from 'axios';
  
    export default defineComponent({
      components: {
        IonAccordion,
        IonAccordionGroup,
        IonItem,
        IonLabel,
        IonBadge,
      },
      setup() {
        const growers = ref();

        const loadGrowers = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/users/growers/");
        growers.value = response.data;
        console.log(response.data);
        }

        loadGrowers()
        return { caretDownCircle, growers };
      },
    });
  </script>