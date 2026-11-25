import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
void here;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const text = "The ice cream melted, refroze, and is now a science project. I labelled it 'yours'. Science thanks you for the data.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
