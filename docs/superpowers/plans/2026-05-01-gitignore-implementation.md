# Infrastructure: Security & Privacy (.gitignore) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish a robust and secure `.gitignore` to prevent leakage of credentials and proprietary "secret sauce" agent configurations in a public repo.

**Architecture:** Use a Restricted Allowlist pattern for agent directories (`.agent/`, `.claude/`) and a comprehensive blacklist for Infra/CMS artifacts.

**Tech Stack:** Git

---

### Task 1: Research & Baseline

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Check for existing leaks**

Run: `git ls-files --ignored --exclude-standard`
Expected: List of ignored files that are *already* in the index. If any sensitive files show up, they need to be removed from the index.

- [ ] **Step 2: Commit baseline (if changes needed)**

```bash
# Only if sensitive files were found in Step 1
# git rm --cached <file>
# git commit -m "chore: remove sensitive files from index"
```

---

### Task 2: Configure Infrastructure & CMS Protection

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add Infrastructure & CMS blocks**

Modify `.gitignore` to include explicit blocks for Terraform secrets and Sanity runtime.

```gitignore
# Infrastructure
.terraform/
*.tfstate
*.tfstate.backup
*.tfvars
*.tfvars.json
*.pem

# CMS
.sanity/
dist/
```

- [ ] **Step 2: Verify Infra ignore**

Run: `touch infra/secret.tfvars && git status`
Expected: `infra/secret.tfvars` should NOT appear in untracked files.

- [ ] **Step 3: Commit**

```bash
git add .gitignore
git commit -m "feat(infra): add comprehensive terraform and sanity ignores"
```

---

### Task 3: Implement Agentic "Secret Sauce" Allowlist

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add Restricted Allowlist for Agent Tooling**

Add the fail-secure pattern to `.gitignore`.

```gitignore
# Agentic Tooling (Secret Sauce)
.agent/
.claude/
.gemini/

# Explicitly Allow Public Agent Configs
!.agent/public/
!.claude/config.json
!.gemini/public/
```

- [ ] **Step 2: Verify Restricted Allowlist**

Run:
```bash
mkdir -p .agent/private .agent/public
touch .agent/private/secret.md .agent/public/readme.md
git status
```
Expected: `.agent/public/readme.md` is visible, `.agent/private/` is NOT.

- [ ] **Step 3: Cleanup test files and Commit**

```bash
rm -rf .agent
git add .gitignore
git commit -m "feat(security): implement restricted allowlist for agentic directories"
```

---

### Task 4: Final Sanitization & Review

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Final Audit**

Review the entire `.gitignore` for duplicates or missing environment patterns. Ensure `!.env.example` exists.

- [ ] **Step 2: Verification before completion**

Run: `git check-ignore -v .agent/secret.md .env infra/terraform.tfstate`
Expected: Output showing the rule that ignores each file.

- [ ] **Step 3: Final Commit**

```bash
git add .gitignore
git commit -m "chore: final .gitignore refinement"
```
