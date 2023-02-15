import { Config } from 'bun'

const config: Config = {
  entry: 'src/index.ts',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  }
}

export default config
