# R-Tech IT Solutions Website

Static website ready for GitHub Pages or normal web hosting.

## Files
- `index.html` - page content
- `css/styles.css` - layout, colours and responsive design
- `js/script.js` - mobile navigation and email reveal button
- `images/logo.png` - supplied R-Tech logo
- `images/favicon.png` - favicon created from the logo
- `images/whatsapp-qr.png` - placeholder for the existing WhatsApp QR code

## IMPORTANT: WhatsApp QR
The original QR image on the current Google Sites website could not be downloaded reliably.
Replace:

`images/whatsapp-qr.png`

with your existing WhatsApp QR image, keeping the same filename.

## Email
The reveal button currently uses:

`r-tech-itsolutions@outlook.com`

To change it, edit these two lines in `js/script.js`:

```js
const contactEmail = 'r-tech-itsolutions@outlook.com';
```

## GitHub Pages
1. Create or open the GitHub repository.
2. Upload the full contents of this folder.
3. Go to **Settings > Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`.
6. Save.
7. Add your custom domain under **Settings > Pages > Custom domain** if required.

## Locations
- Kuils River, Cape Town, 7579
- 168 Durban Road, Bellville, 7530
