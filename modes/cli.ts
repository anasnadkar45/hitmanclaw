import { isCancel, select } from "@clack/prompts";
import chalk from "chalk";

export async function runCliMode() {
    while (true) {
        const mode = await select({
            message:"Choose CLI submode",
            // TODO: add more submodes here like agent mode, plan mode, ask mode and back to main menu
            options:[
                {value:"agent", label:"Agent Mode"},
                {value:"plan", label:"Plan Mode"},
                {value:"ask", label:"Ask Mode"},
                {value:"back", label:"Back to Main Menu"}
            ]
        })

        if(isCancel(mode) || mode === "back")return;

        if(mode === "agent"){
            console.log("agent")
        }
        else if(mode === "plan"){
            console.log("plan")
        }
        else if(mode === "ask"){
            console.log("ask")
        }

        if(mode !== "agent" && mode !== "plan" && mode !== "ask"){
            console.log(chalk.yellow("\nThat mode is not implemented yet. Please choose another one.\n"))
        }
    }
}