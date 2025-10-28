# AGENTS.md

## Project Context

### Overview

TBD

### Architecture

TBD

### Key Features

TBD

### Design Decisions

TBD

---

## Development Environment

### Runtime & Package Manager

- **Node.js**: v24 (specified in `.node-version`)
- **Package Manager**: pnpm v10.14.0
- **Minimum Node Version**: >=20.19.0 (engines in `package.json`)

### TypeScript Configuration

- **Base Config**: `@virtual-live-lab/tsconfig/base`
- **Module System**: ESM with `preserve` mode
- **Module Resolution**: bundler
- **Types**: node
- **Plugins**: eslint-plugin-import-access for TypeScript plugin

### Code Quality Tools

#### Linter

- **ESLint** v9.38.0 with Flat Config
- **Preset**: `@virtual-live-lab/eslint-config/presets/ts`
- **Plugins**:
  - typescript-eslint v8.46.2
  - eslint-plugin-import-access v3.0.0 (enforces JSDoc-based import access control)
  - unplugin-unused v0.5.4
- **Import Access Rule**: Enforced with `error` level for `.ts` files

#### Formatter

- **Biome** v2.3.1 (formatter only, linter disabled)
- **Config**:
  - Indent: 2 spaces
  - Line Width: 80
  - Line Ending: LF
  - Quotes: Double quotes
  - Semicolons: Always
  - Trailing Commas: All (except JSON files)
  - Arrow Parens: Always
  - VCS Integration: Git

#### Type Checking

- **typescript** v5.9.3
- **@arethetypeswrong/core** v0.18.2 for package type validation

### Testing

- **Vitest** v4.0.4
- **Vite** v7.1.12
- **Config**: `vitest.config.ts`

### Build

- **Bundler**: tsdown v0.15.11
- **Config**: `tsdown.config.ts`
- **Output**: `dist/` directory
- **Entry Point**: `./dist/index.mjs` (ESM only)
- **Types**: `./dist/index.d.mts`

### Package Publishing

- **Registry**: npm (public access)
- **Provenance**: Enabled
- **Validation Tools**:
  - publint v0.3.15
  - @arethetypeswrong/core
- **Release Management**:
  - release-it v19.0.5
  - release-it-pnpm v4.6.6
  - Config: `.release-it.json`

### CI/CD Integration

- **pkg-pr-new** v0.0.60 for preview package publishing
- **Publish Mode**: Compact with update comments

### Available Scripts

```bash
pnpm lint          # ESLint with auto-fix
pnpm format        # Biome format with write
pnpm format:check  # Biome format check (GitHub reporter)
pnpm typecheck     # TypeScript type checking
pnpm test          # Run Vitest tests
pnpm build         # Build with tsdown
pnpm pkg-pr-new    # Publish preview package
```

### Development Workflow

1. **Code**: Write TypeScript code following ESLint and import-access rules
2. **Format**: Auto-formatted by Biome (2 spaces, 80 chars, double quotes)
3. **Lint**: ESLint enforces TypeScript and import access rules
4. **Type Check**: Ensure types are correct with `pnpm typecheck`
5. **Test**: Run tests with Vitest
6. **Build**: Bundle with tsdown before publishing
7. **Publish**: Managed via release-it workflow

### Key Constraints

- **ESM Only**: No CommonJS support
- **Tree-shakeable**: `sideEffects: false` in package.json
- **Import Access Control**: Must follow JSDoc annotations for private/public exports
- **Type Safety**: Full TypeScript with no emit errors
- **Code Style**: Enforced by Biome + ESLint combination
