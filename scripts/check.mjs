// The app uses extensionless, bundler-style imports, so the checks are loaded
// through Vite rather than run by node directly.
import { createServer } from 'vite'

const server = await createServer({
  configFile: false,
  logLevel: 'warn',
  server: { middlewareMode: true },
})

try {
  const { checkData } = await server.ssrLoadModule('/scripts/check-timings.ts')
  process.exitCode = checkData() === 0 ? 0 : 1
} finally {
  await server.close()
}
