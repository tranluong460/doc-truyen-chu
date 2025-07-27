# 🛡️ Hướng Dẫn Type Guards - Thay Thế ESLint Disable

## 🎯 Tổng Quan

Type Guards là giải pháp thay thế tốt nhất cho việc sử dụng `eslint-disable-next-line @typescript-eslint/no-unsafe-call` và `@typescript-eslint/no-unsafe-member-access`. Thay vì tắt cảnh báo, chúng ta sử dụng runtime type checking để đảm bảo type safety.

## 🚫 Vấn Đề Cũ

```typescript
// ❌ Cách cũ - không an toàn
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const result = (someObject as any).someMethod()

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
const value = (data as any).property

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const query = client.from(tableName as any)
```

## ✅ Giải Pháp Mới - Type Guards

### 1. **Basic Type Guards**

```typescript
// ✅ Thay vì (someObject as any).someMethod()
import { hasMethod } from '@shared/utils'

if (hasMethod(someObject, 'someMethod')) {
  const result = someObject.someMethod() // Type safe!
}

// ✅ Thay vì (data as any).property
import { hasProperty } from '@shared/utils'

if (hasProperty(data, 'property')) {
  const value = data.property // Type safe!
}
```

### 2. **Supabase Type Guards**

```typescript
// ✅ Thay vì client.from(tableName as any)
import { isSupabaseQueryBuilder, validateAndExtract } from '@shared/utils'

const baseQuery = client.from(tableName)
const query = validateAndExtract(
  baseQuery,
  isSupabaseQueryBuilder,
  `Không thể tạo query builder cho ${tableName}`
)

// Bây giờ query đã type-safe
const result = await query.select('*').range(0, 9)
```

### 3. **Response Validation**

```typescript
// ✅ Thay vì const { data, error } = (response as any)
import { isSupabaseResponse, validateAndExtract } from '@shared/utils'

const validatedResponse = validateAndExtract(
  response,
  isSupabaseResponse,
  'Response không đúng format'
)

const { data, error } = validatedResponse // Type safe!
```

## 🔧 Các Loại Type Guards Có Sẵn

### 1. **Basic Type Guards**

| Function | Mô Tả | Ví Dụ |
|----------|-------|-------|
| `isString(value)` | Kiểm tra string | `if (isString(input)) { /* input is string */ }` |
| `isNumber(value)` | Kiểm tra number | `if (isNumber(age)) { /* age is number */ }` |
| `isBoolean(value)` | Kiểm tra boolean | `if (isBoolean(flag)) { /* flag is boolean */ }` |
| `isObject(value)` | Kiểm tra object | `if (isObject(data)) { /* data is object */ }` |
| `isArray(value)` | Kiểm tra array | `if (isArray(items)) { /* items is array */ }` |

### 2. **Object Property Guards**

| Function | Mô Tả | Ví Dụ |
|----------|-------|-------|
| `hasProperty(obj, 'key')` | Kiểm tra property tồn tại | `if (hasProperty(user, 'email')) { /* user.email exists */ }` |
| `hasMethod(obj, 'method')` | Kiểm tra method tồn tại | `if (hasMethod(service, 'getData')) { /* service.getData is function */ }` |

### 3. **Supabase-Specific Guards**

| Function | Mô Tả | Ví Dụ |
|----------|-------|-------|
| `isSupabaseQueryBuilder(query)` | Kiểm tra Supabase query builder | `if (isSupabaseQueryBuilder(query)) { /* safe to use */ }` |
| `isSupabaseResponse(response)` | Kiểm tra Supabase response format | `if (isSupabaseResponse(response)) { /* has data/error */ }` |

### 4. **User-Specific Guards**

| Function | Mô Tả | Ví Dụ |
|----------|-------|-------|
| `isUserObject(value)` | Kiểm tra User object | `if (isUserObject(data)) { /* data is valid User */ }` |
| `isValidEmail(value)` | Kiểm tra email hợp lệ | `if (isValidEmail(email)) { /* email format valid */ }` |
| `isValidUUID(value)` | Kiểm tra UUID hợp lệ | `if (isValidUUID(id)) { /* id is valid UUID */ }` |

### 5. **Validation Helpers**

| Function | Mô Tả | Ví Dụ |
|----------|-------|-------|
| `validateAndExtract(value, guard, errorMsg)` | Validate và throw error nếu fail | `const user = validateAndExtract(data, isUserObject, 'Invalid user')` |
| `isDefined(value)` | Kiểm tra không null/undefined | `if (isDefined(result)) { /* result is not null/undefined */ }` |

## 📚 Ví Dụ Thực Tế

### 1. **PaginationService với Type Guards**

```typescript
// ✅ Before - có eslint-disable
async paginate<T>(options: PaginationOptions<T>) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  let query = this.databaseService.getClient().from(tableName as any)
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error } = await query
}

// ✅ After - type safe với guards
async paginate<T>(options: PaginationOptions<T>) {
  const client = this.databaseService.getClient()
  const baseQuery = client.from(options.tableName)
  
  const query = validateAndExtract(
    baseQuery,
    isSupabaseQueryBuilder<T>,
    `Không thể tạo query builder cho ${options.tableName}`
  )
  
  const result = await query.select('*').range(0, 9)
  const validatedResult = validateAndExtract(
    result,
    isSupabaseResponse<T>,
    'Response từ Supabase không đúng format'
  )
  
  const { data, error } = validatedResult // Hoàn toàn type safe!
}
```

