import { defineConfig } from "astro/config"
import nodejs from "@astrojs/node"
import preact from "@astrojs/preact"
import react from "@astrojs/react"
import svelte from "@astrojs/svelte"
import vue from "@astrojs/vue"
import solid from "@astrojs/solid-js"

import tailwind from "@astrojs/tailwind"
import codegen from "./codegen.mjs"

// https://astro.build/config
export default defineConfig({
  experimental: { integrations: true },
  // Enable many frameworks to support all different kinds of components.
  integrations: [
    preact(),
    react(),
    svelte(),
    vue(),
    solid(),
    tailwind(),
    codegen(),
  ],
  adapter: nodejs(),
})
