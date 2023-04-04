import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import PagerGlobalStyles from '../styles/PagerGlobalStyles';
import type { AppProps } from 'next/app';

const cache = createCache({ key: 'next' });

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <PagerGlobalStyles />
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;
