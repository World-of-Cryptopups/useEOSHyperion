import { BaseQueryResponse } from '../base'

export interface GetCreator extends BaseQueryResponse {
  account: string
  creator: string
  timestamp: string
  block_num: number
  trx_id: string
}
