import { GetCreator } from '../../typings/hyperion'
import useHyperionFetcher from '../useHyperionFetcher'

/**
 * Get account creator.
 *
 * `/v2/history/get_creator`
 *
 * @param account Created account.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetCreator>}
 */
const useGetCreator = (account?: string | null, endpoint?: string) => {
  return useHyperionFetcher<GetCreator>(
    account != null
      ? { uri: '/v2/history/get_creator', params: { account }, endpoint }
      : null
  )
}

export default useGetCreator
