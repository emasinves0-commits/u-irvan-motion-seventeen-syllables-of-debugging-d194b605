import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";
const MAX_CHARS = 200;

// 5-7-5: three(1) a.m.(2) cursor(2) / blinking(2) where(1) the(1) error(2) was(1)
// / the(1) error(2) moved(1) in(1) — centre is the brief's own image: a cursor at 3am.
const SYLLABLE_SHAPE = "5-7-5";

const HAIKU =
  "three a.m. cursor—\nblinking where the error was.\nthe error moved in";

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS || text.trim().length === 0) {
    throw new Error("haiku must be 1-200 non-blank characters");
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${ENTRY_FILE}`, checkedLine(HAIKU));
