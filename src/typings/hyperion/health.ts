import { BaseQueryResponse } from './base'

export interface GetHealth extends BaseQueryResponse {
  version: string
  version_hash: string
  host: string
  features: Features
  health: Health[]
  cached: boolean
}

export interface Features {
  streaming: Streaming
  tables: Tables
  index_deltas: boolean
  index_transfer_memo: boolean
  index_all_deltas: boolean
  deferred_trx: boolean
  failed_trx: boolean
  resource_limits: boolean
  resource_usage: boolean
}

export interface Streaming {
  enable: boolean
  traces: boolean
  deltas: boolean
}

export interface Tables {
  proposals: boolean
  accounts: boolean
  voters: boolean
}

export interface Health {
  service: string
  status: string
  time: number
  service_data?: ServiceData
}

export interface ServiceData {
  head_block_num?: number
  head_block_time?: string
  time_offset?: number
  last_irreversible_block?: number
  chain_id?: string
  last_indexed_block?: number
  total_indexed_blocks?: number
  active_shards?: string
}
