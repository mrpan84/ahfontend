<template>
    <div>
      <camera :resolution="{ width: 375, height: 812 }" ref="camera" @initialized="onCameraInitialized"></camera>
      <button @click="snapshot">Create snapshot</button>
      <img :src="snapshotUrl" alt="Snapshot" v-if="snapshotUrl">
    </div>
  </template>
  
  <script lang="ts">
  import Camera from "simple-vue-camera";
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      const camera = ref<InstanceType<typeof Camera>>();
      const snapshotUrl = ref<string>("");
  
      const onCameraInitialized = () => {
        // Start the camera after it has been initialized
        camera.value?.start();
      };
  
      const snapshot = async () => {
        const blob = await camera.value?.snapshot();
  
        if (blob) {
          // To show the screenshot with an image tag, create a url
          snapshotUrl.value = URL.createObjectURL(blob);
        }
      };
  
      return {
        camera,
        snapshot,
        snapshotUrl,
        onCameraInitialized
      };
    }
  });
  </script>
  