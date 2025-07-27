# 🚀 Tham Khảo Nhanh - Các Hàm Cốt Lõi Backend

## 📁 Tổng Quan Cấu Trúc File

```
src/
├── main.ts                     # 🚪 Điểm khởi đầu - khởi tạo NestJS app
├── app.module.ts               # 🏠 Module gốc - kết nối tất cả thành phần
├── modules/
│   ├── auth/
│   │   ├── auth.service.ts     # 🔐 Đăng nhập, JWT tokens, xác thực
│   │   └── auth.resolver.ts    # 📡 Các GraphQL auth mutations
│   ├── user/
│   │   ├── user.service.ts     # 👤 CRUD users, quản lý mật khẩu
│   │   └── user.resolver.ts    # 📡 Các GraphQL user queries/mutations
│   └── database/
│       └── database.service.ts # 💾 Wrapper cho Supabase client
├── guards/
│   └── permissions.guard.ts    # 🛡️ Phân quyền cho mọi request
├── decorators/
│   ├── permissions.decorator.ts # @Permissions() - yêu cầu quyền hạn
│   └── public.decorator.ts     # @Public() - bỏ qua xác thực
└── shared/
    ├── constants/
    │   ├── role-permissions.constants.ts # 📊 Ánh xạ Role → Permission
    │   └── validation.constants.ts       # 🎯 Validation rules & messages
    ├── decorators/
    │   └── validation.decorators.ts      # 🔧 Custom validation decorators
    ├── dto/
    │   ├── base.dto.ts                   # 📦 Base DTO classes
    │   ├── user.dto.ts                   # 👤 User-related DTOs
    │   └── auth.dto.ts                   # 🔐 Auth-related DTOs
    ├── types/
    │   ├── user.types.ts                 # 👤 User type definitions
    │   └── generic.types.ts              # 🔧 Generic utility types
    └── services/
        └── logger.service.ts             # 📝 Hệ thống logging Winston
```

## 🔑 Các Hàm Cốt Lõi Bạn Cần Biết

### 1. AuthService (`auth.service.ts`)

| Function                        | Purpose                     | When to Use                 |
| ------------------------------- | --------------------------- | --------------------------- |
| `validateUser(email, password)` | ✅ Verify login credentials | User login process          |
| `login(user)`                   | 🎫 Create JWT tokens        | After successful validation |
| `refreshToken(refreshToken)`    | 🔄 Get new access token     | When access token expires   |
| `revokeToken(refreshToken)`     | 🚪 Logout user              | User logout                 |

### 2. PermissionsGuard (`permissions.guard.ts`)

| Function               | Purpose                              | When Called               |
| ---------------------- | ------------------------------------ | ------------------------- |
| `canActivate(context)` | 🔐 Check if user can access endpoint | **Every GraphQL request** |

**What it does:**

1. ✅ Skip if `@Public()`
2. 🎫 Extract JWT from header
3. 👤 Lấy quyền hạn của user từ DB
4. 🔍 So sánh với yêu cầu `@Permissions()`
5. ✅/❌ Cho phép hoặc từ chối truy cập

### 3. UserService (`user.service.ts`)

| Hàm                          | Mục Đích                         | Quyền Hạn Yêu Cầu             |
| ---------------------------- | -------------------------------- | ----------------------------- |
| `create(input)`              | ➕ Create new user               | `CREATE_USER` (admin/manager) |
| `findAllPaginated(...)`      | 🔥 **List users với pagination** | `VIEW_ALL_USERS`              |
| `findOne(id)`                | 👤 Get user by ID                | `READ_USER`                   |
| `updateUserInfo(id, input)`  | ✏️ Update profile                | `UPDATE_USER_INFO`            |
| `updatePassword(id, input)`  | 🔒 Change password               | `UPDATE_USER_PASSWORD`        |
| `adminUpdatePassword(input)` | 🔧 Admin reset password          | `ADMIN_UPDATE_PASSWORD`       |
| `remove(id)`                 | 🗑️ Soft delete user              | `DELETE_USER`                 |

### 4. DatabaseService (`database.service.ts`)

| Hàm           | Mục Đích                           |
| ------------- | ---------------------------------- |
| `getClient()` | 🔌 Get Supabase client for queries |

## 🎭 Tham Khảo Các Decorators

### Cách Sử Dụng Trong Resolvers

```typescript
// ✅ Endpoint công khai (không cần xác thực)
@Public()
@Mutation(() => AuthResponse)
login() { ... }

// 🔐 Yêu cầu quyền hạn cụ thể
@Permissions(Permission.CREATE_USER)
@Mutation(() => User)
createUser() { ... }

// 👤 Lấy user ID hiện tại từ JWT
@Query(() => User)
getCurrentUser(@CurrentUserId() userId: string) { ... }

// 👑 Yêu cầu vai trò cụ thể
@Roles(Role.ADMIN, Role.MANAGER)
@Query(() => [User])
adminOnlyEndpoint() { ... }
```

