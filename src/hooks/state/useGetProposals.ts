import { GetProposals } from '../../typings/hyperion'
import { LimitSkipProps } from '../../typings/props'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetProposalsProps extends LimitSkipProps {
  proposer?: string
  proposal?: string
  account?: string
  requested?: string
  provided?: string
  executed?: boolean
  track?: string
}

/**
 * Get proposals.
 *
 * `/v2/state/get_proposals`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetProposals>}
 */
const useGetProposals = (
  props?: useGetProposalsProps | null,
  endpoint?: string
) => {
  return useHyperionFetcher<GetProposals>(
    props != null
      ? { uri: '/v2/state/get_proposals', params: props, endpoint }
      : null
  )
}

export default useGetProposals
