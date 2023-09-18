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
        <div class="flex items-center">
          <a :href="item['slides']" target="_blank">
            <h3 class="text-lg orange-text">{{ item.title }}</h3>
          </a>
            <svg class="w-4 h-4 ml-2" alt=""><use xlink:href="#external" /></svg>
        </div>
        <p>{{ item.description }}</p>
        <a :href="item['recording']" target="_blank" class="blue-text my-2 flex items-center underline" v-if="item['recording']">Recording <svg class="w-4 h-4 ml-2" alt=""><use xlink:href="#external" /></svg></a>
        <p class="yellow-text"><i>{{ item.date }}</i><span class="green-text ml-4">{{ item.city }}</span></p>
        <hr class="mt-4"/>
    </template>
    </div>
    </section>
    </div>
    <span class="flex-grow" />
    <TheFooter class="mt-12" />
  </div>
</template>