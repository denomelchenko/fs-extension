# fs-extension

Full Stack Open part 7. Exercises 7.1-7.6 are the custom-hook exercises in `routed-anecdotes`; exercises 7.7-7.20
move the part 4 bloglist backend and the part 5 bloglist frontend into `bloglist/server` and `bloglist/client` and
extend them.

## Packages

| Path | What it is |
|---|---|
| `routed-anecdotes/` | the Vite app for exercises 7.1-7.6 |
| `routed-anecdotes-tests/` | the shipped Playwright suite (copied verbatim) |
| `bloglist/server/` | the Express + Mongoose bloglist backend from part 4 |
| `bloglist/client/` | the Vite + React bloglist frontend from part 5 |
| `bloglist-tests/` | the shipped Playwright suite (copied verbatim) |

## Running the tests

```bash
cd routed-anecdotes-tests && pnpm test
cd bloglist-tests && pnpm test
```

Both suites start the applications they test themselves. The bloglist backend needs a MongoDB
(`docker run -d --name fso-mongo -p 27017:27017 --restart unless-stopped mongo:7`) and a
`bloglist/server/.env` with `TEST_MONGODB_URI` pointing at the `bloglist_test` database.

## Progress

| Exercise | Title | Status |
|---|---|---|
| 7.1 | useField hook | [ ] |
| 7.2 | useField with reset | [ ] |
| 7.3 | Fixing the spread issue | [ ] |
| 7.4 | useAnecdotes, step 1 | [ ] |
| 7.5 | useAnecdotes, step 2 | [ ] |
| 7.6 | useAnecdotes, step 3 | [ ] |
| 7.7 | Frontend and backend in the same repository | [ ] |
| 7.8 | Error boundary | [ ] |
| 7.9 | Nonexisting routes | [ ] |
| 7.10 | Automatic Code Formatting | [ ] |
| 7.11 | React Query and Context step 1 (notifications) | [ ] |
| 7.12 | React Query and Context step 2 (blog posts) | [ ] |
| 7.13 | React Query and Context step 3 (likes and deletes) | [ ] |
| 7.14 | React Query and Context step 4 (the signed-in user) | [ ] |
| 7.15 | Cleaning the code | [ ] |
| 7.16 | Users view | [ ] |
| 7.17 | Individual User View | [ ] |
| 7.18 | Comments, step 1 | [ ] |
| 7.19 | Comments, step 2 | [ ] |
| 7.20 | Styling | [ ] |
