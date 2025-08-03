#!/usr/bin/env node
import { program } from 'commander';
import chalk from "chalk";
import ora from 'ora'
import TmdbService from '../services/tmdb.service.js';
let spinner = null;
try {
  program
    .version('1.0.0')
    .option('-t, --type <string>', 'Your interested action')
    .option('-l, --language <string>', 'Languange to fetch')
    .option('-p, --page <number>', 'The page to view of the command')


  program.parse();

  const options = program.opts();

  if(!options.type){
    console.error(chalk.red('Insert the command on flag --type'));
    process.exit();
  }

  let type = options.type;
  type = type.trim().toLowerCase(); 

  if(!TmdbService.validCommands.includes(type)){
    console.error(chalk.red('Not a valid type'));
    console.log(`Valid commands: \n-> ${TmdbService.validCommands.join("\n-> ")}`);
    process.exit();
  }

  let language = 'en-Us';
  let page = 1;

  if(options.language){
    language = options.language;
  }

  if(options.page){
    page = options.page;
  }

  spinner = ora(chalk.green(`Fetching data...`)).start();

  const results = await TmdbService[type](
    language, 
    page
  );

  if(results.inError){
    spinner.clear();
    console.error(chalk.red(`\n ${results.error.message}!`));
    process.exit();
  }

  spinner.succeed();  
  console.log(chalk.green(`Results: \n-> ${results.data.join("\n-> ")} \n`))
} catch (e) {
  spinner.clear()
  console.error(chalk.red(`Program in error: ${e.message}`));
}

