import { BaseQueryResponse } from '../base'

export interface GetAccount extends BaseQueryResponse {
  account: GetAccountAccount
  links: GetAccountLinks[]
  tokens: Token[]
  total_actions: number
  actions: Action[]
}

export interface GetAccountLinks {
  timestamp: string
  permission: string
  code: string
  action: string
}

export interface GetAccountAccount {
  account_name: AccountName
  head_block_num: number
  head_block_time: string
  privileged: boolean
  last_code_update: string
  created: string
  core_liquid_balance: string
  ram_quota: number
  net_weight: string
  cpu_weight: string
  net_limit: Limit
  cpu_limit: Limit
  ram_usage: number
  permissions: PermissionElement[]
  total_resources: TotalResources
  self_delegated_bandwidth: SelfDelegatedBandwidth
  refund_request: null
  voter_info: VoterInfo
  rex_info: null
  subjective_cpu_bill_limit: Limit
}

export enum AccountName {
  Atomicassets = 'atomicassets',
  Fckedupmyacc = 'fckedupmyacc',
  OrngWax = 'orng.wax',
  Shomaiiblend = 'shomaiiblend'
}

export interface Limit {
  used: number
  available: number
  max: number
}

export interface PermissionElement {
  perm_name: string
  parent: string
  required_auth: RequiredAuth
}

export interface RequiredAuth {
  threshold: number
  keys: Key[]
  accounts: AccountElement[]
  waits: any[]
}

export interface AccountElement {
  permission: Ion
  weight: number
}

export interface Ion {
  actor: AccountName
  permission: PermissionEnum
}

export enum PermissionEnum {
  Active = 'active',
  EosioCode = 'eosio.code'
}

export interface Key {
  key: string
  weight: number
}

export interface SelfDelegatedBandwidth {
  from: AccountName
  to: AccountName
  net_weight: string
  cpu_weight: string
}

export interface TotalResources {
  owner: AccountName
  net_weight: string
  cpu_weight: string
  ram_bytes: number
}

export interface VoterInfo {
  owner: AccountName
  proxy: string
  producers: any[]
  staked: string
  unpaid_voteshare: string
  unpaid_voteshare_last_updated: string
  unpaid_voteshare_change_rate: string
  last_claim_time: string
  last_vote_weight: string
  proxied_vote_weight: string
  is_proxy: number
  flags1: number
  reserved2: number
  reserved3: string
}

export interface Action {
  '@timestamp': string
  timestamp: string
  block_num: number
  trx_id: string
  act: Act
  notified: AccountName[]
  account_ram_deltas: AccountRAMDelta[]
  global_sequence: number
  producer: string
  action_ordinal: number
  creator_action_ordinal: number
  cpu_usage_us?: number
  net_usage_words?: number
}

export interface AccountRAMDelta {
  account: AccountName
  delta: number
}

export interface Act {
  account: AccountName
  name: string
  authorization: Ion[]
  data: Data
}

export interface Data {
  asset_owner?: AccountName
  asset_id?: string
  authorized_minter?: AccountName
  collection_name?: string
  schema_name?: string
  template_id?: number
  new_asset_owner?: AccountName
  immutable_data?: any[]
  mutable_data?: any[]
  tokens_to_back?: any[]
  claim_id?: string
  blender?: AccountName
  scope?: string
  assoc_id?: string
  random_value?: string
  signing_value?: string
  caller?: AccountName
  blenderid?: string
  assetids?: string[]
  from?: AccountName
  to?: AccountName
  asset_ids?: string[]
  memo?: string
}

export interface Token {
  symbol: string
  precision: number
  amount: number
  contract: string
}
