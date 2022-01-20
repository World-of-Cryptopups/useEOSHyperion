import fetch from 'cross-fetch'
import ChainError from './error'

const getFetcher = async (url: string, params: Record<string, any>) => {
  const res = await fetch(url, { method: 'GET' })
  const data = await res.json()

  if (!res.ok) {
    throw new ChainError(data)
  }

  return data
}

const postFetcher = async (url: string, body?: Record<string, any>) => {
  const res = await fetch(url, {
    method: 'POST',
    body: body != null ? JSON.stringify(body) : null
  })
  const data = await res.json()

  if (!res.ok) {
    throw new ChainError(data)
  }

  return data
}

export { getFetcher, postFetcher }
