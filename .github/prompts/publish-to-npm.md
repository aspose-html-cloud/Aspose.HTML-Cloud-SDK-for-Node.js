# Publishing `@asposecloud/aspose-html-cloud` to npm

Step-by-step guide for releasing a new version of this SDK to the npm registry.
The package is published under the scoped name **`@asposecloud/aspose-html-cloud`**
at https://www.npmjs.com/package/@asposecloud/aspose-html-cloud.

> There is a second, older listing at
> https://www.npmjs.com/package/asposehtmlcloud that is considered **obsolete**.
> Do **not** publish there. All new releases go to the `@asposecloud` scope.

---

## 1. Prerequisites

### Accounts & access
- npm account **`asposecloud`** (email `marketplace@aspose.cloud`).
- You must be on the `marketplace@aspose.cloud` distribution list to receive
  the login / publish OTP emails. Ask Denis to add you if not.
- Node.js and npm installed locally (`npm --version` should print 8+).

### One-time checks
```powershell
npm --version
npm config get registry   # must be https://registry.npmjs.org/
```

---

## 2. Prepare the release

Perform these edits **before** publishing:

1. **Update the version** in [package.json](../../package.json) using semver.
   Version bumps should be a single increment (patch/minor/major) from the
   currently published version. Check the current one with:

   ```powershell
   npm view @asposecloud/aspose-html-cloud version
   ```

   Then edit [package.json](../../package.json):
   ```json
   {
     "name": "@asposecloud/aspose-html-cloud",
     "version": "X.Y.Z"
   }
   ```

2. **Commit** any source changes and the version bump to git.

3. (Optional) Do a dry-run to inspect what will be shipped:
   ```powershell
   npm publish --dry-run
   ```
   Confirm the tarball contents, `name`, and `version` are what you expect.

---

## 3. Log in to npm

npm auth tokens now expire (max 90 days), so you will usually need to log in
fresh each release.

```powershell
npm whoami
```

- If it prints `asposecloud`, skip to Step 4.
- If it errors with `E401 Unauthorized` or `ENEEDAUTH`, run:

  ```powershell
  npm login
  ```

  This opens a browser-based login flow:
  1. Press ENTER when prompted; the CLI opens `npmjs.com/login/cli/<id>` in
     your browser.
  2. Sign in with:
     - **Username**: `asposecloud`
     - **Password**: `Aspose123$$`
     - **Email**: `marketplace@aspose.cloud`
  3. Complete the 2FA / OTP challenge. The OTP is sent to
     `marketplace@aspose.cloud`.
  4. Back in the terminal you should see `Logged in on https://registry.npmjs.org/.`

Verify:
```powershell
npm whoami   # -> asposecloud
```

---

## 4. Publish

From the repo root ([c:\Projects\aspose-html-cloud-nodejs](../../)):

```powershell
npm publish
```

You will be asked to authenticate the CLI action in the browser
(`npmjs.com/auth/cli/<id>`) and confirm with 2FA. Press ENTER in the terminal
after approving.

On success you will see something like:

```
+ @asposecloud/aspose-html-cloud@X.Y.Z
```

> **Common warning:** `npm warn publish "repository.url" was normalized to
> "git+https://..."`. This is harmless; npm auto-corrects the field.

---

## 5. Verify the publication

```powershell
npm view @asposecloud/aspose-html-cloud version
npm view @asposecloud/aspose-html-cloud
```

- The reported `version` must match what you just released.
- Confirm the package page:
  https://www.npmjs.com/package/@asposecloud/aspose-html-cloud

Optional smoke-test from a clean folder:
```powershell
mkdir C:\Temp\ahc-smoketest; cd C:\Temp\ahc-smoketest
npm init -y
npm install @asposecloud/aspose-html-cloud
node -e "console.log(Object.keys(require('@asposecloud/aspose-html-cloud')))"
```

---

## 6. Post-release

- Tag the release in git (optional but recommended):
  ```powershell
  git tag vX.Y.Z
  git push origin vX.Y.Z
  ```
- Announce the release in the usual internal channel.

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `503 Service Unavailable - POST .../login` | npm registry outage | Check https://status.npmjs.org/ and retry later. |
| `E401 Unauthorized` on `npm publish` | Auth token expired | Run `npm login` again. |
| `EPUBLISHCONFLICT` / `403 You cannot publish over the previously published versions` | Version in `package.json` matches an already-published version | Bump the version in [package.json](../../package.json) and retry. |
| `403 Forbidden - PUT ... - You do not have permission to publish "@asposecloud/aspose-html-cloud"` | Logged in as the wrong npm user | `npm logout`, then `npm login` as `asposecloud`. |
| OTP email never arrives | Not on the `marketplace@aspose.cloud` distribution list | Ask Denis to add you. |
| Wrong package listing shows up | You published to the obsolete `asposehtmlcloud` package | Always publish from this repo, whose `package.json` name is `@asposecloud/aspose-html-cloud`. |

---

## Reference

- Package page: https://www.npmjs.com/package/@asposecloud/aspose-html-cloud
- Obsolete package (do NOT publish): https://www.npmjs.com/package/asposehtmlcloud
- npm docs on publishing scoped packages: https://docs.npmjs.com/cli/v10/commands/npm-publish
- npm status: https://status.npmjs.org/
