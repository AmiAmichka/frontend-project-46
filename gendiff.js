import { Command } from 'commander';
import process from 'node:process';
import path from 'node:path';
import { readFiles } from './src/parse.js';
import { compareData } from './src/compare.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'first filepath')
  .argument('<filepath2>', 'second filepath')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const [obj1, obj2] = readFiles(
      path.resolve(process.cwd(), filepath1),
      path.resolve(process.cwd(), filepath2),
    );

    console.log(compareData(obj1, obj2));
  });

program.parse();
