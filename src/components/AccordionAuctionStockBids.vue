<template>
    <ion-accordion-group>
      <ion-accordion v-for="(s, index) in stock" :value="s.auction_stock_id" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
        <ion-item slot="header" color="light">
          <ion-label>{{s.club_name}} Club - {{s.bales}} bales - {{s.weight}}KGs <small><date-format :date="s.consignment_date" has-time/></small></ion-label>
          <ion-badge slot="end">Live</ion-badge>
        </ion-item>
        <div class="ion-padding" slot="content">
          <BidForm :auction_stock_id="s.auction_stock_id"></BidForm>
          <chip-stock-bid :auction_stock_id="1" :bid_id="1" :amount="1"></chip-stock-bid>
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
    import BidForm from "@/components/BidForm.vue";
    import ChipStockBid from "@/components/ChipStockBid.vue";
  
    export default defineComponent({
      components: {
        IonAccordion,
        IonAccordionGroup,
        IonItem,
        IonLabel,
        IonBadge,
        BidForm,
        ChipStockBid,
      },
      setup() {
        const store = useStore();
        const stock = ref();

        const loadStock = async () => {
        const response = await axios.get(store.BASE_URL + "auction/auctionstocks_by_auction_id/" + store.AUCTION_ID + "/");
        stock.value = response.data;
        }

        loadStock()
        return { caretDownCircle, stock };
      },
    });
  </script>