import { renderHook } from '@testing-library/react-hooks'
import useGetProposals from '../hooks/state/useGetProposals'
import CustomWrapper from './wrapper'

describe('useGetProposals', () => {
  it('should fetch proposals', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetProposals(
          {
            limit: 3
          },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect(result.current.data?.proposals.length === 3)
  })
})
