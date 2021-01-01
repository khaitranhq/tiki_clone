import { Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react';

const style = (theme) => ({
  searchTextField: {
    border: 'none'
  },
  title: {
    color: 'red'
  }
});

const Header = (props) => {
  const { classes } = props;
  return (
    <Box>
      <label className={classes.title}>ok</label>
      <input />
    </Box>
  );
};

export default withStyles(style)(Header);
