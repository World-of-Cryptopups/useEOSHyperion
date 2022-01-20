import ChainError from '../lib/error'
import { InternalServerErrorProps } from './error'

export interface FetchResult<T> {
  data?: T
  hasFailed: boolean
  error?: ChainError<InternalServerErrorProps>
}
