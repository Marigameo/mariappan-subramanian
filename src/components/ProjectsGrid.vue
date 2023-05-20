<script setup>
const { data: items } = await useFetch('/data/projects.json')

const featuredProjects = items.value.filter(item => item.isFeatured);
</script>

<template>
  <div class="grid gap-8 grid-cols-1 md:grid-cols-2">
    <article
      v-for="item in featuredProjects"
      class="rounded-lg border-[2px] px-4 py-4 bg-gradient-to-r from-[rgba(24,24,27,0.65)] backdrop-blur-sm to-transparent border border-gray-800 hover:border-gray-500 hover:shadow-lg transition duration-300 ease-in-out"
    >
      <div class="text-lg orange-text flex flex-row gap-2 items-center hover:text-orange-300">
        <a :href="item['live']" target="_blank">
          {{ item.title }}
        </a>
      </div>
      <p class="font-thin">
        {{ item.description }}
        <span class="sr-only">about {{ item.title }} starter</span>
      </p>
      <div class="flex items-center">
        <a target="_blank" :href="item['github']" class="p-2" v-if="item.github">
      <span class="sr-only">Nuxt GitHub organization</span>
      <svg class="w-5 h-5" alt=""><use xlink:href="#github" /></svg>
    </a>
    <a :href="item['live']" target="_blank">
      <svg class="w-5 h-5" alt=""><use xlink:href="#external" /></svg>
    </a>
      </div>
    </article>
  </div>
</template>
