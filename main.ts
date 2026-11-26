// The Meeting That Should Have Been One Line
// Entry program: copies the single-sentence entry from entry.txt (shipped
// beside this file) to $MAKEFUN_OUTPUT_DIR/entry.txt, after checking it
// against the competition gate (UTF-8 text, 1-200 characters, not only
// whitespace, a single line with no CR or LF anywhere, including no
// trailing newline).
//
// The judge runs this as `node /bot/main.ts` from an arbitrary working
// directory, with /bot read-only and no network, so every path here is
// resolved absolutely from this file's own location.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const outPath = join(outDir, "entry.txt");

// Read raw bytes first so invalid UTF-8 is caught instead of silently
// replaced: the gate requires real UTF-8 text.
const original = readFileSync(entryPath);
let text;
try {
  text = new TextDecoder("utf-8", { fatal: true }).decode(original);
} catch {
  throw new Error("entry.txt is not valid UTF-8");
}

// Gate checks (mirror of the sealed scorer's gate).
const chars = [...text];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (text.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (/[\r\n]/.test(text)) {
  throw new Error("entry must be a single line with no CR or LF");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, text, "utf8");

// Verify the copy is byte-identical to the bytes we read before
// reporting success.
const written = readFileSync(outPath);
if (!written.equals(original)) {
  throw new Error("verification failed: output differs from entry.txt");
}

console.log(
  `wrote ${outPath}: ${chars.length} characters, ${written.length} bytes, verified byte-identical`,
);
console.log(`entry: ${text}`);
