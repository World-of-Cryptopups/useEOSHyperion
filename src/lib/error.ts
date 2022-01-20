import { InternalServerErrorProps } from '../typings/error'

/**
 * Custom error class for adding a .data object with it.
 */
class ChainError<
  T extends Record<string, any> = InternalServerErrorProps
> extends Error {
  public readonly data: T

  constructor(data: T) {
    super()
    this.data = data
  }
}

export default ChainError
