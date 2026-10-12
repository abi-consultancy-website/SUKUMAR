# ABI Consultancy website starter

This is a responsive static website for ABI Consultancy, designed to support consulting enquiries and training registrations.

## Files
- `index.html` — website content
- `styles.css` — responsive styling
- `script.js` — mobile menu and enquiry email preparation
- `favicon.svg` — browser tab icon

## Before publishing
1. Confirm the address shown in the footer/contact section.
2. Verify all client names and obtain permission to publish them.
3. Confirm the standards and service scope are current and accurate.
4. Add the approved ABI Consultancy logo if available (the current header uses a text-based placeholder).
5. Test the contact email, phone and WhatsApp link.

## Contact form behaviour
This starter website has no paid backend and does not store enquiry data. Submitting the form opens the visitor's default email app with an enquiry addressed to `marketing@abiconsultancy.in`. If the visitor has no email app configured, they can use the direct email or WhatsApp link. For a form that submits directly without opening an email app, connect a form service or backend later.

## Publish free with GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a **public** repository, for example `abi-consultancy-website`.
3. Upload the files from this folder to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under Build and deployment, choose **Deploy from a branch**, then select `main` and `/ (root)`, and save.
6. Wait for GitHub Pages to publish the site. GitHub will provide a temporary `github.io` URL.
7. To connect your own domain, first enter it under **Settings → Pages → Custom domain** and save. Then update DNS records at the company domain provider according to the current GitHub Pages documentation for your exact domain. Do not remove email-related MX/TXT records.
8. Enable **Enforce HTTPS** when the option becomes available.

GitHub Pages supports custom domains and HTTPS. DNS updates may take time to propagate. Always follow the DNS values shown in the official GitHub documentation for the domain type you use.

Official guide: https://docs.github.com/en/pages
Custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Important
This is a static front-end site. It does not include a server, CRM, database, payment processing, course booking system or automated registration confirmation. Those can be added later if needed.
