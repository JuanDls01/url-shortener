const ALPHABET =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const BASE = ALPHABET.length; // 62

/**
 * Converts a positive integer to a base62 string.
 * Used for generating short URL identifiers from database IDs.
 *
 * @param num - The positive integer to convert
 * @returns The base62 encoded string
 *
 * @example
 * toBase62(1)     // "1"
 * toBase62(62)    // "10"
 * toBase62(10000) // "2Bi"
 */
export function toBase62(num: number): string {
  if (num === 0) return ALPHABET[0];

  let result = '';
  let n = num;

  while (n > 0) {
    result = ALPHABET[n % BASE] + result;
    n = Math.floor(n / BASE);
  }

  return result;
}

/**
 * Converts a base62 string back to a positive integer.
 * Useful for decoding short URLs back to database IDs.
 *
 * @param str - The base62 encoded string
 * @returns The decoded positive integer
 *
 * @example
 * fromBase62("1")   // 1
 * fromBase62("10")  // 62
 * fromBase62("2Bi") // 10000
 */
export function fromBase62(str: string): number {
  let result = 0;

  for (const char of str) {
    result = result * BASE + ALPHABET.indexOf(char);
  }

  return result;
}
