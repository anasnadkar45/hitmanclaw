#!/usr/bin/env bun

import { Command } from "commander";

const program = new Command();

program
    .name("hitmanclaw-build")
    .description("hitmanclaw cli")
    .version("0.0.1");

program
    .command("wakeup")
    .description("show the banner and pick cli or telegram mode")
    .action(async()=>{
        console.log("Wakeup calling....")
    })

await program.parseAsync(process.args)
