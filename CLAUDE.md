# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a JavaScript utility library called `is-check` that provides comprehensive validation and checking functions. The library is modular, lightweight, and supports tree shaking to minimize bundle size.

## Codebase Structure

```
is-check/
├── src/              # Source code
│   ├── type/         # Type checking functions (isArray, isString, isObject, etc.)
│   ├── number/       # Number validation functions (isEven, isPrime, isPositive, etc.)
│   ├── regexp/       # Regular expression validation (isEmail, isUrl, isUUID, etc.)
│   ├── env/          # Environment detection (isBrowser, isNode, isMobile, etc.)
│   ├── date/         # Date validation (isToday, isWeekend, isLeapYear, etc.)
│   └── index.js      # Main entry point
├── dist/             # Built files (UMD, ESM, and CJS formats)
├── docs/             # Documentation using VitePress
├── test/             # Test files using Vitest
└── package.json      # Package configuration
```

## Common Development Commands

### Development
```bash
# Install dependencies
npm run bootstrap

# Run development server for documentation
npm run docs:dev

# Build the library
npm run build

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Format code
npm run format
```

### Documentation
```bash
# Development server
npm run docs:dev

# Build documentation
npm run docs:build

# Preview built documentation
npm run docs:preview
```

## Architecture

The library is organized into five main modules:

1. **Type Module** (`src/type/`) - Functions for checking JavaScript types
2. **Number Module** (`src/number/`) - Functions for validating numbers
3. **RegExp Module** (`src/regexp/`) - Functions for validating strings with regular expressions
4. **Environment Module** (`src/env/`) - Functions for detecting runtime environments
5. **Date Module** (`src/date/`) - Functions for validating and checking dates

Each module has an `index.js` file that exports all functions in that module. The main `src/index.js` file aggregates all modules and provides both named exports and a default object export.

## Module Exports

The library supports multiple ways of importing:

1. **Full import**: `import is from 'is-check'`
2. **Named imports**: `import { isArray, isString } from 'is-check'`
3. **Module-specific imports**: `import isArray from 'is-check/type/is-array'`
4. **Module imports**: `import { isArray } from 'is-check/type'`

## Key Files

- `src/index.js` - Main entry point that aggregates all modules
- `package.json` - Contains build configurations, scripts, and dependencies
- `rollup.config.mjs` - Build configuration using Rollup
- `docs/.vitepress/config.mjs` - Documentation configuration
- Each module directory contains individual function files and an index.js file

## Testing

Tests are written using Vitest and located in the `test/` directory. Each module has corresponding test files.

## Documentation

Documentation is built with VitePress and located in the `docs/` directory. Each function has its own markdown file with usage examples.