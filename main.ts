// Saturday 21 November 2026, six stories on one front page. This program
// places the finished picture at /output/entry.png and nothing else.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const dest = "/output";
mkdirSync(dest, { recursive: true });
copyFileSync(join(here, "entry.png"), join(dest, "entry.png"));
