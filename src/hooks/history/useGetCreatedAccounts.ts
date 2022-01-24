import { GetCreatedAccounts } from '../../typings/hyperion'
import { LimitSkipProps } from '../../typings/props'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetCreatedAccountsProps extends LimitSkipProps {
  account: string
}

/**
 * Get all accounts created by one creator.
 *
 * `/v2/history/get_created_accounts`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetCreatedAccounts>}
 */
const useGetCreatedAccounts = (
  props?: useGetCreatedAccountsProps | null,
  endpoint?: string
) => {
  return useHyperionFetcher<GetCreatedAccounts>(
    props != null
      ? { uri: '/v2/history/get_created_accounts', params: props, endpoint }
      : null
  )
}

export default useGetCreatedAccounts
