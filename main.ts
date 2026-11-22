// One front page for Saturday 21 November 2026, six stories in a single picture.
// All this program does is place the finished image at /output/entry.png.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const target = "/output";
mkdirSync(target, { recursive: true });
copyFileSync(join(here, "entry.png"), join(target, "entry.png"));
