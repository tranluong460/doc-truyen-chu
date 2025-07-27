# 📚 Tài Liệu Tham Khảo GraphQL API

## 🚀 Bảng Nội Dung

- [Kết Nối và Xác Thực](#kết-nối-và-xác-thực)
- [Luồng Authentication](#luồng-authentication)
- [User Management APIs](#user-management-apis)
- [Admin APIs](#admin-apis)
- [Phân Trang (Pagination)](#phân-trang-pagination)
- [Error Handling](#error-handling)
- [Role & Permission Matrix](#role--permission-matrix)
- [Testing và Examples](#testing-và-examples)

---

## 🔌 Kết Nối và Xác Thực

### Endpoint GraphQL
```
POST http://localhost:9703/graphql
Content-Type: application/json
```

### Header Xác Thực
```json
{
  "Authorization": "Bearer <your_access_token>"
}
```

### GraphQL Playground
- **URL Development**: `http://localhost:9703/graphql`
- **Tính năng**: Query explorer, schema documentation, API testing

---

## 🔐 Luồng Authentication

### 1. Đăng Ký User (Public)

```graphql
mutation Register($input: CreateUserInput!) {
  register(createUserInput: $input) {
    id
    email
    name 
    role
    created_at
  }
}
```

**Variables:**
```json
{
  "input": {
    "name": "Nguyễn Văn A",
    "email": "nguyenvana@example.com",
    "password": "MatKhauManh123!",
    "address": "123 Đường ABC, TP.HCM"
  }
}
```

### 2. Đăng Nhập

```graphql  
mutation Login($input: LoginInput!) {
  login(input: $input) {
    access_token
    refresh_token
    user {
      id
      email
      name
      role
      permissions
    }
  }
}
```

**Variables:**
```json
{
  "input": {
    "email": "nguyenvana@example.com", 
    "password": "MatKhauManh123!"
  }
}
```

**Response:**
```json
{
  "data": {
    "login": {
      "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "user": {
        "id": "550e8400-e29b-41d4-a716-446655440000",
        "email": "nguyenvana@example.com",
        "name": "Nguyễn Văn A",
        "role": "USER",
        "permissions": ["READ_USER", "UPDATE_USER_INFO", "UPDATE_USER_PASSWORD"]
      }
    }
  }
}
```

### 3. Làm Mới Token

```graphql
mutation RefreshToken($refreshToken: String!) {
  refreshToken(refreshToken: $refreshToken) {
    access_token
    refresh_token
    user {
      id
      email
      role
    }
  }
}
```

### 4. Thu Hồi Token (Đăng Xuất)

```graphql
mutation RevokeToken($refreshToken: String!) {
  revokeToken(refreshToken: $refreshToken)
}
```

---

## 👤 User Management APIs

### Lấy Thông Tin User Hiện Tại

```graphql
query GetCurrentUser {
  user {
    id
    email
    name
    address
    role
    permissions
    is_active
    created_at
    updated_at
  }
}
```

### Cập Nhật Thông Tin User

```graphql
mutation UpdateUserInfo($input: UpdateUserInfoInput!) {
  updateUserInfo(updateUserInfoInput: $input) {
    id
    name
    email
    address
    updated_at
  }
}
```

**Variables:**
```json
{
  "input": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Tên Mới",
    "email": "email_moi@example.com",
    "address": "Địa chỉ mới"
  }
}
```

### Đổi Mật Khẩu

```graphql
mutation ChangePassword($input: UpdateUserPasswordInput!) {
  updateUserPassword(updateUserPasswordInput: $input)
}
```

**Variables:**
```json
{
  "input": {
    "current_password": "MatKhauCu123!",
    "new_password": "MatKhauMoi456!"
  }
}
```

---

## 👥 Admin APIs

*Yêu cầu: Quyền `ADMIN` hoặc `MANAGER` với permissions phù hợp*

### Lấy Danh Sách Users Với Phân Trang

```graphql
query GetUsersPaginated($query: UserQueryInput) {
  usersPaginated(query: $query) {
    success
    message
    data {
      id
      email
      name
      role
      permissions
      is_active
      created_at
    }
    pagination {
      currentPage
      limit
      total
      totalPages
      hasPrevious
      hasNext
    }
  }
}
```

**Variables - Cơ Bản:**
```json
{
  "query": {
    "page": 1,
    "limit": 10
  }
}
```

**Variables - Nâng Cao:**
```json
{
  "query": {
    "page": 1,
    "limit": 20,
    "search": "admin",
    "sortBy": "created_at",
    "sortOrder": "DESC",
    "filters": {
      "role": "ADMIN",
      "is_active": true,
      "email": "gmail",
      "permissions": ["CREATE_USER", "DELETE_USER"]
    }
  }
}
```

### Tạo User Mới (Admin)

```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(createUserInput: $input) {
    id
    email
    name
    role
    created_at
  }
}
```

### Lấy User Theo ID

```graphql
query GetUserById($id: String!) {
  userById(id: $id) {
    id
    email
    name
    address
    role
    permissions
    is_active
    created_at
  }
}
```

### Xóa User (Soft Delete)

```graphql
mutation DeleteUser($id: String!) {
  deleteUser(id: $id) {
    id
    email
    is_active
    updated_at
  }
}
```

### Admin Reset Mật Khẩu

```graphql
mutation AdminResetPassword($input: AdminUpdateUserPasswordInput!) {
  adminUpdateUserPassword(adminUpdateUserPasswordInput: $input)
}
```

**Variables:**
```json
{
  "input": {
    "userId": "550e8400-e29b-41d4-a716-446655440000",
    "new_password": "MatKhauMoi123!"
  }
}
```

---

## 📋 Phân Trang (Pagination)

### Tham Số Phân Trang

| Tham Số | Kiểu | Mặc Định | Mô Tả |
|---------|------|----------|-------|
| `page` | Number | 1 | Số trang (bắt đầu từ 1) |
| `limit` | Number | 10 | Số items per page (tối đa 100) |
| `search` | String | null | Tìm kiếm trong email + name |
| `sortBy` | String | "created_at" | Field để sắp xếp |
| `sortOrder` | Enum | "DESC" | ASC hoặc DESC |
| `filters` | Object | null | Các bộ lọc nâng cao |

### Bộ Lọc Có Sẵn

| Bộ Lọc | Kiểu | Mô Tả |
|---------|------|-------|
| `role` | Enum | Lọc theo vai trò (ADMIN, MANAGER, STAFF, USER, GUEST) |
| `is_active` | Boolean | Lọc users active/inactive |
| `permissions` | Array | Lọc users có permissions cụ thể |
| `email` | String | Tìm kiếm trong email |
| `name` | String | Tìm kiếm trong tên |

### Response Format

```json
{
  "success": true,
  "message": "Tìm thấy 5/25 users",
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3,
    "hasPrevious": false,
    "hasNext": true
  }
}
```

---

## 🚨 Error Handling

### 1. Lỗi Xác Thực (401)
```json
{
  "errors": [{
    "message": "Bạn cần đăng nhập để thực hiện thao tác này",
    "extensions": { "code": "UNAUTHENTICATED" }
  }]
}
```

### 2. Lỗi Phân Quyền (403)
```json
{
  "errors": [{
    "message": "Bạn không đủ quyền. Thiếu: CREATE_USER",
    "extensions": { "code": "FORBIDDEN" }
  }]
}
```

### 3. Lỗi Dữ Liệu Đầu Vào (400)
```json
{
  "errors": [{
    "message": "Email không hợp lệ",
    "extensions": { "code": "BAD_REQUEST" }
  }]
}
```

### 4. Không Tìm Thấy (404)
```json
{
  "errors": [{
    "message": "Không tìm thấy người dùng với id 550e8400-e29b-41d4-a716-446655440000",
    "extensions": { "code": "NOT_FOUND" }
  }]
}
```

---

## 🔐 Role & Permission Matrix

| API Endpoint | Required Permission | ADMIN | MANAGER | STAFF | USER | GUEST |
|--------------|-------------------|-------|---------|-------|------|-------|
| `register` | None (Public) | ✅ | ✅ | ✅ | ✅ | ✅ |
| `login` | None (Public) | ✅ | ✅ | ✅ | ✅ | ✅ |
| `user` (own) | READ_USER | ✅ | ✅ | ✅ | ✅ | ❌ |
| `usersPaginated` | VIEW_ALL_USERS | ✅ | ✅ | ✅ | ❌ | ❌ |
| `createUser` | CREATE_USER | ✅ | ✅ | ❌ | ❌ | ❌ |
| `updateUserInfo` | UPDATE_USER_INFO | ✅ | ✅ | ✅ | ✅ | ❌ |
| `deleteUser` | DELETE_USER | ✅ | ✅ | ❌ | ❌ | ❌ |
| `adminUpdatePassword` | ADMIN_UPDATE_PASSWORD | ✅ | ❌ | ❌ | ❌ | ❌ |

---

## 🧪 Testing và Examples

### Complete User Journey Test

#### 1. Đăng Ký → Đăng Nhập → Lấy Thông Tin
```graphql
# Bước 1: Đăng ký
mutation {
  register(createUserInput: {
    name: "Test User"
    email: "test@example.com"
    password: "TestPassword123!"
  }) {
    id email role
  }
}

# Bước 2: Đăng nhập
mutation {
  login(input: {
    email: "test@example.com"
    password: "TestPassword123!"
  }) {
    access_token
    user { id email role }
  }
}

# Bước 3: Lấy thông tin (với token)
query {
  user {
    id email name role permissions
  }
}
```

### Admin Test Scenarios

#### 1. Admin Workflow
```graphql
# Login với admin account
mutation AdminLogin {
  login(input: {
    email: "admin@example.com"
    password: "AdminPassword123!"
  }) {
    access_token
    user { role permissions }
  }
}

# Lấy danh sách users với pagination
query GetUsers {
  usersPaginated(query: {
    page: 1, limit: 10
    search: "test"
    filters: { role: USER, is_active: true }
  }) {
    success
    data { id email name role }
    pagination { total hasNext }
  }
}

# Tạo user mới
mutation CreateNewUser {
  createUser(createUserInput: {
    name: "New Employee"
    email: "employee@company.com"
    password: "TempPassword123!"
  }) {
    id email role created_at
  }
}
```

### Schema Introspection

```graphql
# Lấy thông tin schema
query GetSchema {
  __schema {
    types {
      name
      kind
      description
    }
  }
}

# Lấy available queries
query GetQueries {
  __schema {
    queryType {
      fields {
        name
        description
        args { name type { name } }
      }
    }
  }
}
```

### cURL Examples

```bash
# Đăng nhập
curl -X POST http://localhost:9703/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "mutation { login(input: {email: \"admin@example.com\", password: \"admin123\"}) { access_token user { role } } }"
  }'

# Authenticated request  
curl -X POST http://localhost:9703/graphql \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query { usersPaginated(query: {page: 1, limit: 10}) { data { id email name } pagination { total } } }"
  }'
```

---

## 🛠️ Development Tools

### GraphQL Playground Headers
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Rate Limiting
- **Mặc định**: 10 requests per minute per IP
- **Headers**: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`

### Debugging Commands
```bash
# Kiểm tra JWT token payload
echo "YOUR_JWT_TOKEN" | cut -d. -f2 | base64 -d | jq

# Test GraphQL endpoint
curl -X POST http://localhost:9703/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "query { __schema { types { name } } }"}'

# Check server health
curl http://localhost:9703/health
```

---

**📝 Lưu ý:** 
- Chỉ sử dụng `access_token` để gọi API (không phải `refresh_token`)
- Token hết hạn sau 15-30 phút, sử dụng `refreshToken` mutation để làm mới
- Tất cả API lấy dữ liệu đều có phân trang bắt buộc để đảm bảo hiệu suất

**🔗 Tài liệu liên quan:**
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Kiến trúc hệ thống chi tiết
- [PAGINATION.md](./PAGINATION.md) - Hướng dẫn phân trang đầy đủ
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Tham khảo nhanh functions