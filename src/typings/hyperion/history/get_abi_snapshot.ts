import { BaseQueryResponse } from '../base'

export interface GetAbiSnapshot extends BaseQueryResponse {
  block_num: number
  present?: boolean
}

export interface ABI {
  version: string
  types: Type[]
  structs: Struct[]
  actions: Action[]
  tables: Table[]
  ricardian_clauses: any[]
  error_messages: any[]
  abi_extensions: any[]
  variants: Variant[]
}

export interface Action {
  name: string
  type: string
  ricardian_contract: string
}

export interface Struct {
  name: string
  base: string
  fields: Field[]
}

export interface Field {
  name: string
  type: string
}

export interface Table {
  name: string
  index_type: IndexType
  key_names: any[]
  key_types: any[]
  type: string
}

export type IndexType = string

export interface Type {
  new_type_name: string
  type: string
}

export interface Variant {
  name: string
  types: string[]
}
