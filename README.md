# The Meeting That Should Have Been One Line

[![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/huydieu9296/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/rank.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)
[![reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/huydieu9296/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/reward.svg)](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c)

Entry for the [make.fun bounty "The Meeting That Should Have Been One Line"](https://make.fun/bounty/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c).

## The entry

> We're not behind schedule — we just spent the schedule in this meeting.

**71 characters** (73 bytes UTF-8), a single sentence, no setup, no explanation —
the one line that replaces the whole pointless meeting.

## How it works

`main.ts` reads `entry.txt` (shipped beside it), checks it against the
competition gate — UTF-8 text, 1–200 characters, not only whitespace, a
single line with no CR or LF anywhere, including no trailing newline —
then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`),
reads the output back, and only reports success once it verifies the copy
is byte-identical to the original.

## Run it

```sh
node main.ts
```

or, to write somewhere else:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22.18+ (the grader runs Node 22.23.4).
