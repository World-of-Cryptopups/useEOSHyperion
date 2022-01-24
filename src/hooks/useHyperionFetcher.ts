import useSWR from 'swr'
import urljoin from 'url-join'
import { useHyperionContext } from '../component/provider'
import FetchError from '../lib/error'
import { getFetcher, postFetcher } from '../lib/fetcher'
import { FetchResult } from '../typings/fetch'

interface useHyperionFetcherProps<I, K> {
  uri: string
  params?: I
  body?: K
  method?: 'get' | 'post'
  endpoint?: string
}

/**
 * Custom hyperion api fetcher for data fetching on custom api endpoints.
 *
 * @param props Request props.
 * @returns FetchResult<T>
 */
const useHyperionFetcher = <
  T,
  I extends Record<string, any> = Record<string, any>,
  K extends Record<string, any> = Record<string, any>
>(
  props?: useHyperionFetcherProps<I, K> | null
): FetchResult<T> => {
  let { uri, params, body, method, endpoint } = props ?? { uri: '' }

  if (method == null) {
    method = 'get'
  }

  const { endpoint: contextEndpoint } = useHyperionContext()
  endpoint = endpoint != null ? endpoint : contextEndpoint

  if (endpoint == null) {
    // if endpoint is null, throw error
    throw new Error('No Hyperion API Endpoint set.')
  }

  const { data, error } = useSWR<T, FetchError>(
    props != null
      ? // this is parsed accordingly to the api endpoints request params and bodies
        [urljoin(endpoint, uri), method === 'get' ? params : body]
      : null,
    method === 'get' ? getFetcher : postFetcher
  )

  let hasFailed = false
  if (error != null) {
    hasFailed = true
  }

  return { data, hasFailed, error }
}

export default useHyperionFetcher
