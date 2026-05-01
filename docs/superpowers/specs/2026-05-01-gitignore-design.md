# Infrastructure: Security & Privacy (.gitignore) Setup

## 1. Objective
Establish a robust `.gitignore` strategy for the B1C Dashboard project to protect sensitive infrastructure credentials, proprietary "secret sauce" agent configurations, and CMS runtime data from being exposed in public version control.

## 2. Approach: The Restricted Allowlist
We will adopt a "Fail-Secure" approach. Folders containing sensitive logic (like `.agent` and `.claude`) will be ignored entirely by default. We will then explicitly "un-ignore" only the specific files or sub-folders that are safe for public consumption.

## 3. Scope
- **Global Root:** Protect environment files, terraform states, and development artifacts.
- **CMS Directory:** Protect local Sanity runtimes and credentials.
- **Agent/Tooling:** Protect `.agent/`, `.claude/`, and other future agentic directories using allowlisting.
- **Frontend/Infra:** Standard library/build artifact protection.

## 4. Components

### 4.1 Global Blacklist
- All `.env*` files (except `.env.example`).
- All `node_modules`.
- Build artifacts (`dist/`, `build/`).
- OS-specific files (`.DS_Store`).

### 4.2 Infrastructure & Cloud
- Terraform state files (`*.tfstate`, `*.tfstate.backup`).
- Local provider data (`.terraform/`).
- Sensitive variable files (`*.tfvars`, `*.tfvars.json`).
- SSH keys and pem files.

### 4.3 CMS (Sanity)
- `.sanity/runtime/`
- Local data caches.

### 4.4 Agentic "Secret Sauce" (The Allowlist Pattern)
- `.agent/` and `.claude/` ignored by default.
- Explicitly allow:
    - `!.agent/public/`
    - `!.claude/config.json` (Verify this contains no keys before committing).

## 5. Verification Plan
- **Pre-commit Check:** Run `git status` to ensure no sensitive files are currently staged.
- **Simulated Leak Test:** Attempt to add a dummy secret file (e.g., `.agent/secret_prompt.md`) and verify git ignores it.
- **Clean Index Check:** Check for any previously committed sensitive files using `git ls-files --ignored --exclude-standard`.
