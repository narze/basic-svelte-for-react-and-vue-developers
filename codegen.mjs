//import type { AstroConfig, AstroIntegration } from "astro"
// import {
// 	EnumChangefreq,
// 	LinkItem as LinkItemBase,
// 	simpleSitemapAndIndex,
// 	SitemapItemLoose,
// } from 'sitemap';
// import { fileURLToPath } from 'url';
// import { ZodError } from 'zod';

// import { generateSitemap } from './generate-sitemap.js';
// import { Logger } from './utils/logger.js';
// import { validateOptions } from './validate-options.js';

// export type ChangeFreq = EnumChangefreq;
// export type SitemapItem = Pick<
// 	SitemapItemLoose,
// 	'url' | 'lastmod' | 'changefreq' | 'priority' | 'links'
// >;
// export type LinkItem = LinkItemBase;

// export type SitemapOptions =
// 	| {
// 			filter?(page: string): boolean;
// 			customPages: (opts) => { console.log(// 			customPages: ) },
// 			canonicalURL: (opts) => { console.log(// 			canonicalURL: ) },

// 			i18n: (opts) => { console.log(// 			i18n: ) },
// 				defaultLocale: string;
// 				locales: Record<string, string>;
// 			};
// 			// number of entries per sitemap file
// 			entryLimit: (opts) => { console.log(// 			entryLimit: ) },

// 			// sitemap specific
// 			changefreq: (opts) => { console.log(// 			changefreq: ) },
// 			lastmod: (opts) => { console.log(// 			lastmod: ) },
// 			priority: (opts) => { console.log(// 			priority: ) },

// 			// called for each sitemap item just before to save them on disk, sync or async
// 			serialize?(item: SitemapItem): SitemapItem | Promise<SitemapItem>;
// 	  }
// 	| undefined;

// function formatConfigErrorMessage(err: ZodError) {
// 	const errorList = err.issues.map((issue) => ` ${issue.path.join('.')}  ${issue.message + '.'}`);
// 	return errorList.join('\n');
// }

import ejs from "ejs"
import * as fs from "node:fs"

const PKG_NAME = "codegen"
const OUTFILE = "sitemap-index.xml"

const createPlugin = () => {
  let config
  return {
    name: PKG_NAME,

    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg
        console.log("astro:config:done")
      },

      "astro:build:done": async ({ dir, pages }) => {
        // let pageUrls = pages.map((p) => {
        //   const path = finalSiteUrl.pathname + p.pathname
        //   return new URL(path, finalSiteUrl).href
        // })
        console.log("astro:build:done")

        console.log({ dir, pages })
      },

      "astro:server:setup": (opts) => {
        console.log("astro:server:setup")
      },
      "astro:server:start": (opts) => {
        console.log("astro:server:start")
      },
      "astro:config:setup": async (opts) => {
        console.log("astro:config:setup")

        const components = [
          "component-structure",
          "state-management",
          "computed-state",
        ]

        // Generate astro pages for each component & language
        const pages = components.flatMap((component) => [
          {
            component,
            framework: "react",
            ext: "jsx",
            codeLanguage: "javascript",
          },
          {
            component,
            framework: "vue",
            ext: "vue",
            codeLanguage: "vue",
          },
          {
            component,
            framework: "svelte",
            ext: "svelte",
            codeLanguage: "svelte",
          },
        ])

        await Promise.all(
          pages.map(({ component, framework, ext, codeLanguage }) => {
            return new Promise((resolve, reject) => {
              const data = { component, framework, ext, codeLanguage }
              const options = {}

              ejs.renderFile(
                "./astro-page-template.ejs",
                data,
                options,
                function (err, str) {
                  // str => Rendered HTML string
                  console.log({ str })
                  fs.mkdirSync(`./src/pages/${component}`, { recursive: true })
                  fs.writeFileSync(
                    `./src/pages/${component}/${framework}.astro`,
                    str
                  )

                  resolve()
                }
              )
            })
          })
        )
      },
      "astro:server:done": () => {
        console.log("astro:server:done")
      },
      "astro:build:start": (opts) => {
        console.log("astro:build:start")
      },
      "astro:build:setup": (opts) => {
        console.log("astro:build:setup")
      },
      "astro:build:ssr": (opts) => {
        console.log("astro:build:ssr")
      },
    },
  }
}

export default createPlugin
