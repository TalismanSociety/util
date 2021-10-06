export function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i] = parseInt(hex.substring(i, i + 2), 16)
  }
  return bytes
}
