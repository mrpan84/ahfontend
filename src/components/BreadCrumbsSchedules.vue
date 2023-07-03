<template>
    <ion-breadcrumbs>
      <ion-breadcrumb href="#home">
        <ion-icon slot="start" :icon="home"></ion-icon>
        Home
      </ion-breadcrumb>
      <ion-breadcrumb href="#auctions">
        <ion-icon slot="start" :icon="hammer"></ion-icon>
        Auctions
      </ion-breadcrumb>
      <ion-breadcrumb href="#schedules">
        <ion-icon slot="start" :icon="time"></ion-icon>
        Schedules
      </ion-breadcrumb>
    </ion-breadcrumbs>
  </template>
  
  <script lang="ts">
    import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { camera, film, flash, home, hammer, time } from 'ionicons/icons';
  
    export default defineComponent({
      components: { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel },
      setup() {
        return { camera, film, flash, home, hammer, time };
      },
    });
  </script>