import { day1 } from "./days/day1/main.js"
import { readFile } from "./util/readFiles.js"
import { program } from "commander"
import chalk from "chalk"
import inquirer from "inquirer";
import ora from "ora";

program
    .version("0.0.1")
    .description("Advent of Code 2024")
    .action((options) => {
        console.log(chalk.green("Advent of Code 2024"));
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "day",
                    message: "Select day to run",
                    choices: ["Day 1"]
                }
            ])
            .then(async (result: any) => {
                await runDays(result.day)
            })
    })

program.parse(process.argv)

async function runDays(day: string) {
    const spinner = ora(`Doing ${day}...`).start();
    let resultDay: any;
    switch (day) {
        case ("Day 1"):
            let list: number[][] = await readFile<number[]>("src/days/day1/input.txt", (line) => {
                let temp = line.split("   ").map((num) => parseInt(num))
                return temp
            });
            resultDay = (day1(list))
            break
        default:
            console.log(chalk.red("Not correct option"))
    }
    spinner.succeed(chalk.green(resultDay));
}