<template>
  <Button>
    <slot />
    <template #prefix>
      <slot name="prefix" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import { Button } from "flowbite-vue";
</script>

<style scoped></style>
