<template>
  <FwbDropdown>
    <template #trigger> <slot name="trigger" /> </template>
    <FwbListGroup class="h-[500px]" style="overflow: auto">
      <FwbListGroupItem
        v-for="(i, index) in SIDEBAR"
        :key="index"
        :class="i.link ? '' : 'text-slate-400'"
        @click="(e) => onClick(i.link, e)"
      >
        <span v-if="!i.link" class="mr-1">
          <slot name="anchor" />
        </span>
        {{ i.text }}
      </FwbListGroupItem>
    </FwbListGroup>
  </FwbDropdown>
</template>

<script setup lang="ts">
import { FwbDropdown, FwbListGroup, FwbListGroupItem } from "flowbite-vue";
import { SIDEBAR } from "../../config";

const onClick = (link?: string, e: MouseEvent) => {
  if (!link) {
    e.preventDefault();
    return;
  } else window.location.href = link;
};
</script>
