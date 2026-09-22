# fs-extension

Submission repository for **Part 7 — Extension** of Full Stack Open. Exercises 1–6 are the custom-hook exercises in
`routed-anecdotes`; exercises 8–21 move the part 4 bloglist backend and the part 5 bloglist frontend into
`bloglist/server` and `bloglist/client` and extend them.

The part is published as its own 1-credit course on MOOC —
[courses.mooc.fi/org/uh-cs/courses/full-stack-open-extension](https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-extension)
(CSM141083). That course lists **22 exercises**, and requires that all the tests pass. The repository root is
exactly the one the material asks for —
`.git .github .gitignore routed-anecdotes routed-anecdotes-tests bloglist bloglist-tests` — plus this README and
`.vscode/` (the editor integration exercise 11 asks for).

## Packages

| Path | What it is |
|---|---|
| `routed-anecdotes/` | the Vite app for exercises 1–6 |
| `routed-anecdotes-tests/` | the shipped Playwright suite (copied verbatim) |
| `bloglist/server/` | the Express + Mongoose bloglist backend from part 4 |
| `bloglist/client/` | the Vite + React bloglist frontend from part 5 |
| `bloglist-tests/` | the shipped Playwright suite (copied verbatim) |

## Running the tests

The material's commands, run from the directory named each time:

```bash
cd routed-anecdotes-tests && npm install && npx playwright install chromium && npm test
cd bloglist-tests && npm install && npx playwright install chromium && npm test
```

The same suites run through pnpm from the repository root:

```bash
corepack pnpm --dir routed-anecdotes-tests test
corepack pnpm --dir bloglist-tests test
```

Both suites start the applications they test themselves. The bloglist backend needs a MongoDB
(`docker run -d --name fso-mongo -p 27017:27017 --restart unless-stopped mongo:7`) and a
`bloglist/server/.env` with `TEST_MONGODB_URI` pointing at the `bloglist_test` database.

The bloglist monorepo is driven from `bloglist/` with the commands exercise 8 prescribes:

```bash
cd bloglist && npm run dev            # Vite dev server with hot reload + backend
cd bloglist && npm run build && npm start   # backend serves the built frontend
```

## Progress

19 of the 22 exercises ask for application code and are implemented. The other three ask for no application code:
exercise 0 is the warm-up quiz in the MOOC UI, and exercises 7 and 22 are the two **checkups**, whose requirement is
that the shipped Playwright suites pass locally *and* on GitHub. Both workflows are green, so both checkups are
already satisfied. The numbers are the MOOC's own; note that the course skips number 16, which is why the list runs
…15, 17… with no row for 16.

| MOOC # | Exercise | Type | Delivered by (this repository's commit numbering) | Note | Done |
|---|---|---|---|---|---|
| 0 | Warmup | warm-up quiz | MOOC UI | must be done in the MOOC interface | [ ] |
| 1 | useField hook | code | `part7: exercise 7.1 useField hook` | | [ ] |
| 2 | useField with reset | code | `part7: exercise 7.2 useField with reset` | | [ ] |
| 3 | Fixing the spread issue | code | `part7: exercise 7.3 fixing the spread issue` | | [ ] |
| 4 | useAnecdotes, step1 | code | `part7: exercise 7.4 useAnecdotes step 1` | | [ ] |
| 5 | useAnecdotes, step2 | code | `part7: exercise 7.5 useAnecdotes step 2` | | [ ] |
| 6 | useAnecdotes, step3 | code | `part7: exercise 7.6 useAnecdotes step 3` | | [ ] |
| 7 | Anecdotes checkup | checkup | `routed-anecdotes-tests/` + `routed-anecdotes.yml` | tests pass locally; workflow green | [ ] |
| 8 | Bloglist, step 1 | code | `part7: exercise 7.7 frontend and backend in the same repository` | | [ ] |
| 9 | Bloglist, step2 | code | `part7: exercise 7.8 error boundary` | | [ ] |
| 10 | Bloglist, step3 | code | `part7: exercise 7.9 nonexisting routes` | | [ ] |
| 11 | Bloglist, step4 | code | `part7: exercise 7.10 automatic code formatting` | | [ ] |
| 12 | Bloglist, step5 | code | `part7: exercise 7.11 notifications with useReducer and context` | | [ ] |
| 13 | Bloglist, step6 | code | `part7: exercise 7.12 blog posts with React Query` | | [ ] |
| 14 | Bloglist, step7 | code | `part7: exercise 7.13 likes and deletes with React Query` | | [ ] |
| 15 | Bloglist, step8 | code | `part7: exercise 7.14 the signed-in user in context` | | [ ] |
| 17 | Bloglist, step9 | code | `part7: exercise 7.16 users view` | | [ ] |
| 18 | Bloglist, step10 | code | `part7: exercise 7.17 individual user view` | | [ ] |
| 19 | Bloglist, step11 | code | `part7: exercise 7.18 comments step 1` | | [ ] |
| 20 | Bloglist, step 12 | code | `part7: exercise 7.19 comments step 2` | | [ ] |
| 21 | Bloglist, step 13 | code | `part7: exercise 7.20 styling` | | [ ] |
| 22 | Bloglist checkup | checkup | `bloglist-tests/` + `bloglist-tests.yml` | tests pass locally; workflow green | [ ] |

One further commit has no row above: `part7: exercise 7.15 cleaning the code` is a refactor that the current MOOC
version no longer lists as a separate exercise, so it is extra hardening rather than a submission item.

## Continuous integration

`.github/workflows/` holds the two workflows, each triggered on `push` to `main`: `routed-anecdotes.yml` and
`bloglist-tests.yml`. The starter ships only the first; the material names a `bloglist` workflow without shipping
one, so the second was written here. The material also prints `.yaml` names that do not match the starter's actual
`.yml` files.