### 🔥 Custom Validation Decorators (New!)

```typescript
// 💪 Strong password validation
@IsStrongPassword('Mật khẩu đăng nhập')
password: string

// 📧 Email với blocked list
@IsValidEmail('Email người dùng')
email: string

// 🆔 UUID validation
@IsUserId('ID người dùng')
userId: string

// 👤 User name validation (optional)
@IsUserName('Tên người dùng', true)
name: string | null

// 🏠 Address validation
@IsUserAddress('Địa chỉ')
address: string | null

// 🔒 Current password (simple validation)
@IsCurrentPassword()
current_password: string

// 🔧 Generic string với custom rules
@IsValidString('Description', 5, 500, true)
description?: string
```

## 🔐 Permission System Quick Guide

### Role Hierarchy (High → Low)

```
🔴 ADMIN (28 perms)    → Full system access
🟡 MANAGER (8 perms)   → User management
🟢 STAFF (3 perms)     → Basic operations
🔵 USER (3 perms)      → Personal account
⚪ GUEST (0 perms)     → Public only
```

### Key Permission Categories

| Category            | Examples                                   | Who Has It            |
| ------------------- | ------------------------------------------ | --------------------- |
| **User CRUD**       | `CREATE_USER`, `DELETE_USER`               | Admin, Manager        |
| **View Users**      | `VIEW_ALL_USERS`                           | Admin, Manager, Staff |
| **Self Management** | `UPDATE_USER_INFO`, `UPDATE_USER_PASSWORD` | All users             |
| **Admin Powers**    | `ADMIN_UPDATE_PASSWORD`, `SYSTEM_CONFIG`   | Admin only            |

## 🚨 Common Troubleshooting

### "Bạn không đủ quyền"

```typescript
// ✅ Check user has required permission
const userPermissions = await userService.findUserPermission(userId)
const rolePermissions = getRolePermissions(userRole)
const allPermissions = [...userPermissions, ...rolePermissions]
```

### "Token không hợp lệ"

```typescript
// ✅ Verify token format
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

// ✅ Check token not expired
// ✅ Make sure using access_token (not refresh_token)
```

### Database Connection Issues

```typescript
// ✅ Check environment variables
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 📡 GraphQL Quick Examples

### Authentication Flow

```graphql
# 1. Login
mutation {
  login(input: { email: "user@example.com", password: "pass123" }) {
    access_token
    refresh_token
    user {
      role
      permissions
    }
  }
}

# 2. Use access_token in header: "Authorization: Bearer <token>"

# 3. Refresh when expired
mutation {
  refreshToken(refreshToken: "your_refresh_token") {
    access_token
    refresh_token
  }
}
```

### User Management

```graphql
# Get current user
query {
  user {
    id
    name
    email
    role
  }
}

# Admin: List users với pagination
query {
  usersPaginated(
    query: {
      page: 1
      limit: 10
      search: "admin"
      filters: { role: ADMIN, is_active: true }
    }
  ) {
    data {
      id
      email
      role
    }
    pagination {
      total
      hasNext
    }
  }
}

# Update profile
mutation {
  updateUserInfo(
    updateUserInfoInput: {
      id: "user-id"
      name: "New Name"
      email: "new@email.com"
    }
  ) {
    id
    name
    email
  }
}
```

## 🔧 Development Commands

```bash
# Start development server
npm run start:dev

# Run tests
npm run test
npm run test:e2e

# Code quality
npm run lint
npm run format

# Build for production
npm run build
npm run start:prod
```

## 🛠️ Debugging Tips

### Check JWT Token Payload

```bash
# Decode JWT (without verification)
echo "YOUR_JWT_TOKEN" | cut -d. -f2 | base64 -d | jq
```

### Test GraphQL Endpoint

```bash
curl -X POST http://localhost:9703/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "query { __schema { types { name } } }"}'
```

### View Application Logs

```bash
# Development logs
tail -f logs/app-$(date +%Y-%m-%d).log

# Error logs only
tail -f logs/error-$(date +%Y-%m-%d).log
```

## 📊 Environment Variables

```bash
# Required
SUPABASE_URL=                    # Database connection
SUPABASE_SERVICE_ROLE_KEY=       # Database credentials
JWT_SECRET=                      # Token signing key

# Optional
SERVER_PORT=9703                 # Server port
FRONTEND_URL=http://localhost:3000  # CORS origin
NODE_ENV=development             # Environment
BCRYPT_SALT_ROUNDS=12           # Password hashing
```

---

💡 **Pro Tips:**

- Always check logs when debugging: `tail -f logs/app-*.log`
- Use GraphQL Playground in development: `http://localhost:9703/graphql`
- Test permissions with different user roles
- Check database directly in Supabase dashboard when needed

🔗 **See also:**

- [API_REFERENCE.md](./API_REFERENCE.md) - Complete GraphQL API documentation
- [PAGINATION.md](./PAGINATION.md) - Complete pagination guide
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Detailed architecture guide
