import process from 'node:process'
import { load } from 'js-yaml'
import { readFileSync } from 'node:fs'
import path from 'node:path'

export const readFile = (filepath) => {
  const file = readFileSync(path.resolve(process.cwd(), filepath), { encoding: 'utf-8' })

  const parsedFile = load(file, { json: path.extname(filepath) === '.json' })

  return parsedFile
}
