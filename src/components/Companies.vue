<script setup lang="ts">
const { data: companies } = await useFetch('/data/companies.json')
</script>

<template>
    <a v-for="company in companies" :href="company['link']" target="_blank">
        <img :src="company.logo" alt="company.name" class="logos"/>
    </a>
</template>
