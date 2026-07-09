import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        // CRA opened a browser automatically; under WSL that tends to fail
        // noisily. Run `npm run dev -- --open` when you want it.
        open: false,
    },
    build: {
        // Matches the old CRA behaviour: no sourcemap shipped to production.
        sourcemap: false,
        // CRA inlined assets under 10kB; Vite's default is 4kB. Keeping the old
        // threshold avoids turning the small logos into extra network requests.
        assetsInlineLimit: 10240,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
        css: false,
    },
})
