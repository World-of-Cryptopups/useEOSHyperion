import { BaseQueryResponse } from '../base'

export interface GetVoters extends BaseQueryResponse {
  voters: Voter[]
}

export interface Voter {
  account: string
  weight: number
  last_vote: number
}
