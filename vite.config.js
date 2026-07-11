import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({command}) => ({
    // Deployed as a GitHub Pages project site at
    // https://elistjames.github.io/my-portfolio/, so production asset URLs need
    // that prefix. Dev and preview stay at the root. (Change to '/' if this ever
    // moves to a custom domain or a user/org Pages site.)
    base: command === 'build' ? '/my-portfolio/' : '/',
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
        // Emit every asset as a file. Now that the images are small, inlining
        // them as base64 cost more than it saved: at Vite's 4kB default the
        // ProjectPage chunk grew 6.4 -> 17.3 kB gzipped, because base64 both
        // adds ~33% and compresses poorly. As separate files they are also
        // cacheable across deploys.
        assetsInlineLimit: 0,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.js',
        css: false,
    },
}))
