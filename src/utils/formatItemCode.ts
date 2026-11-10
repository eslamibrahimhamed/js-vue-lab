// Normalizes an item code typed by the user: " ab-123 " → "AB-123"
export function formatItemCode(code: string): string {
  return code.trim().toUpperCase()
}
