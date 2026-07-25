# Vercel Web Analytics Setup

This project now has Vercel Web Analytics configured to track visitor behavior and page views.

## Implementation

The analytics are implemented using the Vercel CDN-hosted script, which is the recommended approach for static HTML sites.

### What was added:

1. **CDN Script in `index.html`**: A script tag was added to the `<head>` section:
   ```html
   <script defer src="https://cdn.vercel-insights.com/v1/script.js"></script>
   ```

2. **Package Installation**: The `@vercel/analytics` package (v2.0.1) was installed for potential future customization.

3. **Package Manager**: A `package.json` file was created to manage dependencies.

4. **Optional Custom Implementation**: An `analytics.js` file was created that demonstrates how to use the package with a bundler for advanced customization.

## How it works

The script automatically:
- Tracks page views when users visit any page
- Collects anonymous visitor data
- Sends data to Vercel's analytics endpoints
- Respects user privacy (no cookies, GDPR compliant)

## Viewing Analytics

To view analytics data:
1. Deploy this project to Vercel
2. Navigate to your project dashboard on Vercel
3. Click on the "Analytics" tab
4. Enable Web Analytics if not already enabled

## Customization (Optional)

If you need to customize analytics behavior (e.g., filtering certain pages, debugging):

1. Remove the CDN script tag from `index.html`
2. Set up a bundler (Vite, Webpack, or Parcel)
3. Use the `analytics.js` file as a starting point
4. Bundle and include the script in your HTML

## Documentation

- [Vercel Analytics Quickstart](https://vercel.com/docs/analytics/quickstart)
- [Analytics Package Documentation](https://vercel.com/docs/analytics/package)
