import { BaseQueryResponse } from '../base'

export interface GetTransaction extends BaseQueryResponse {
  executed: boolean
  trx_id: string
  lib: number
  actions: Action[]
}

export interface Action {
  action_ordinal: number
  creator_action_ordinal: number
  receiver: string
  act: Act
  context_free: boolean
  elapsed: string
  console: string
  account_ram_deltas: AccountRAMDelta[]
  '@timestamp': string
  block_num: number
  producer: string
  trx_id: string
  global_sequence: number
  cpu_usage_us: number
  net_usage_words: number
  signatures: string[]
  inline_count: number
  code_sequence: number
  abi_sequence: number
  act_digest: string
  notified: string[]
  receipts: Receipt[]
  timestamp: string
}

export interface AccountRAMDelta {
  account: string
  delta: string
}

export interface Act {
  account: string
  name: string
  authorization: Authorization[]
  data: Data
}

export interface Authorization {
  actor: string
  permission: string
}

export type Data = Record<string, any>

export interface Receipt {
  receiver: string
  global_sequence: string
  recv_sequence: string
  auth_sequence: AuthSequence[]
}

export interface AuthSequence {
  account: string
  sequence: string
}
