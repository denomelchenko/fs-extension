import { copyFileSync } from 'node:fs'

copyFileSync(new URL('../db.json', import.meta.url), new URL('../db-test.json', import.meta.url))
