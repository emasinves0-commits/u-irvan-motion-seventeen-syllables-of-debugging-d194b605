import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const ENTRY_FILE = "entry.txt";
const MAX_CHARS = 200;

const HAIKU =
  "my daughter's drawing\ntaped above the monitor —\nthe build fails again";

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS || text.trim().length === 0) {
    throw new Error("haiku must be 1-200 non-blank characters");
  }
  return text;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${ENTRY_FILE}`, checkedLine(HAIKU));
