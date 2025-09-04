import { throwError } from '~~/shared/utils/logging'

const FEATURE = 'POST: supportRequest'

export default defineEventHandler(async (event) => {
  const feature = getRouterParam(event, 'feature')

  if (!feature) {
    throwError(FEATURE, `Unable to find feature: ${feature}`)
  }

  // TODO email
})
