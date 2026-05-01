# Migrate from npm to pnpm Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the project to use `pnpm` for package management and workspaces.

**Architecture:**
- Remove `package-lock.json`.
- Configure `pnpm-workspace.yaml`.
- Update root `package.json` scripts to use `pnpm` workspace commands.
- Run `pnpm install` to generate `pnpm-lock.yaml`.

**Tech Stack:** `pnpm`

---

### Task 1: Initialize pnpm workspace

**Files:**
- Create: `pnpm-workspace.yaml`
- Modify: `package.json`
- Delete: `package-lock.json`

- [ ] **Step 1: Delete `package-lock.json`**

Run: `rm package-lock.json`
Expected: File deleted.

- [ ] **Step 2: Create `pnpm-workspace.yaml`**

```yaml
packages:
  - 'frontend'
  - 'cms'
```

- [ ] **Step 3: Update root `package.json` scripts**

Update scripts to use `pnpm` filter syntax and remove `workspaces` field.

```json
{
  "scripts": {
    "frontend:dev": "pnpm --filter frontend dev",
    "cms:dev": "pnpm --filter b1c-cms dev",
    "build": "pnpm -r build"
  }
}
```

- [ ] **Step 4: Update docs/PLAN.md**

Replace `npm` with `pnpm`.

```markdown
L75:     *   Configure Vite for static export (`pnpm run build`).
```

- [ ] **Step 5: Run `pnpm install`**

Run: `pnpm install`
Expected: `pnpm-lock.yaml` created and `node_modules` updated.

- [ ] **Step 6: Verify build**

Run: `pnpm build`
Expected: Both workspaces build successfully.

- [ ] **Step 7: Commit changes**

```bash
git add package.json pnpm-workspace.yaml pnpm-lock.yaml docs/PLAN.md
git rm package-lock.json
git commit -m "chore: migrate from npm to pnpm"
```
