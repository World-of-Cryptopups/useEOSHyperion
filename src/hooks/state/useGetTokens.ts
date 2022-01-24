import { GetTokens } from '../../typings/hyperion'
import { LimitSkipProps } from '../../typings/props'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetTokensProps extends LimitSkipProps {
  account: string
}

/**
 * Get account data / summary.
 *
 * `/v2/state/get_tokens`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetTokens>}
 */
const useGetTokens = (props?: useGetTokensProps | null, endpoint?: string) => {
  return useHyperionFetcher<GetTokens>(
    props != null
      ? { uri: '/v2/state/get_tokens', params: props, endpoint }
      : null
  )
}

export default useGetTokens
