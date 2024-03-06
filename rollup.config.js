// Importing required plugins
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const postcss = require("rollup-plugin-postcss");
const { dts } = require("rollup-plugin-dts"); // Update the import statement

// Importing package.json to get configuration values
const packageJson = require("./package.json");

// Exporting the Rollup configuration
module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        module: "esnext",
      }),
      postcss(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()], // Use the dts function from the imported module
    external: [/\.(css|less|scss)$/],
  },
];
