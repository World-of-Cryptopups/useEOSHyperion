import { BaseQueryResponse } from '../base'

export interface GetTokens extends BaseQueryResponse {
  account: string
  tokens: Token[]
}

export interface Token {
  symbol: string
  precision: number
  amount: number
  contract: string
}
