const prefix = 'Assertion failed'

export function assert(
  condition: unknown,
  message?: string,
): asserts condition {
  if (condition) return

  const error = message ? `${prefix}: ${message}` : prefix
  throw new Error(error)
}
