import { CssBaseline } from '@material-ui/core';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import React, { Fragment, useEffect } from 'react';
import theme from '../src/utils/theme';
import Head from 'next/head';
import { createStore } from 'redux';
import homeReducer from '../src/reducers/home';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => {
  return createStore(homeReducer);
};

function _App(props) {
  const { Component, pageProps, store } = props;

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
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

_App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  return { pageProps };
};

const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(_App);
