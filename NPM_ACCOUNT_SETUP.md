# NPM Account Setup Guide

**Date:** December 31, 2025
**For:** Publishing TPG Orchestrator to NPM

---

## Creating Your NPM Account

### Step 1: Go to NPM Signup Page

Open your browser and go to:
**https://www.npmjs.com/signup**

---

### Step 2: Fill in Registration Form

**Username:**
- Choose a username (will be public)
- Must be unique on NPM
- Can contain lowercase letters, numbers, hyphens
- Cannot start with a hyphen
- Example: `hariseldon84`, `theproductgenome`, `anand-tpg`

**Email Address:**
- Must be valid (you'll need to verify)
- Will be used for package notifications
- Can be public or private (your choice)

**Password:**
- Strong password required
- At least 10 characters
- Mix of letters, numbers, symbols

---

### Step 3: Verify Email

After signing up:
1. Check your email inbox
2. Look for email from NPM (support@npmjs.com)
3. Click the verification link
4. Confirm your account

---

### Step 4: (Optional but Recommended) Enable Two-Factor Authentication

For better security:
1. Go to https://www.npmjs.com/settings/[your-username]/tfa
2. Click "Enable 2FA"
3. Choose method:
   - **Auth app** (recommended): Use Google Authenticator, Authy, etc.
   - **SMS**: Use phone number
4. Scan QR code or enter code
5. Save backup codes in safe place

---

### Step 5: Login via Command Line

Once your account is created and verified:

```bash
npm login
```

**You'll be prompted for:**
- Username: [your-npm-username]
- Password: [your-password]
- Email: [your-email]
- One-time password: [if 2FA enabled, enter code from authenticator app]

**Verify login:**
```bash
npm whoami
```

Should display your username.

---

## After Account Creation

### Test Your Account

```bash
# View your profile
npm profile get

# Check login status
npm whoami

# View published packages (will be empty initially)
npm ls --global
```

---

### Publishing Your First Package (TPG Orchestrator)

Once logged in:

```bash
cd C:\Users\anand\Documents\TheProductGenome\GithubRepoSynch\theproductgenome\TPGOrchestrator

# Verify package.json
npm pkg get name version
# Should show: "tpg-orchestrator" and "1.0.0-alpha.1"

# Check what will be published
npm pack --dry-run

# Publish as alpha version
npm publish --tag alpha --access public
```

**Expected output:**
```
+ tpg-orchestrator@1.0.0-alpha.1
```

---

### Verify Publication

**Via command line:**
```bash
npm view tpg-orchestrator
```

**Via browser:**
Go to: https://www.npmjs.com/package/tpg-orchestrator

---

## Troubleshooting

### Issue: "Username already taken"
**Solution:** Try different username variations:
- Add numbers: `username123`
- Add identifier: `username-tpg`
- Use organization format: `@username/tpg-orchestrator`

### Issue: "Email not verified"
**Solution:**
- Check spam folder
- Resend verification email from NPM settings
- Wait 5-10 minutes and try again

### Issue: "Package name already exists"
**Solution:**
- Try different package name
- Or use scoped package: `@your-username/tpg-orchestrator`
- Check availability: `npm search tpg-orchestrator`

### Issue: "Need to login" error when publishing
**Solution:**
```bash
npm logout
npm login
npm whoami
# Then try publishing again
```

---

## NPM Account Management

### Update Profile
```bash
npm profile set <prop> <value>
```

Properties you can set:
- fullname
- email
- homepage
- github
- twitter

Example:
```bash
npm profile set fullname "Anand"
npm profile set github "hariseldon84"
```

### View Account Info
```bash
npm profile get
```

### Change Password
```bash
npm profile set password
```

---

## Publishing Settings

### Make Package Public
In package.json, ensure:
```json
"publishConfig": {
  "access": "public"
}
```

Or use flag when publishing:
```bash
npm publish --access public
```

### Publishing Alpha/Beta Versions

**Alpha:**
```bash
npm publish --tag alpha
```

**Beta:**
```bash
npm publish --tag beta
```

**Latest (stable):**
```bash
npm publish
# or
npm publish --tag latest
```

---

## After First Publish

### Share Your Package

**NPM Page:**
https://www.npmjs.com/package/tpg-orchestrator

**Installation Command:**
```bash
npx tpg-orchestrator@alpha install
```

**GitHub Integration:**
Add NPM badge to README:
```markdown
[![npm version](https://badge.fury.io/js/tpg-orchestrator.svg)](https://www.npmjs.com/package/tpg-orchestrator)
```

---

## Future Updates

When you update the package:

```bash
# Update version
npm version prerelease --preid=alpha
# This changes: 1.0.0-alpha.1 → 1.0.0-alpha.2

# Commit and tag
git add .
git commit -m "Update to v1.0.0-alpha.2"
git push && git push --tags

# Publish
npm publish --tag alpha --access public
```

---

## Quick Reference

| Action | Command |
|--------|---------|
| **Sign up** | https://www.npmjs.com/signup |
| **Login** | `npm login` |
| **Check login** | `npm whoami` |
| **View profile** | `npm profile get` |
| **Publish alpha** | `npm publish --tag alpha --access public` |
| **View package** | `npm view tpg-orchestrator` |
| **Update version** | `npm version prerelease --preid=alpha` |

---

## Support

**NPM Support:**
- Documentation: https://docs.npmjs.com/
- Support: https://www.npmjs.com/support
- Status: https://status.npmjs.org/

**Common Questions:**
- Package naming: https://docs.npmjs.com/package-name-guidelines
- Scoped packages: https://docs.npmjs.com/about-scopes
- Publishing: https://docs.npmjs.com/getting-started/publishing-npm-packages

---

**Ready to create your NPM account!** 🚀

Go to: https://www.npmjs.com/signup
