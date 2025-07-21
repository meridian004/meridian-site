# Meridian Strategic Resources Website

Welcome to the source code for the Meridian Strategic Resources website. This repository contains the static files used to power the official www.meridianstrategic.io site, currently deployed via Netlify.

## About

Meridian Strategic Resources is a full‑service management consulting firm. Our website has been designed to reflect a professional, modern look, with an emerald and lapis color palette and dynamic components throughout.

## Features

- **Responsive Design** – Fully mobile‑optimised layout built on a simple flexbox grid.
- **Modular Hero Sections** – Each page opens with a large header section including page title and sub‑header.
- **Abstract Branding** – Custom logo and gradient backgrounds in blue‑green tones.
- **Case Study Cards** – The Clients page highlights projects and testimonials in card layouts.
- **Animated Testimonial Slider** – Interactive slider for client testimonials.
- **Comprehensive Contact Page** – Two‑column layout with contact form, icons and company information.
- **Optimised Navigation** – Sticky navigation bar with back‑to‑top buttons.
- **Insights & Careers (coming soon)** – Blog and job listings will be powered by Sanity CMS.
- **SEO Enhancements** – Robots.txt, sitemap.xml and OpenGraph metadata.
- **Netlify Deployment** – Continuous deployment from GitHub with custom domain and HTTPS via Let’s Encrypt.

## Tech Stack

- **HTML5 & CSS3** – Structure and styling of pages.
- **Vanilla JavaScript** – Enhances interactivity and animations.
- **AOS.js** – Animate‑on‑scroll library for subtle motion effects.
- **Netlify** – Hosting and continuous deployment.
- **Sanity.io (planned)** – Content management for insights and job listings.

## Getting Started

To run the site locally or contribute:

1. Clone this repository:
   ```bash
   git clone https://github.com/meridian004/meridian-site.git
   ```
2. Open `index.html` in your browser. The site is fully static and does not require a build step.
3. To serve locally with a dev server (optional), run:
   ```bash
   npx serve .
   ```

## Deployment

The site is automatically deployed on Netlify whenever changes are pushed to the `main` branch. The production domain is [www.meridianstrategic.io](https://www.meridianstrategic.io). Netlify handles DNS, HTTPS certificates and continuous deployment from GitHub.

## Contributing

Contributions are welcome! If you’d like to fix a bug or propose an enhancement:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Commit your changes with a descriptive message.
4. Open a pull request.

Please follow the existing code style and keep the design consistent with the current look and feel.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
