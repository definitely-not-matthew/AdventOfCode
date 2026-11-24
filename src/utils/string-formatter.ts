import { DaySolution } from "@/types/solution";
import { styleText } from "node:util";

export function formatYear(year: number) {
    return styleText(["bold"], `Year: ${year}`);
}

export function separator() {
    return styleText("gray", "#".repeat(32));
}

export function formatSolution(daySolution: DaySolution) {
    return {
        header: styleText(["bold", "cyan"],`---+ Day: ${daySolution.dayNumber.toString().padStart(2, "0")}`),
        parts: daySolution.solutions.map(s => `   +--- Part ${s.solutionPart}: ${styleText(["green"], s.answer)}`)
    }
}