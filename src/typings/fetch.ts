import FetchError from '../lib/error'

export interface FetchResult<T> {
  data?: T
  hasFailed: boolean
  error?: FetchError
}
