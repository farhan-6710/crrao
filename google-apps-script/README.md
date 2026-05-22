# Wiring the application form to Google Sheets

The B.Tech application form (`/pages/apply.html`) submits to a Google Apps Script web-app, which writes one row per application to a Google Sheet and saves uploaded documents to a Google Drive folder.

## One-time setup (≈ 5 minutes)

### 1. Create the Sheet & Drive folder
1. In Google Drive, create a new **Spreadsheet** — e.g. `CR Rao B.Tech Applications 2026-27`.
   Copy its **Sheet ID** from the URL (the long string between `/d/` and `/edit`).
2. Create a new **Drive folder** — e.g. `B.Tech 2026-27 — Applicant Documents`.
   Copy its **Folder ID** from the URL (the string after `/folders/`).

### 2. Create the Apps Script
1. Go to <https://script.google.com> → **New project**.
2. Delete the default `Code.gs` and paste the contents of [`Code.gs`](./Code.gs).
3. At the top of the file, set:
   ```js
   const SHEET_ID        = '...your sheet id...';
   const DRIVE_FOLDER_ID = '...your folder id...';
   ```
4. Save (`Cmd/Ctrl + S`) and name the project **B.Tech Application 2026-27**.

### 3. Deploy as a web app
1. Click **Deploy → New deployment → ⚙ select type → Web app**.
2. Settings:
   - **Description:** `B.Tech 2026-27 Application Endpoint`
   - **Execute as:** *Me (admissions@crraoaimscs.res.in)*
   - **Who has access:** *Anyone*  ← this is required so the website can POST anonymously.
3. Click **Deploy** and authorise the requested scopes (Drive, Sheets, Mail).
4. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/AKfy…/exec`).

### 4. Point the website at your endpoint
Open `/js/application.js` and replace the placeholder:
```js
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec';
```
with the URL you just copied. Save & deploy the website.

That's it.

## What gets stored

For each submission:

- **Sheet row** — every form field, plus links to each uploaded document.
- **Drive folder** — created automatically per applicant, named `<REF_ID> – <Full Name>`.
- **Confirmation email** — sent to the applicant (CC: admissions cell) with their reference ID.

## Updating later

If you change the form (add/remove a field) you only need to update the
`HEADER_ROW` and `COLUMN_TO_FIELD` sections at the bottom of `Code.gs`,
re-deploy (Deploy → Manage deployments → ✎ → New version → Deploy), and
update `application.js` if the field name changes.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Submissions don't appear in the Sheet | Make sure the deployment is set to **"Who has access: Anyone"**. Re-deploy after any code change. |
| Files missing in Drive | Confirm `DRIVE_FOLDER_ID` is correct and the script's owner has write access to that folder. |
| Confirmation email not sent | Check `MailApp.getRemainingDailyQuota()` — Workspace accounts get 1500/day, free Gmail 100/day. Set `SEND_CONFIRMATION_EMAIL = false` if you'd rather not. |
| CORS error in browser console | The frontend uses `application/x-www-form-urlencoded` to avoid CORS preflight; if you see CORS errors anyway, ensure you're hitting the `/exec` URL (not `/dev`). |

For any other issues: <btechadmissions@crraoaimscs.res.in> · +91 7331 155 319
