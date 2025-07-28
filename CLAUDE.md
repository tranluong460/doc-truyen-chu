# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a monorepo containing a full-stack web novel reading platform with a NestJS backend and Next.js frontend:

- **`backend/`** - NestJS GraphQL API with JWT authentication and role-based permissions
- **`frontend/`** - Next.js 15 app with TypeScript, Tailwind CSS, and cultivation-themed UI

## Development Commands

### Backend (NestJS + GraphQL)
```bash
cd backend
npm run start:dev        # Development with watch mode
npm run build           # Build for production
npm run start:prod      # Start production server
npm run lint            # ESLint check + auto fix
npm run format          # Prettier formatting
npm run test            # Unit tests
npm run test:watch      # Tests with watch mode
npm run test:cov        # Test coverage
npm run test:e2e        # End-to-end tests
```

### Frontend (Next.js)
```bash
cd frontend
npm run dev             # Development server with turbopack
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Next.js ESLint check
```

## Backend Architecture

### Core Structure
- **`src/main.ts`** - Application entry point
- **`src/app.module.ts`** - Root module configuration
- **`src/modules/`** - Business logic modules (auth, user, database, jwt)
- **`src/shared/`** - Shared utilities, types, constants, and validators
- **`src/guards/`** - Authentication & authorization guards
- **`src/decorators/`** - Custom decorators for permissions and roles

### Authentication Flow
1. Users authenticate via GraphQL mutations (login/register)
2. JWT tokens issued with access (15-30 min) and refresh (7-30 days) expiration
3. `PermissionsGuard` validates tokens and checks role/permission requirements
4. User context injected into resolvers via `@CurrentUserId()` decorator

### Role System
- **ADMIN** (28 permissions) - Full system access
- **MANAGER** (8 permissions) - User management
- **STAFF** (3 permissions) - Basic operations
- **USER** (3 permissions) - Personal account management
- **GUEST** (0 permissions) - Public access only

### Database
- Uses Supabase (PostgreSQL) as the database
- Single `users` table with role-based permissions
- Soft delete pattern (is_active flag)
- Proper indexing for performance

### Key Decorators
- `@Public()` - Skip authentication
- `@Permissions(Permission.CREATE_USER)` - Require specific permissions
- `@Roles(Role.ADMIN, Role.MANAGER)` - Require specific roles
- `@CurrentUserId()` - Get current user ID from JWT

## Frontend Architecture

### App Router Structure
- **`app/layout.tsx`** - Root layout with metadata and fonts
- **`app/(home)/`** - Home page group layout
- **`components/layout/home/`** - Home-specific layout components
- **`components/ui/`** - Reusable UI components
- **`libs/providers/`** - Context providers
- **`types/`** - TypeScript type definitions

### Styling & Theming
- **Tailwind CSS 4** with custom cultivation-themed color palette
- **Dark mode support** via class-based theming
- **Custom colors**: jade, immortal (cyan), celestial (gold), cultivation levels
- **Custom animations**: dropdown-fade-in, glow-pulse, float, shimmer
- **Inter font** with Vietnamese subset support

### Key Features
- Cultivation-themed UI design for web novel platform
- Responsive design with mobile-first approach
- SEO optimized with proper metadata
- Custom scrollbars and animations

## Environment Setup

### Backend (.env)
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
JWT_SECRET=your-super-secret-jwt-key-at-least-32-chars
SERVER_PORT=9703
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
BCRYPT_SALT_ROUNDS=12
```

### Frontend
Environment variables should use `NEXT_PUBLIC_` prefix for client-side access.

## Important Files to Reference

### Backend Documentation
- **`backend/README.md`** - Comprehensive setup and API guide
- **`backend/ARCHITECTURE.md`** - Detailed architecture documentation
- **`backend/API_REFERENCE.md`** - GraphQL API documentation
- **`backend/PAGINATION.md`** - Pagination system guide
- **`backend/QUICK_REFERENCE.md`** - Quick function reference

### Key Configuration Files
- **`backend/src/shared/constants/role-permissions.constants.ts`** - Role-permission mappings
- **`backend/src/shared/enums/permission.enum.ts`** - All 28 system permissions
- **`frontend/tailwind.config.js`** - Complete Tailwind configuration with custom theme

## Development Workflow

1. **Backend First**: Start backend server on port 9703
2. **GraphQL Playground**: Access at `http://localhost:9703/graphql` for API testing
3. **Frontend Development**: Start frontend dev server with turbopack
4. **Code Quality**: Always run lint commands before committing
5. **Testing**: Backend has comprehensive test suite, run before production

## Security Considerations

- JWT tokens have proper expiration times
- Password hashing with bcrypt and configurable salt rounds
- Role-based and permission-based access control
- Input validation with class-validator
- Soft delete pattern for data integrity
- Rate limiting and security headers

## Common Patterns

### Adding New Permissions
1. Add permission to `permission.enum.ts`
2. Update role mappings in `role-permissions.constants.ts`
3. Use `@Permissions()` decorator on resolvers

### Creating New Resolvers
1. Follow existing module structure in `src/modules/`
2. Use proper decorators for authentication/authorization
3. Implement pagination for list endpoints
4. Add proper error handling and logging

### Frontend Components
1. Use TypeScript with proper type definitions
2. Follow existing component structure in `components/`
3. Use Tailwind classes with custom cultivation theme
4. Implement responsive design patterns