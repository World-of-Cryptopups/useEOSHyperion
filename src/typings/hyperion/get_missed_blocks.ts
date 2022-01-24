import { BaseQueryResponse } from './base'

export interface GetMissedBlocks extends BaseQueryResponse {
  stats: Stats
  events: Event[]
}

export interface Event {
  '@timestamp': string
  last_block: number
  schedule_version: number
  size: number
  producer: string
}

export interface Stats {
  by_producer: { [key: string]: number }
}
