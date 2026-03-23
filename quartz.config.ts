import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
// ============================================================
// quartz.config.ts — Detroit Techno Theme (JP Edition)
// theme: {} ブロックを既存の quartz.config.ts に置き換えてください。
// ============================================================
 
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MessingAbout  WithTechno",        // ← サイト名
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    analytics: null,
    locale: "ja-JP",
    baseUrl: "your-domain.com",     // ← 自分のドメインに変更
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
 
    // ----------------------------------------------------------
    // THEME
    // ----------------------------------------------------------
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
 
      typography: {
        // Quartz の typography はフォールバック用。
        // 実際の使い分けは custom.scss の CSS 変数で制御します。
        header: "Zen Kaku Gothic New",
        body:   "Noto Sans JP",
        code:   "DM Mono",
      },
 
      colors: {
        // --------------------------------------------------------
        // Light Mode — Cold Steel
        // --------------------------------------------------------
        lightMode: {
          light:         "#e8eaed",   // ページ背景
          lightgray:     "#c8cdd8",   // サイドバー・ボーダー
          gray:          "#8090a8",   // 薄いボーダー
          darkgray:      "#2a3040",   // 本文テキスト
          dark:          "#0d1b2a",   // 見出し
          secondary:     "#1a5276",   // リンク・アクティブ
          tertiary:      "#2a6496",   // ホバー
          highlight:     "rgba(42, 100, 150, 0.12)",
          textHighlight: "#2a6496",
        },
 
        // --------------------------------------------------------
        // Dark Mode — Detroit Night
        // --------------------------------------------------------
        darkMode: {
          light:         "#08080f",   // ページ背景
          lightgray:     "#0e1420",   // サイドバー背景
          gray:          "#1a2535",   // ボーダー
          darkgray:      "#7a8fa0",   // 本文テキスト
          dark:          "#c8d8e8",   // 見出し
          secondary:     "#00b4d8",   // リンク（ネオンシアン）
          tertiary:      "#0090b0",   // ホバー
          highlight:     "rgba(0, 180, 216, 0.10)",
          textHighlight: "#00b4d8",
        },
      },
    },
  },
    plugins: {
      transformers: [
        Plugin.FrontMatter(),
        Plugin.CreatedModifiedDate({
          priority: ["frontmatter", "git", "filesystem"],
        }),
        Plugin.SyntaxHighlighting({
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
          keepBackground: false,
        }),
        Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
        Plugin.GitHubFlavoredMarkdown(),
        Plugin.TableOfContents(),
        Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
        Plugin.Description(),
        Plugin.Latex({ renderEngine: "katex" }),
      ],
      filters: [Plugin.RemoveDrafts()],
      emitters: [
        Plugin.AliasRedirects(),
        Plugin.ComponentResources(),
        Plugin.ContentPage(),
        Plugin.FolderPage(),
        Plugin.TagPage(),
        Plugin.ContentIndex({
          enableSiteMap: true,
          enableRSS: true,
        }),
        Plugin.Assets(),
        Plugin.Static(),
        Plugin.Favicon(),
        Plugin.NotFoundPage(),
        // Comment out CustomOgImages to speed up build time
        Plugin.CustomOgImages(),
      ],
    },
  }

export default config

    /* back up
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    }, */
