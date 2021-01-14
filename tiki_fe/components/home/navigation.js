import { Box } from '@material-ui/core';
import React from 'react';

const Navigation = () => {
  const openSubCategories = () => {
    console.log('open');
  };

  return (
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
  );
};

export default Navigation;
