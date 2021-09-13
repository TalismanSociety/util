// Copyright 2019-2021 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Gratefully adapted from https://github.com/polkadot-js/extension/blob/master/packages/extension-ui/src/util/chains.ts

import type { MetadataDefBase } from '@polkadot/extension-inject/types'
import { selectableNetworks } from '@polkadot/networks'

export const chains: MetadataDefBase[] = selectableNetworks
  .filter(({ genesisHash }) => !!genesisHash.length)
  .map(network => ({
    chain: network.displayName,
    genesisHash: network.genesisHash[0],
    icon: network.icon,
    ss58Format: network.prefix,
  }))
