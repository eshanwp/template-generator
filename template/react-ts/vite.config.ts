import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        plugins: [react(), tsconfigPaths()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/app/styles/variables.scss";@import "./src/app/styles/mixin.scss";',
                },
            },
        },
        server: {
            proxy: {
                [env.VITE_CONTEXT_PATH]: {
                    target: env.VITE_API,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(env.VITE_CONTEXT_PATH, ''),
                },
            },
        },
    };
});
