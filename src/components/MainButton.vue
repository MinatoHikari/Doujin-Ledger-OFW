<template>
  <FwbButton>
    <slot />
    <template #prefix>
      <slot name="prefix" />
    </template>
  </FwbButton>
</template>

<script setup lang="ts">
import { FwbButton } from "flowbite-vue";
</script>

<style scoped></style>
