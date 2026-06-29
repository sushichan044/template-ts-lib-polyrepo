import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: ["pnpm-lock.yaml", "CHANGELOG.md"],
    jsdoc: {
      commentLineStrategy: "multiline",
    },
    sortImports: true,
  },
  lint: {
    jsPlugins: ["vite-plus/oxlint-plugin"],
    categories: {
      correctness: "error",
      nursery: "error",
      perf: "error",
    },
    env: {
      node: true,
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      "import/consistent-type-specifier-style": "error",
      "typescript/array-type": ["error", { default: "array-simple" }],
      "typescript/ban-ts-comment": "error",
      "typescript/consistent-type-assertions": "error",
      "typescript/consistent-type-imports": "error",
      "typescript/no-misused-promises": "error",
      "typescript/no-explicit-any": "error",
      "typescript/no-unnecessary-type-assertion": "error",
      "typescript/no-unnecessary-type-conversion": "error",
      "typescript/no-unsafe-call": "error",
      "typescript/non-nullable-type-assertion-style": "error",
      "node/no-path-concat": "error",
      "unicorn/custom-error-definition": "error",
      "unicorn/switch-case-braces": "error",
      "typescript/switch-exhaustiveness-check": "error",
      "oxc/branches-sharing-code": "error",
      "unicorn/consistent-assert": "error",
      "typescript/no-confusing-void-expression": "error",
      "unicorn/prefer-date-now": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    overrides: [
      {
        files: ["**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        rules: {
          // Vitest fixtures require an object-destructuring first parameter; allow `({}, use) => {}`.
          "no-empty-pattern": ["error", { allowObjectPatternsAsParameters: true }],
        },
      },
    ],
  },
  pack: {
    attw: { level: "error", profile: "esm-only" },
    clean: true,
    dts: {
      tsgo: true,
    },
    entry: [],
    fixedExtension: true,
    format: "esm",
    fromVite: true,
    minify: "dce-only",
    nodeProtocol: true,
    outDir: "dist",
    publint: true,
    sourcemap: false,
    treeshake: true,
    unused: true,
  },
  test: {
    benchmark: {
      include: ["**/*.{bench,benchmark}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    },
    passWithNoTests: true,
    typecheck: {
      enabled: true,
    },
  },
});
