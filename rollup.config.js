import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { readFileSync } from "fs";

const packageJson = JSON.parse(readFileSync("./package.json", "utf8"));

export default [
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
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ 
        tsconfig: "./tsconfig.json",
        importHelpers: false,
        noEmitHelpers: true,
        declaration: false,
        declarationDir: undefined
      }),
      {
        name: 'scss',
        transform(code, id) {
          if (id.endsWith('.scss') || id.endsWith('.css')) {
            return {
              code: 'export default {}',
              map: null
            };
          }
        }
      }
    ],
    external: ['react', 'react-dom']
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/, /\.css$/]
  },
];