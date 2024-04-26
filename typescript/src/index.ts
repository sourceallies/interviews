import { listTransitiveDependencies } from './npm-client'

export const run = async (): Promise<void> => {
  const packageName = process.argv[2]
  if (!packageName) {
    console.log('Usage: npm-client <package-name>')
    return
  }
  const dependencies = await listTransitiveDependencies(packageName)
  console.log(`Transitive dependencies of: ${packageName}:`)
  dependencies.forEach((dep) => console.log(`  - ${dep}`))
}

void run().catch((error: unknown) => console.error(error))
