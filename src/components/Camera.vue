<template>
  <div class="camera-container">
    <camera :resolution="{ width: 375, height: 812 }" ref="camera" @initialized="onCameraInitialized"></camera>
    <div v-if="cameraInitialized" class="controls">
      <button @click="snapshot">Create Snapshot</button>
      <button @click="rotateCamera">Rotate Camera</button>
    </div>
    <div v-else class="loading">
      <p>Camera Initializing...</p>
    </div>
    <img :src="snapshotUrl" alt="Snapshot" v-if="snapshotUrl" class="snapshot-image">
  </div>
</template>

<script setup>
import Camera from "simple-vue-camera";
import { ref } from "vue";

const camera = ref();
const snapshotUrl = ref("");
const isFrontCamera = ref(true);
const cameraInitialized = ref(false);

const onCameraInitialized = () => {
  camera.value?.start();
  cameraInitialized.value = true;
};

const snapshot = async () => {
  const blob = await camera.value?.snapshot();
  if (blob) {
    snapshotUrl.value = URL.createObjectURL(blob);
  }
};

const rotateCamera = () => {
  isFrontCamera.value = !isFrontCamera.value;
  camera.value?.switchCamera(isFrontCamera.value);
};
</script>

<style>
.camera-container {
  position: relative;
}

.controls {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.snapshot-image {
  display: block;
  margin-top: 20px;
  max-width: 100%;
  height: auto;
}
</style>
