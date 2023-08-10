<template>
    <ion-breadcrumbs>
      <ion-breadcrumb href="#home">
        <ion-icon slot="start" :icon="home"></ion-icon>
        Home
      </ion-breadcrumb>
      <ion-breadcrumb href="#sessions">
        <ion-icon slot="start" :icon="readerOutline"></ion-icon>
        Sessions
      </ion-breadcrumb>
    </ion-breadcrumbs>
  </template>
  
  <script lang="ts">
    import { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { camera, film, flash, home, basket, readerOutline} from 'ionicons/icons';
  
    export default defineComponent({
      components: { IonBreadcrumb, IonBreadcrumbs, IonIcon, IonLabel },
      setup() {
        return { camera, film, flash, home, basket, readerOutline};
      },
    });
  </script>