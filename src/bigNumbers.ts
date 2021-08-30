import BigNumber from 'bignumber.js'

export function addBigNumbers(a?: string, b?: string): string | undefined {
  if (!a && !b) return undefined
  if (!a) return b
  if (!b) return a

  return new BigNumber(a).plus(new BigNumber(b)).toString()
}

export function multiplyBigNumbers(a?: string, b?: string): string | undefined {
  if (!a && !b) return undefined
  if (!a) return '0'
  if (!b) return '0'

  return new BigNumber(a).multipliedBy(new BigNumber(b)).toString()
}
