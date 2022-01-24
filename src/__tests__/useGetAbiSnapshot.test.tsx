import { renderHook } from '@testing-library/react-hooks'
import useGetABISnapshot from '../hooks/history/useGetAbiSnapshot'
import CustomWrapper from './wrapper'

describe('useGetAbiSnapshot', () => {
  it('should fetch abi at block', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () =>
        useGetABISnapshot(
          { contract: 'eosio', fetch: true },
          'https://testnet.waxsweden.org'
        ),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.hasFailed)
    expect(result.current.error == null)

    expect((result.current.data?.block_num ?? 0) > 0)
    expect(result.current.data?.abi.version.startsWith('eosio::'))
  })
})
