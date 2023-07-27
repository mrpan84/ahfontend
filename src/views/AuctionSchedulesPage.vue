<template>
  <!--Navigation></Navigation-->
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <!--ion-title>Auction Schedules </ion-title-->
        <BreadCrumbsSchedules></BreadCrumbsSchedules>
        <AddAuction v-if="store.USERTYPE == 'Auctioneer'"></AddAuction>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }} </ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <AccordionSchedules/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import AccordionSchedules from '@/components/AccordionSchedules.vue';
import BreadCrumbsSchedules from '@/components/BreadCrumbsSchedules.vue';
import AddAuction from '@/components/AddAuction.vue';
import {useStore} from '@/Store/store.ts';
import Navigation from '@/components/Navigation.vue';
const store = useStore();
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
