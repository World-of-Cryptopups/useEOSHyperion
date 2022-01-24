import { GetDeltas } from '../../typings/hyperion'
import { LimitSkipProps } from '../../typings/props'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetDeltasProps extends LimitSkipProps {
  code?: string
  scope?: string
  table?: string
  payer?: string
}

/**
 * Get state deltas.
 *
 * `/v2/history/get_deltas`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetDeltas>} Query response.
 */
const useGetDeltas = (props?: useGetDeltasProps | null, endpoint?: string) => {
  return useHyperionFetcher<GetDeltas>(
    props != null
      ? { uri: '/v2/history/get_deltas', params: props, endpoint }
      : null
  )
}

export default useGetDeltas
