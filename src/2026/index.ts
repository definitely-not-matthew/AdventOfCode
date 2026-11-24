
import {solve as solve_day01} from "@/2026/day01"
import { DaySolution } from "@/types/solution";
import { formatSolution, separator, formatYear } from "@/utils/string-formatter";
import { styleText } from "util";

const solutions2026 = [solve_day01()];

function printYearlySolutions(solutions: DaySolution[], year: number) {
    console.log(formatYear(year));
    solutions2026.forEach(day => {
        const formattedSolution = formatSolution(day);
        console.log(formattedSolution.header);
        formattedSolution.parts.forEach(p => console.log(p));
    })
    console.log(separator())
}

console.log(styleText(["italic", "bgGreen"], "Advent of Code solutions"));

printYearlySolutions(solutions2026, 2026);