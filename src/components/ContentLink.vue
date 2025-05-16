<template>
  <div class="w-full grid grid-cols-2 gap-4">
    <div class="col-span-1">
      <MainButton
        v-if="props.prev"
        @click="nav(props.prev)"
        class="w-full text-left flex flex-nowrap"
        variant="primary"
      >
        <slot name="left" />
        <template #prefix>
          <slot name="leftPrefix"></slot>
        </template>
      </MainButton>
    </div>
    <div class="col-span-1">
      <MainButton
        v-if="props.next"
        @click="nav(props.next)"
        class="w-full text-right flex flex-nowrap"
        variant="primary"
      >
        <slot name="right" />
        <template #prefix>
          <slot name="rightPrefix"></slot>
        </template>
        <template #suffix>
          <slot name="rightSuffix"></slot>
        </template>
      </MainButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MainButton from './MainButton.vue';

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
