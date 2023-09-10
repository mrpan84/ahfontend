<template>
    <ion-accordion-group>
      <ion-accordion v-for="(consignment, index) in consignments" :value="consignment.reg_number" :toggle-icon="caretDownCircle" toggle-icon-slot="start">
        <ion-item slot="header" color="light">
          <ion-label> {{consignment.grower.club_name}} <small><date-format :date="consignment.consignment_date" has-time/></small></ion-label>
          <ion-badge slot="end">Pending</ion-badge>
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
        const consignments = ref();

        const loadConsignments = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/auction/bids/");
        consignments.value = response.data;
        console.log(response.data);
        }

        loadConsignments()
        return { caretDownCircle, consignments };
      },
    });
  </script>