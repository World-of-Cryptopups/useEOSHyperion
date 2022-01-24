import { GetMissedBlocks } from '../typings/hyperion'
import useHyperionFetcher from './useHyperionFetcher'

interface useGetMissedBlocksProps {
  producer?: string
  after?: string
  before?: string
  min_blocks?: number
}

/**
 * Get missed blocks.
 *
 * `/v2/stats/get_missed_blocks`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetMissedBlocks>}
 */
const useGetMissedBlocks = (
  props?: useGetMissedBlocksProps | null,
  endpoint?: string
) => {
  return useHyperionFetcher<GetMissedBlocks>(
    props != null
      ? {
          uri: '/v2/stats/get_missed_blocks',
          params: props,
          endpoint
        }
      : null
  )
}

export default useGetMissedBlocks
