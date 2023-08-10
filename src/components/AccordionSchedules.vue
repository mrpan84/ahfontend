<template>
    <ion-accordion-group>
      <ion-accordion v-for="(schedule, index) in schedules" :value="schedule.auction_id" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
        <ion-item slot="header" color="light">
          <ion-label> {{schedule.venue}} <small><date-format :date="schedule.start_time" has-time/></small></ion-label>
          <ion-badge v-if="+(new Date(schedule.start_time)) > Date.now()" slot="end">Pending</ion-badge>
          <ion-badge v-if="+(new Date(schedule.start_time).getTime()) < Date.now() && +(new Date(schedule.end_time).getTime()) > Date.now()" slot="end" color="danger">Live</ion-badge>
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
    import {useStore} from '@/Store/store.ts';
  
    export default defineComponent({
      components: {
        IonAccordion,
        IonAccordionGroup,
        IonItem,
        IonLabel,
        IonBadge,
      },
      setup() {
        const store = useStore();
        const schedules = ref();

        const loadSchedules = async () => {
        const response = await axios.get(store.BASE_URL + "auction/schedules/");
        schedules.value = response.data;
        }

        loadSchedules()
        return { caretDownCircle, schedules };
      },
    });
  </script>