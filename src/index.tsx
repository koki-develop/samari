import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

function start() {
  const element = document.getElementById("root");
  if (!element) {
    throw new Error("Root element not found");
  }

  const root = createRoot(element);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
