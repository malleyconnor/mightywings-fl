// Global CSS imports in Next.js must happen in `pages/_app.js` so that you are
// aware of the explicit ordering:

// Default application styles that are applicable to more than one component:
import '../styles/globals.css';

// This is the required default export from `pages/_app.js` if you are only
// using this file for CSS imports.
export default ({ Component, pageProps }) => <Component {...pageProps} />;
