import { GetAbiSnapshot } from '../../typings/hyperion'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetABISnapshotProps {
  /**
   * Contract account.
   */
  contract: string
  /**
   * Target block.
   */
  block?: number
  /**
   * Should fetch the ABI.
   */
  fetch?: boolean
}

/**
 * Fetch contract abi at specific block.
 *
 * `/v2/history/get_abi_snapshot`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetAbiSnapshot>} Query response.
 */
const useGetABISnapshot = (
  props?: useGetABISnapshotProps | null,
  endpoint?: string
) => {
  return useHyperionFetcher<GetAbiSnapshot>(
    props != null
      ? { uri: '/v2/history/get_abi_snapshot', params: props, endpoint }
      : null
  )
}

export default useGetABISnapshot
