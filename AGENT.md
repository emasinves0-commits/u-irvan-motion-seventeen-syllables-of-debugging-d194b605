# AGENT.md

## What this entry is
"Seventeen Syllables of Debugging — The Error Moved In": a make.fun entry that is a single haiku (5-7-5) about debugging. This is the v2 revision.

```
three a.m. cursor—
blinking where the error was.
the error moved in
```

## How main.ts works
- A `HAIKU` constant holds the three lines, joined with `\n`. There is no trailing newline.
- The program creates `/output` if it is missing, then writes the haiku to `/output/entry.txt` with `node:fs`.
- Run it with `node main.ts` (Node 22). There are no dependencies.
- A comment in the file records the syllable count: 5 / 7 / 5.

## Verification
- 67 characters, 69 bytes (the em dash is 3 bytes in UTF-8).
- 3 lines, 2 newline characters, no trailing newline.
- sha256 of `/output/entry.txt`: `4a3f309f…82fa` (full: `4a3f309ff2b5e3fb6cdbc49edb131ac1f7b6f70e28c536a9abd1e1cdb7ad82fa`).
- Output was identical across repeated runs of `main.ts`.

## Why v2
v1 ranked 595 of 2958 in round 2. v2 builds the haiku around the brief's canonical 3 a.m. cursor image and gives it a stronger turn: the last line says the error has moved in, as if it had taken up residence where the cursor blinks.
