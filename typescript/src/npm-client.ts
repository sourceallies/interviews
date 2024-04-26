export const packageUrl = (packageName: string): string => {
  return `https://registry.npmjs.org/${packageName}`
}

export const listTransitiveDependencies = async (packageName: string): Promise<string[]> => {
  return []
}
