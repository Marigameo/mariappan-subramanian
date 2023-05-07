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
        <span>
          {{ item.title }}
        </span>
      </div>
      <p class="font-thin">
        {{ item.description }}
        <span class="sr-only">about {{ item.title }} starter</span>
      </p>
      <div class="flex items-center">
        <a target="_blank" href="https://github.com/nuxt" class="p-2">
      <span class="sr-only">Nuxt GitHub organization</span>
      <svg class="w-5 h-5" alt=""><use xlink:href="#github" /></svg>
    </a>
    <svg class="w-5 h-5" alt=""><use xlink:href="#external" /></svg>
      </div>
    </article>
  </div>
</template>
