import { GetKeyAccounts } from '../../typings/hyperion'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetKeyAccountsProps {
  /**
   * Public key.
   */
  public_key: string
  /**
   * Include permission details.
   */
  details?: boolean
}

/**
 *  Get accounts by public key.
 *
 * `/v2/state/get_key_accounts`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetKeyAccounts>}
 */
const useGetKeyAccounts = (
  props?: useGetKeyAccountsProps,
  endpoint?: string
) => {
  return useHyperionFetcher<GetKeyAccounts>(
    props != null
      ? { uri: '/v2/state/get_key_accounts', params: props, endpoint }
      : null
  )
}

export default useGetKeyAccounts
