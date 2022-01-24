import { GetSchedule } from '../../typings/hyperion'
import useHyperionFetcher from '../useHyperionFetcher'

interface useGetScheduleProps {
  producer?: string
  key?: string
  after?: string
  before?: string
  version?: number
}

/**
 * Get producer schedule by version.
 *
 * `/v2/history/get_schedule`
 *
 * @param props Query options.
 * @param endpoint Hyperion api endpoint.
 * @returns {FetchResult<GetSchedule>}
 */
const useGetSchedule = (
  props?: useGetScheduleProps | null,
  endpoint?: string
) => {
  return useHyperionFetcher<GetSchedule>(
    props != null
      ? { uri: '/v2/history/get_schedule', params: props, endpoint }
      : null
  )
}

export default useGetSchedule
