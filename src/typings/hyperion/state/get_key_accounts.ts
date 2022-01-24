export interface GetKeyAccounts {
  account_names: string[]
  permissions?: PermissionElement[]
}

export interface PermissionElement {
  owner: string
  block_num: number
  parent: string
  last_updated: string
  auth: Auth
  name: string
  present: boolean
}

export interface Auth {
  keys: Key[]
  threshold: number
  accounts: Account[]
}

export interface Account {
  weight: number
  permission: AccountPermission
}

export interface AccountPermission {
  actor: string
  permission: string
}

export interface Key {
  weight: number
  key: string
}
