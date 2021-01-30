import { CssBaseline } from '@material-ui/core';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import React, { Fragment, useEffect } from 'react';
import theme from '../src/utils/theme';
import Head from 'next/head';
import { wrapper } from '../src/store';

function _App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const sheets = new ServerStyleSheets();

  return sheets.collect(
    <React.Fragment>
      <Head>
        <title>Tiki</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='http://localhost:3000/icons/flaticon.css'
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
export default wrapper.withRedux(_App);
