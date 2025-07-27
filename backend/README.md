# 🚀 Core Project - Backend API

> **NestJS + GraphQL API** với authentication, authorization và user management hoàn chỉnh

## 🎯 Dành cho người mới

Bạn là developer mới join team? Hãy đọc guide này để hiểu nhanh về dự án và bắt đầu development.

### 🔥 Dự án này là gì?

Đây là một **backend API** được xây dựng với:
- **NestJS** (Node.js framework giống Spring Boot)  
- **GraphQL** (thay vì REST API)
- **JWT Authentication** (đăng nhập bằng tokens)
- **Role-based Authorization** (phân quyền theo vai trò)
- **Supabase** (PostgreSQL database)

**Tính năng chính:**
- ✅ Đăng ký/đăng nhập users
- ✅ Quản lý users với roles (Admin, Manager, Staff, User, Guest)
- ✅ Hệ thống permissions chi tiết (28 quyền khác nhau)
- ✅ JWT tokens với auto-refresh
- ✅ GraphQL API với playground để test
- ✅ **Pagination system** với search, filter, và sorting
- ✅ **Consolidated architecture** với reusable patterns
- ✅ Security features (rate limiting, input validation, etc.)

---

## ⚡ Quick Start (5 phút setup)

### 1. Cài đặt dependencies
```bash
cd backend
npm install
```

