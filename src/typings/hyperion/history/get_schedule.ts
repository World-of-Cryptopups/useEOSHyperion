import { BaseQueryResponse } from '../base'

export interface GetSchedule extends BaseQueryResponse {
  timestamp: string
  block_num: number
  version: number
  producers: Producer[]
}

export interface Producer {
  producer_name: string
  block_signing_key: string
  legacy_key: string
}
