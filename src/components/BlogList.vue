<script setup lang="ts">
const { data: items } = await useFetch('/data/blogs.json')
</script>

<template>
  <div class="grid gap-8 grid-cols-1 md:grid-cols-2 underline">
    <a v-for="item in items" :href="item['link']" target="_blank" class="flex items-center"><p>{{ item.title }}</p><svg class="w-4 h-4 ml-2" alt=""><use xlink:href="#external" /></svg></a>
  </div>
</template>
