import { BaseQueryResponse } from '../base'

export interface GetDeltas extends BaseQueryResponse {
  total: Total
  deltas: Delta[]
}

export interface Delta {
  timestamp: string
  code: Code
  scope: Code
  table: string
  primary_key: string
  payer: Code
  present: boolean
  block_num: number
  data: Data
  block_id: string
}

export type Code = string

export type Data = Record<string, any>

export interface Total {
  value: number
  relation: string
}
