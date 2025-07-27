# 📋 Hướng Dẫn Phân Trang Toàn Diện

## 🎯 Tổng Quan

Hệ thống phân trang được thiết kế để:

1. **Tái sử dụng**: Một codebase cho tất cả các nhu cầu phân trang
2. **Chuẩn hóa**: API nhất quán và định dạng phản hồi thống nhất
3. **Bảo mật**: Tất cả API lấy dữ liệu đều phải có phân trang
4. **Hiệu suất**: Phân trang ở cấp độ database với tối ưu hóa
5. **Linh hoạt**: Hỗ trợ lọc, tìm kiếm và sắp xếp

⚠️ **LƯU Ý QUAN TRỌNG**: Tất cả các API lấy dữ liệu đều PHẢI sử dụng phân trang. Không còn hỗ trợ lấy toàn bộ dữ liệu không phân trang để đảm bảo hiệu suất và bảo mật.

## 🏗️ Kiến Trúc

```
PaginationService (Core)
├── PaginationOptions<T> - Cấu hình phân trang
├── PaginationInputDTO - Input từ người dùng
├── BasePaginatedResponseDTO<T> - Standardized response
├── FilterConfig[] - Cấu hình lọc
├── SearchConfig - Cấu hình tìm kiếm
└── PaginationHelper - Utility functions
```

## 🚀 Quick Start

### 1. Basic Implementation

```typescript
@Injectable()
export class MyService {
  constructor(private readonly paginationService: PaginationService) {}

  async findMyDataPaginated(input: PaginationInputDTO) {
    const options = PaginationHelper.createPaginationOptions('my_table')
    
    return this.paginationService.paginate(options, input)
  }
}
```

### 2. Với Filters và Search

```typescript
async findMyDataPaginated(
  input: PaginationInputDTO,
  filters?: { status?: string; category?: string }
) {
  const options = PaginationHelper.createPaginationOptions('my_table', {
    validSortFields: ['created_at', 'name', 'status'],
    defaultFilters: { is_active: true },
    maxLimit: 50,
  })

  const filterConfigs = PaginationHelper.buildFiltersFromObject(filters || {})
  const searchConfig = PaginationHelper.createSearchConfig(
    input.search || '',
    ['name', 'description']
  )

  return this.paginationService.paginate(
    options,
    input,
    filterConfigs,
    searchConfig
  )
}
```

## 📖 API Reference

### PaginationService

#### `paginate<T>(options, input, filters?, search?, customQuery?)`

**Tham số:**
- `options: PaginationOptions<T>` - Cấu hình phân trang
- `input: PaginationInputDTO` - Đầu vào từ người dùng (trang, giới hạn, tìm kiếm, sắp xếp)
- `filters?: FilterConfig[]` - Mảng các bộ lọc
- `search?: SearchConfig` - Cấu hình tìm kiếm
- `customQuery?: Function` - Tùy chỉnh query

**Trả về:** `BasePaginatedResponseDTO<T>`

### PaginationHelper

#### `createPaginationOptions<T>(tableName, options?)`

Tạo pagination options với default values.

```typescript
const options = PaginationHelper.createPaginationOptions('users', {
  defaultSortBy: 'created_at',
  validSortFields: ['created_at', 'name', 'email'],
  defaultFilters: { is_active: true },
  maxLimit: 50,
})
```

#### `buildFiltersFromObject(filtersInput, fieldMapping?)`

Convert object filters thành FilterConfig array.

```typescript
const filters = PaginationHelper.buildFiltersFromObject({
  status: 'active',
  name_like: 'john',
  age_gte: 18,
})

// Result:
// [
//   { field: 'status', operator: 'eq', value: 'active' },
//   { field: 'name', operator: 'ilike', value: 'john' },
//   { field: 'age', operator: 'gte', value: 18 }
// ]
```

#### Supported Filter Operators

| Suffix | Operator | Description | Example |
|--------|----------|-------------|---------|
| (none) | `eq` | Equals | `status: 'active'` |
| `_like` | `ilike` | Case-insensitive like | `name_like: 'john'` |
| `_in` | `in` | In array | `status_in: ['active', 'pending']` |
| `_contains` | `contains` | Array contains | `tags_contains: ['tech']` |
| `_gt` | `gt` | Greater than | `age_gt: 18` |
| `_gte` | `gte` | Greater than or equal | `age_gte: 18` |
| `_lt` | `lt` | Less than | `price_lt: 100` |
| `_lte` | `lte` | Less than or equal | `price_lte: 100` |

## 📡 GraphQL API Examples

### 1. Basic Pagination Query

