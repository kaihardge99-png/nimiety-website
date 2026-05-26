# Nimiety Events

A static multi-page website for an underground electronic music collective.

## Included pages

- `index.html` — home page for Nimiety Events
- `tickets.html` — ticketing page with a Humanitix embed placeholder
- `artists.html` — artist profiles with SoundCloud player embeds
- `shop.html` — merch shop with a static cart and checkout form
- `styles.css` — shared site styling
- `script.js` — responsive menu, form behavior, and shop cart logic

## Getting started

Open `index.html` in a browser to preview the site locally.

## Customization

- Replace the Humanitix iframe `src` in `tickets.html` with your actual event widget URL.
- Update artist names and SoundCloud track URLs in `artists.html`.
- Replace the merch product details in `shop.html` with real items and payment links.

## Hosting

This site can be hosted on static hosting services such as GitHub Pages, Netlify, Vercel, or any static web host.

## Live on Netlify

- Production URL: `https://m69z7nz5r6-dotcom.netlify.app`
- Netlify admin: `https://app.netlify.com/projects/m69z7nz5r6-dotcom`

## Deploying to Netlify

1. Create a GitHub repository and push this project.
2. Sign in to Netlify and choose "New site from Git".
3. Connect your GitHub repo, select the branch, and deploy.
4. Configure your custom domain in Netlify after deployment.

Netlify will publish the site from the project root using `netlify.toml`.

### Custom domain setup

- Add your domain in Netlify site settings.
- Update your domain DNS to point to Netlify's nameservers or use the provided DNS records.
- Wait for DNS propagation, then verify the domain in Netlify.

### Domain configured in this repo

This project includes a `CNAME` file with your domain:

- `m69z7nz5r6-dotcom`

That is useful if you later deploy with GitHub Pages or need a repository-level domain mapping.
