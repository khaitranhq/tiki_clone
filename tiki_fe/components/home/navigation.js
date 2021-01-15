import { Box } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const Navigation = (props) => {
  console.log(props)
  const openSubCategories = () => {
    console.log('open');
  };
  return <div>ok</div>;

  /* return (
    <Box>
      {categories.map((category, key) => (
        <Box
          key={key}
          style={{ margin: '5px 0px', display: 'flex', flexDirection: 'row' }}
          onMouseOver={() => openSubCategories()}
        >
          <span
            className={`flaticon-${category.icon}`}
            style={{ marginRight: 10, fontSize: 20 }}
          ></span>
          <Box style={{ fontSize: 13, display: 'flex', alignItems: 'center' }}>
            {category.title}
          </Box>
        </Box>
      ))}
    </Box>
  );*/
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Navigation);
