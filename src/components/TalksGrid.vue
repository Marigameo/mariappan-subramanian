<script setup>
const { data: talks } = await useFetch('/data/talks.json')

const featuredTalks = talks.value.filter(talk => talk.isFeatured);
</script>

<template>
  <div class="grid gap-8 grid-cols-1 md:grid-cols-2">
    <article
      v-for="item in featuredTalks"
      class="rounded-lg border-gray-800 border-[1px] px-4 py-4 bg-gradient-to-r from-[rgba(24,24,27,0.65)] backdrop-blur-sm to-transparent overflow-hidden hover:border-gray-500"
    >
      <div
        class="relative aspect-video -mx-4 -mt-4 overflow-hidden bg-gradient-to-r from-blue-400 to-teal-400 p-4 md:p-6"
      >
        <nuxt-picture
          class="object-cover"
          :img-attrs="{
            class: 'rounded'
          }"
          :src="item.image"
          sizes="sm:100vw md:50vw lg:685px"
          alt=""
        />
      </div>
      <a
        class="text-lg orange-text mt-4 flex items-center gap-2 hover:text-orange-300"
        :href="item.recording"
        target="_blank"
        rel="noopener"
      >
        {{ item.title }}
      </a>
      <p class="font-thin">{{ item.description }}</p>
      <TalksGridButtons :slides="item.slides" :recording="item.recording"/>
    </article>
  </div>
</template>

<style scoped>
.i-external {
  background-color: currentColor;
  mask: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5'/%3E%3C/svg%3E") no-repeat;
  mask-size: 100% 100%;
}
</style>
