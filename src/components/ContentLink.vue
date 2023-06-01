<template>
  <div class="w-full grid grid-cols-2 gap-4">
    <div class="col-span-1">
      <Button
        v-if="props.prev"
        @click="nav(props.prev)"
        class="w-full text-left"
        gradient="cyan-blue"
      >
        <slot name="left" />
        <template #prefix>
          <slot name="leftPrefix"></slot>
        </template>
      </Button>
    </div>
    <div class="col-span-1">
      <Button
        v-if="props.next"
        @click="nav(props.next)"
        class="w-full text-right"
        gradient="cyan-blue"
      >
        <slot name="right" />
        <template #prefix>
          <slot name="rightPrefix"></slot>
        </template>
        <template #suffix>
          <slot name="rightSuffix"></slot>
        </template>
      </Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "flowbite-vue";

const props = defineProps<{
  prev: string;
  next: string;
}>();

const nav = (link: string) => {
  window.location.href = link;
};
</script>

<style scoped>
:deep(button > span) {
  width: 100%;
}
</style>
