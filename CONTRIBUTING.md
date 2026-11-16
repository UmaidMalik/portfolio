# Development and release workflow

- Make portfolio changes on `dev` (or a feature branch targeting `dev`).
- Push to `dev` for CI builds. This does not publish to GitHub Pages.
- Let Umaid inspect the changes and a preview before promoting them.
- Open a pull request from `dev` to `main`. Wait for Umaid's explicit approval before merging or pushing changes to `main`.
- A merge to `main` triggers the production GitHub Pages deployment at https://umaidmalik.com.
- Scheduled theme rotation continues to rebuild production from `main`.

## Preview

Run `npm run dev` for a local development preview, or `npm run build` followed by `npm run preview` to inspect the production bundle locally.

CI uploads a `portfolio-dist` artifact on development builds; it is a downloadable bundle, not a hosted preview URL.

This repository has one GitHub Pages site. Its custom domain and default GitHub Pages URL are not independent development and production environments. A hosted development preview requires a separate hosting project or a separate Pages repository; neither is configured by this change.

## Repository enforcement

This document establishes the review process. It does not enable GitHub branch protection. To enforce it server-side, configure a ruleset for `main` requiring pull requests and the `Build portfolio` status check. On a personal repository the owner cannot approve their own pull request, so do not require an additional approving review unless another reviewer is available.
