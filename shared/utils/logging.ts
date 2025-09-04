export function logInfo(feature: string, message: unknown): void {
  const messageString = typeof message === 'object' ? JSON.stringify(message) : message
  // eslint-disable-next-line no-console
  console.info(`[${feature}] | ${messageString}`)
}

export function logWarn(feature: string, message: unknown): void {
  const messageString = typeof message === 'object' ? JSON.stringify(message) : message
  // eslint-disable-next-line no-console
  console.warn(`[${feature}] | ${messageString}`)
}

export function logError(feature: string, message: unknown): void {
  const messageString = typeof message === 'object' ? JSON.stringify(message) : message
  // eslint-disable-next-line no-console
  console.error(`[${feature}] | ${messageString}`)
}

export function throwError(feature: string, message: unknown): never {
  const messageString = typeof message === 'object' ? JSON.stringify(message) : message
  throw new Error(`[${feature}] | ${messageString}`)
}
