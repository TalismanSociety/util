import BigNumber from 'bignumber.js'

export function tokensToPlanck(tokens: string, tokenDecimals?: number): string | undefined {
  if (!tokens || typeof tokenDecimals !== 'number') return

  const base = new BigNumber(10)
  const exponent = new BigNumber(tokenDecimals)
  const multiplier = base.pow(exponent)

  return new BigNumber(tokens).multipliedBy(multiplier).toString()
}
