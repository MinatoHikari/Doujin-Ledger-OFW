<template>
  <div class="relative inline-flex items-center">
    <button
      type="button"
      class="inline-flex items-center"
      :data-dropdown-offset-skidding="props.offsetSkidding"
      :data-dropdown-offset-distance="props.offsetDistance"
      data-dropdown-toggle="dropdownNav"
      data-dropdown-placement="bottom"
    >
      <slot name="trigger" />
    </button>
    <div
      id="dropdownNav"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200 max-h-[500px] overflow-auto"
      >
        <li v-for="(i, index) in SIDEBAR" :key="index" class="border-b border-slate-200 last:border-b-0">
          <a
            href="#"
            :class="[
              'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white',
              !i.link ? 'text-slate-400' : '',
            ]"
            @click="(e) => onClick(i.link, e)"
          >
            <span class="flex items-center">
              <span v-if="!i.link" class="mr-1">
                <slot name="anchor" />
              </span>
              {{ i.text }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Dropdown } from "flowbite";
import { SIDEBAR } from "../../config";

interface Props {
  offsetSkidding?: number;
  offsetDistance?: number;
}

const props = withDefaults(defineProps<Props>(), {
  offsetSkidding: 20,
  offsetDistance: 20,
});

const onClick = (link?: string, e?: MouseEvent) => {
  if (!link) {
    e?.preventDefault();
    return;
  } else window.location.href = link;
};

onMounted(() => {
  // 初始化 Flowbite Dropdown
  const triggerEl = document.querySelector(
    '[data-dropdown-toggle="dropdownNav"]'
  ) as HTMLElement;
  const targetEl = document.getElementById("dropdownNav");

  if (triggerEl && targetEl) {
    new Dropdown(targetEl, triggerEl, {
      placement: "bottom",
      offsetSkidding: props.offsetSkidding,
      offsetDistance: props.offsetDistance,
      delay: 300,
      onHide: () => {
        console.log("dropdown has been hidden");
      },
      onShow: () => {
        console.log("dropdown has been shown");
      },
    });
  }
});
</script>
