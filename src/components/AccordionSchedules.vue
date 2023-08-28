<template>
    <ion-accordion-group>
      <ion-accordion v-for="(schedule, index) in schedules" :value="schedule.auction_id" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
        <ion-item slot="header" color="light">
          <ion-label> {{schedule.venue}} <small><date-format :date="schedule.start_time" has-time/></small></ion-label>
          <ion-badge v-if="+(new Date(schedule.start_time)) > Date.now()" slot="end">Pending</ion-badge>
          <ion-badge v-if="+(new Date(schedule.start_time).getTime()) < Date.now() && +(new Date(schedule.end_time).getTime()) > Date.now()" slot="end" color="danger">Live</ion-badge>
        </ion-item>
        <div class="ion-padding" slot="content">
          <!--CreateAuctionStock></CreateAuctionStock-->
          <ion-button v-if="+(new Date(schedule.start_time).getTime()) < Date.now() && +(new Date(schedule.end_time).getTime()) > Date.now()" @click="goToSession(schedule.auction_id)">
            Join Live Session
            <ion-icon slot="end" :icon="hammerSharp"></ion-icon>
          </ion-button>
          <ion-button v-else-if="+(new Date(schedule.start_time).getTime()) > Date.now() && store.USERTYPE == 'Auctioneer'" @click="goToEditSession(schedule.auction_id)">
            View Session Stock
            <ion-icon slot="end" :icon="eyeOutline"></ion-icon>
          </ion-button>
        </div>
      </ion-accordion>
    </ion-accordion-group>
  </template>
  
  <script lang="ts">
    import { IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonBadge, IonButton, IonIcon } from '@ionic/vue';
    import { caretDownCircle, hammerSharp, eyeOutline } from 'ionicons/icons';
    import { defineComponent, ref } from 'vue';
    import axios, { Axios } from 'axios';
    import {useStore} from '@/Store/store.ts';
    import { useRouter } from 'vue-router';
    import CreateAuctionStock from '@/components/CreateAuctionStock.vue';
  
    export default defineComponent({
      name: 'CreateAuctionStock',
      components: {
        IonAccordion,
        IonAccordionGroup,
        IonItem,
        IonLabel,
        IonBadge,
        IonButton,
        IonIcon,
        CreateAuctionStock,
      },
      props:{
        auction_id: null,
      },
      setup(props) {

        const store = useStore();
        const schedules = ref();

        const loadSchedules = async () => {
        const response = await axios.get(store.BASE_URL + "auction/schedules/");
        schedules.value = response.data;
        }

        const goToSession = (id) => {
          console.log(id)
          store.AUCTION_ID = id;
          store.ROUTER.push({ name: 'Session', replace: true });
        }

        const goToEditSession = (id) => {
          console.log(id)
          store.AUCTION_ID = id;
          store.ROUTER.push({ name: 'Schedule', replace: true });
        }

        loadSchedules()
        return { caretDownCircle, schedules, hammerSharp, eyeOutline, goToSession, goToEditSession, store };
      },
    });
  </script>