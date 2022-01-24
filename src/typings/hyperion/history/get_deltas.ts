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

export interface Data {
  collection?: Code
  bytes?: string
  claim_id?: string
  blenderid?: string
  blender?: Code
  templateid?: number
  assets?: string[]
  scope?: Code
  assetid?: string
  from?: Code
  total_uses?: number
}

export interface Total {
  value: number
  relation: string
}