### 2. Setup database (Supabase)
- Tạo account tại [supabase.com](https://supabase.com)
- Tạo project mới
- Vào Settings → API → copy URL và service role key

### 3. Tạo file `.env` ở thư mục root project
```env
# Database (required)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# JWT (required) 
JWT_SECRET=your-super-secret-jwt-key-at-least-32-chars

# Server config (optional)
SERVER_PORT=9703
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
BCRYPT_SALT_ROUNDS=12
```

### 4. Chạy server
```bash
npm run start:dev
```

### 5. Test API
- Mở browser: `http://localhost:9703/graphql`
- GraphQL Playground sẽ mở → có thể test API ngay

**🎉 Xong! Server đã chạy trên port 9703**

---

## 🏗️ Kiến trúc hệ thống (1 phút hiểu)

```
Client Request → PermissionsGuard → AuthService → UserService → Database
              ↗                    ↗
         JWT Token              Role & Permissions Check
```

### Core Flow:
1. **Client** gửi request với JWT token
2. **PermissionsGuard** kiểm tra quyền truy cập
3. **AuthService** validate JWT token
4. **UserService** xử lý business logic
5. **DatabaseService** query Supabase
6. Trả response về client

### Thư mục quan trọng:
```
src/
├── modules/
│   ├── auth/           # 🔐 Đăng nhập, JWT tokens
│   ├── user/           # 👤 CRUD users, pagination, đổi password
│   └── database/       # 💾 Kết nối Supabase
├── guards/
│   └── permissions.guard.ts  # 🛡️ Kiểm tra quyền (chạy với mọi request)
├── decorators/
│   ├── @Public()       # Bỏ qua authentication  
│   ├── @Permissions()  # Yêu cầu permissions cụ thể
│   └── @Roles()        # Yêu cầu roles cụ thể
└── shared/
    ├── constants/      # 📊 Mapping role → permissions, validation rules
    ├── decorators/     # 🎯 Custom validation decorators  
    ├── dto/           # 📦 Consolidated DTO classes
    └── types/         # 🔧 TypeScript type definitions
```

---

## 🔐 Hệ thống phân quyền (2 phút hiểu)

### 5 Roles (vai trò):
```
🔴 ADMIN    (28 perms) → Toàn quyền hệ thống
🟡 MANAGER  (8 perms)  → Quản lý users
🟢 STAFF    (3 perms)  → Xem và sửa users  
🔵 USER     (3 perms)  → Quản lý tài khoản cá nhân
⚪ GUEST    (0 perms)  → Chỉ xem public API
```

### 28 Permissions (quyền hạn):
- **User Management**: CREATE_USER, DELETE_USER, VIEW_ALL_USERS...
- **Role Management**: ASSIGN_ROLE, VIEW_ROLES...
- **System Admin**: SYSTEM_CONFIG, VIEW_LOGS, BACKUP_RESTORE...

### Cách hoạt động:
```typescript
// Trong resolver
@Permissions(Permission.CREATE_USER)  // Cần quyền CREATE_USER
@Mutation(() => User)
createUser() { ... }

@Roles(Role.ADMIN, Role.MANAGER)      // Cần role ADMIN hoặc MANAGER  
@Query(() => [User])
adminOnlyAPI() { ... }

@Public()                             // Ai cũng truy cập được
@Mutation(() => AuthResponse)
login() { ... }
```

---

## 📡 GraphQL API Examples

### Authentication Flow:
```graphql
# 1. Đăng ký user mới (public)
mutation Register {
  register(createUserInput: {
    name: "John Doe"
    email: "john@example.com" 
    password: "SecurePass123!"
  }) {
    id
    email
    role
  }
}

# 2. Đăng nhập
mutation Login {
  login(input: {
    email: "john@example.com"
    password: "SecurePass123!"
  }) {
    access_token
    refresh_token
    user { id name role permissions }
  }
}

# 3. Sử dụng access_token trong header:
# Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### User Management:
```graphql
# Lấy thông tin user hiện tại
query {
  user {
    id
    name
    email
    role
    permissions
  }
}

# Admin: Xem users với pagination
query {
  usersPaginated(query: {
    page: 1
    limit: 10
    search: "admin"
    filters: { role: ADMIN }
  }) {
    success
    data {
      id
      email
      name
      role
    }
    pagination {
      total
      totalPages
      hasNext
    }
  }
}

# Cập nhật profile
mutation {
  updateUserInfo(updateUserInfoInput: {
    id: "user-id"
    name: "New Name"
    email: "new@email.com"
  }) {
    id
    name
    email
  }
}
```

---

## 🛠️ Development Commands

### Chạy server:
```bash
npm run start:dev        # Development với watch mode
npm run start:debug      # Debug mode
npm run build            # Build production
npm run start:prod       # Chạy production
```

### Code quality:
```bash
npm run lint             # ESLint check + auto fix
npm run format           # Prettier formatting
```

### Testing:
```bash
npm run test             # Unit tests
npm run test:watch       # Tests với watch mode  
npm run test:cov         # Test coverage
npm run test:e2e         # End-to-end tests
```

---

## 🚨 Common Issues & Solutions

### "Connection failed"
```bash
# Kiểm tra .env file có đúng không
cat .env

# Test database connection
curl -X POST http://localhost:9703/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "query { __schema { types { name } } }"}'
```

### "Bạn không đủ quyền"  
```bash
# Kiểm tra user role trong database
# Xem logs để debug: tail -f logs/app-*.log
# Verify JWT token: jwt.io
```

### "Token không hợp lệ"
```bash
# Đảm bảo dùng access_token (không phải refresh_token)
# Kiểm tra JWT_SECRET trong .env
# Token có thể đã hết hạn (15-30 phút)
```

---

## 📚 Tài liệu chi tiết

Sau khi setup xong, đọc thêm các file này để hiểu sâu hơn:

| File | Mục đích | Khi nào đọc |
|------|----------|-------------|
| **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** | 📋 Tra cứu nhanh functions, APIs | Khi cần tìm function hoặc API |
| **[API_REFERENCE.md](./API_REFERENCE.md)** | 📡 Tài liệu GraphQL API đầy đủ | Khi làm frontend hoặc test API |
| **[PAGINATION.md](./PAGINATION.md)** | 📋 Hướng dẫn phân trang chi tiết | Khi implement pagination mới |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | 🏗️ Kiến trúc chi tiết, security | Khi cần hiểu sâu về hệ thống |

### Workflow đọc tài liệu:
1. **README.md** (file này) → Hiểu overview + setup
2. **QUICK_REFERENCE.md** → Nắm được core functions  
3. **API_REFERENCE.md** → Biết cách dùng APIs
4. **PAGINATION.md** → Hiểu hệ thống phân trang
5. **ARCHITECTURE.md** → Hiểu sâu architecture (nếu cần)

---

## 🔧 Tech Stack

| Category | Technology | Purpose |
|----------|------------|----------|
| **Framework** | NestJS | Node.js framework với dependency injection |
| **API** | GraphQL + Apollo | API layer với type safety |
| **Database** | Supabase (PostgreSQL) | Database service với realtime |
| **Auth** | JWT + bcrypt | Token-based authentication |
| **Validation** | class-validator | Input validation và transformation |
| **Logging** | Winston | Structured logging với file rotation |
| **Testing** | Jest | Unit và integration testing |
| **Language** | TypeScript | Type safety và developer experience |

---

## 🚀 Next Steps

### Sau khi setup xong, bạn có thể:

1. **Khám phá GraphQL Playground**
   - Mở `http://localhost:9703/graphql`
   - Test các queries/mutations
   - Xem schema documentation

2. **Tạo user admin đầu tiên**
   ```graphql
   mutation {
     register(createUserInput: {
       name: "Admin User"
       email: "admin@company.com"
       password: "AdminPass123!"
     }) { id email role }
   }
   ```
   Sau đó manually update role thành ADMIN trong database

3. **Test authentication flow**
   - Login với user vừa tạo
   - Copy access_token
   - Dùng token để call protected APIs

4. **Đọc source code**
   - Bắt đầu từ `src/main.ts` 
   - Tiếp theo `src/app.module.ts`
   - Sau đó vào các modules

5. **Modify code**
   - Thêm permissions mới trong `permission.enum.ts`
   - Tạo resolvers mới trong modules  
   - Update role permissions mapping

---

## 🤝 Team Workflow

### Git Workflow:
```bash
git checkout -b feature/your-feature-name
# Make changes
npm run lint          # Fix linting issues  
npm run test          # Run tests
git commit -m "feat: add new feature"
git push origin feature/your-feature-name
# Create PR
```

### Code Review Checklist:
- ✅ Có tests cho code mới
- ✅ ESLint/Prettier pass  
- ✅ JSDoc comments cho public functions
- ✅ Proper error handling
- ✅ Security considerations (permissions, validation)

### Development Tips:
- 📝 **Logs**: Luôn check `logs/app-*.log` khi debug
- 🔍 **GraphQL**: Dùng Playground để test queries nhanh
- 🛡️ **Permissions**: Test với different roles để đảm bảo security
- 🧪 **Testing**: Viết tests cho business logic quan trọng

---

**🎯 Mục tiêu:** Sau khi đọc README này, bạn có thể setup project, hiểu được architecture cơ bản, và bắt đầu contribute code trong 1 ngày!

**❓ Cần support:** Liên hệ team lead hoặc tạo issue trong repo.