### 2. **UserService với Type Guards**

```typescript
// ✅ Safe user creation
async createUser(input: unknown) {
  // Validate input structure
  if (!isObject(input)) {
    throw new Error('Input không hợp lệ')
  }
  
  // Safe property access
  const email = hasProperty(input, 'email') && isString(input.email) 
    ? input.email 
    : undefined
    
  const name = hasProperty(input, 'name') && 
               (input.name === null || isString(input.name))
    ? input.name 
    : null
  
  // Validate required fields
  if (!email || !isValidEmail(email)) {
    throw new Error('Email bắt buộc và phải hợp lệ')
  }
  
  // Type-safe database operation
  const client = this.databaseService.getClient()
  const query = validateAndExtract(
    client.from('users'),
    isSupabaseQueryBuilder,
    'Không thể tạo query builder cho users'
  )
  
  const result = await query.insert({ email, name, role: 'USER' })
  return extractUserFromResponse(result) // Helper function với built-in validation
}
```

### 3. **Safe Object Property Access**

```typescript
// ✅ Thay vì multiple eslint-disable
function processUserData(data: unknown) {
  // Thay vì: const name = (data as any).profile?.name
  if (isObject(data) && hasProperty(data, 'profile')) {
    const profile = data.profile
    
    if (isObject(profile) && hasProperty(profile, 'name') && isString(profile.name)) {
      return profile.name
    }
  }
  
  return 'Unknown'
}
```

### 4. **Safe Method Invocation**

```typescript
// ✅ Thay vì (service as any).getData()
async function callServiceMethod(service: unknown, methodName: string) {
  if (hasMethod(service, methodName)) {
    try {
      const result = await service[methodName]()
      return result
    } catch (error) {
      logger.error(`Lỗi khi gọi ${methodName}: ${error}`)
      throw error
    }
  } else {
    throw new Error(`Method ${methodName} không tồn tại`)
  }
}
```

## 🚀 Migration Strategy

### Bước 1: Identify Unsafe Code

```bash
# Tìm tất cả eslint-disable comments
grep -r "eslint-disable.*no-unsafe" src/

# Tìm tất cả 'as any' usage
grep -r "as any" src/
```

### Bước 2: Replace với Type Guards

```typescript
// Pattern 1: Object property access
// Before: (obj as any).property
// After:
if (hasProperty(obj, 'property')) {
  const value = obj.property
}

// Pattern 2: Method calls
// Before: (obj as any).method()
// After:
if (hasMethod(obj, 'method')) {
  const result = obj.method()
}

// Pattern 3: Supabase queries
// Before: client.from(table as any)
// After:
const query = validateAndExtract(
  client.from(table),
  isSupabaseQueryBuilder,
  'Query builder error'
)
```

### Bước 3: Test & Verify

```bash
# Run ESLint để check
npm run lint

# Run tests để đảm bảo functionality
npm test

# Build để check TypeScript errors
npm run build
```

## 📋 Best Practices

### 1. **Luôn Validate Input**
```typescript
// ✅ Good
function processUser(input: unknown) {
  if (!isUserObject(input)) {
    throw new Error('Input không phải là User object hợp lệ')
  }
  // ... process user safely
}
```

### 2. **Use Specific Type Guards**
```typescript
// ❌ Too generic
if (isObject(user)) { /* not specific enough */ }

// ✅ Specific
if (isUserObject(user)) { /* perfect */ }
```

### 3. **Combine Multiple Guards**
```typescript
// ✅ Complex validation
function isValidUserUpdate(input: unknown): input is UserUpdateData {
  return isObject(input) &&
         hasProperty(input, 'id') && isValidUUID(input.id) &&
         (!hasProperty(input, 'email') || isValidEmail(input.email))
}
```

### 4. **Error Messages bằng Tiếng Việt**
```typescript
// ✅ Vietnamese error messages
const user = validateAndExtract(
  data,
  isUserObject,
  'Dữ liệu user không đúng định dạng'
)
```

## 🎯 Kết Quả

### Before Type Guards:
```typescript
// ❌ 15+ eslint-disable comments
// ❌ No runtime type safety
// ❌ Potential runtime errors
// ❌ Hard to debug issues
```

### After Type Guards:
```typescript
// ✅ 0 eslint-disable comments
// ✅ Full runtime type safety
// ✅ Clear error messages in Vietnamese
// ✅ Easy to debug and maintain
// ✅ Better developer experience
```

## 🔗 Related Files

- `src/shared/utils/type-guards.ts` - Basic type guards
- `src/shared/utils/user-type-guards.ts` - User-specific guards
- `src/shared/utils/type-safe-utilities.ts` - Utility functions
- `src/shared/examples/type-guard-examples.ts` - Complete examples
- `src/shared/services/pagination.service.ts` - Real implementation

---

**💡 Lưu ý:** Type Guards không chỉ thay thế eslint-disable mà còn cải thiện code quality, runtime safety và developer experience. Đầu tư thời gian học và implement type guards sẽ tiết kiệm rất nhiều thời gian debug sau này.