import { BaseQueryResponse } from '../base'

export interface GetActions extends BaseQueryResponse {
  cached: boolean
  lib: number
  total: Total
  actions: Action[]
}

export interface Action {
  '@timestamp': string
  timestamp: string
  block_num: number
  trx_id: string
  act: Act
  notified: string[]
  cpu_usage_us?: number
  net_usage_words?: number
  account_ram_deltas?: AccountRAMDelta[]
  global_sequence: number
  receiver?: Receiver
  producer: string
  action_ordinal: number
  creator_action_ordinal: number
}

export interface AccountRAMDelta {
  account: string
  delta: number
}

export interface Act {
  account: string
  name: string
  authorization: Authorization[]
  data: Data
}

export interface Authorization {
  actor: Receiver
  permission: Permission
}

export type Receiver = string

export type Permission = string

export type Data = Record<string, any>

export interface Total {
  value: number
  relation: string
}
