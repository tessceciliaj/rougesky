/**
 * validation to make sure at least one of two conditions are met
 *
 * @param either first condition. if the function throws an `Error`, the condition is considered invalid
 * @param or second condition. if the function throws an `Error`, the condition is considered invalid
 * @param message error message
 *
 * @example
 * ```ts
 * import { assert } from '@/utils/assert'
 *
 * eitherOr(
 *  () => assert(true),
 *  () => assert(false),
 *  'this error will never be returned'
 * )
 * ```
 */
export const eitherOr = (
  either: () => void,
  or: () => void,
  message: string,
): true | string => {
  try {
    either()
    return true
  } catch {
    try {
      or()
      return true
    } catch {
      return message
    }
  }
}
