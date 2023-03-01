<template>
  <div class="frame">
    <img class="frame-photo" :src="`${image.thumbnailURL}`" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Image } from '@/types'

@Component
export default class Frame extends Vue {
  @Prop() private image!: Image
}
</script>

<style scoped>
.frame {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}
.frame:hover {
  cursor: pointer;
}
.frame-photo {
  max-width: 100%;
  max-height: 100%;
}
</style>
