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

Tool used: Claude (Anthropic)
Date: 14 March 2026
Purpose: Brainstorming project folder structure and page routing for a Next.js App Router project.
Prompt summary: Asked for suggestions on how to organise a Next.js project with pages for home, product detail, cart, checkout success, and contact and where to put shared types and utility files.
Outcome: Received a suggested folder layout. Reviewed the suggestions, adjusted the structure to match my own preference, and implemented the final structure independently.
Code written independently: Yes, all files and folder structure were created manually and used as idea for adjustments of existing folder structure.

Tool used: Claude
Date: 16 March 2026
Purpose: Explaining how TypeScript interfaces work for typing API responses.
Prompt summary: Asked for an explanation of what it means to "define clear interfaces/types for API responses, components, and state" as required by the assignment brief.
Outcome: Gained a clear understanding of the difference between typed and untyped fetch responses, and how to write props interfaces for React components.
Code written independently: Yes.

Tool used: Claude
Date: 18 March 2026
Purpose: Debugging assistance, describing a TypeScript error related to accessing a property on a possibly undefined value.
Prompt summary: Described a TypeScript error: Cannot read properties of undefined (reading 'url') that appeared when trying to render product.image.url before the API data had loaded.
Outcome: Understood that the error was caused by accessing a nested property before the data was available, and learned to use optional chaining (product?.image?.url) and a loading state guard. Fix was applied independently.
Code written independently: Yes, understood the fix and applied it myself.

Tool used: Claude
Date: 20 March 2026
Purpose: Understanding how to control a toast with React state
I had the ToastContainer component built, but I didn't understand how to actually make it appear and disappear. I kept thinking of it as something that "triggers" itself, but Claude explained that in React it's just a component that renders when a condition is true, you control it entirely through state in the parent.
Code written independently: Yes, understood the fix and applied it myself.

Tool used: GPT
Date: 24 March 2026
Purpose: Implement route fallback UI for loading and API error states.
Outcome: Added reusable fallback component in src/components/ui/FallbackState.tsx, refactored loading/error UI components, updated route-level pending and error components in src/routes.tsx, and aligned empty-state/cross-page fallback styling in src/styles/global.css and src/components/product/ProductContainer.tsx.
