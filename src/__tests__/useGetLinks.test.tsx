import { renderHook } from '@testing-library/react-hooks'
import useGetLinks from '../hooks/state/useGetLinks'
import CustomWrapper from './wrapper'

describe('useGetLinks', () => {
  it('should fetch permission links', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetLinks(
          {
            code: 'eosio'
          },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)
  })
})
