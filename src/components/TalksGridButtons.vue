<script setup>
const props = defineProps({
  recording: String,
  slides: String
})

</script>

<template>
  <div class="grid gap-3 text-xs mt-4 grid-cols-2">
    <a
      v-if="recording !== ''"
      target="_blank"
      :href="recording"
      class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
    >
    <svg class="w-4 h-4" alt=""><use xlink:href="#external" /></svg>
      Recording
    </a>
    <a
      v-if="slides !== ''"
      target="_blank"
      :href="slides"
      class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
    >
    <svg class="w-4 h-4" alt=""><use xlink:href="#external" /></svg>
      Slides
    </a>
  </div>
</template>

