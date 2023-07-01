<template>
  <ion-card>
    <img alt="Silhouette of mountains" src="@/images/img01.jpeg" />
    <ion-card-header>
      <ion-card-title>TOBACCO AUCTION SYSTEM</ion-card-title>
      <ion-card-subtitle>Online scheduling and autioning system</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      This is your one-stop-shop for viewing and booking, bidding and reviewing completed auction sessions.
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
  });
</script>