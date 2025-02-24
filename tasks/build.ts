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
  define: Object.fromEntries(
    Object.entries(process.env)
      .filter(([key]) => key.startsWith("BUN_PUBLIC_"))
      .map(([key, value]) => [`process.env.${key}`, JSON.stringify(value)]),
  ),
});

// Copy public directory
await $`cp -r public dist`;
