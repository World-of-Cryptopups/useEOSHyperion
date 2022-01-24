import { GetTransaction } from '../../typings/hyperion'
import useHyperionFetcher from '../useHyperionFetcher'

/**
 * Get all actions belonging to the same transaction.
 *
 * `/v2/history/get_transaction`
 *
 * @param id Transaction id.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetTransaction>}
 */
const useGetTransaction = (id?: string | null, endpoint?: string) => {
  return useHyperionFetcher<GetTransaction>(
    id != null
      ? { uri: '/v2/history/get_transaction', params: { id }, endpoint }
      : null
  )
}

export default useGetTransaction
