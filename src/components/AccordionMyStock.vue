<template>
    <ion-accordion-group>
      <ion-accordion v-for="(s, index) in stock" :value="s.auction_stock_id" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
        <ion-item slot="header" color="light">
          <ion-label>{{ s.auction.venue }} - {{s.reg_number.grower.club_name}} <small><date-format :date="s.reg_number.consignment_date" has-time/></small></ion-label>
          <ion-badge slot="end">Live</ion-badge>
          <ion-badge slot="end">Join</ion-badge>
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
        const stock = ref();

        const loadStock = async () => {
        const response = await axios.get("http://192.168.114.162:8000/api/v1/auction/auctionstocks/");
        stock.value = response.data;
        console.log(response.data);
        }

        loadStock()
        return { caretDownCircle, stock };
      },
    });
  </script>