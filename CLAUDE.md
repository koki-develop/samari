# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production (uses custom build script)
- `bun run fmt` - Format and fix code using Biome (includes --unsafe)
- `bun run lint` - Check code formatting and linting with Biome
- `bun test` - Run all tests (uses Bun's built-in test runner)
- `bun test <pattern>` - Run specific test files (e.g., `bun test util.spec.ts`)
- `bun test --test-name-pattern <regex>` - Run tests matching name pattern
- `bun run deploy` - Deploy to Firebase hosting
- `bun run deploy:preview` - Deploy preview channel

## Architecture

This is a React SPA built with Bun, deployed to Firebase hosting. Key architectural patterns:

**Tech Stack:**
- **Runtime:** Bun (not Node.js) - affects build process and test runner
- **Frontend:** React 19 + TypeScript with React Router 7 for routing
- **State:** TanStack Query for server state, Mantine for UI components
- **Styling:** TailwindCSS 4.x with Mantine integration
- **Backend:** Firebase Firestore (lite SDK) for data fetching
- **Build:** Custom Bun build script in `tasks/build.ts`, not typical bundlers

**Project Structure:**
- `src/lib/` - Core business logic and Firebase integration
- `src/pages/` - Route components with co-located presentation components
- `src/components/Layout/` - App shell and navigation
- Environment variables use `BUN_PUBLIC_` prefix (not `VITE_` or `REACT_APP_`)

**Data Layer:**
- Posts are fetched from Firestore with infinite pagination via TanStack Query
- Post groups provide content categorization
- Firebase config expects `BUN_PUBLIC_FIREBASE_*` environment variables

**Testing:**
- Uses Bun's native test runner, not Jest or Vitest
- Test files use `.spec.ts` extension
- Import test utilities from `bun:test`

**Deployment:**
- Firebase hosting serves the SPA with catch-all routing to `index.html`
- Build output goes to `dist/` directory

**Commit Conventions:**
- Follow conventional commit format: `type(scope): description`
- Common types: `feat`, `fix`, `docs`, `chore`, `refactor`
- Examples: `docs: add CLAUDE.md`, `chore(deps): update dependency X`, `fix: resolve Y issue`