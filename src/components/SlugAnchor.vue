<template>
  <a :href="props.href" @click="aClick">
    <slot />
  </a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  href: string;
}>();
const aClick = () => {
  setTimeout(() => {
    window.scrollBy(0, -80);
  }, 0);
};
</script>
