import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({ tsDecorators: true })],
    server: {
        port: 3000,
        host: true,
        watch: {
            usePolling: true,
        },
    },
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"),
        },
    },
});
