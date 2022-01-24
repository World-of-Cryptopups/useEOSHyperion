import { BaseQueryResponse } from '../base'

export interface GetProposals extends BaseQueryResponse {
  query_time: any
  cached: boolean
  total: Total
  proposals: Proposal[]
}

export interface Proposal {
  provided_approvals: EdApproval[]
  block_num: number
  proposer: string
  requested_approvals: EdApproval[]
  proposal_name: string
  executed: boolean
  primary_key: string
}

export interface EdApproval {
  actor: string
  permission: string
  time: string
}

export interface Total {
  value: number
  relation: string
}
