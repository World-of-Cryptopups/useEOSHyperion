import { GetActions } from '../../typings/hyperion'
import { LimitSkipProps } from '../../typings/props'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetActionsProps extends LimitSkipProps {
  account?: string
  track?: string
  filter?: string
  sort?: 'desc' | 'asc' | '1' | '-1'
  after?: string
  before?: string
  simple?: boolean
  noBinary?: boolean
  checkLib?: boolean
}

/**
 * Get actions based on notified account.
 *
 * `/v2/history/get_actions`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetActions>} Query response.
 */
const useGetActions = (
  props?: useGetActionsProps | null,
  endpoint?: string
) => {
  return useHyperionFetcher<GetActions>(
    props != null
      ? { uri: '/v2/history/get_actions', params: props, endpoint }
      : null
  )
}

export default useGetActions
