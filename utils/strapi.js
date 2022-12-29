export function resolveStrapiUploadUrl(path) {
  return useStrapiUrl().replace('/api', path)
}
