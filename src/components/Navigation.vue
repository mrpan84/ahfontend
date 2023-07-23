<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-content>
      <ion-list id="inbox-list">
        <ion-list-header>{{ store.USERTYPE }}</ion-list-header>
        <ion-note>{{ store.USER.fname }}</ion-note>

        <ion-menu-toggle :auto-hide="false" v-for="(p, i) in appPages" :key="i">
          <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" :detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
            <ion-icon aria-hidden="true" slot="start" :ios="p.iosIcon" :md="p.mdIcon"></ion-icon>
            <ion-label>{{ p.title }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>

      <ion-list id="labels-list">
        <ion-list-header>Labels</ion-list-header>

        <ion-item v-for="(label, index) in labels" lines="none" :key="index">
          <router-link :to="{ name: 'Signin', replace: true}">
            <div class="label-wrapper">
              <ion-icon aria-hidden="true" slot="start" :ios="logOutOutline" :md="logOutOutline"></ion-icon>
              <ion-label>{{ label }}</ion-label>
            </div>
          </router-link>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>
<script setup lang="ts">
import {
  IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane,
} from '@ionic/vue';
import { ref, watch } from 'vue';
import {
  archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, calendarOutline, calendarSharp, cameraOutline, hammerOutline, logOutOutline,
  logOutSharp, readerOutline, readerSharp, settingsOutline, settingsSharp, leafOutline, leafSharp, hammerSharp, cameraSharp,
  paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, home, homeOutline, homeSharp,
  bagHandleOutline, bagHandleSharp, timeOutline, timeSharp, giftOutline, giftSharp,} from 'ionicons/icons';
import { auctioneerPages, buyerPages, farmerPages, adminPages, guestPages } from '@/JS/';
import { useRouter } from '@/router/index.ts';
import { useStore } from '@/Store/store.ts';

const router = useRouter();
const store = useStore();


const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
  selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
</script>
<style scoped>

</style>