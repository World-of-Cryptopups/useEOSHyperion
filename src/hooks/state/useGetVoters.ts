import { GetVoters } from '../../typings/hyperion'
import { LimitSkipProps } from '../../typings/props'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetVotersProps extends LimitSkipProps {
  producer?: string
}

/**
 * Get voters.
 *
 * `/v2/state/get_voters`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetVoters>}
 */
const useGetVoters = (props?: useGetVotersProps | null, endpoint?: string) => {
  return useHyperionFetcher<GetVoters>(
    props != null
      ? { uri: '/v2/state/get_voters', params: props, endpoint }
      : null
  )
}

export default useGetVoters
