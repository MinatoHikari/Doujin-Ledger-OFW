<template>
  <div>
    <button
      type="button"
      class="inline-flex items-center rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-200/70"
      aria-label="打开导航菜单"
      :aria-expanded="open"
      @click="open = true"
    >
      <slot name="trigger" />
    </button>

    <!-- Teleport 在 Astro SSR 下与客户端水合结果不一致，等水合完成后再挂载 -->
    <template v-if="mounted">
      <Teleport to="body">
        <Transition name="dl-fade">
          <div
            v-if="open"
            class="fixed inset-0 z-40 bg-black/40"
            @click="open = false"
          />
        </Transition>
        <Transition name="dl-slide">
          <div
            v-if="open"
            class="fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] flex-col bg-white shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="站内导航"
          >
            <div
              class="flex items-center justify-between border-b border-slate-200 px-4 py-3"
            >
              <span class="text-base font-semibold text-slate-900">
                {{ SITE.title }}
              </span>
              <button
                type="button"
                class="-mr-2 rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="关闭菜单"
                @click="open = false"
              >
                <slot name="close" />
              </button>
            </div>
            <nav class="flex-1 overflow-y-auto overscroll-contain px-2 py-3">
              <div v-for="group in groups" :key="group.title" class="mb-4 last:mb-0">
                <div class="px-3 pb-1 text-xs font-semibold tracking-wide text-slate-400">
                  {{ group.title }}
                </div>
                <a
                  v-for="item in group.items"
                  :key="item.link"
                  :href="item.link"
                  class="block rounded-md px-3 py-2.5 text-sm leading-relaxed transition-colors"
                  :class="
                    isActive(item.link)
                      ? 'bg-blue-50 font-medium text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100'
                  "
                  @click="open = false"
                >
                  {{ item.text }}
                </a>
              </div>
            </nav>
          </div>
        </Transition>
      </Teleport>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { SIDEBAR, SITE, type SidebarItem } from "../../config";

const props = defineProps<{
  currentPage: string;
}>();

const open = ref(false);
const mounted = ref(false);

const groups = computed(() => {
  const out: { title: string; items: SidebarItem[] }[] = [];
  for (const item of SIDEBAR) {
    if (item.header) {
      out.push({ title: item.text, items: [] });
    } else if (out.length > 0) {
      out[out.length - 1].items.push(item);
    }
  }
  return out;
});

const isActive = (link?: string) => {
  if (!link) return false;
  const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
  return normalize(props.currentPage) === normalize(link);
};

watch(open, (value) => {
  document.body.style.overflow = value ? "hidden" : "";
});

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") open.value = false;
};

onMounted(() => {
  mounted.value = true;
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.dl-fade-enter-active,
.dl-fade-leave-active {
  transition: opacity 0.2s ease;
}
.dl-fade-enter-from,
.dl-fade-leave-to {
  opacity: 0;
}
.dl-slide-enter-active,
.dl-slide-leave-active {
  transition: transform 0.25s ease;
}
.dl-slide-enter-from,
.dl-slide-leave-to {
  transform: translateX(-100%);
}
</style>
