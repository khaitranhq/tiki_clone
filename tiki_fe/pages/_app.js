import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Head } from 'next/head';
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import theme from '../src/utils/theme';

export default function _App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Tiki</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

_App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};

