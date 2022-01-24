import { GetHealth } from '../typings/hyperion'
import useHyperionFetcher from './useHyperionFetcher'

/**
 * API Service Health Report.
 *
 * @param endpoint Hyperion api endpoint.
 * @returns FetchResult<GetHealth>
 */
const useGetHealth = (endpoint?: string) => {
  return useHyperionFetcher<GetHealth>({ uri: '/v2/health', endpoint })
}

export default useGetHealth
