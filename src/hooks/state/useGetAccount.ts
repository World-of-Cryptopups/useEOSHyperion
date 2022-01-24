import { GetAccount } from '../../typings/hyperion'
import { LimitSkipProps } from '../../typings/props'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetAccountProps extends LimitSkipProps {
  account: string
}

/**
 * Get account summary.
 *
 * `/v2/state/get_account`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetAccount>}
 */
const useGetAccount = (
  props?: useGetAccountProps | null,
  endpoint?: string
) => {
  return useHyperionFetcher<GetAccount>(
    props != null
      ? { uri: '/v2/state/get_account', params: props, endpoint }
      : null
  )
}

export default useGetAccount
