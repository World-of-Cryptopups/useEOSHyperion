import { GetLinks } from '../../typings/hyperion'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetLinksProps {
  account?: string
  code?: string
  action?: string
  permission?: string
}

/**
 * Get permission links.
 *
 * `/v2/state/get_links`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetLinks>}
 */
const useGetLinks = (props?: useGetLinksProps | null, endpoint?: string) => {
  return useHyperionFetcher<GetLinks>(
    props != null
      ? { uri: '/v2/state/get_links', params: props, endpoint }
      : null
  )
}

export default useGetLinks
