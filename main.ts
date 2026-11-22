// Front page for Saturday 21 November 2026: six stories, one image, written to /output/entry.png. The program only copies the finished picture.
import { copyFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { join } from "node:path";
import { fileURLToPath as toPath } from "node:url";

const srcDir = dirname(toPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(srcDir, "entry.png"), join(outDir, "entry.png"));
