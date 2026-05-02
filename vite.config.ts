import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/",
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                "lessons-index": resolve(__dirname, "lessons/index.html"),
                "lesson-words-in-context": resolve(
                    __dirname,
                    "lessons/words-in-context/index.html",
                ),
                "lesson-inferences": resolve(
                    __dirname,
                    "lessons/inferences/index.html",
                ),
            },
        },
    },
});
