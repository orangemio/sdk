import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  BSCTestnet = 97,
  BSC = 56,
  ETH = 1
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
  [ChainId.BSCTestnet]: '0x94F054F6f9F3A23414D2f6E0Ba1F7a0F627962cb',
  [ChainId.BSC]: '0xB05803cAE7B20Aa280EecBF02091A6B0421A81Ec',
  [ChainId.ETH]: '0xB05803cAE7B20Aa280EecBF02091A6B0421A81Ec',
}

export const INIT_CODE_HASH : { [chainId in ChainId]: string } = {
  [ChainId.BSCTestnet]: '0xe3ee2f4e6506982d4c97d02ed578b51dc7055c7d437dc2c7b302bf16f2b72c22',
  [ChainId.BSC]: '0xe3ee2f4e6506982d4c97d02ed578b51dc7055c7d437dc2c7b302bf16f2b72c22',
  [ChainId.ETH]: '0x4b5943b2b8bb25c90c992f4c787371fa0dc988da27a9fd44f21cd335be6f0d79',
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
