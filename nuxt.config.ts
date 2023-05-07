export default defineNuxtConfig({
  srcDir: 'src',
  typescript: { strict: true, typeCheck: true, shim: false },
  nitro: {
    prerender: {
      routes: ['/', '/data/blogs.json', '/data/companies.json', '/data/talks.json', '/data/projects.json']
    }
  },
  image: {
    screens: {
      cover: 685,
      cover2x: 1370
    }
  },
  css: ['~/assets/fonts.css', '~/assets/main.css'],
  experimental: {
    noScripts: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    // TODO: relative url support: https://github.com/GoogleChromeLabs/critters/issues/115
    // '@nuxtjs/critters',
    '@nuxt/image-edge',
    '@nuxtjs/plausible',
    '@kevinmarrec/nuxt-pwa',
    '@nuxtjs/fontaine',
    '~/modules/purge-comments',
    '~/modules/style-inlining',
  ],
  fontMetrics: {
    // We inline styles ourselves
    inline: false,
  },
  pwa: {
    meta: {
      name: 'Mariappan Subramanian - Personal portfolio',
      description: 'Mariappan Subramanian is a senior frontend engineer at Freshworks. He is also a tech speaker, blogger and teacher by passion.',
      theme_color: '#000',
      ogHost: 'https://mariappan.netlify.app/',
      ogImage: {
        path: '/social-preview.png',
        width: 1280,
        height: 640
      },
      twitterCard: 'summary_large_image',
      twitterCreator: '@nuxt_js',
      twitterSite: '@nuxt_js',
    },
    manifest: {
      name: 'Mariappan Subramanian - Personal portfolio',
      background_color: '#000',
      short_name: 'Mariappan',
      theme_color: '#000',
      description: 'Mariappan Subramanian is a senior frontend engineer at Freshworks. He is also a tech speaker, blogger and teacher by passion.',
    },
    workbox: false,
  },
  app: {
    head: {
      link: ['Light', 'Regular', 'Bold'].map(weight => ({
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: '',
        href: `/fonts/RoobertPRO-${weight}.woff2`,
      })),
    }
  }
})
