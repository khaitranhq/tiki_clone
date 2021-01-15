import { Box, Button, Grid, InputBase, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react';

const style = (theme) => ({
  root: {},
  searchInput: {
    background: '#000',
    width: '100%',
    height: 40,
    fontSize: 13,
    color: 'rgb(0, 0, 0)',
    '& .MuiInputBase-input': {
      padding: '0px 12px'
    }
  }
});

const Header = (props) => {
  const { classes } = props;
  return (
    <Grid
      container
      style={{ background: 'rgb(1,127,255)', padding: '17px 0px' }}
      className={classes.root}
    >
      <Grid
        item
        xs={2}
        style={{
          display: 'flex',
          width: 300,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <a href='/' style={{ width: 60, height: 40 }}>
          <img
            style={{ width: '100%', height: '100%' }}
            src='https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png'
          />
        </a>
      </Grid>
      <Grid item container xs={7} style={{ display: 'flex' }}>
        <Grid item xs={10}>
          <InputBase
            className={classes.searchInput}
            placeholder='Tìm sản phẩm, danh mục hay thương hiệu mong muốn'
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            style={{
              background: 'rgb(13,92,182)',
              color: '#fff',
              textTransform: 'none',
              height: '40px',
              borderRadius: 0,
              padding: '0px 14px'
            }}
          >
            <img
              style={{ width: 20, height: 20, marginRight: 10 }}
              src='https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png'
            />
            <label style={{ fontWeight: 600, fontSize: 13 }}>Tìm kiếm</label>
          </Button>
        </Grid>
      </Grid>
      <Grid item container xs={3}>
        <Grid
          item
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
          xs={6}
        >
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              style={{ width: 32, height: 32 }}
              src='https://salt.tikicdn.com/ts/upload/67/de/1e/90e54b0a7a59948dd910ba50954c702e.png'
            />
          </Box>
          <Box style={{ marginLeft: 10 }}>
            <div>
              <label
                style={{
                  color: '#fff',
                  fontSize: 11
                }}
              >
                Đăng nhập/Đăng kí
              </label>
            </div>
            <div>
              <label style={{ color: '#fff', fontSize: 12 }}>Tài khoản</label>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            style={{ width: 32, height: 32 }}
            src='https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png'
          />
          <label style={{ color: '#fff', fontSize: 12, marginLeft: 5 }}>
            Giỏ hàng
          </label>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(Header);