```graphql
query GetUsersPaginated {
  usersPaginated(query: {
    page: 1
    limit: 10
  }) {
    success
    message
    data {
      id
      name
      email
      role
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

### 2. Pagination với Search

```graphql
query SearchUsers {
  usersPaginated(query: {
    page: 1
    limit: 5
    search: "admin"
  }) {
    success
    message
    data {
      id
      name
      email
      role
      permissions
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

### 3. Pagination với Filtering

```graphql
query FilterUsers {
  usersPaginated(query: {
    page: 1
    limit: 10
    sortBy: "email"
    sortOrder: ASC
    filters: {
      role: ADMIN
      is_active: true
    }
  }) {
    success
    message
    data {
      id
      name
      email
      role
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

### 4. Advanced Filtering với Multiple Permissions

```graphql
query FilterByPermissions {
  usersPaginated(query: {
    page: 1
    limit: 20
    search: "user"
    sortBy: "created_at"
    sortOrder: DESC
    filters: {
      permissions: [READ_USER, UPDATE_USER_INFO]
      email: "gmail"
    }
  }) {
    success
    message
    data {
      id
      name
      email
      role
      permissions
      created_at
      updated_at
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

### Response Example

```json
{
  "data": {
    "usersPaginated": {
      "success": true,
      "message": "Tìm thấy 5/25 users",
      "data": [
        {
          "id": "550e8400-e29b-41d4-a716-446655440000", 
          "name": "Admin User",
          "email": "admin@example.com",
          "role": "ADMIN",
          "created_at": "2023-12-01T10:00:00Z"
        }
      ],
      "pagination": {
        "currentPage": 1,
        "limit": 5,
        "total": 25,
        "totalPages": 5,
        "hasPrevious": false,
        "hasNext": true
      }
    }
  }
}
```

## 🔧 Implementation Examples

### 1. User Service (Current Implementation)

```typescript
@Injectable()
export class UserService {
  constructor(private readonly paginationService: PaginationService) {}

  async findAllPaginated(input: PaginationInputDTO, filters?: UserFilters) {
    const options: PaginationOptions<IUser> = {
      tableName: 'users',
      selectFields: '*',
      defaultSortBy: 'created_at', 
      validSortFields: ['created_at', 'updated_at', 'email', 'name', 'role'],
      defaultFilters: { is_active: this.appConfigService.userStatus.active },
      maxLimit: 100,
    }

    const filterConfigs = this.buildUserFilters(filters)
    const searchConfig = this.buildUserSearch(input.search)

    return this.paginationService.paginate<IUser>(
      options,
      input,
      filterConfigs,
      searchConfig
    )
  }

  private buildUserFilters(filters: UserQueryFiltersInput): FilterConfig[] {
    const filterConfigs: FilterConfig[] = []

    if (filters.role) {
      filterConfigs.push({ field: 'role', operator: 'eq', value: filters.role })
    }

    if (filters.is_active !== undefined) {
      filterConfigs.push({ field: 'is_active', operator: 'eq', value: filters.is_active })
    }

    if (filters.permissions && filters.permissions.length > 0) {
      filterConfigs.push({ field: 'permissions', operator: 'contains', value: filters.permissions })
    }

    if (filters.email) {
      filterConfigs.push({ field: 'email', operator: 'ilike', value: `%${filters.email}%` })
    }

    if (filters.name) {
      filterConfigs.push({ field: 'name', operator: 'ilike', value: `%${filters.name}%` })
    }

    return filterConfigs
  }
}
```

### 2. GraphQL Resolver Implementation

```typescript
@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UsersPaginatedResponseDTO)
  @Permissions(Permission.VIEW_ALL_USERS)
  async usersPaginated(
    @Args('query', { type: () => UserQueryInput, nullable: true })
    query?: UserQueryInput
  ): Promise<UsersPaginatedResponseDTO> {
    const input = query || {}
    const paginationInput: PaginationInputDTO = {
      page: input.page || 1,
      limit: input.limit || 10,
      search: input.search,
      sortBy: input.sortBy || 'created_at',
      sortOrder: input.sortOrder || SortOrder.DESC,
    }

    const result = await this.userService.findAllPaginated(paginationInput, input.filters)

    return {
      success: true,
      message: `Tìm thấy ${result.data.length}/${result.pagination.total} users`,
      data: result.data,
      pagination: result.pagination,
    }
  }
}
```

## 📋 Response Format

### Paginated Response Structure

```typescript
{
  success: boolean
  message?: string
  data: T[]
  pagination: {
    currentPage: number
    limit: number
    total: number
    totalPages: number
    hasPrevious: boolean
    hasNext: boolean
  }
}
```

## 🛡️ Security Guidelines

### 1. Regular Pagination

✅ **Allowed for all authenticated users**
- Use `@Permissions(Permission.VIEW_SPECIFIC_RESOURCE)` 
- Always include pagination để prevent performance issues
- Default limit: 10, max limit: 100

### 2. Admin Operations với High Limit

🚨 **Yêu cầu quyền cao nhất cho operations lớn**
- Sử dụng `@Permissions(Permission.SYSTEM_CONFIG)` hoặc tương đương
- Thêm warning logs cho admin access
- Chỉ dành cho export, backup, hoặc system operations
- Sử dụng limit cao (1000-5000) thay vì không phân trang

```typescript
// ✅ Good - admin only với logging và limit hợp lý
@Query(() => UsersResponseDTO)
@Permissions(Permission.SYSTEM_CONFIG)
async exportUsersForAdmin(@CurrentUserId() adminId: string) {
  this.logger.warn(`Admin ${adminId} xuất dữ liệu users với limit cao`, 'UserResolver')
  return this.userService.findAllPaginated({ page: 1, limit: 5000 })
}
```

## 🎨 Customization

### Custom Query Builder

```typescript
const result = await this.paginationService.paginate(
  options,
  input,
  filters,
  search,
  (query) => {
    // Custom modifications
    return query
      .select('*, profiles!inner(*)')  // JOIN với profiles
      .neq('deleted_at', null)         // Exclude soft-deleted
  }
)
```

### Custom Field Mapping

```typescript
const filters = PaginationHelper.buildFiltersFromObject(
  { user_name: 'john', user_email: '@gmail' },
  { user_name: 'name', user_email: 'email' }  // Field mapping
)
```

## 📊 Features & Performance

### ✅ Implemented Features:
- **Pagination**: page, limit parameters
- **Search**: Full-text search across multiple fields
- **Sorting**: Configurable sort field và order (ASC/DESC)
- **Filtering**: Role, status, permissions, field-specific filters
- **Validation**: Input validation với max limit 100
- **Performance**: Database-level pagination với Supabase range()
- **Metadata**: Complete pagination info (total, totalPages, hasPrevious, hasNext)

### 🔒 Security Features:
- **Permission-based**: Requires appropriate permissions
- **SQL Injection Protection**: Parameterized queries
- **Input Validation**: Sanitized sort fields
- **Rate Limiting**: Max 100 items per page

### 🚀 Performance Optimizations:
- **Database-level pagination**: Sử dụng Supabase `range()`
- **Count optimization**: Separate count query khi cần
- **Index-friendly sorting**: Default sort by `created_at`
- **Efficient search**: Sử dụng `ilike` operator

### Performance Tips

1. **Database Indexes**: Tạo indexes cho commonly sorted/filtered fields
2. **Limit Search Fields**: Không search toàn bộ table
3. **Default Filters**: Always filter inactive/deleted records
4. **Max Limits**: Enforce reasonable max limits (50-100)

```sql
-- Recommended indexes
CREATE INDEX idx_users_active_created ON users(is_active, created_at);
CREATE INDEX idx_users_role_email ON users(role, email);
CREATE INDEX idx_users_name_gin ON users USING GIN(to_tsvector('english', name));
```

## 🔍 Debugging

### Enable Debug Logs

```typescript
// Trong service constructor
this.logger.setLogLevel('debug')
```

### Common Issues

1. **"Field not found"** → Check `validSortFields` array
2. **"Permission denied"** → Verify user has required permissions
3. **"Performance issues"** → Check if indexes exist cho search fields
4. **"Filter not working"** → Verify filter operator và field name

## 🚀 Migration Guide

### Từ Non-Paginated sang Paginated APIs

Tất cả các API không phân trang đã được loại bỏ để đảm bảo bảo mật và hiệu suất:

```typescript
// ❌ ĐÃ BỊ LOẠI BỎ - Không còn hỗ trợ
@Query(() => [User])
users() {
  return this.userService.findAll() // Trả về tất cả dữ liệu - KHÔNG AN TOÀN
}

// ✅ BẮT BUỘC PHẢI SỬ DỤNG - Có phân trang
@Query(() => UsersResponse)
@Permissions(Permission.VIEW_ALL_USERS)
users(@Args('query') query: PaginationInputDTO) {
  return this.userService.findAllPaginated(query)
}
```

### Frontend Migration

```typescript
// ❌ Cũ - ĐÃ BỊ LOẠI BỎ
const { data: users } = await client.query({ query: GET_ALL_USERS })

// ✅ Mới - BẮT BUỘC PHẢI CÓ PAGINATION
const { data: { usersPaginated } } = await client.query({
  query: GET_USERS_PAGINATED,
  variables: { query: { page: 1, limit: 10 } }
})
```

## 📊 Testing Commands

```bash
# Build và test
cd backend
npm run build
npm run lint

# Start server
npm run start:dev

# GraphQL Playground
# Navigate to: http://localhost:9703/graphql
```

---

**📚 Xem thêm:**
- [API_REFERENCE.md](./API_REFERENCE.md) - Complete GraphQL API documentation
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture details
- [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) - Quick function reference