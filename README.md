## Reproduction for [enhanced-resolve#421](https://github.com/webpack/enhanced-resolve/issues/421)

The following two processes I would expect to have the same result:

### node
To run the node example, you simply run:
```bash
node ./node.js
```

### enhanced-resolve
To run the enhanced-resolve example, you simply run:
```bash
# Install enhanced-resolve
npm install
# This will throw an error, as it cant resolve bad-import
node ./enhanced-resolve.js
```