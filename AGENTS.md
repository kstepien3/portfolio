# Agent Guidelines for Portfolio Project

## Commands

- **Build**: `pnpm run build`
- **Dev server**: `pnpm start`
- **Test all**: `pnpm run test:once`
- **Test by path**: `pnpm run test:once --include="**/file.spec.ts"`
- **Watch mode**: `pnpm run watch`
- **SSR serve**: `pnpm run serve:ssr:portfolio`

## Code Style

- **TypeScript**: Strict mode enabled, prefer type inference, avoid `any`, use `unknown` for uncertain types
- **Angular**: Standalone components (default, don't set `standalone: true`), signals for state, OnPush change detection
- **Formatting**: Prettier (printWidth: 100, singleQuote: true), 2-space indentation
- **Imports**: Angular → third-party → local, sorted alphabetically
- **Naming**: camelCase (variables/functions), PascalCase (classes/components), kebab-case (files/selectors)
- **Components**: Use `input()`/`output()` functions, `computed()` for derived state, inline templates for small components, single responsibility, reactive forms over template-driven
- **Templates**: Native control flow (`@if`, `@for`, `@switch`), async pipe for observables, avoid `ngClass`/`ngStyle`, use `class`/`style` bindings
- **Services**: `inject()` function, `providedIn: 'root'`, single responsibility
- **State**: Signals for local state, avoid `mutate()`, use `update()`/`set()`, keep transformations pure
- **Host bindings**: Put host bindings in `host` object of decorator, don't use `@HostBinding`/`@HostListener`
- **Images**: Use `NgOptimizedImage` for static images (not base64), implement lazy loading for routes
- **Error handling**: Leverage TypeScript strict checking, handle observables properly
