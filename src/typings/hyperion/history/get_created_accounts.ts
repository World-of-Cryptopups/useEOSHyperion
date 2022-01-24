import { BaseQueryResponse } from '../base'

export interface GetCreatedAccounts extends BaseQueryResponse {
  accounts: Account[]
}

export interface Account {
  name: string
  timestamp: string
  trx_id: string
}
