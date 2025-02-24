import { cp, exists, rmdir } from "node:fs/promises";
import PluginTailwind from "bun-plugin-tailwind";

// Clear dist directory
if (await exists("dist")) {
  await rmdir("dist", { recursive: true });
}

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
await cp("public", "dist", { recursive: true });
