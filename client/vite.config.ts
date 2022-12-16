import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 8080,
        cors: true,
        watch: {
            ignored: ['!**/node_modules/**']
        }
    },
    envDir: '.',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@interfaces': path.resolve(__dirname, 'src/shared/interfaces'),
            '@components': path.resolve(__dirname, 'src/shared/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@store': path.resolve(__dirname, 'src/shared/store'),
            '@asserts': path.resolve(__dirname, 'src/asserts')
        }
    }
});
