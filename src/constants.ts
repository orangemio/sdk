import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  BSCTestnet = 97,
  BSC = 56,
  MATIC = 137
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.BSCTestnet]: '0x8A01D7F2e171c222372F0962BEA84b8EB5a3368E',
  [ChainId.BSC]: '0x8A01D7F2e171c222372F0962BEA84b8EB5a3368E',
  [ChainId.MATIC]: '0x8A01D7F2e171c222372F0962BEA84b8EB5a3368E',
}

export const INIT_CODE_HASH : { [chainId in ChainId]: string } = {
  [ChainId.BSCTestnet]: '0xb3fc7cf25e88f4dc5963807449ac0a42f7a9fc2eb8302fbeb5753bbd5a0e3afc',
  [ChainId.BSC]: '0xb3fc7cf25e88f4dc5963807449ac0a42f7a9fc2eb8302fbeb5753bbd5a0e3afc',
  [ChainId.MATIC]: '0x8219a90d6773d65f6fdb6947d189b719d05c173957bde022aa4e48035376c9b2',
}


export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
