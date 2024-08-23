import { fileURLToPath } from 'node:url'

console.info(fileURLToPath(await import.meta.resolve('good-import')));
console.info(fileURLToPath(await import.meta.resolve('bad-import')));
