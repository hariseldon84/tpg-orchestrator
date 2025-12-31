# Publishing with 2FA (Two-Factor Authentication)

Your NPM account has 2FA enabled (good for security!). Here's how to publish:

## Option 1: Use OTP (One-Time Password) - RECOMMENDED

### Step 1: Get your OTP code
Open your authenticator app (Google Authenticator, Authy, etc.) and get the 6-digit code for NPM.

### Step 2: Publish with OTP flag
```bash
cd C:\Users\anand\Documents\TheProductGenome\GithubRepoSynch\theproductgenome\TPGOrchestrator

npm publish --tag alpha --access public --ignore-scripts --otp=YOUR_6_DIGIT_CODE
```

**Replace `YOUR_6_DIGIT_CODE` with the actual code from your authenticator app.**

**Example:**
```bash
npm publish --tag alpha --access public --ignore-scripts --otp=123456
```

**Note:** The OTP code expires in 30 seconds, so have it ready before running the command!

---

## Option 2: Generate Automation Token (For CI/CD)

If you want to avoid entering OTP each time:

### Step 1: Create automation token
1. Go to: https://www.npmjs.com/settings/anandarora/tokens
2. Click "Generate New Token"
3. Select "Automation" (bypasses 2FA for publishing)
4. Copy the token (starts with `npm_`)

### Step 2: Use token for publishing
```bash
npm config set //registry.npmjs.org/:_authToken YOUR_AUTOMATION_TOKEN
npm publish --tag alpha --access public --ignore-scripts
```

---

## Quick Command (Use This Now)

1. **Open your authenticator app**
2. **Get the 6-digit NPM code**
3. **Run this command immediately:**

```bash
npm publish --tag alpha --access public --ignore-scripts --otp=YOUR_CODE
```

**Replace `YOUR_CODE` with the actual 6-digit code!**

---

## What to Expect

When successful, you'll see:
```
npm notice Publishing to https://registry.npmjs.org/ with tag alpha and public access
+ tpg-orchestrator@1.0.0-alpha.1
```

Then the package will be live at:
https://www.npmjs.com/package/tpg-orchestrator

---

## If It Fails

**"OTP code invalid"**
- Code expired (30 seconds)
- Get fresh code and try again immediately

**"Forbidden"**
- Still not authenticated properly
- Try: `npm logout` then `npm login` again
- Then retry publish with OTP

---

Ready? Get your OTP code and run:
```bash
npm publish --tag alpha --access public --ignore-scripts --otp=YOUR_6_DIGIT_CODE
```
