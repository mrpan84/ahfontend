<template>
    <ion-breadcrumbs>
      <ion-breadcrumb href="#home">
        <ion-icon slot="start" :icon="home"></ion-icon>
        Home
      </ion-breadcrumb>
      <ion-breadcrumb href="#history">
        <ion-icon slot="start" :icon="timesOutline"></ion-icon>
        History
      </ion-breadcrumb>
    </ion-breadcrumbs>
  </template>
  
  <script lang="ts">
    import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { camera, film, flash, home, basket, hammerOutline} from 'ionicons/icons';
  
    export default defineComponent({
      components: { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel },
      setup() {
        return { camera, film, flash, home, basket, timesOutline};
      },
    });
  </script>