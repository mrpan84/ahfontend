<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Live - {{store.LIVE_SESSION.venue}} Auction Sessions </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }} </ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <accordion-auction-stock></accordion-auction-stock>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import AccordionAuctionStock from "@/components/AccordionAuctionStock.vue";
import { defineComponent, ref } from 'vue';
import axios, { Axios } from 'axios';
import Navigation from '@/components/Navigation.vue';
import {useStore} from '@/Store/store.ts';
const session = ref();
const store = useStore();
const loadSession = async () => {
  const response = await axios.get(store.BASE_URL + "auction/auctions/" + store.AUCTION_ID + "/");
  store.LIVE_SESSION = response.data;
}

loadSession();

</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
