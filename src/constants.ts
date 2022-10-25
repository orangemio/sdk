import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  BSCTestnet = 97,
  BSC = 56,
  DRAC = 3912,
  CRO = 25
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
  [ChainId.CRO]: '0x8A01D7F2e171c222372F0962BEA84b8EB5a3368E',
  [ChainId.DRAC]: '0x8065cFf2f64443E545d89a82f234a1Dd285D3FE7',
}

export const INIT_CODE_HASH : { [chainId in ChainId]: string } = {
  [ChainId.BSCTestnet]: '0xb3fc7cf25e88f4dc5963807449ac0a42f7a9fc2eb8302fbeb5753bbd5a0e3afc',
  [ChainId.BSC]: '0xb3fc7cf25e88f4dc5963807449ac0a42f7a9fc2eb8302fbeb5753bbd5a0e3afc',
  [ChainId.CRO]: '0x683297db8edf7b868dd0c5d03ca55b3cd6ac021beb3ad6eb8ab3db5020796d8c',
  [ChainId.DRAC]: '0x4f250c133437908081d253a8b5300c8c0e3ac9582d2fff5b91203958b0ec48cb',
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
