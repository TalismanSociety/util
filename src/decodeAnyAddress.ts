import { decodeAddress } from '@polkadot/keyring'
import { isEthereumAddress } from '@polkadot/util-crypto'

import { hexToBytes } from './hexToBytes'

export function decodeAnyAddress(
  encoded?: string | Uint8Array | null | undefined,
  ignoreChecksum?: boolean | undefined,
  ss58Format?: number | undefined
): Uint8Array {
  try {
    return decodeAddress(encoded, ignoreChecksum, ss58Format)
  } catch (error) {
    if (typeof encoded !== 'string') throw error
    if (!isEthereumAddress(encoded)) throw error

    return hexToBytes(encoded.slice('0x'.length))
  }
}
