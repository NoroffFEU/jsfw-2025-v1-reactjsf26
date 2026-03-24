# AI Usage Log

This file documents AI assistance used during development for assignment compliance.


Tool used: GPT
Date: 02 March 2026
Purpose: Review cart behavior and debugging approach for quantity updates, remove flow, and summary totals.
Outcome: Confirmed cart state logic in src/store/cartStore.ts and cart page interactions in src/pages/CartPage.tsx. No breaking logic changes were required in cart calculations.


Tool used: GPT
Date: 4 March 2026
Purpose: Run and interpret ESLint checks after fallback UI refactor.
Outcome: Executed npm run lint and verified the codebase had no blocking ESLint errors after the changes.


Tool used: GPT
Date: 10 March 2026
Purpose: Debug TypeScript build issue in route error handling.
Outcome: Found a type mismatch in src/routes.tsx where errorComponent used an unsupported reset prop. Updated retry handling to a safe reload callback and confirmed build success with npm run build.

Tool used: GPT
Date: 24 March 2026
Purpose: Implement route fallback UI for loading and API error states.
Outcome: Added reusable fallback component in src/components/ui/FallbackState.tsx, refactored loading/error UI components, updated route-level pending and error components in src/routes.tsx, and aligned empty-state/cross-page fallback styling in src/styles/global.css and src/components/product/ProductContainer.tsx.


