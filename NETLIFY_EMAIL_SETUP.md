Add nimiety.sydney@gmail.com as a Netlify form notification

1. Open the Netlify admin for this site:
   - https://app.netlify.com/sites/m69z7nz5r6-dotcom

2. In the site dashboard, go to **Site settings → Forms → Notifications**.

3. Click **Add notification** → choose **Email**.

4. Enter the address: nimiety.sydney@gmail.com and save.
   - Optionally enable instant notifications and daily digests.

5. Verify the email if Netlify sends a confirmation link.

Notes
- The contact form in the site uses `data-netlify="true"` and requires the site to be deployed to Netlify for submissions to be captured.
- If you prefer not to use Netlify's notifications, consider a third-party form service (Formspree, Getform) which can forward submissions to Gmail without changing Netlify settings.

If you want, I can commit these site edits and push them so Netlify will auto-deploy the updated form.