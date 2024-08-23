import { fileURLToPath } from 'node:url'
import EnhancedResolve from 'enhanced-resolve';

const resolve =  EnhancedResolve.create.sync();

const __filename = fileURLToPath(import.meta.url)

console.info(resolve(__filename, 'good-import'));
// Resolves to "node_modules/good-import/index.js"

console.info(resolve(__filename, 'bad-import'));
// Should resolve to "node_modules/bad-import/index.js"
