<script setup lang="ts">
const { data: items } = await useFetch('/data/talks.json')
</script>

<template>
    <Html class="bg-black text-white" />
  <div class="relative max-w-6xl w-full mx-auto px-6">
    <SpriteMap />
    <Spotlight class="z-[1]" />
    <div class="z-[2] relative flex flex-col min-h-screen">
      <TheHeader class="xl:mt-4" />
      <section class="s1">
      <div class="main-container mt-6">
    <template v-for="item in items" class="mb-4 block">
      <div class="p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-600 dark:border-gray-400 mb-6">
        <a :href="item['slides']" target="_blank">
          <h5 class="mb-2 text-2xl tracking-tight orange-text">{{ item.title }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-200 dark:text-gray-400">{{ item.description }}</p>
        <a :href="item['recording']" target="_blank" class="inline-flex font-medium items-center text-blue-200 hover:underline" v-if="item['recording']">
            Recording
            <svg class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
            </svg>
        </a>
        <p class="yellow-text mt-2"><i>{{ item.date }}</i><span class="green-text ml-4">{{ item.city }}</span></p>
      </div>
    </template>
    </div>
    </section>
    </div>
    <span class="flex-grow" />
    <TheFooter class="mt-12" />
  </div>
</template>