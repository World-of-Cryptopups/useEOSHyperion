import { BaseQueryResponse } from '../base'

export interface GetLinks extends BaseQueryResponse {
  query_time_ms: number
  cached: boolean
  total: Total
  links: Links[]
}

export interface Links {
  block_num: number
  timestamp: string
  account: string
  permission: string
  code: string
  action: string
  irreversible: boolean
}

export interface Total {
  value: number
  relation: string
}
