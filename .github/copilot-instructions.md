# AI Agent Instructions for E-Commerce Project

## Project Overview

This is a full-stack E-commerce application built with:

- Frontend: React (Vite) with Zustand for state management
- Backend: Express.js with Prisma ORM
- Database: PostgreSQL (configured via Prisma)
- Authentication: JWT-based with role-based access control (user/admin)

## Key Architecture Components

### Backend Structure (`/server`)

- REST API with modular route organization in `/routes`
- Prisma for database operations (`/prisma/schema.prisma`)
- Role-based middleware in `/middlewares/authCheck.js`
- Controller pattern in `/controllers` for business logic

### Frontend Structure (`/client`)

- Route-based code organization (`/src/routes/AppRoutes.jsx`)
- Protected routes for admin/user areas
- Component-based architecture in `/src/components`
- Centralized state management in `/src/store/ecomStore.js`
- API service modules in `/src/api/`

## Critical Workflows

### Authentication Flow

```js
// Auth token handling in authCheck.js
exports.authCheck = async (req, res, next) => {
  const token = headerstoken.split(" ")[1];
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decode;
  // Validates user status and role
};
```

### Data Flow Patterns

1. Product Management:

   - Create/Update: Requires admin role, handles image upload to Cloudinary
   - List/Search: Public access with filters (price, category)
   - Cart/Order: Protected user routes with transaction handling

2. State Management:
   - Zustand store (`ecomStore.js`) manages global state
   - JWT token persistence via Zustand middleware

## Project Conventions

### API Endpoints

- Base URL configured via `VITE_URL_API` environment variable
- Consistent error handling through `internalErr` utility
- Protected routes require 'Bearer' token in Authorization header

### Frontend Patterns

1. Route Protection:

   ```jsx
   // Admin/User routes wrapped with protectors
   element: <ProtectRouteAdmin element={<AdminLayout />} />;
   ```

2. Component Structure:
   - Layout components in `/layouts`
   - Feature-specific components in `/components/{feature}`
   - Page components in `/pages`

### Database Operations

- Always use transactions for multi-table operations
- Use Prisma's include for eager loading relationships
- Handle soft-delete through enabled flag for users

## Integration Points

### External Services

1. Cloudinary for image storage

   - Configure via environment variables:
     - CLOUDINARY_CLOUD_NAME
     - CLOUDINARY_API_KEY
     - CLOUDINARY_API_SECRET

2. Database Connection
   - Prisma manages PostgreSQL connection
   - Required env vars: DATABASE_URL, DIRECT_URL (for Supabase)

## Development Workflow

1. Backend:

   ```bash
   cd server
   npm install
   npx prisma generate  # After schema changes
   npx prisma migrate dev # For database updates
   npm start
   ```

2. Frontend:
   ```bash
   cd client
   npm install
   npm run dev
   ```

## Common Patterns to Follow

1. Error Handling:

   ```js
   try {
     // Operation
   } catch (error) {
     internalErr(res, error);
   }
   ```

2. Protected Route Pattern:

   ```js
   router.route("/admin/orders").get(authCheck, adminCheck, controllerFunction);
   ```

3. Frontend Data Fetching:
   ```js
   const actionGetProducts = async () => {
     try {
       const { data } = await listProducts();
       set({ products: data });
     } catch (error) {
       console.log(error);
     }
   };
   ```
