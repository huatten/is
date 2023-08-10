export const navigator = window && window.navigator

export const platform = ((navigator && navigator.platform) || '').toLowerCase()

export const userAgent = ((navigator && navigator.userAgent) || '').toLowerCase()

export const vendor = ((navigator && navigator.vendor) || '').toLowerCase()
