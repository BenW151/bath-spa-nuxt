// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: [
    "~/assets/main.css"
  ],
  app: {
    head: {
      title: 'Bath Spa',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'short description sentence' },
        { name: 'keywords', content: 'keyword, keyword, keyword' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/images/favicon/browserconfig.xml' },
        { property: 'og:title', content: 'Template - Short Tagline' },
        { property: 'og:description', content: 'Offering top-notch IT services and solutions tailored to your business needs. From cloud services to cybersecurity, weve got you covered.' },
        { property: 'og:image', content: 'https://www.yourwebsite.com/images/social-preview.png' },
        { property: 'og:url', content: 'https://www.yourwebsite.com/' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'canonical', href: 'https://benw151.github.io/template/index.html' },
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/images/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/images/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
    }
  }
})