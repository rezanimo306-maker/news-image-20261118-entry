// One image that sums up the world's news of Wednesday 18 November 2026.
// The program copies the image the repository holds to the output directory.
// It uses only the Node standard library and makes no network calls, so
// running it twice writes exactly the same bytes both times.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoDir, "entry.png"), join(outDir, "entry.png"));
