import PluginTailwind from "bun-plugin-tailwind";

Bun.build({
  entrypoints: ["src/index.html"],
  outdir: "dist",
  target: "browser",
  sourcemap: "linked",
  minify: true,
  plugins: [PluginTailwind],
});
