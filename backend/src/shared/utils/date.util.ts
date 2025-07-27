function formatToPostgresTimestamp(date: Date = new Date()): string {
  return date.toISOString().replace('T', ' ').replace('Z', '+00')
}

export function getCurrentPostgresTimestamp(): string {
  return formatToPostgresTimestamp()
}
