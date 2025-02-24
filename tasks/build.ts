import { $ } from "bun";
import PluginTailwind from "bun-plugin-tailwind";

// Clear dist directory
await $`rm -rf dist`;

// Build
Bun.build({
  entrypoints: ["src/index.html"],
  outdir: "dist",
  target: "browser",
  sourcemap: "linked",
  minify: true,
  plugins: [PluginTailwind],
});

// Copy public directory
await $`cp -r public dist`;
