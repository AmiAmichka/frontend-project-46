import { Command } from 'commander';
import { compareData, readFiles } from './src/parse.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>', 'first filepath')
  .argument('<filepath2>', 'second filepath')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const [obj1, obj2] = readFiles(filepath1, filepath2);

    console.log(compareData(obj1, obj2));
  });

program.parse();
