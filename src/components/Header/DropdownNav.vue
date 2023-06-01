<template>
  <dropdown>
    <template #trigger> <slot name="trigger" /> </template>
    <list-group class="h-[500px]" style="overflow: auto">
      <list-group-item
        v-for="(i, index) in SIDEBAR"
        :key="index"
        :class="i.link ? '' : 'text-slate-400'"
        @click="(e) => onClick(i.link, e)"
      >
        <span v-if="!i.link" class="mr-1">
          <slot name="anchor" />
        </span>
        {{ i.text }}
      </list-group-item>
    </list-group>
  </dropdown>
</template>

<script setup lang="ts">
import { Dropdown, ListGroup, ListGroupItem, Button } from "flowbite-vue";
import { SIDEBAR } from "../../config";

const onClick = (link?: string, e: MouseEvent) => {
  if (!link) {
    e.preventDefault();
    return;
  } else window.location.href = link;
};
</script>
