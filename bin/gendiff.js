#!/usr/bin/env node

import { Command } from 'commander'
import generateDifferences from '../index.js'

const program = new Command()

program
  .description('Compares two configuration files and shows a difference.')
  .argument('[filepath1]', 'first filepath')
  .argument('[filepath2]', 'second filepath')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((path1, path2, options = {}) => {
    console.log(generateDifferences(path1, path2, options.format))
  })

program.parse()
