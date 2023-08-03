<template>
  <div>
    <camera :resolution="{ width: 375, height: 812 }" ref="camera" @initialized="onCameraInitialized"></camera>
    <div v-if="cameraInitialized">
      <button @click="snapshot">Create snapshot</button>
      <button @click="rotateCamera">Rotate Camera</button>
    </div>
    <div v-else>
      <p>Camera Initializing...</p>
    </div>
    <img :src="snapshotUrl" alt="Snapshot" v-if="snapshotUrl">
  </div>
</template>

<script lang="ts">
import Camera from "simple-vue-camera";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    Camera,
  },
  setup() {
    const camera = ref<InstanceType<typeof Camera>>();
    const snapshotUrl = ref<string>("");
    const isFrontCamera = ref<boolean>(true);
    const cameraInitialized = ref<boolean>(false);

    const onCameraInitialized = () => {
      // Start the camera after it has been initialized
      camera.value?.start();
      cameraInitialized.value = true;
    };

    const snapshot = async () => {
      const blob = await camera.value?.snapshot();

      if (blob) {
        // To show the screenshot with an image tag, create a url
        snapshotUrl.value = URL.createObjectURL(blob);
      }
    };

    const rotateCamera = () => {
      // Toggle between front and rear camera
      isFrontCamera.value = !isFrontCamera.value;
      camera.value?.switchCamera(isFrontCamera.value);
    };

    return {
      camera,
      snapshot,
      snapshotUrl,
      onCameraInitialized,
      rotateCamera,
      cameraInitialized,
    };
  },
});
</script>
